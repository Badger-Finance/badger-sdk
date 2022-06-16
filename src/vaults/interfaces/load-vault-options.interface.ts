import { VaultState } from '../..';
import { VaultVersion } from '..';

export interface LoadVaultOptions {
  address: string;
  update?: boolean;
  requireRegistry?: boolean;
  version?: VaultVersion;
  state?: VaultState;
  useV2Reg?: boolean;
}
