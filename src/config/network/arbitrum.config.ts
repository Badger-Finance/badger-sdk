import { Network } from '../enums/network.enum';
import { NetworkConfig } from './network.config';

export class ArbitrumConfig extends NetworkConfig {
  constructor() {
    super(Network.Arbitrum, 42161, {}, {});
  }
}

export const ARB_CONFIG = new ArbitrumConfig();
