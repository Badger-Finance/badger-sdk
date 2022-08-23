import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

export class BaseFsIo {
  private readonly rootDir: string;

  constructor(rootDir: string) {
    this.rootDir = rootDir;
  }

  write<T>(fileName: string, data: T, path = '', rootDir = '') {
    const fullPath = resolve(__dirname, `../../${rootDir || this.rootDir}`, path);

    if (!existsSync(fullPath)) {
      mkdirSync(fullPath, { recursive: true });
    }

    let stringifiedData = '';

    try {
      stringifiedData = JSON.stringify(data, null, 2);
    } catch (error) {
      throw new Error(`Failed to stringify data: ${error}`);
    }

    writeFileSync(resolve(fullPath, `${fileName}.json`), stringifiedData);
  }
}
