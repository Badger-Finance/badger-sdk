import { TimeRangeOptions } from '../../common/interfaces';
import { BlocksRangeOptions } from '../../common/interfaces/blocks-range-options.interface';
import { VaultVersion } from '../enums';

export interface ListHarvestOptions
  extends TimeRangeOptions,
    BlocksRangeOptions {
  address: string;
  version: VaultVersion;
}
