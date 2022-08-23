import { Network } from '../../../src';
import { SdkServices } from '../enums';
import { RelevantNetworks } from '../types';
import { ethArgsConfig } from './eth.config';
import { polygonArgsConfig } from './polygon.config';
import { NetworksArgsConfigMap, ServicesArgsConfig, ServicesMethodsList } from './struct.types.config';

export class ServicesConfig {
  readonly network: RelevantNetworks;
  readonly servicesArgsMap: ServicesArgsConfig;

  constructor(network: RelevantNetworks) {
    this.network = network;
    this.servicesArgsMap = this.networkArgsConfigMap[network];
  }

  private readonly networkArgsConfigMap: NetworksArgsConfigMap = {
    [Network.Ethereum]: ethArgsConfig,
    [Network.Polygon]: polygonArgsConfig,
    [Network.Arbitrum]: ethArgsConfig,
    [Network.BinanceSmartChain]: ethArgsConfig,
    [Network.Fantom]: ethArgsConfig,
    [Network.Avalanche]: ethArgsConfig,
    [Network.Optimism]: ethArgsConfig,
  };

  static get listServices() {
    return Object.values(SdkServices);
  }

  getServicesMethods() {
    return ServicesConfig.listServices.reduce((acc, service) => {
      acc[service] = Object.keys(this.servicesArgsMap[service]);
      return acc;
    }, {} as ServicesMethodsList);
  }
}
