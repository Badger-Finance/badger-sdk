import { UserBoostData } from './user-boost-data.interface';
import { VaultData } from './vault-data.interface';

export interface Account extends UserBoostData {
  address: string;
  value: number;
  earnedValue: number;
  boost: number;
  boostRank: number;
  multipliers: Record<string, number>;
  data: Record<string, VaultData>;
  claimableBalances: Record<string, string>;
  stakeRatio: number;
  nftBalance: number;
  bveCvxBalance: number;
  nativeBalance: number;
  nonNativeBalance: number;
}
