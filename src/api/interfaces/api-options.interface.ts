import { Networkish } from '@ethersproject/networks';

import { LogLevel } from '..';

export interface APIOptions {
  baseURL?: string;
  citadelBaseURL?: string;
  logLevel?: LogLevel;
  network: Networkish;
}
