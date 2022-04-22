import { BlocksRangeOptions } from '../../common/interfaces/blocks-range-options.interface';
import { RewardFilter } from '../enums/reward-filter.enum';

export interface ListRewardsOptions extends BlocksRangeOptions {
  user?: string;
  token?: string;
  filter?: RewardFilter;
}
