import fs from 'fs-extra';
import path from 'path';
import {
  FRAMEWORK_ADAPTERS,
  type SupportedFramework,
  type FrameworkAdapter,
} from './framework-adapter';

export interface ProjectInfo {
  framework: SupportedFramework;
  hasTypeScript: boolean;
  hasSrcDir: boolean;
  packageManager: 'npm' | 'yarn' | 'pnpm' | 'bun';
  projectRoot: string;
  adapter: FrameworkAdapter;
}

export class ProjectDetector {
  static async detect(cwd: string = process.cwd(), frameworkOverride?: SupportedFramework): Promise<ProjectInfo> {
    const packageJsonPath = path.join(cwd, 'package.json');

    if (!(await fs.pathExists(packageJsonPath))) {
      throw new Error('No package.json found. Make sure you are in a Node.js project directory.');
    }

    const packageJson = await fs.readJson(packageJsonPath);
    const adapter = this.resolveFramework(cwd, packageJson, frameworkOverride);
    const hasSrcDir = await fs.pathExists(path.join(cwd, 'src'));

    const resolvedPaths = adapter.resolvePaths(cwd, hasSrcDir);
    const rootEntry = resolvedPaths.rootEntryPath
      ? path.join(cwd, resolvedPaths.rootEntryPath)
      : null;
    if (rootEntry && !(await fs.pathExists(rootEntry))) {
      throw new Error(
        `Could not find framework root entry at ${resolvedPaths.rootEntryPath}. ` +
          'Create it first or choose a different --framework value.'
      );
    }

    const hasTypeScript = !!(
      packageJson.dependencies?.typescript ||
      packageJson.devDependencies?.typescript ||
      (await fs.pathExists(path.join(cwd, 'tsconfig.json')))
    );

    const packageManager = this.detectPackageManager(cwd);

    return {
      framework: adapter.id,
      hasTypeScript,
      hasSrcDir,
      packageManager,
      projectRoot: cwd,
      adapter,
    };
  }

  private static resolveFramework(
    cwd: string,
    packageJson: Record<string, unknown>,
    frameworkOverride?: SupportedFramework
  ): FrameworkAdapter {
    if (frameworkOverride) {
      const adapter = FRAMEWORK_ADAPTERS.find((item) => item.id === frameworkOverride);
      if (!adapter) {
        throw new Error(`Unsupported framework "${frameworkOverride}".`);
      }
      if (!adapter.detect(cwd, packageJson)) {
        throw new Error(
          `Selected framework "${frameworkOverride}" does not match this project. ` +
            `Please verify dependencies and project structure.`
        );
      }
      return adapter;
    }

    const detected = FRAMEWORK_ADAPTERS.filter((item) => item.detect(cwd, packageJson));
    if (detected.length === 1) {
      return detected[0];
    }
    if (detected.length > 1) {
      throw new Error(
        'Could not auto-detect framework uniquely. Use --framework next or --framework tanstack-start.'
      );
    }
    throw new Error(
      'This CLI supports Next.js and TanStack Start projects. No supported framework detected.'
    );
  }

  static detectPackageManager(cwd: string): 'npm' | 'yarn' | 'pnpm' | 'bun' {
    if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) {
      return 'pnpm';
    }
    if (fs.existsSync(path.join(cwd, 'yarn.lock'))) {
      return 'yarn';
    }
    if (fs.existsSync(path.join(cwd, 'bun.lockb')) || fs.existsSync(path.join(cwd, 'bun.lock'))) {
      return 'bun';
    }
    return 'npm';
  }

  static getAppDir(projectInfo: ProjectInfo): string {
    if (projectInfo.framework !== 'next') {
      throw new Error('getAppDir is only available for Next.js projects.');
    }
    return projectInfo.hasSrcDir ? 'src/app' : 'app';
  }

  static getComponentsDir(projectInfo: ProjectInfo): string {
    return projectInfo.adapter.resolvePaths(projectInfo.projectRoot, projectInfo.hasSrcDir).componentsDir;
  }

  /** Vendored RizzUI `lib` utilities (`cn`, `variants`, …) — not under `components/ui`. */
  static getLibDir(projectInfo: ProjectInfo): string {
    return projectInfo.adapter.resolvePaths(projectInfo.projectRoot, projectInfo.hasSrcDir).libDir;
  }

  static getStylesDir(projectInfo: ProjectInfo): string {
    return projectInfo.hasSrcDir ? path.join('src', 'styles') : 'styles';
  }

  /**
   * App Router root: `src/app` or `app` when present on disk.
   */
  static getAppRouterDir(projectInfo: ProjectInfo): string | null {
    if (projectInfo.framework !== 'next') {
      return null;
    }
    const root = projectInfo.projectRoot;
    const srcApp = path.join(root, 'src', 'app');
    const app = path.join(root, 'app');
    if (fs.existsSync(srcApp)) {
      return path.join('src', 'app');
    }
    if (fs.existsSync(app)) {
      return 'app';
    }
    return null;
  }

  /**
   * Where to write globals.css: prefer App Router `globals.css`, else legacy `styles/globals.css`.
   */
  static getGlobalCssRelativePath(projectInfo: ProjectInfo): string {
    return projectInfo.adapter.resolvePaths(projectInfo.projectRoot, projectInfo.hasSrcDir).globalsPath;
  }

  /**
   * Relative POSIX path from the globals.css directory to `node_modules/rizzui/dist`.
   */
  static getRizzuiSourceRelativeToGlobals(projectRoot: string, globalsRelativePath: string): string {
    const globalsAbs = path.join(projectRoot, globalsRelativePath);
    const rizzuiDistAbs = path.join(projectRoot, 'node_modules', 'rizzui', 'dist');
    let rel = path.relative(path.dirname(globalsAbs), rizzuiDistAbs);
    if (!rel.startsWith('.')) {
      rel = `.${path.sep}${rel}`;
    }
    return rel.split(path.sep).join('/');
  }

  /**
   * Root layout path relative to project (tsx preferred if both exist).
   */
  static getRootLayoutRelativePath(projectInfo: ProjectInfo): string | null {
    if (projectInfo.framework !== 'next') {
      return null;
    }
    const appRouter = this.getAppRouterDir(projectInfo);
    if (!appRouter) {
      return null;
    }
    const root = projectInfo.projectRoot;
    const tsx = path.join(root, appRouter, 'layout.tsx');
    const jsx = path.join(root, appRouter, 'layout.jsx');
    if (fs.existsSync(tsx)) {
      return path.join(appRouter, 'layout.tsx');
    }
    if (fs.existsSync(jsx)) {
      return path.join(appRouter, 'layout.jsx');
    }
    const ext = projectInfo.hasTypeScript ? 'tsx' : 'jsx';
    return path.join(appRouter, `layout.${ext}`);
  }

  static getRootEntryRelativePath(projectInfo: ProjectInfo): string | null {
    return projectInfo.adapter.resolvePaths(projectInfo.projectRoot, projectInfo.hasSrcDir).rootEntryPath;
  }
}
