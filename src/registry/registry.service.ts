import { Registry, Registry__factory } from '../contracts';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { RegistryVaultsList } from './interfaces/vaults-list.interface';

export const REGISTRY_ADDRESS = '0xFda7eB6f8b7a9e9fCFd348042ae675d1d652454f';

export class RegistryService extends Service {
  private loading: Promise<void>;
  private entries: Record<string, string> = {};
  private registry?: Registry;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.loading = this.init();
  }

  async ready() {
    return this.loading;
  }

  async get(key: string): Promise<string | undefined> {
    if (!this.registry) {
      return;
    }
    if (!this.entries[key]) {
      try {
        this.entries[key] = await this.registry.get(key);
      } catch (err) {
        console.error(`Failed to get ${key}`, err);
      }
    }
    return this.entries[key];
  }

  async getProductionVaultsList(): Promise<RegistryVaultsList[]> {
    if (!this.registry) {
      return [];
    }
    return this.registry.getProductionVaults();
  }

  async getVaults(version: string, author: string): Promise<string[]> {
    if (!this.registry) {
      return [];
    }
    return this.registry.getVaults(version, author);
  }

  private async init() {
    try {
      const deployed = await this.provider.getCode(REGISTRY_ADDRESS);
      if (deployed === '0x') {
        console.log(
          `No registry deployed for ${this.sdk.config.network}, skipping...`,
        );
        return;
      }
      this.registry = Registry__factory.connect(
        REGISTRY_ADDRESS,
        this.provider,
      );
    } catch (err) {
      console.log(
        `Failed to initialize registry for ${this.sdk.config.network}`,
        err,
      );
    }
  }
}
