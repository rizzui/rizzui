import path from 'path';
import os from 'os';
import fs from 'fs-extra';
import test from 'node:test';
import assert from 'node:assert/strict';
import { collectSourceFilesForSeeds } from './collect-source-files';

test('collectSourceFilesForSeeds follows relative imports transitively', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'rizzui-collect-'));
  const srcRoot = path.join(root, 'ui-src');
  await fs.ensureDir(path.join(srcRoot, 'components/button'));
  await fs.ensureDir(path.join(srcRoot, 'lib'));

  const indexFile = path.join(srcRoot, 'components/button/index.ts');
  const buttonFile = path.join(srcRoot, 'components/button/button.tsx');
  const cnFile = path.join(srcRoot, 'lib/cn.ts');

  await fs.writeFile(indexFile, "export * from './button';\n", 'utf8');
  await fs.writeFile(buttonFile, "import { cn } from '../../lib/cn';\nexport const Button = cn;\n", 'utf8');
  await fs.writeFile(cnFile, 'export const cn = (...a: string[]) => a.join(" ");\n', 'utf8');

  const files = collectSourceFilesForSeeds(srcRoot, ['components/button']);
  const normalized = files.map((f) => f.replace(/\\/g, '/'));
  assert.equal(normalized.length, 3);
  assert.ok(normalized.some((f) => f.endsWith('/components/button/index.ts')));
  assert.ok(normalized.some((f) => f.endsWith('/components/button/button.tsx')));
  assert.ok(normalized.some((f) => f.endsWith('/lib/cn.ts')));
});
