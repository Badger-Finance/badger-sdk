import { VaultVersion } from '..';
import { VaultState } from '../..';

export interface LoadVaultOptions {
  address: string;
  update?: boolean;
  requireRegistry?: boolean;
  version?: VaultVersion;
  state?: VaultState;
}
