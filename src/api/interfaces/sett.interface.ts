import { BouncerType } from '../enums';
import { SettState } from '../enums/sett-state.enum';
import { SettStrategy } from './sett-strategy.interface';
import { TokenBalance } from './token-balance.interface';
import { ValueSource } from './value-source.interface';

export interface Sett {
  address: string;
  asset: string;
  vaultAsset: string;
  boostable: boolean;
  deprecated: boolean;
  experimental: boolean;
  bouncer: BouncerType;
  maxApr?: number;
  minApr?: number;
  pricePerFullShare: number;
  sources: ValueSource[];
  state: SettState;
  tokens: TokenBalance[];
  underlyingToken: string;
  settToken: string;
  strategy: SettStrategy;
}
