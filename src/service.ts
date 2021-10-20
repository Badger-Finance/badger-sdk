import { BadgerSDK } from '.';
import { NetworkConfig } from './config/network/network.config';
import { SdkProvider } from './config/types/sdk-provider';

export abstract class Service {
  constructor(protected sdk: BadgerSDK) {}

  get provider(): SdkProvider {
    return this.sdk.provider;
  }

  get config(): NetworkConfig {
    return this.sdk.config;
  }
}
