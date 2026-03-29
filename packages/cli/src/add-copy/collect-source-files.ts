import fs from 'fs-extra';
import path from 'path';

function extractRelativeSpecs(content: string): string[] {
  const specs: string[] = [];
  const patterns = [/from\s+['"](\.[^'"]+)['"]/g, /export\s+\*\s+from\s+['"](\.[^'"]+)['"]/g];
  for (const r of patterns) {
    let m: RegExpExecArray | null;
    const re = new RegExp(r.source, 'g');
    while ((m = re.exec(content)) !== null) {
      specs.push(m[1]);
    }
  }
  return specs;
}

function isSourceFile(name: string): boolean {
  return (
    (name.endsWith('.ts') || name.endsWith('.tsx')) &&
    !name.endsWith('.test.ts') &&
    !name.endsWith('.test.tsx')
  );
}

function listFilesUnderDir(absDir: string): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    if (!fs.existsSync(dir)) return;
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        walk(p);
      } else if (isSourceFile(ent.name)) {
        out.push(p);
      }
    }
  };
  walk(absDir);
  return out;
}

function expandSeed(srcRoot: string, seed: string): string[] {
  const abs = path.join(srcRoot, seed);
  if (!fs.existsSync(abs)) {
    throw new Error(`RizzUI source path missing: ${seed} (looked under ${srcRoot})`);
  }
  const st = fs.statSync(abs);
  if (st.isFile()) {
    return [abs];
  }
  return listFilesUnderDir(abs);
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

/**
 * Collect all `.ts` / `.tsx` files reachable from manifest seeds via relative imports,
 * staying under `srcRoot` (published rizzui source tree).
 */
export function collectSourceFilesForSeeds(srcRoot: string, seeds: string[]): string[] {
  const normalizedRoot = path.normalize(srcRoot);
  let initial = new Set<string>();
  for (const seed of seeds) {
    for (const f of expandSeed(normalizedRoot, seed)) {
      initial.add(path.normalize(f));
    }
  }

  const visited = new Set<string>();
  const queue = Array.from(initial);

  while (queue.length) {
    const file = queue.pop() as string;
    if (visited.has(file)) continue;
    visited.add(file);

    let content: string;
    try {
      content = fs.readFileSync(file, 'utf8');
    } catch {
      continue;
    }

    for (const spec of extractRelativeSpecs(content)) {
      if (!spec.startsWith('.')) continue;
      const resolved = resolveRelativeModule(file, spec, normalizedRoot);
      if (resolved && !visited.has(resolved)) {
        queue.push(resolved);
      }
    }
  }

  return Array.from(visited).sort();
}
