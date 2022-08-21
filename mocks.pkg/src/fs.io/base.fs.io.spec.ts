import { BaseFsIo } from './base.fs.io';
import fs from 'fs';

import { resolve } from 'path';

describe('BaseFsIo', () => {
  let baseFsIo: BaseFsIo;

  const ROOT_DIR = 'generated';
  const FILE_NAME = 'fsTestFile';

  const DATA = {
    addr: '0x123',
    balance: '0x456',
    name: '0x789',
    symbol: '0xabc',
  };

  let writePath = '';
  let writeDatadata = '';

  beforeEach(() => {
    baseFsIo = new BaseFsIo(ROOT_DIR);

    jest.spyOn(fs, 'writeFileSync').mockImplementation((path, data) => {
      writePath = `${path}`;
      writeDatadata = <string>data;
    });
  });

  it('should create BaseFsIo and write file in existing directory', () => {
    jest.spyOn(fs, 'existsSync').mockImplementation(() => true);

    baseFsIo.write(FILE_NAME, DATA);

    expect(writePath).toBe(resolve(__dirname, `../../${ROOT_DIR}/${FILE_NAME}.json`));
    expect(writeDatadata).toBe(JSON.stringify(DATA, null, 2));
  });

  it('shold create dirictory if not existsts', () => {
    baseFsIo = new BaseFsIo('unknown/path/name');

    const mkdirSyncMock = jest.spyOn(fs, 'mkdirSync').mockImplementation((_) => 'ok');

    baseFsIo.write(FILE_NAME, DATA);

    expect(mkdirSyncMock.mock.calls.length).toBe(1);
  });

  it('should throw error if cannot stringify data', () => {
    jest.spyOn(fs, 'existsSync').mockImplementation(() => true);

    const cycleObject = {
      ref: {},
    };

    cycleObject.ref = cycleObject;

    expect(() => {
      baseFsIo.write(FILE_NAME, cycleObject);
    }).toThrow();
  });
});
