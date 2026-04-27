import fs from 'fs-extra';
import path from 'path';

export type SupportedFramework = 'next' | 'tanstack-start';

export interface FrameworkPaths {
  globalsPath: string;
  componentsDir: string;
  libDir: string;
  rootEntryPath: string | null;
}

export interface FrameworkAdapter {
  id: SupportedFramework;
  label: string;
  detect(projectRoot: string, packageJson: Record<string, unknown>): boolean;
  resolvePaths(projectRoot: string, hasSrcDir: boolean): FrameworkPaths;
}

function collectPackageNames(packageJson: Record<string, unknown>): Set<string> {
  const depBuckets = ['dependencies', 'devDependencies', 'peerDependencies'] as const;
  const names = new Set<string>();
  for (const bucket of depBuckets) {
    const deps = packageJson[bucket];
    if (!deps || typeof deps !== 'object') {
      continue;
    }
    for (const key of Object.keys(deps as Record<string, string>)) {
      names.add(key);
    }
  }
  return names;
}

function resolveNextAppRouter(projectRoot: string, hasSrcDir: boolean): string | null {
  const candidates = hasSrcDir ? ['src/app', 'app'] : ['app', 'src/app'];
  for (const rel of candidates) {
    if (fs.existsSync(path.join(projectRoot, rel))) {
      return rel;
    }
  }
  return null;
}

function resolveTanstackRootEntry(projectRoot: string): string | null {
  const candidates = [
    'src/routes/__root.tsx',
    'src/routes/__root.ts',
    'routes/__root.tsx',
    'routes/__root.ts',
  ];
  for (const rel of candidates) {
    if (fs.existsSync(path.join(projectRoot, rel))) {
      return rel;
    }
  }
  return null;
}

export const nextFrameworkAdapter: FrameworkAdapter = {
  id: 'next',
  label: 'Next.js',
  detect(_projectRoot, packageJson) {
    return collectPackageNames(packageJson).has('next');
  },
  resolvePaths(projectRoot, hasSrcDir) {
    const appRouter = resolveNextAppRouter(projectRoot, hasSrcDir);
    const globalsPath = appRouter
      ? path.join(appRouter, 'globals.css')
      : hasSrcDir
        ? path.join('src', 'styles', 'globals.css')
        : path.join('styles', 'globals.css');
    const rootEntryPath = appRouter ? path.join(appRouter, 'layout.tsx') : null;
    return {
      globalsPath,
      componentsDir: hasSrcDir ? path.join('src', 'components') : 'components',
      libDir: hasSrcDir ? path.join('src', 'lib') : 'lib',
      rootEntryPath,
    };
  },
};

export const tanstackStartFrameworkAdapter: FrameworkAdapter = {
  id: 'tanstack-start',
  label: 'TanStack Start',
  detect(projectRoot, packageJson) {
    const names = collectPackageNames(packageJson);
    if (
      names.has('@tanstack/start') ||
      names.has('@tanstack/react-start') ||
      names.has('@tanstack/react-router')
    ) {
      return resolveTanstackRootEntry(projectRoot) !== null;
    }
    return false;
  },
  resolvePaths(projectRoot, hasSrcDir) {
    const rootEntryPath = resolveTanstackRootEntry(projectRoot);
    const globalsPath = hasSrcDir ? path.join('src', 'styles', 'globals.css') : path.join('styles', 'globals.css');
    return {
      globalsPath,
      componentsDir: hasSrcDir ? path.join('src', 'components') : 'components',
      libDir: hasSrcDir ? path.join('src', 'lib') : 'lib',
      rootEntryPath,
    };
  },
};

export const FRAMEWORK_ADAPTERS: FrameworkAdapter[] = [
  nextFrameworkAdapter,
  tanstackStartFrameworkAdapter,
];

