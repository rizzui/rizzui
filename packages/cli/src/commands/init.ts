import { select, confirm } from '@inquirer/prompts';
import path from 'path';
import fs from 'fs-extra';
import {
  ProjectDetector,
  ProjectInfo,
  FileOperations,
  Logger,
  promptSectionHeader,
  promptStepLabel,
  promptBlock,
  promptHint,
  type SupportedFramework,
} from '../utils';
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
  framework?: SupportedFramework;
}

export class InitCommand {
  static async run(options: InitOptions): Promise<void> {
    Logger.info('Initializing RizzUI in your project...');
    Logger.newLine();

    try {
      const projectInfo = await ProjectDetector.detect(process.cwd(), options.framework);
      Logger.success(
        `Detected ${projectInfo.adapter.label} project with ${projectInfo.hasTypeScript ? 'TypeScript' : 'JavaScript'}`
      );
      Logger.info(`Package manager: ${projectInfo.packageManager}`);
      Logger.info(`Source directory: ${projectInfo.hasSrcDir ? 'src/' : 'root'}`);
      Logger.info(`Framework: ${projectInfo.framework}`);
      Logger.newLine();

      let config: TailwindConfigOptions;
      if (options.default) {
        config = {
          themeOption: 'default-light',
          isDarkMode: false,
        };
        Logger.info('Using default light-only theme');
      } else {
        Logger.section('Let\'s configure your RizzUI project', 'Interactive setup');
        Logger.divider();
        config = await this.promptForConfiguration();
        Logger.newLine();
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

      if (config.isDarkMode) {
        await this.generateThemeComponents(projectInfo);
      }
      await this.patchFrameworkRootEntry(projectInfo, options.default === true, config.isDarkMode);

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
    const message = [
      promptSectionHeader('Theme setup'),
      promptBlock(promptStepLabel(1, 1, 'Choose your theme mode')),
      promptHint('Use arrow keys and press Enter to continue'),
      '',
    ].join('\n');

    const themeOption = await select({
      message,
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

  private static async patchFrameworkRootEntry(
    projectInfo: ProjectInfo,
    nonInteractive: boolean,
    withDarkMode: boolean
  ): Promise<void> {
    const rootEntryRel = ProjectDetector.getRootEntryRelativePath(projectInfo);
    if (!rootEntryRel) {
      if (projectInfo.framework === 'next') {
        Logger.warning(
          'No App Router directory (app/ or src/app/) found. Import your globals stylesheet from pages/_app or your root layout.'
        );
      } else {
        Logger.warning('Could not find TanStack Start root route file. Import globals.css manually.');
      }
      return;
    }

    const rootEntryAbs = path.join(projectInfo.projectRoot, rootEntryRel);
    if (!(await FileOperations.pathExists(rootEntryAbs))) {
      Logger.warning(`Root entry not found at ${rootEntryRel.split(path.sep).join('/')}`);
      return;
    }

    const globalsRel = ProjectDetector.getGlobalCssRelativePath(projectInfo);
    const importTarget = path
      .relative(path.dirname(rootEntryAbs), path.join(projectInfo.projectRoot, globalsRel))
      .replace(/\\/g, '/');
    const normalizedImportTarget = importTarget.startsWith('.') ? importTarget : `./${importTarget}`;
    const importLine = `import '${normalizedImportTarget}';`;

    let shouldPatchImport = nonInteractive;
    if (!nonInteractive) {
      shouldPatchImport = await confirm({
        message: `Add ${importLine.trim()} to ${rootEntryRel.split(path.sep).join('/')}?`,
        default: true,
      });
    }
    if (shouldPatchImport) {
      await FileOperations.ensureLayoutImportsGlobals(rootEntryAbs, importLine);
    }

    if (projectInfo.framework === 'tanstack-start' && withDarkMode) {
      await this.patchTanStackRootWithThemeProvider(rootEntryAbs, projectInfo);
    }
  }

  private static async patchTanStackRootWithThemeProvider(
    rootEntryAbs: string,
    projectInfo: ProjectInfo
  ): Promise<void> {
    const relativeComponents = path
      .relative(path.dirname(rootEntryAbs), path.join(projectInfo.projectRoot, ProjectDetector.getComponentsDir(projectInfo)))
      .replace(/\\/g, '/');
    const prefix = relativeComponents.startsWith('.') ? relativeComponents : `./${relativeComponents}`;
    const providerImportPath = `${prefix}/theme-provider`;
    let content = await FileOperations.readFile(rootEntryAbs);

    if (!content.includes(providerImportPath)) {
      const importLine = `import { ThemeProvider } from '${providerImportPath}';`;
      content = FileOperations.insertGlobalsImportLine(content, importLine);
    }

    if (!content.includes('<ThemeProvider>') && content.includes('function RootComponent')) {
      content = content.replace(
        /function RootComponent\(\)\s*\{\s*return\s*\(\s*/m,
        "function RootComponent() {\n  return (\n    <ThemeProvider>\n"
      );
      content = content.replace(/\n\s*\);\s*\n\}/m, '\n    </ThemeProvider>\n  );\n}');
      await fs.writeFile(rootEntryAbs, content, 'utf8');
      Logger.success(`Wrapped RootComponent with ThemeProvider in ${rootEntryAbs}`);
      return;
    }

    if (!content.includes('<ThemeProvider>')) {
      Logger.warning(
        `Could not auto-wrap TanStack root component in ${rootEntryAbs}. Add <ThemeProvider> manually around your root component tree.`
      );
      await fs.writeFile(rootEntryAbs, content, 'utf8');
      return;
    }

    await fs.writeFile(rootEntryAbs, content, 'utf8');
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
