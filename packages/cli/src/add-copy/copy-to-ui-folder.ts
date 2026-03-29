import fs from 'fs-extra';
import path from 'path';
import { Logger } from '../utils';
import { collectSourceFilesForSeeds } from './collect-source-files';
import type { CopyManifestEntry } from './copy-manifest';

export async function copyRizzUiSourcesToProject(options: {
  projectRoot: string;
  rizzuiSrcRoot: string;
  destUiRoot: string;
  selected: CopyManifestEntry[];
}): Promise<{ fileCount: number }> {
  const { projectRoot, rizzuiSrcRoot, destUiRoot, selected } = options;

  const seeds = selected.flatMap((e) => e.seeds);
  const files = collectSourceFilesForSeeds(rizzuiSrcRoot, seeds);

  let written = 0;
  let replaced = 0;
  for (const file of files) {
    const rel = path.relative(rizzuiSrcRoot, file);
    const dest = path.join(destUiRoot, rel);
    if (await fs.pathExists(dest)) {
      await fs.copy(dest, `${dest}.backup`, { overwrite: true });
      replaced++;
    }
    await fs.ensureDir(path.dirname(dest));
    await fs.copy(file, dest, { overwrite: true });
    written++;
  }

  if (replaced > 0) {
    Logger.warning(`Overwrote ${replaced} existing file(s); backups use a .backup suffix.`);
  }

  return { fileCount: written };
}
