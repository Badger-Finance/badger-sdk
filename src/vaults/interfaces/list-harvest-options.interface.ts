import { TimeRangeOptions } from '../../common/interfaces';
import { VaultVersion } from '../enums';

export interface ListHarvestOptions extends TimeRangeOptions {
  address: string;
  version: VaultVersion;
}
