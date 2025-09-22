import fs from 'fs-extra';
import path from 'path';
import { Logger } from './logger';

export class FileOperations {
  static async writeFile(filePath: string, content: string): Promise<void> {
    try {
      await fs.ensureDir(path.dirname(filePath));
      await fs.writeFile(filePath, content, 'utf8');
      Logger.success(`Created ${filePath}`);
    } catch (error) {
      Logger.error(`Failed to create ${filePath}: ${error instanceof Error ? error.message : error}`);
      throw error;
    }
  }

  static async readFile(filePath: string): Promise<string> {
    try {
      return await fs.readFile(filePath, 'utf8');
    } catch (error) {
      throw new Error(`Failed to read ${filePath}: ${error instanceof Error ? error.message : error}`);
    }
  }

  static async pathExists(filePath: string): Promise<boolean> {
    return fs.pathExists(filePath);
  }

  static async updatePackageJson(projectRoot: string, dependencies: Record<string, string>, devDependencies?: Record<string, string>): Promise<void> {
    const packageJsonPath = path.join(projectRoot, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);

    packageJson.dependencies = {
      ...packageJson.dependencies,
      ...dependencies,
    };

    if (devDependencies) {
      packageJson.devDependencies = {
        ...packageJson.devDependencies,
        ...devDependencies,
      };
    }

    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    Logger.success('Updated package.json');
  }

  static async updatePostCSSConfig(projectRoot: string, config: string): Promise<void> {
    const configPath = path.join(projectRoot, 'postcss.config.mjs');
    const configExists = await fs.pathExists(configPath);

    if (configExists) {
      Logger.warning('postcss.config.mjs already exists. You may need to merge configurations manually.');

      // Backup existing config
      const backupPath = path.join(projectRoot, 'postcss.config.mjs.backup');
      await fs.copy(configPath, backupPath);
      Logger.info(`Backup created at ${backupPath}`);
    }

    await this.writeFile(configPath, config);
  }

  static async appendToFile(filePath: string, content: string): Promise<void> {
    try {
      const exists = await fs.pathExists(filePath);
      if (exists) {
        const existingContent = await fs.readFile(filePath, 'utf8');
        if (!existingContent.includes(content.trim())) {
          await fs.appendFile(filePath, `\n${content}`);
          Logger.success(`Updated ${filePath}`);
        } else {
          Logger.info(`Content already exists in ${filePath}`);
        }
      } else {
        await this.writeFile(filePath, content);
      }
    } catch (error) {
      Logger.error(`Failed to update ${filePath}: ${error instanceof Error ? error.message : error}`);
      throw error;
    }
  }
}