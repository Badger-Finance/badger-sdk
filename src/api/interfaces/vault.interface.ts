import { BouncerType } from '../enums';
import { VaultState } from '../enums/vault-state.enum';
import { VaultStrategy } from './vault-strategy.interface';
import { TokenBalance } from './token-balance.interface';
import { ValueSource } from './value-source.interface';
import { Protocol } from '../enums/protocol.enum';
import { BoostConfig } from './boost-config.interface';

export interface Vault {
  name: string;
  value: number;
  balance: number;
  asset: string;
  settAsset: string;
  boost: BoostConfig;
  bouncer: BouncerType;
  apr: number;
  newVault: boolean;
  minApr?: number;
  maxApr?: number;
  pricePerFullShare: number;
  protocol: Protocol;
  sources: ValueSource[];
  state: VaultState;
  tokens: TokenBalance[];
  underlyingToken: string;
  vaultToken: string;
  strategy: VaultStrategy;
}
