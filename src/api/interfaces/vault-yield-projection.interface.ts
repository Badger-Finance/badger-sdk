import { TokenRate } from '.';

export interface VaultYieldProjection {
  harvestApr: number;
  harvestApy: number;
  harvestPeriodApr: number;
  harvestPeriodApy: number;
  harvestTokens: TokenRate[];
  harvestTokensPerPeriod: TokenRate[];
  harvestValue: number;
  yieldApr: number;
  yieldPeriodApr: number;
  yieldTokens: TokenRate[];
  yieldTokensPerPeriod: TokenRate[];
  yieldValue: number;
}
