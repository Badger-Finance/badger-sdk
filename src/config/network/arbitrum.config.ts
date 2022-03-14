import { Network } from '../enums/network.enum';
import { NetworkConfig } from './network.config';

export class ArbitrumConfig extends NetworkConfig {
  constructor() {
    super(Network.Arbitrum, {}, {});
  }
}

export const ARB_CONFIG = new ArbitrumConfig();
