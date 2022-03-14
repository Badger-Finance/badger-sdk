export interface VaultSnapshot {
  address: string;
  block: number;
  timestamp: number;
  balance: number;
  supply: number;
  pricePerFullShare: number;
  value: number;
  apr: number;
}
