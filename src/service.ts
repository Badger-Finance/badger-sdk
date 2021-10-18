import { BadgerSDK } from '.';
import { Network } from './config/enums/network.enum';
import { SdkProvider } from './types/sdk-provider';

export abstract class Service {
  constructor(protected sdk: BadgerSDK) {}

  get provider(): SdkProvider {
    return this.sdk.provider;
  }

  get network(): Network {
    return this.sdk.network;
  }
}
