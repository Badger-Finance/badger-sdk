import { writeFileSync } from 'fs';
import { resolve } from 'path';

export class BaseFsIo {
  private readonly rootDir: string;

  constructor(rootDir: string) {
    this.rootDir = rootDir;
  }

  async write<T>(fileName: string, data: T, rootDir: string | unknown = null) {
    writeFileSync(
      resolve(
        __dirname,
        '../',
        `${rootDir}` || this.rootDir,
        `${fileName}.json`,
      ),
      JSON.stringify(data, null, 2),
    );
  }
}
