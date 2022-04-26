import { TreasurySummary } from '.';

export interface CitadelTreasurySummary extends TreasurySummary {
  fundingBps: number;
  lockingBps: number;
  marketCapToTreasuryRatio: number;
  stakingBps: number;
  valueBtc: number;
  valuePaid: number;
  valuePaidBtc: number;
}
