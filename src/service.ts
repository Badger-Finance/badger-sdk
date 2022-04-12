import { BadgerSDK, NetworkConfig } from '.';
import { providers } from '@0xsequence/multicall';

export abstract class Service {
  constructor(protected sdk: BadgerSDK) {}

  get provider(): providers.MulticallProvider {
    return this.sdk.provider;
  }

  get config(): NetworkConfig {
    return this.sdk.config;
  }

  get address(): string | undefined {
    return this.sdk.address;
  }
}
