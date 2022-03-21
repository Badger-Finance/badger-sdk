import { TokenValue } from '.';

export interface VaultYieldProjection {
  harvestApr: number;
  harvestApy: number;
  harvestTokens: TokenValue[];
  harvestValue: number;
  yieldApr: number;
  yieldTokens: TokenValue[];
  yieldValue: number;
}
