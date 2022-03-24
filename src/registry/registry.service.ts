import { VaultRegistryEntry } from '.';
import { Registry, Registry__factory } from '../contracts';
import { Service } from '../service';
import { getVaultState, getVaultVersion } from '../vaults/vaults.utils';

export const REGISTRY_ADDRESS = '0xFda7eB6f8b7a9e9fCFd348042ae675d1d652454f';

export class RegistryService extends Service {
  private loading?: Promise<void>;
  private entries: Record<string, string> = {};
  private registry?: Registry;

  async ready() {
    if (!this.loading) {
      this.loading = this.init();
    }
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

  async getProductionVaults(): Promise<VaultRegistryEntry[]> {
    if (!this.registry) {
      return [];
    }
    const vaults = await this.registry.getProductionVaults();
    return vaults.flatMap((v) =>
      v.list.map((i) => ({
        address: i,
        state: getVaultState(v.status),
        version: getVaultVersion(v.version),
      })),
    );
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
        console.debug(
          `No registry deployed for ${this.sdk.config.network}, skipping...`,
        );
        return;
      }
      this.registry = Registry__factory.connect(
        REGISTRY_ADDRESS,
        this.provider,
      );
    } catch (err) {
      console.debug(
        `Failed to initialize registry for ${this.sdk.config.network}`,
        err,
      );
    }
  }
}
