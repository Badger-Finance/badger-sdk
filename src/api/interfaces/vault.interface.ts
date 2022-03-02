import { BoostConfig, ValueSource, TokenBalance, VaultStrategy } from '.';
import { BouncerType, Protocol, VaultState, VaultType } from '../enums';

export interface Vault {
  name: string;
  value: number;
  available: number;
  balance: number;
  asset: string;
  vaultAsset: string;
  boost: BoostConfig;
  bouncer: BouncerType;
  apr: number;
  minApr?: number;
  maxApr?: number;
  apy: number;
  minApy?: number;
  maxApy?: number;
  pricePerFullShare: number;
  protocol: Protocol;
  sources: ValueSource[];
  sourcesApy: ValueSource[];
  state: VaultState;
  tokens: TokenBalance[];
  underlyingToken: string;
  vaultToken: string;
  strategy: VaultStrategy;
  type: VaultType;
}
