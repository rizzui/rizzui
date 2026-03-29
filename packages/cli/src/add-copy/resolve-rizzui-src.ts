import fs from 'fs-extra';
import path from 'path';

function readPackageName(dir: string): string | undefined {
  const p = path.join(dir, 'package.json');
  if (!fs.existsSync(p)) return undefined;
  try {
    const j = fs.readJsonSync(p) as { name?: string };
    return j.name;
  } catch {
    return undefined;
  }
}

/**
 * Find `node_modules/rizzui` starting at projectRoot, walking up to disk root (pnpm / monorepo).
 */
function resolveRizzuiPackageRoot(projectRoot: string): string {
  let dir = path.resolve(projectRoot);
  const { root } = path.parse(dir);

  while (true) {
    const candidate = path.join(dir, 'node_modules', 'rizzui');
    if (fs.existsSync(path.join(candidate, 'package.json')) && readPackageName(candidate) === 'rizzui') {
      return candidate;
    }
    if (dir === root) break;
    dir = path.dirname(dir);
  }

  throw new Error(
    'Could not find `rizzui` in node_modules. Run `pnpm add rizzui` (or npm/yarn) in your project first.'
  );
}

/**
 * Resolved directory containing RizzUI published source (`components`, `lib`, `icons`).
 */
export function resolveRizzuiSrcRoot(projectRoot: string): string {
  const base = resolveRizzuiPackageRoot(projectRoot);
  const src = path.join(base, 'src');
  if (
    !fs.existsSync(path.join(src, 'components')) ||
    !fs.existsSync(path.join(src, 'lib'))
  ) {
    throw new Error(
      'The installed `rizzui` package does not include source files under src/. Upgrade to `rizzui@^2.1.0` (ships src/components, src/lib, src/icons).'
    );
  }

  return src;
}
