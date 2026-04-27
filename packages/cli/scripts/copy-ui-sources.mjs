/**
 * Bundles `packages/ui/src/{components,lib}` into `dist/ui-src` after tsup build
 * so `rizzui add` works without `node_modules/rizzui` shipping source.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoUiSrc = path.resolve(__dirname, '../../ui/src');
const destRoot = path.resolve(__dirname, '../dist/ui-src');
const ALLOWED_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.css',
]);

function rmrf(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function shouldCopy(filePath) {
  const ext = path.extname(filePath);
  return ALLOWED_EXTENSIONS.has(ext);
}

function copyDir(src, dest) {
  let copied = 0;
  fs.mkdirSync(dest, { recursive: true });
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, ent.name);
    const to = path.join(dest, ent.name);
    if (ent.isDirectory()) {
      copied += copyDir(from, to);
    } else if (shouldCopy(from)) {
      fs.copyFileSync(from, to);
      copied++;
    }
  }
  return copied;
}

rmrf(destRoot);
fs.mkdirSync(destRoot, { recursive: true });

for (const name of ['components', 'lib']) {
  const src = path.join(repoUiSrc, name);
  if (!fs.existsSync(src)) {
    console.error(`copy-ui-sources: missing ${src}`);
    process.exit(1);
  }
  const copiedCount = copyDir(src, path.join(destRoot, name));
  console.log(`copy-ui-sources: copied ${copiedCount} file(s) from ${name}`);
}

console.log('copy-ui-sources: copied ui components + lib → dist/ui-src');
