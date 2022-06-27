import { HarvestType } from "..";

export interface VaultEarning {
  eventType: HarvestType;
  amount: number;
  strategyBalance?: number;
  estimatedApr?: number;
}
