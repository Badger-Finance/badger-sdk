import { TreasuryPosition } from './treasy-position.interface';

export interface CitadelTreasurySummary {
  address: string;
  fundingBps: number;
  lockingBps: number;
  marketCapToTreasuryRatio: number;
  positions: TreasuryPosition[];
  stakingBps: number;
  value: number;
  valueBtc: number;
  valuePaid: number;
  valuePaidBtc: number;
  yield: number;
}
