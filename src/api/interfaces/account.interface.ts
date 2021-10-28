import { SettData } from './sett-data.interface';

export interface Account {
  address: string;
  value: number;
  earnedValue: number;
  boost: number;
  boostRank: number;
  multipliers: Record<string, number>;
  data: Record<string, SettData>;
  claimableBalances: Record<string, string>;
  stakeRatio: number;
  nativeBalance: number;
  nonNativeBalance: number;
}
