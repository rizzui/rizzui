import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distRoot = path.resolve(__dirname, '../dist/ui-src');
const requiredPaths = [
  path.join(distRoot, 'components'),
  path.join(distRoot, 'lib'),
];

for (const p of requiredPaths) {
  if (!fs.existsSync(p)) {
    console.error(`verify-ui-sources: missing required path ${p}`);
    process.exit(1);
  }
}

console.log('verify-ui-sources: dist/ui-src/components and dist/ui-src/lib are present');
