import { Network } from '../enums/network.enum';
import { NetworkConfig } from './network.config';

export class PolygonConfig extends NetworkConfig {
  constructor() {
    super(Network.Polygon, 137, {}, {});
  }
}

export const MATIC_CONFIG = new PolygonConfig();
