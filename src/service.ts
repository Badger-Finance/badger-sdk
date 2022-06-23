import { providers } from '@0xsequence/multicall';
import { Signer } from 'ethers';

import { BadgerSDK, NetworkConfig } from '.';
import BadgerAPI from './api';
import { Logger } from './logger';

export abstract class Service extends Logger {
  constructor(protected sdk: BadgerSDK) {
    super(sdk.logLevel);
  }

  get provider(): providers.MulticallProvider {
    return this.sdk.provider;
  }

  get signer(): Signer | undefined {
    return this.sdk.signer;
  }

  get connector(): providers.MulticallProvider | Signer {
    return this.address && this.signer ? this.signer : this.provider;
  }

  get config(): NetworkConfig {
    return this.sdk.config;
  }

  get address(): string | undefined {
    return this.sdk.address;
  }

  get api(): BadgerAPI {
    return this.sdk.api;
  }
}
