import { VaultBehavior, VaultVersion } from '../../vaults';
import { BouncerType, Protocol, VaultState, VaultType } from '../enums';
import { BoostConfig, TokenValue, VaultStrategy } from '.';
import { VaultYieldProjection } from './vault-yield-projection.interface';
import { VaultYieldSummary } from './vault-yield-summary.interface';

export interface VaultDTOV3 {
  apr: VaultYieldSummary;
  apy: VaultYieldSummary;
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
