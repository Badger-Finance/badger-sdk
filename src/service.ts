import { BadgerSDK } from '.';
import { NetworkConfig } from './config/network/network.config';
import { SDKProvider } from './config/types/sdk-provider';

export abstract class Service {
  constructor(protected sdk: BadgerSDK) {}

  get provider(): SDKProvider {
    return this.sdk.provider;
  }

  get config(): NetworkConfig {
    return this.sdk.config;
  }

  get address(): string | undefined {
    return this.sdk.address;
  }
}
