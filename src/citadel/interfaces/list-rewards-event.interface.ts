import { BigNumber } from 'ethers';

import { RewardEventType } from '../enums/reward-event-type.enum';

export interface ListRewardsEvent {
  block?: number;
  account?: string;
  user?: string;
  dataTypeHash?: string;
  timestamp?: number;
  token: string;
  reward: BigNumber;
  type: RewardEventType;
}
