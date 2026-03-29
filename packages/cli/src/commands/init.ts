import { select, confirm } from '@inquirer/prompts';
import path from 'path';
import fs from 'fs-extra';
import { ProjectDetector, ProjectInfo, FileOperations, Logger } from '../utils';
import {
  generatePostCSSConfig,
  generateGlobalCss,
  generateThemeProvider,
  generateThemeSwitcher,
  TailwindConfigOptions,
} from '../templates';
import type { RizzuiConfigFile } from '../schema/rizzui-config';

interface InitOptions {
  default?: boolean;
  typescript?: boolean;
  srcDir?: boolean;
}

export class InitCommand {
  static async run(options: InitOptions): Promise<void> {
    Logger.info('Initializing RizzUI in your Next.js project...');
    Logger.newLine();

    try {
      const projectInfo = await ProjectDetector.detect();
      Logger.success(`Detected Next.js project with ${projectInfo.hasTypeScript ? 'TypeScript' : 'JavaScript'}`);
      Logger.info(`Package manager: ${projectInfo.packageManager}`);
      Logger.info(`Source directory: ${projectInfo.hasSrcDir ? 'src/' : 'root'}`);
      Logger.newLine();

      let config: TailwindConfigOptions;
      if (options.default) {
        config = {
          themeOption: 'default-light',
          isDarkMode: false,
        };
        Logger.info('Using default light-only theme');
      } else {
        config = await this.promptForConfiguration();
      }

      const globalsRel = ProjectDetector.getGlobalCssRelativePath(projectInfo);
      const globalsRelPosix = globalsRel.split(path.sep).join('/');

      await this.installDependencies(projectInfo, config.isDarkMode);

      const sourceRel = ProjectDetector.getRizzuiSourceRelativeToGlobals(
        projectInfo.projectRoot,
        globalsRel
      );
      const globalCss = generateGlobalCss(sourceRel);

      await this.generateConfigFiles(projectInfo, globalCss, globalsRel);

      const layoutRel = ProjectDetector.getRootLayoutRelativePath(projectInfo);
      if (layoutRel) {
        const layoutAbs = path.join(projectInfo.projectRoot, layoutRel);
        if (await FileOperations.pathExists(layoutAbs)) {
          const importLine = "import './globals.css';";
          let shouldPatch = options.default;
          if (!options.default) {
            shouldPatch = await confirm({
              message: `Add ${importLine.trim()} to ${layoutRel.split(path.sep).join('/')}?`,
              default: true,
            });
          }
          if (shouldPatch) {
            await FileOperations.ensureLayoutImportsGlobals(layoutAbs, importLine);
          }
        } else {
          Logger.warning(
            `Root layout not found at ${layoutRel.split(path.sep).join('/')}. Create it and add: import './globals.css';`
          );
        }
      } else {
        Logger.warning(
          'No App Router directory (app/ or src/app/) found. Import your globals stylesheet from pages/_app or your root layout.'
        );
      }

      if (config.isDarkMode) {
        await this.generateThemeComponents(projectInfo);
      }

      const rizzuiConfig: RizzuiConfigFile = {
        version: 1,
        globalsPath: globalsRelPosix,
        darkMode: config.isDarkMode,
        uiPreset: 'modern',
      };
      await FileOperations.writeRizzuiConfig(projectInfo.projectRoot, {
        ...rizzuiConfig,
      });

      Logger.newLine();
      Logger.success('RizzUI has been configured with Tailwind CSS v4.');
      Logger.newLine();
      Logger.info('Next steps:');
      Logger.log('1. Run: ' + this.getInstallCommand(projectInfo.packageManager));

      if (config.isDarkMode) {
        Logger.log('2. Wrap your app with ThemeProvider from components/theme-provider');
        Logger.log('3. Use ThemeSwitcher where you want a theme control');
        Logger.log('4. Import components from subpaths, e.g. import { Button } from \'rizzui/button\';');
      } else {
        Logger.log('2. Import components from subpaths, e.g. import { Button } from \'rizzui/button\';');
      }

      Logger.newLine();
      Logger.info('Optional: set data-ui-preset on <html> or <body> — modern | minimal | bold | soft');
      Logger.newLine();
    } catch (error) {
      Logger.error('Failed to initialize RizzUI');
      throw error;
    }
  }

