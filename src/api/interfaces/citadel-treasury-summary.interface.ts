import { TreasuryPosition } from './treasy-position.interface';

export interface CitadelTreasurySummary {
  address: string;
  marketCapToTreasuryRatio: number;
  positions: TreasuryPosition[];
  value: number;
  valueBtc: number;
  valuePaid: number;
  valuePaidBtc: number;
  yield: number;
}
