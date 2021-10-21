import { SettData } from '.';

export interface Account {
  address: string;
  value: number;
  earnedValue: number;
  boost: number;
  boostRank: number;
  multipliers: Record<string, number>;
  data: Record<string, SettData>;
  stakeRatio: number;
  nativeBalance: number;
  nonNativeBalance: number;
}
