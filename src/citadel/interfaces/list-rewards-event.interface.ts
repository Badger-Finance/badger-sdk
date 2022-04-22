import { BigNumber } from 'ethers';

export interface ListRewardsEvent {
  block?: number;
  user?: string;
  token: string;
  reward: BigNumber;
}
