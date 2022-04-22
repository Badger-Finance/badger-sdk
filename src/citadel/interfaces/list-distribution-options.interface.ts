import { TimeRangeOptions } from '../../common';
import { BlocksRangeOptions } from '../../common/interfaces/blocks-range-options.interface';

export interface ListDistributionOptions
  extends TimeRangeOptions,
    BlocksRangeOptions {}
