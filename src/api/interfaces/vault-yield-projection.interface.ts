import { TokenRate, ValueSource } from '.';

export interface VaultYieldProjection {
  harvestValue: number;
  harvestApr: number;
  harvestTokens: TokenRate[];
  harvestPeriodApr: number;
  harvestPeriodApy: number;
  harvestPeriodSources: TokenRate[];
  harvestPeriodSourcesApy: TokenRate[];
  yieldValue: number;
  yieldApr: number;
  yieldTokens: TokenRate[];
  yieldPeriodApr: number;
  yieldPeriodSources: TokenRate[];
  nonHarvestApr: number;
  nonHarvestApy: number;
  nonHarvestSources: ValueSource[];
  nonHarvestSourcesApy: ValueSource[];
}
