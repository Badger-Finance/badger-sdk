import { UserBoostData } from './user-boost-data.interface';
import { VaultData } from './vault-data.interface';

export interface Account extends UserBoostData {
  address: string;
  boost: number;
  boostRank: number;
  bveCvxBalance: number;
  claimableBalances: Record<string, string>;
  data: Record<string, VaultData>;
  diggBalance: number;
  earnedValue: number;
  multipliers: Record<string, number>;
  nativeBalance: number;
  nftBalance: number;
  nonNativeBalance: number;
  stakeRatio: number;
  value: number;
}
