import { Network } from '../../../src';

import {
  ServicesArgsConfig,
  NetworksArgsConfigMap,
  ServicesMethodsList,
} from './struct.types.config';
import { ethArgsConfig } from './eth.config';
import { SdkServices } from '../enums';
import { RelevantNetworks } from '../types';

export class ServicesConfig {
  readonly network: RelevantNetworks;
  readonly servicesArgsMap: ServicesArgsConfig;

  constructor(network: RelevantNetworks) {
    this.network = network;
    this.servicesArgsMap = this.networkArgsConfigMap[network];
  }

  private readonly networkArgsConfigMap: NetworksArgsConfigMap = {
    [Network.Ethereum]: ethArgsConfig,
    [Network.Polygon]: ethArgsConfig,
    [Network.Arbitrum]: ethArgsConfig,
    [Network.BinanceSmartChain]: ethArgsConfig,
    [Network.Fantom]: ethArgsConfig,
    [Network.Avalanche]: ethArgsConfig,
    [Network.xDai]: ethArgsConfig,
  };

  get listServices() {
    return Object.values(SdkServices);
  }

  getServicesMethods(service: SdkServices) {
    return this.listServices.reduce((acc, service) => {
      acc[service] = Object.keys(this.servicesArgsMap[service]);
      return acc;
    }, {} as ServicesMethodsList);
  }
}
