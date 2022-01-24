import { Network } from '../enums/network.enum';
import { NetworkConfig } from './network.config';

export class FantomConfig extends NetworkConfig {
  constructor() {
    super(Network.Fantom, 250, {}, {});
  }
}

export const FTM_CONFIG = new FantomConfig();
