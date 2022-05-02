import { BadgerSDK, NetworkConfig } from '.';
import { providers } from '@0xsequence/multicall';
import { Logger } from './logger';

export abstract class Service extends Logger {
  constructor(protected sdk: BadgerSDK) {
    super(sdk.logLevel);
  }

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
