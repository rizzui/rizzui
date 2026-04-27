import fs from 'fs-extra';
import path from 'path';

export function verifyBundledUiSources(distUiSrcRoot: string): { ok: boolean; missing: string[] } {
  const required = ['components', 'lib'].map((name) => path.join(distUiSrcRoot, name));
  const missing = required.filter((p) => !fs.existsSync(p));
  return { ok: missing.length === 0, missing };
}
