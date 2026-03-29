import { Command } from 'commander';
import { InitCommand } from './commands/init';
import { AddCommand } from './commands/add';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

// Read version from package.json
const packageJsonPath = path.join(__dirname, '../package.json');
const { version } = fs.readJsonSync(packageJsonPath);

const program = new Command();

program
  .name('rizzui-cli')
  .description('Scaffold RizzUI 2.x in Next.js (Tailwind v4, globals.css, rizzui.config.json)')
  .version(version);

program
  .command('init')
  .description('Initialize RizzUI in your Next.js project')
  .option('-d, --default', 'Use default configuration')
  .option('-t, --typescript', 'Use TypeScript (default: true)')
  .option('--no-typescript', 'Use JavaScript')
  .option('-s, --src-dir', 'Use src directory (default: auto-detect)')
  .option('--no-src-dir', 'Do not use src directory')
  .action(async (options) => {
    try {
      await InitCommand.run(options);
    } catch (error) {
      console.error(chalk.red('Error:'), error instanceof Error ? error.message : error);
      process.exit(1);
    }
  });

program
  .command('add')
  .description(
    'Copy RizzUI TypeScript sources into components/ui (interactive list), or pass slugs; use --print-imports for npm import lines only'
  )
  .argument('[components...]', 'Optional slugs, e.g. button modal tabs cn variants')
  .option('-a, --all', '(Deprecated) same as --print-imports')
  .option('-p, --print-imports', 'Print subpath import lines only — no files copied')
  .action(async (components, options) => {
    try {
      await AddCommand.run(components, options);
    } catch (error) {
      console.error(chalk.red('Error:'), error instanceof Error ? error.message : error);
      process.exit(1);
    }
  });

program.parse();