import fs from 'fs-extra';
import path from 'path';
import { collectSourceFilesForSeeds } from './collect-source-files';
import { mapSourceRelToDestRel, rewriteRelativeImportsForVendoredLayout } from './rewrite-vendored-imports';
import type { CopyManifestEntry } from './copy-manifest';

export async function copyRizzUiSourcesToProject(options: {
  projectRoot: string;
  rizzuiSrcRoot: string;
  destUiRoot: string;
  destLibRoot: string;
  selected: CopyManifestEntry[];
}): Promise<{ fileCount: number; skippedLibCount: number }> {
  const { rizzuiSrcRoot, destUiRoot, destLibRoot, selected } = options;

  const seeds = selected.flatMap((e) => e.seeds);
  const files = collectSourceFilesForSeeds(rizzuiSrcRoot, seeds);

  let written = 0;
  let skippedLibCount = 0;

  for (const file of files) {
    const relPosix = path.relative(rizzuiSrcRoot, file).replace(/\\/g, '/');
    let dest: string;

    if (relPosix.startsWith('lib/')) {
      dest = path.join(destLibRoot, relPosix.slice('lib/'.length));
      if (await fs.pathExists(dest)) {
        skippedLibCount++;
        continue;
      }
    } else {
      dest = path.join(destUiRoot, mapSourceRelToDestRel(relPosix));
    }

    const raw = await fs.readFile(file, 'utf8');
    const content = rewriteRelativeImportsForVendoredLayout(
      raw,
      file,
      rizzuiSrcRoot,
      path.resolve(dest),
      path.resolve(destUiRoot),
      path.resolve(destLibRoot)
    );
    await fs.ensureDir(path.dirname(dest));
    await fs.writeFile(dest, content, 'utf8');
    written++;
  }

  return { fileCount: written, skippedLibCount };
}
