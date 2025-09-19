import { select, confirm } from '@inquirer/prompts';
import path from 'path';
import { ProjectDetector, ProjectInfo, FileOperations, Logger, COLOR_NAMES, ColorName } from '../utils';
import {
  generateTailwindConfig,
  generateGlobalCss,
  generateThemeProvider,
  generateThemeSwitcher,
  TailwindConfigOptions,
  GlobalCssOptions
} from '../templates';

interface InitOptions {
  default?: boolean;
  typescript?: boolean;
  srcDir?: boolean;
}

export class InitCommand {
  static async run(options: InitOptions): Promise<void> {
    Logger.info('🎨 Initializing RizzUI in your Next.js project...');
    Logger.newLine();

    try {
      // Detect project info
      const projectInfo = await ProjectDetector.detect();
      Logger.success(`Detected Next.js project with ${projectInfo.hasTypeScript ? 'TypeScript' : 'JavaScript'}`);
      Logger.info(`Package manager: ${projectInfo.packageManager}`);
      Logger.info(`Source directory: ${projectInfo.hasSrcDir ? 'src/' : 'root'}`);
      Logger.newLine();

      let config: TailwindConfigOptions;
      let cssOptions: GlobalCssOptions;

      if (options.default) {
        // Use default configuration
        config = {
          isDarkMode: false,
        };
        cssOptions = {
          isDarkMode: false,
        };
        Logger.info('Using default light mode configuration');
      } else {
        // Interactive configuration
        config = await this.promptForConfiguration();
        cssOptions = {
          isDarkMode: config.isDarkMode,
          customColors: config.customColors,
        };
      }

      // Install dependencies
      await this.installDependencies(projectInfo, config.isDarkMode);

      // Generate and write configuration files
      await this.generateConfigFiles(projectInfo, config, cssOptions);

      // Generate theme components if dark mode is enabled
      if (config.isDarkMode) {
        await this.generateThemeComponents(projectInfo);
      }

      Logger.newLine();
      Logger.success('🎉 RizzUI has been successfully configured!');
      Logger.newLine();
      Logger.info('Next steps:');
      Logger.log('1. Install dependencies: ' + this.getInstallCommand(projectInfo.packageManager));

      if (config.isDarkMode) {
        Logger.log('2. Import ThemeProvider in your app/layout.tsx');
        Logger.log('3. Use ThemeSwitcher component for theme toggling');
      }

      Logger.log(`${config.isDarkMode ? '4' : '2'}. Start using RizzUI components: import { Button } from 'rizzui'`);

    } catch (error) {
      Logger.error('Failed to initialize RizzUI');
      throw error;
    }
  }

  private static async promptForConfiguration(): Promise<TailwindConfigOptions> {
    const isDarkMode = await confirm({
      message: 'Do you want to enable dark mode support?',
      default: true,
    });

    let customColors: TailwindConfigOptions['customColors'];

    if (isDarkMode) {
      const useCustomColors = await confirm({
        message: 'Do you want to customize the color scheme?',
        default: false,
      });

      if (useCustomColors) {
        Logger.info('Select colors for your theme (you can skip any category):');

        const primaryColor = await select({
          message: 'Primary color:',
          choices: [
            { name: 'Default (gray)', value: null },
            ...COLOR_NAMES.map(color => ({ name: color, value: color }))
          ],
        });

        const secondaryColor = await select({
          message: 'Secondary color:',
          choices: [
            { name: 'Default (indigo)', value: null },
            ...COLOR_NAMES.map(color => ({ name: color, value: color }))
          ],
        });

        const dangerColor = await select({
          message: 'Danger/Error color:',
          choices: [
            { name: 'Default (red)', value: null },
            ...COLOR_NAMES.map(color => ({ name: color, value: color }))
          ],
        });

        const warningColor = await select({
          message: 'Warning color:',
          choices: [
            { name: 'Default (amber)', value: null },
            ...COLOR_NAMES.map(color => ({ name: color, value: color }))
          ],
        });

        const infoColor = await select({
          message: 'Info color:',
          choices: [
            { name: 'Default (sky)', value: null },
            ...COLOR_NAMES.map(color => ({ name: color, value: color }))
          ],
        });

        const successColor = await select({
          message: 'Success color:',
          choices: [
            { name: 'Default (emerald)', value: null },
            ...COLOR_NAMES.map(color => ({ name: color, value: color }))
          ],
        });

        customColors = {
          ...(primaryColor && { primary: primaryColor }),
          ...(secondaryColor && { secondary: secondaryColor }),
          ...(dangerColor && { danger: dangerColor }),
          ...(warningColor && { warning: warningColor }),
          ...(infoColor && { info: infoColor }),
          ...(successColor && { success: successColor }),
        };
      }
    }

    return {
      isDarkMode,
      customColors,
    };
  }

  private static async installDependencies(projectInfo: ProjectInfo, isDarkMode: boolean): Promise<void> {
    Logger.startSpinner('Updating package.json...');

    const dependencies: Record<string, string> = {
      'rizzui': '^1.0.2',
      '@headlessui/react': '^2.2.4',
      '@floating-ui/react': '^0.26.13',
    };

    const devDependencies: Record<string, string> = {
      'tailwindcss': '^4.1.11',
      'postcss': '^8.5.6',
      'autoprefixer': '^10.4.21',
      '@tailwindcss/forms': '^0.5.10',
    };

    if (isDarkMode) {
      dependencies['next-themes'] = '^0.3.0';
      devDependencies['@heroicons/react'] = '^2.1.3';
    }

    await FileOperations.updatePackageJson(
      projectInfo.projectRoot,
      dependencies,
      devDependencies
    );

    Logger.stopSpinner(true, 'Updated package.json');
  }

  private static async generateConfigFiles(
    projectInfo: ProjectInfo,
    config: TailwindConfigOptions,
    cssOptions: GlobalCssOptions
  ): Promise<void> {
    // Generate tailwind.config.js
    Logger.startSpinner('Generating Tailwind configuration...');
    const tailwindConfig = generateTailwindConfig(config);
    await FileOperations.updateTailwindConfig(projectInfo.projectRoot, tailwindConfig);
    Logger.stopSpinner(true, 'Generated tailwind.config.js');

    // Generate global.css
    Logger.startSpinner('Generating global styles...');
    const globalCss = generateGlobalCss(cssOptions);
    const stylesDir = ProjectDetector.getStylesDir(projectInfo);
    const globalCssPath = path.join(projectInfo.projectRoot, stylesDir, 'globals.css');

    await FileOperations.writeFile(globalCssPath, globalCss);
    Logger.stopSpinner(true, 'Generated global styles');
  }

  private static async generateThemeComponents(projectInfo: ProjectInfo): Promise<void> {
    Logger.startSpinner('Generating theme components...');

    const componentsDir = ProjectDetector.getComponentsDir(projectInfo);
    const isTypeScript = projectInfo.hasTypeScript;

    // Generate ThemeProvider
    const themeProvider = generateThemeProvider(isTypeScript);
    const themeProviderPath = path.join(
      projectInfo.projectRoot,
      componentsDir,
      `theme-provider.${isTypeScript ? 'tsx' : 'jsx'}`
    );
    await FileOperations.writeFile(themeProviderPath, themeProvider);

    // Generate ThemeSwitcher
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