  private static async promptForConfiguration(): Promise<TailwindConfigOptions> {
    const themeOption = await select({
      message: 'Choose your theme configuration:',
      choices: [
        { name: 'Light theme only', value: 'default-light' as const },
        {
          name: 'Light and dark theme (next-themes + data-theme)',
          value: 'default-with-dark' as const,
        },
      ],
      default: 'default-light' as const,
    });

    const isDarkMode = themeOption === 'default-with-dark';
    return { themeOption, isDarkMode };
  }

  private static async installDependencies(projectInfo: ProjectInfo, isDarkMode: boolean): Promise<void> {
    Logger.startSpinner('Updating package.json...');

    const dependencies: Record<string, string> = {
      rizzui: '^2.1.0',
      react: '^19.2.3',
      'react-dom': '^19.2.3',
      '@headlessui/react': '^2.2.9',
      '@floating-ui/react': '^0.27.16',
    };

    const devDependencies: Record<string, string> = {
      tailwindcss: '^4.1.18',
      '@tailwindcss/postcss': '^4.1.18',
      postcss: '^8.5.6',
      '@tailwindcss/forms': '^0.5.10',
    };

    if (isDarkMode) {
      dependencies['next-themes'] = '^0.4.6';
      devDependencies['@heroicons/react'] = '^2.2.0';
    }

    await FileOperations.updatePackageJson(projectInfo.projectRoot, dependencies, devDependencies);

    Logger.stopSpinner(true, 'Updated package.json');
  }

  private static async generateConfigFiles(
    projectInfo: ProjectInfo,
    globalCss: string,
    globalsRelativePath: string
  ): Promise<void> {
    Logger.startSpinner('Generating PostCSS configuration...');
    const postCSSConfig = generatePostCSSConfig();
    await FileOperations.updatePostCSSConfig(projectInfo.projectRoot, postCSSConfig);
    Logger.stopSpinner(true, 'Generated postcss.config.mjs');

    Logger.startSpinner('Generating global styles...');
    const globalCssPath = path.join(projectInfo.projectRoot, globalsRelativePath);
    if (await FileOperations.pathExists(globalCssPath)) {
      const backupPath = `${globalCssPath}.backup`;
      await fs.copy(globalCssPath, backupPath);
      Logger.warning(`Existing globals stylesheet backed up to ${backupPath}`);
    }
    await FileOperations.writeFile(globalCssPath, globalCss);
    Logger.stopSpinner(true, 'Generated global styles');
  }

  private static async generateThemeComponents(projectInfo: ProjectInfo): Promise<void> {
    Logger.startSpinner('Generating theme components...');

    const componentsDir = ProjectDetector.getComponentsDir(projectInfo);
    const isTypeScript = projectInfo.hasTypeScript;

    const themeProvider = generateThemeProvider(isTypeScript);
    const themeProviderPath = path.join(
      projectInfo.projectRoot,
      componentsDir,
      `theme-provider.${isTypeScript ? 'tsx' : 'jsx'}`
    );
    await FileOperations.writeFile(themeProviderPath, themeProvider);

    const themeSwitcher = generateThemeSwitcher(isTypeScript);
    const themeSwitcherPath = path.join(
      projectInfo.projectRoot,
      componentsDir,
      `theme-switcher.${isTypeScript ? 'tsx' : 'jsx'}`
    );
    await FileOperations.writeFile(themeSwitcherPath, themeSwitcher);

    Logger.stopSpinner(true, 'Generated theme components');
  }

  private static getInstallCommand(packageManager: ProjectInfo['packageManager']): string {
    switch (packageManager) {
      case 'yarn':
        return 'yarn install';
      case 'pnpm':
        return 'pnpm install';
      case 'bun':
        return 'bun install';
      default:
        return 'npm install';
    }
  }
}
