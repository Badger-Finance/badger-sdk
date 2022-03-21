import { TokenBalance } from '../..';

export interface VaultYieldProjection {
  harvestApr: number;
  harvestApy: number;
  harvestTokens: TokenBalance[];
  yieldApr: number;
  yieldTokens: TokenBalance[];
}
