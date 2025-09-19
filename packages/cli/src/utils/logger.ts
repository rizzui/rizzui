import chalk from 'chalk';
import ora, { Ora } from 'ora';

export class Logger {
  private static spinner: Ora | null = null;

  static success(message: string): void {
    console.log(chalk.green('✓'), message);
  }

  static error(message: string): void {
    console.log(chalk.red('✗'), message);
  }

  static warning(message: string): void {
    console.log(chalk.yellow('⚠'), message);
  }

  static info(message: string): void {
    console.log(chalk.blue('ℹ'), message);
  }

  static log(message: string): void {
    console.log(message);
  }

  static startSpinner(message: string): void {
    this.spinner = ora(message).start();
  }

  static updateSpinner(message: string): void {
    if (this.spinner) {
      this.spinner.text = message;
    }
  }

  static stopSpinner(success: boolean = true, message?: string): void {
    if (this.spinner) {
      if (success) {
        this.spinner.succeed(message);
      } else {
        this.spinner.fail(message);
      }
      this.spinner = null;
    }
  }

  static newLine(): void {
    console.log();
  }
}