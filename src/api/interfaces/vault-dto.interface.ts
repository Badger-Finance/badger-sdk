import { VaultBehavior, VaultVersion } from '../../vaults';
import { BouncerType, Protocol, VaultState, VaultType } from '../enums';
import { BoostConfig, TokenValue, VaultStrategy } from '.';

export interface VaultDTO {
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
  underlyingToken: string;
  value: number;
  vaultAsset: string;
  vaultToken: string;
  version: VaultVersion;
}
