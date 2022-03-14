import { Network } from '../enums/network.enum';
import { NetworkConfig } from './network.config';

export class BinanceSmartChainConfig extends NetworkConfig {
  constructor() {
    super(Network.BinanceSmartChain, {}, {});
  }
}

export const BSC_CONFIG = new BinanceSmartChainConfig();
