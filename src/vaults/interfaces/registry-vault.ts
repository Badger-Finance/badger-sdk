import { VaultVersion } from '../index';
import { Token, VaultState } from '../../index';

export interface RegistryVault {
  address: string;
  name: string;
  state: VaultState;
  version: VaultVersion;
  available: number;
  balance: number;
  totalSupply: number;
  pricePerFullShare: number;
  token: Token;
}
