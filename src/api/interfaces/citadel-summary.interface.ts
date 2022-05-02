import { CitadelRewardType } from '../enums';

export interface CitadelSummary {
  stakingApr: number;
  lockingApr: number;
  lockingAprSources: Record<CitadelRewardType, number>;
  tokensPaid: Record<string, number>;
  valuePaid: number;
}
