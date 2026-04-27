import path from 'path';
import os from 'os';
import fs from 'fs-extra';
import test from 'node:test';
import assert from 'node:assert/strict';
import { rewriteRelativeImportsForVendoredLayout } from './rewrite-vendored-imports';

test('rewriteRelativeImportsForVendoredLayout rewrites imports from ui to lib destination', async () => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'rizzui-rewrite-'));
  const root = path.join(temp, 'rizzui', 'src');
  const sourceFile = path.join(root, 'components', 'button', 'button.tsx');
  const destUiRoot = path.join(temp, 'app', 'src', 'components', 'ui');
  const destLibRoot = path.join(temp, 'app', 'src', 'lib');
  const destFile = path.join(destUiRoot, 'button', 'button.tsx');

  await fs.ensureDir(path.dirname(sourceFile));
  await fs.ensureDir(path.join(root, 'lib'));
  await fs.writeFile(sourceFile, '', 'utf8');
  await fs.writeFile(path.join(root, 'lib', 'cn.ts'), 'export const cn = () => "";', 'utf8');
  await fs.writeFile(path.join(root, 'components', 'button', 'helpers.ts'), 'export const makeX = () => 1;', 'utf8');

  const input = `import { cn } from '../../lib/cn';\nimport { makeX } from './helpers';\n`;
  const output = rewriteRelativeImportsForVendoredLayout(
    input,
    sourceFile,
    root,
    destFile,
    destUiRoot,
    destLibRoot
  );

  assert.match(output, /from '\.\.\/\.\.\/\.\.\/lib\/cn'/);
  assert.match(output, /from '\.\/helpers'/);
});
