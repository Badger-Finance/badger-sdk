import { UserBoostData } from './user-boost-data.interface';
import { VaultData } from './vault-data.interface';

export interface Account extends UserBoostData {
  address: string;
  claimableBalances: Record<string, string>;
  data: Record<string, VaultData>;
  earnedValue: number;
  value: number;
}
