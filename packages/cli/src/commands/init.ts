import { select, confirm } from '@inquirer/prompts';
import path from 'path';
import { ProjectDetector, ProjectInfo, FileOperations, Logger, COLOR_NAMES, ColorName, DANGER_COLORS, WARNING_COLORS, INFO_COLORS, SUCCESS_COLORS } from '../utils';
import {
  generatePostCSSConfig,
  generateGlobalCss,
  generateThemeProvider,
  generateThemeSwitcher,
  TailwindConfigOptions,
  GlobalCssOptions,
  ThemeOption
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
          themeOption: 'default-light',
          isDarkMode: false,
        };
        cssOptions = {
          themeOption: 'default-light',
          isDarkMode: false,
        };
        Logger.info('Using default light mode configuration');
      } else {
        // Interactive configuration
        config = await this.promptForConfiguration();
        cssOptions = {
          themeOption: config.themeOption,
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
      Logger.success('🎉 RizzUI has been successfully configured with Tailwind CSS v4!');
      Logger.newLine();
      Logger.info('Next steps:');
      Logger.log('1. Install dependencies: ' + this.getInstallCommand(projectInfo.packageManager));

      if (config.isDarkMode) {
        Logger.log('2. Import ThemeProvider in your app/layout.tsx');
        Logger.log('3. Use ThemeSwitcher component for theme toggling');
      }

      Logger.log(`${config.isDarkMode ? '4' : '2'}. Start using RizzUI components: import { Button } from 'rizzui'`);
      Logger.newLine();
      Logger.info('✨ New in this setup:');
      Logger.log('• Tailwind CSS v4 with simplified @import syntax');
      Logger.log('• CSS-first configuration using @theme blocks');
      Logger.log('• Improved performance and build times');
      Logger.log('• Modern CSS features support');

    } catch (error) {
      Logger.error('Failed to initialize RizzUI');
      throw error;
    }
  }

  private static async promptForConfiguration(): Promise<TailwindConfigOptions> {
    const themeOption = await select({
      message: 'Choose your theme configuration:',
      choices: [
        { name: 'Default light theme', value: 'default-light' as const },
        { name: 'Default light with dark theme', value: 'default-with-dark' as const },
        { name: 'Custom light theme', value: 'custom-light' as const },
        { name: 'Custom light with dark theme', value: 'custom-with-dark' as const },
      ],
      default: 'default-light' as const,
    }) as ThemeOption;

    const isDarkMode = themeOption === 'default-with-dark' || themeOption === 'custom-with-dark';
    let customColors: TailwindConfigOptions['customColors'];

    if (themeOption === 'custom-light' || themeOption === 'custom-with-dark') {
      Logger.info('Customize your color scheme (you can use default for any category):');

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
          ...DANGER_COLORS.map(color => ({ name: color, value: color }))
        ],
      });

      const warningColor = await select({
        message: 'Warning color:',
        choices: [
          { name: 'Default (amber)', value: null },
          ...WARNING_COLORS.map(color => ({ name: color, value: color }))
        ],
      });

      const infoColor = await select({
        message: 'Info color:',
        choices: [
          { name: 'Default (sky)', value: null },
          ...INFO_COLORS.map(color => ({ name: color, value: color }))
        ],
      });

      const successColor = await select({
        message: 'Success color:',
        choices: [
          { name: 'Default (emerald)', value: null },
          ...SUCCESS_COLORS.map(color => ({ name: color, value: color }))
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

    return {
      themeOption,
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
      '@tailwindcss/postcss': '^4.1.11',
      'postcss': '^8.5.6',
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
    // Generate postcss.config.mjs
    Logger.startSpinner('Generating PostCSS configuration...');
    const postCSSConfig = generatePostCSSConfig();
    await FileOperations.updatePostCSSConfig(projectInfo.projectRoot, postCSSConfig);
    Logger.stopSpinner(true, 'Generated postcss.config.mjs');

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