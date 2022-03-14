import { Network } from '../enums/network.enum';
import { NetworkConfig } from './network.config';

export class PolygonConfig extends NetworkConfig {
  constructor() {
    super(Network.Polygon, {}, {});
  }
}

export const MATIC_CONFIG = new PolygonConfig();
