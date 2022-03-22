import { BoostConfig, ValueSource, TokenValue, VaultStrategy } from '.';
import { BouncerType, Protocol, VaultState, VaultType } from '../enums';
import { VaultBehavior, VaultVersion } from '../../vaults';
import { VaultYieldProjection } from './vault-yield-projection.interface';

export interface VaultDTO {
  apr: number;
  apy: number;
  asset: string;
  available: number;
  balance: number;
  behavior: VaultBehavior;
  boost: BoostConfig;
  bouncer: BouncerType;
  lastHarvest: number;
  maxApr?: number;
  maxApy?: number;
  minApr?: number;
  minApy?: number;
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
