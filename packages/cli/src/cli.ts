import { Command } from 'commander';
import { InitCommand } from './commands/init';
import { AddCommand } from './commands/add';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

// Read version from package.json
const packageJsonPath = path.join(__dirname, '../package.json');
const { version } = fs.readJsonSync(packageJsonPath);

export function createProgram(): Command {
  const program = new Command();

  program
    .name('rizzui')
    .description(
      'CLI for bootstrapping RizzUI in Next.js projects and vendoring component source code',
    )
    .version(version)
    .addHelpText(
      'after',
      `
Examples:
  $ rizzui init
  $ rizzui init --default
  $ rizzui add
  $ rizzui add button modal
  $ rizzui add --list`,
    );

  program
    .command('init')
    .description('Initialize RizzUI in your Next.js project')
    .option('-d, --default', 'Use default configuration')
    .option('-t, --typescript', 'Use TypeScript (default: true)')
    .option('--no-typescript', 'Use JavaScript')
    .option('-s, --src-dir', 'Use src directory (default: auto-detect)')
    .option('--no-src-dir', 'Do not use src directory')
    .addHelpText(
      'after',
      `
Examples:
  $ rizzui init
  $ rizzui init --default`,
    )
    .action(async (options) => {
      try {
        await InitCommand.run(options);
      } catch (error) {
        console.error(
          chalk.red('Error:'),
          error instanceof Error ? error.message : error,
        );
        process.exit(1);
      }
    });

  program
    .command('add')
    .description(
      'Copy bundled RizzUI TypeScript sources into your project (interactive list by default)',
    )
    .argument(
      '[components...]',
      'Optional slugs, e.g. button modal tabs cn variants',
    )
    .option('-l, --list', 'List all available component/util slugs')
    .addHelpText(
      'after',
      `
Examples:
  $ rizzui add
  $ rizzui add button modal
  $ rizzui add lib
  $ rizzui add --list`,
    )
    .action(async (components, options) => {
      try {
        await AddCommand.run(components, options);
      } catch (error) {
        console.error(
          chalk.red('Error:'),
          error instanceof Error ? error.message : error,
        );
        process.exit(1);
      }
    });

  return program;
}

const cliBasename = process.argv[1] ? path.basename(process.argv[1]) : '';
const shouldParseCli = cliBasename === 'cli.ts' || cliBasename === 'cli.js';
if (shouldParseCli) {
  createProgram().parse();
}
