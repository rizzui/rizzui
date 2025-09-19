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

    if (!await fs.pathExists(packageJsonPath)) {
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
      await fs.pathExists(path.join(cwd, 'tsconfig.json'))
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
    if (fs.existsSync(path.join(cwd, 'bun.lockb'))) {
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
}