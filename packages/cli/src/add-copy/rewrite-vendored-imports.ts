import fs from 'fs-extra';
import path from 'path';

/**
 * Vendored components: strip leading `components/` so files land under `…/ui/button/` etc.
 * `lib/**` is routed separately to `src/lib` (see copy step); not mapped here.
 */
export function mapSourceRelToDestRel(sourceRelPosix: string): string {
  const normalized = sourceRelPosix.replace(/\\/g, '/');
  if (normalized.startsWith('components/')) {
    return normalized.slice('components/'.length);
  }
  return normalized;
}

function isUnderRoot(file: string, root: string): boolean {
  const rel = path.relative(root, file);
  return rel !== '' && !rel.startsWith('..') && !path.isAbsolute(rel);
}

function resolveRelativeModule(fromFile: string, spec: string, srcRoot: string): string | null {
  const base = path.resolve(path.dirname(fromFile), spec);
  const candidates = [
    base,
    base + '.ts',
    base + '.tsx',
    path.join(base, 'index.ts'),
    path.join(base, 'index.tsx'),
  ];
  for (const c of candidates) {
    const normalized = path.normalize(c);
    if (
      isUnderRoot(normalized, srcRoot) &&
      fs.existsSync(normalized) &&
      fs.statSync(normalized).isFile()
    ) {
      return normalized;
    }
  }
  return null;
}

/** Match TS-style imports: omit `.ts`/`.tsx` and directory `/index` suffixes. */
function prettifyRelativeImportSpec(spec: string): string {
  return spec
    .replace(/\/index\.tsx?$/i, '')
    .replace(/\.tsx?$/i, '');
}

function toPosix(p: string): string {
  return p.split(path.sep).join('/');
}

function destAbsForResolvedSource(
  resolvedSourceAbs: string,
  rizzuiSrcRoot: string,
  destUiRoot: string,
  destLibRoot: string
): string | null {
  const rel = path.relative(rizzuiSrcRoot, resolvedSourceAbs).replace(/\\/g, '/');
  if (!rel || rel.startsWith('..')) return null;
  if (rel.startsWith('lib/')) {
    return path.join(destLibRoot, rel.slice('lib/'.length));
  }
  if (rel.startsWith('components/')) {
    return path.join(destUiRoot, mapSourceRelToDestRel(rel));
  }
  return null;
}

/**
 * Recompute relative imports for vendored layout: UI under `…/components/ui/…`, shared code under `…/src/lib/…`.
 */
export function rewriteRelativeImportsForVendoredLayout(
  source: string,
  sourceFileAbs: string,
  rizzuiSrcRoot: string,
  destFileAbs: string,
  destUiRoot: string,
  destLibRoot: string
): string {
  const destDirAbs = path.dirname(destFileAbs);

  const replaceSpec = (spec: string): string => {
    if (!spec.startsWith('.')) return spec;
    const resolved = resolveRelativeModule(sourceFileAbs, spec, rizzuiSrcRoot);
    if (!resolved) return spec;
    const targetDestAbs = destAbsForResolvedSource(resolved, rizzuiSrcRoot, destUiRoot, destLibRoot);
    if (!targetDestAbs) return spec;
    let newSpec = toPosix(path.relative(destDirAbs, targetDestAbs));
    newSpec = prettifyRelativeImportSpec(newSpec);
    if (!newSpec.startsWith('.')) {
      newSpec = `./${newSpec}`;
    }
    return newSpec;
  };

  let out = source;
  out = out.replace(
    /(\bfrom\s+)(['"])(\.\/[^'"]+|(?:\.\.\/)+[^'"]+)\2/g,
    (_m, kw: string, q: string, spec: string) => `${kw}${q}${replaceSpec(spec)}${q}`
  );
  out = out.replace(
    /(\bexport\s+\*\s+from\s+)(['"])(\.\/[^'"]+|(?:\.\.\/)+[^'"]+)\2/g,
    (_m, kw: string, q: string, spec: string) => `${kw}${q}${replaceSpec(spec)}${q}`
  );
  return out;
}
