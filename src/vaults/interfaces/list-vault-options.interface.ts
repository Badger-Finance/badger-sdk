import { BigNumber } from '@ethersproject/bignumber';

export interface ListVaultOptions {
  address: string;
  timestamp_gt?: BigNumber;
  timestamp_gte?: BigNumber;
  timestamp_lt?: BigNumber;
  timestamp_lte?: BigNumber;
}
