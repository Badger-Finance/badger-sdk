import { TokenRate } from '.';

export interface VaultYieldProjection {
  harvestApr: number;
  harvestApy: number;
  harvestTokens: TokenRate[];
  harvestValue: number;
  yieldApr: number;
  yieldTokens: TokenRate[];
  yieldValue: number;
}
