import chalk from 'chalk';

export function promptSectionHeader(title: string, subtitle?: string): string {
  const lines = [chalk.cyan.bold(`◇ ${title}`)];
  if (subtitle) {
    lines.push(chalk.gray(`  ${subtitle}`));
  }
  return lines.join('\n');
}

export function promptStepLabel(step: number, total: number, title: string): string {
  return `${chalk.gray(`Step ${step}/${total}`)} ${chalk.cyan(title)}`;
}

export function promptBlock(message: string): string {
  return `${chalk.gray('│')} ${message}`;
}

export function promptHint(message: string): string {
  return `${chalk.gray('└')} ${chalk.gray(message)}`;
}

