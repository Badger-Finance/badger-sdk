import { VaultVersion } from '.';
import { VaultState } from '..';

export class RegistryVault {
  constructor(
    readonly address: string,
    readonly state: VaultState,
    readonly version: VaultVersion,
  ) {}
}
