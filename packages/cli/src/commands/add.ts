import { Logger } from '../utils';

interface AddOptions {
  all?: boolean;
}

export class AddCommand {
  static async run(components: string[], options: AddOptions): Promise<void> {
    Logger.info('🔧 Add component functionality coming soon!');
    Logger.newLine();

    if (options.all) {
      Logger.info('This will add all RizzUI components to your project.');
    } else if (components.length > 0) {
      Logger.info(`This will add the following components: ${components.join(', ')}`);
    } else {
      Logger.warning('No components specified. Use --all to add all components.');
    }

    Logger.newLine();
    Logger.info('For now, you can import components directly from rizzui:');
    Logger.log('import { Button, Input, Modal } from "rizzui";');
  }
}