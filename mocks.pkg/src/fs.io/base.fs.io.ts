import { writeFileSync } from 'fs';
import { resolve } from 'path';

export class BaseFsIo {
  private readonly rootDir: string;

  constructor(rootDir: string) {
    this.rootDir = rootDir;
  }

  async write<T>(fileName: string, data: T, path: string = '') {
    writeFileSync(
      resolve(__dirname, '../', this.rootDir + path + '/', `${fileName}.json`),
      JSON.stringify(data, null, 2),
    );
  }
}
