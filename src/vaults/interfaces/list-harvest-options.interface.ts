import { TimeRangeOptions } from '../../common/interfaces';
import { VaultVersion } from '../enums';
import { BlocksRangeOptions } from '../../common/interfaces/blocks-range-options.interface';

export interface ListHarvestOptions
  extends TimeRangeOptions,
    BlocksRangeOptions {
  address: string;
  version: VaultVersion;
}
