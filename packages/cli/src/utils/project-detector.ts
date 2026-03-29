import fs from 'fs-extra';
import path from 'path';

export interface ProjectInfo {
  isNextJs: boolean;
  hasTypeScript: boolean;
  hasSrcDir: boolean;
  packageManager: 'npm' | 'yarn' | 'pnpm' | 'bun';
  projectRoot: string;
}

export class ProjectDetector {
  static async detect(cwd: string = process.cwd()): Promise<ProjectInfo> {
    const packageJsonPath = path.join(cwd, 'package.json');

    if (!(await fs.pathExists(packageJsonPath))) {
      throw new Error('No package.json found. Make sure you are in a Node.js project directory.');
    }

    const packageJson = await fs.readJson(packageJsonPath);

    const isNextJs = !!(
      packageJson.dependencies?.next ||
      packageJson.devDependencies?.next
    );

    if (!isNextJs) {
      throw new Error('This CLI is designed for Next.js projects. No Next.js dependency found.');
    }

    const hasTypeScript = !!(
      packageJson.dependencies?.typescript ||
      packageJson.devDependencies?.typescript ||
      (await fs.pathExists(path.join(cwd, 'tsconfig.json')))
    );

    const hasSrcDir = await fs.pathExists(path.join(cwd, 'src'));
    const packageManager = this.detectPackageManager(cwd);

    return {
      isNextJs,
      hasTypeScript,
      hasSrcDir,
      packageManager,
      projectRoot: cwd,
    };
  }

  private static detectPackageManager(cwd: string): 'npm' | 'yarn' | 'pnpm' | 'bun' {
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
    return projectInfo.hasSrcDir ? 'src/app' : 'app';
  }

  static getComponentsDir(projectInfo: ProjectInfo): string {
    return projectInfo.hasSrcDir ? 'src/components' : 'components';
  }

  static getStylesDir(projectInfo: ProjectInfo): string {
    return projectInfo.hasSrcDir ? 'src/styles' : 'styles';
  }

  /**
   * App Router root: `src/app` or `app` when present on disk.
   */
  static getAppRouterDir(projectInfo: ProjectInfo): string | null {
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
    const appRouter = this.getAppRouterDir(projectInfo);
    if (appRouter) {
      return path.join(appRouter, 'globals.css');
    }
    return path.join(this.getStylesDir(projectInfo), 'globals.css');
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
}
