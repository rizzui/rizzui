import path from 'path';
import { checkbox } from '@inquirer/prompts';
import {
  Logger,
  ProjectDetector,
  promptSectionHeader,
  promptStepLabel,
  promptBlock,
  promptHint,
  type ProjectInfo,
  type SupportedFramework,
} from '../utils';
import {
  ALL_COMPONENT_SLUGS,
  resolveSlugToCopyId,
} from '../registry/component-imports';
import { COPY_MANIFEST, COPY_MANIFEST_BY_ID } from '../add-copy/copy-manifest';
import { resolveRizzuiSrcRoot } from '../add-copy/resolve-rizzui-src';
import { copyRizzUiSourcesToProject } from '../add-copy/copy-to-ui-folder';

interface AddOptions {
  list?: boolean;
  framework?: SupportedFramework;
}

export class AddCommand {
  static async run(components: string[], options: AddOptions): Promise<void> {
    if (options.list === true) {
      this.printAvailableSlugs();
      return;
    }

    const projectInfo = await ProjectDetector.detect(process.cwd(), options.framework);
    const copyIds = await this.resolveSelectedCopyIds(components, projectInfo);

    if (copyIds.length === 0) {
      Logger.warning('Nothing selected. Choose at least one item.');
      return;
    }

    const selected = copyIds.map((id) => COPY_MANIFEST_BY_ID[id]).filter(Boolean);
    if (selected.length !== copyIds.length) {
      Logger.error('Internal error: unknown copy target.');
      return;
    }

    const rizzuiSrc = resolveRizzuiSrcRoot(projectInfo.projectRoot);
    const uiRoot = path.join(projectInfo.projectRoot, ProjectDetector.getComponentsDir(projectInfo), 'ui');
    const libRoot = path.join(projectInfo.projectRoot, ProjectDetector.getLibDir(projectInfo));

    Logger.info(
      `Copying bundled RizzUI sources (rizzui-cli) into ${path.relative(projectInfo.projectRoot, uiRoot)}/ and ${path.relative(projectInfo.projectRoot, libRoot)}/`
    );
    Logger.newLine();
    Logger.info(`Framework: ${projectInfo.framework}`);
    Logger.newLine();
    Logger.info(
      'Shared utilities (`cn`, `variants`, …) go under `src/lib` (or `lib/` without a `src/` folder). Existing files there are left unchanged. Run `add lib` to copy only utilities.'
    );
    Logger.newLine();

    try {
      const { fileCount, skippedLibCount } = await copyRizzUiSourcesToProject({
        projectRoot: projectInfo.projectRoot,
        rizzuiSrcRoot: rizzuiSrc,
        destUiRoot: uiRoot,
        destLibRoot: libRoot,
        selected,
      });
      Logger.newLine();
      Logger.success(`Wrote ${fileCount} file(s).`);
      if (skippedLibCount > 0) {
        Logger.info(`Skipped ${skippedLibCount} lib file(s) that already exist (your code was kept).`);
      }
      Logger.info('Example vendored import (if @/ → src/):');
      Logger.log(`  import { Button } from '@/components/ui/button';`);
      Logger.newLine();
      Logger.info('For npm usage (no vendored sources), use:');
      Logger.log(`  import { Button } from 'rizzui/button';`);
    } catch (err) {
      Logger.error(err instanceof Error ? err.message : String(err));
      throw err;
    }
  }

  private static async resolveSelectedCopyIds(
    components: string[],
    projectInfo: ProjectInfo
  ): Promise<string[]> {
    const trimmed = components.map((c) => c.trim()).filter(Boolean);

    if (trimmed.length === 0) {
      const sorted = [...COPY_MANIFEST].sort((a, b) => a.label.localeCompare(b.label));
      Logger.section('Let\'s configure your RizzUI source import', 'Interactive component picker');
      Logger.divider();
      const answer = await checkbox({
        message: [
          promptSectionHeader('Component selection'),
          promptBlock(promptStepLabel(1, 1, `Pick items for ${path.basename(projectInfo.projectRoot)}`)),
          promptHint('Space = toggle, Enter = confirm'),
          '',
        ].join('\n'),
        choices: sorted.map((e) => ({ name: e.label, value: e.id })),
        validate: (choices) =>
          choices.length > 0 ? true : 'Pick at least one component or util.',
      });
      Logger.newLine();
      return answer as string[];
    }

    const ids: string[] = [];
    const seen = new Set<string>();
    for (const raw of trimmed) {
      const key = raw.toLowerCase();
      const id = resolveSlugToCopyId(raw);
      if (!id || !COPY_MANIFEST_BY_ID[id]) {
        Logger.warning(
          `Unknown "${raw}". Try: ${ALL_COMPONENT_SLUGS.slice(0, 10).join(', ')}… or run "rizzui add --list" for all slugs.`
        );
        continue;
      }
      if (!seen.has(id)) {
        seen.add(id);
        ids.push(id);
      }
    }
    return ids;
  }

  private static printAvailableSlugs(): void {
    Logger.info('Available slugs for `rizzui add`');
    Logger.newLine();
    Logger.log(ALL_COMPONENT_SLUGS.join('\n'));
    Logger.newLine();
    Logger.info('Examples:');
    Logger.log('  rizzui add button modal');
    Logger.log('  rizzui add lib');
  }

}
