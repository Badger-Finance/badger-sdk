import { YieldType } from '../enums';

export interface VaultEarning {
  timestamp: number;
  block: number;
  token: string;
  eventType: YieldType;
  amount: number;
  strategyBalance?: number;
  estimatedApr?: number;
}
