export interface VaultPerformance {
  // general vault information
  currentBalance: number;
  historicBalance: number;
  autoCompoundRatio: number;
  lifeTimeEarned: number;
  basePerformance: number;

  // values pertaining to the expected harvest
  expectedHarvestTimeDelta: number;
  expectedHarvestAssets: Record<string, number>;

  // values pertaining to the previous harvest
  previousHarvest: number;
  previousHarvestTimeDelta: number;
  previousTreeDistribution: Record<string, number>;

  // values pertaining to the previous three harvests
  cumulativeHarvest: number;
  cumulativeHarvestTimeDelta: number;
  cumulativeTreeDistributions: Record<string, number>;
}
