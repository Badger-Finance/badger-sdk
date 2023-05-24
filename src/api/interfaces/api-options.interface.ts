import { Networkish } from '@ethersproject/networks';

import { LogLevel } from '..';

export interface APIOptions {
  baseURL?: string;
  logLevel?: LogLevel;
  network: Networkish;
  graphURL?: string;
}
