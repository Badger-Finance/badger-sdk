import { CitadelRewardType } from '../enums';

export interface CitadelAccount {
  address: string;
  value: number;
  earned: number;
  earnedBtc: number;
  // not sure how to determine roi or what basis to use here...
  roi: number;
  projectedEarnings: Record<CitadelRewardType, number>;
  stakingEarned: number;
  stakingRoi: number;
  lockingEarned: number;
  // really not sure wtf to put here... (do we need to capture price at deposit or lock?)
  lockingRoi: number;
}
