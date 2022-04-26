import { TreasuryPosition } from '.';

export interface TreasurySummary {
  address: string;
  value: number;
  yield: number;
  positions: TreasuryPosition[];
}
