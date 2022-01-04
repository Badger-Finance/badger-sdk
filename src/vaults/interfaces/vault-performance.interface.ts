export interface VaultPerformance {
  harvestTimeDelta: number;
  harvestAmount: number;
  assetsAtLastHarvest: number;
  lifeTimeEarned: number;
  lastAdditionalTokenAmount: Record<string, number>;
  balanceOfRewards: Record<string, number>;
  autoCompoundRatio: number;
}
