import { Network } from '../enums/network.enum';
import { NetworkConfig } from './network.config';
import { checksumEntries } from './network.utils';

export class AvalancheConfig extends NetworkConfig {
  constructor() {
    super(Network.Avalanche, 43114, tokens, vaults);
  }
}

const tokens = checksumEntries({
  WBTC: '0x50b7545627a5162f82a992c33b87adc75187b218',
});

const vaults = checksumEntries({
  BWBTC: '0x711555f2b421da9a86a18dc163d04699310fe297',
});

export const AVAX_CONFIG = new AvalancheConfig();
