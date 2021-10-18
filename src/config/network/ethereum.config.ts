import { Network } from '../enums/network.enum';
import { NetworkConfig } from './network.config';

export class EthereumConfig extends NetworkConfig {
  constructor() {
    super('Ethereum', Network.Ethereum, 1);
  }
}
