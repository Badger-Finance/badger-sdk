import { TreasurySummary } from '.';

export interface CitadelTreasurySummary extends TreasurySummary {
  fundingBps: number;
  lockingBps: number;
  marketCap: number;
  marketCapToTreasuryRatio: number;
  staked: number;
  stakedPercent: number;
  stakingBps: number;
  supply: number;
  valueBtc: number;
  valuePaid: number;
  valuePaidBtc: number;
}
