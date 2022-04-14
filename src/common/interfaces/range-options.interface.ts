import { BlocksRangeOptions } from './blocks-range-options.interface';
import { TimeRangeOptions } from './time-range-options.interface';

export type RangeOptions = Required<BlocksRangeOptions> & TimeRangeOptions;
