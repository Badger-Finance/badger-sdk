import { BouncerType } from '../enums';
import { SettState } from '../enums/sett-state.enum';
import { SettStrategy } from './sett-strategy.interface';
import { TokenBalance } from './token-balance.interface';
import { ValueSource } from './value-source.interface';
import { Protocol } from '../enums/protocol.enum';
import { BoostConfig } from './boost-config.interface';

export interface Sett {
  name: string;
  value: number;
  balance: number;
  asset: string;
  settAsset: string;
  boost: BoostConfig;
  bouncer: BouncerType;
  apr: number;
  minApr?: number;
  maxApr?: number;
  pricePerFullShare: number;
  protocol: Protocol;
  sources: ValueSource[];
  state: SettState;
  tokens: TokenBalance[];
  underlyingToken: string;
  settToken: string;
  strategy: SettStrategy;
}
