import { Network } from './config/enums/network.enum';
import { SdkProvider } from './types/sdk-provider';

export abstract class Service {
  protected network: Network;
  protected provider: SdkProvider;

  constructor(network: Network, provider: SdkProvider) {
    this.network = network;
    this.provider = provider;
  }
}
