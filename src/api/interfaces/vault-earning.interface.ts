import { HarvestType } from '..';

export interface VaultEarning {
  timestamp: number;
  block: number;
  token: string;
  eventType: HarvestType;
  amount: number;
  strategyBalance?: number;
  estimatedApr?: number;
}
