import { Network } from '../enums/network.enum';
import { NetworkConfig } from './network.config';

export class LocalConfig extends NetworkConfig {
  constructor() {
    super(Network.Local, {}, {});
  }
}

export const LOCAL_CONFIG = new LocalConfig();
