import { VaultBehavior, VaultVersion } from '../../vaults';
import { BouncerType, Protocol, VaultState, VaultType } from '../enums';
import { BoostConfig, TokenValue, ValueSource, VaultStrategy } from '.';
import { VaultYieldProjection } from './vault-yield-projection.interface';
import { YieldSummary } from './yield-summary.interface';

export interface VaultDTOV3 {
  apr: YieldSummary;
  apy: YieldSummary;
  asset: string;
  available: number;
  balance: number;
  behavior: VaultBehavior;
  boost: BoostConfig;
  bouncer: BouncerType;
  lastHarvest: number;
  name: string;
  pricePerFullShare: number;
  protocol: Protocol;
  sources: ValueSource[];
  sourcesApy: ValueSource[];
  state: VaultState;
  strategy: VaultStrategy;
  tokens: TokenValue[];
  type: VaultType;
  yieldProjection: VaultYieldProjection;
  underlyingToken: string;
  value: number;
  vaultAsset: string;
  vaultToken: string;
  version: VaultVersion;
}
