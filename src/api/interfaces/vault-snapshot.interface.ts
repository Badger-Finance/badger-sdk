import { VaultStrategy } from '.';

export interface VaultSnapshot {
  address: string;
  block: number;
  timestamp: number;
  available: number;
  balance: number;
  strategyBalance: number;
  totalSupply: number;
  pricePerFullShare: number;
  value: number;
  strategy: VaultStrategy;
  boostWeight: number;
  apr: number;
  yieldApr: number;
  harvestApr: number;
}
