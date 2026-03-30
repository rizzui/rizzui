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
 * Sources shipped inside rizzui-cli next to cli.js (`dist/ui-src`).
 */
export function resolveBundledUiSrc(): string | null {
  const bundled = path.join(__dirname, 'ui-src');
  if (
    fs.existsSync(path.join(bundled, 'components')) &&
    fs.existsSync(path.join(bundled, 'lib'))
  ) {
    return bundled;
  }
  return null;
}

/**
 * Find `node_modules/rizzui` starting at projectRoot, walking up to disk root (pnpm / monorepo).
 */
function resolveRizzuiPackageRootFromNodeModules(projectRoot: string): string | null {
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
  return null;
}

/**
 * Resolved directory mirroring published RizzUI source (`components`, `lib`).
 * Prefers **bundled** `ui-src` inside rizzui-cli (always available after install).
 * Falls back to `node_modules/rizzui/src` when present (e.g. monorepo link).
 */
export function resolveRizzuiSrcRoot(projectRoot: string): string {
  const bundled = resolveBundledUiSrc();
  if (bundled) {
    return bundled;
  }

  const pkgRoot = resolveRizzuiPackageRootFromNodeModules(projectRoot);
  if (pkgRoot) {
    const fromNode = path.join(pkgRoot, 'src');
    if (
      fs.existsSync(path.join(fromNode, 'components')) &&
      fs.existsSync(path.join(fromNode, 'lib'))
    ) {
      return fromNode;
    }
  }

  throw new Error(
    'RizzUI CLI could not find bundled sources (dist/ui-src). Reinstall rizzui-cli or rebuild the package.'
  );
}
