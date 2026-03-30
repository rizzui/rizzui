import path from 'path';
import { checkbox } from '@inquirer/prompts';
import { Logger, ProjectDetector, type ProjectInfo } from '../utils';
import {
  ALL_COMPONENT_SLUGS,
  allUniqueImportLines,
  resolveSlugToCopyId,
} from '../registry/component-imports';
import { COPY_MANIFEST, COPY_MANIFEST_BY_ID } from '../add-copy/copy-manifest';
import { resolveRizzuiSrcRoot } from '../add-copy/resolve-rizzui-src';
import { copyRizzUiSourcesToProject } from '../add-copy/copy-to-ui-folder';

interface AddOptions {
  /** @deprecated use printImports */
  all?: boolean;
  printImports?: boolean;
}

export class AddCommand {
  static async run(components: string[], options: AddOptions): Promise<void> {
    const printOnly = options.printImports === true || options.all === true;

    if (printOnly) {
      Logger.info('RizzUI package imports (install `rizzui` from npm for compiled components):');
      Logger.newLine();
      Logger.log('Core peer dependencies:');
      Logger.log('  pnpm add rizzui @headlessui/react @floating-ui/react');
      Logger.log('  pnpm add -D tailwindcss @tailwindcss/postcss @tailwindcss/forms');
      Logger.newLine();
      Logger.info('Subpath imports (one line per entry point):');
      Logger.newLine();
      for (const line of allUniqueImportLines()) {
        Logger.log(line);
      }
      return;
    }

    const projectInfo = await ProjectDetector.detect();
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

    Logger.info(
      `Copying bundled RizzUI sources (rizzui-cli) into ${path.relative(projectInfo.projectRoot, uiRoot)}/`
    );
    Logger.newLine();

    try {
      const { fileCount } = await copyRizzUiSourcesToProject({
        projectRoot: projectInfo.projectRoot,
        rizzuiSrcRoot: rizzuiSrc,
        destUiRoot: uiRoot,
        selected,
      });
      Logger.newLine();
      Logger.success(`Wrote ${fileCount} file(s). Relative imports inside the package are preserved.`);
      Logger.info('Example import (if you use @/ → src/):');
      Logger.log(`  import { Button } from '@/components/ui/components/button';`);
      Logger.newLine();
      Logger.info('You can delete `rizzui` from package.json later if you only use vendored sources — keep peers (headlessui, floating-ui).');
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
      const answer = await checkbox({
        message:
          'Select RizzUI sources to copy into components/ui (space = toggle, enter = confirm). ' +
          `Project: ${path.basename(projectInfo.projectRoot)}`,
        choices: sorted.map((e) => ({ name: e.label, value: e.id })),
        validate: (choices) =>
          choices.length > 0 ? true : 'Pick at least one component or util.',
      });
      return answer as string[];
    }

    const ids: string[] = [];
    const seen = new Set<string>();
    for (const raw of trimmed) {
      const id = resolveSlugToCopyId(raw);
      if (!id || !COPY_MANIFEST_BY_ID[id]) {
        Logger.warning(`Unknown "${raw}". Try: ${ALL_COMPONENT_SLUGS.slice(0, 10).join(', ')}… or run with no args for the full list.`);
        continue;
      }
      if (!seen.has(id)) {
        seen.add(id);
        ids.push(id);
      }
    }
    return ids;
  }
}
