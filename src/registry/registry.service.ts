import { VaultState } from '../api';
import { RegistryV2, RegistryV2__factory } from '../contracts';
import { Service } from '../service';
import {
  apiVaultStatusToChainValue,
  getVaultRegv2State,
  getVaultVersion,
  VaultVersion,
} from '../vaults';
import { VaultRegistryEntry } from './interfaces';
import { chainRegVaultToEntry, parseRegVaultMetadata } from './registry.utils';

export class RegistryService extends Service {
  static readonly REGISTRY_ADDRESS =
    '0xdc602965F3e5f1e7BAf2446d5564b407d5113A06';

  private loading?: Promise<void>;
  private entries: Record<string, string> = {};
  private _registry?: RegistryV2;

  async ready() {
    if (!this.loading) {
      this.loading = this.#init();
    }
    return this.loading;
  }

  get registry(): RegistryV2 {
    if (!this._registry) {
      throw new Error(`Registry is not defined for ${this.config.network}`);
    }
    return this._registry;
  }

  hasRegistry(): boolean {
    return this._registry !== undefined;
  }

  async get(key: string): Promise<string | undefined> {
    if (!this.entries[key]) {
      try {
        this.entries[key] = await this.registry.get(key);
      } catch (err) {
        this.error(`Failed to get ${key}`, err);
      }
    }
    return this.entries[key];
  }

  async keysCount(): Promise<number> {
    return (await this.registry.keysCount()).toNumber();
  }

  async getVaults(
    version: VaultVersion,
    address: string,
  ): Promise<VaultRegistryEntry[]> {
    const vaults = await this.registry.getVaults(version, address);

    return vaults.map(chainRegVaultToEntry);
  }

  async getFilteredProductionVaults(
    version: VaultVersion,
    status: VaultState,
  ): Promise<VaultRegistryEntry[]> {
    const prdVaults = await this.registry.getFilteredProductionVaults(
      version,
      apiVaultStatusToChainValue(status),
    );

    return prdVaults.map(chainRegVaultToEntry);
  }

  async getProductionVaults(): Promise<VaultRegistryEntry[]> {
    if (!this.hasRegistry()) {
      this.debug(
        `${this.config.network} does not have a registry. No vaults are discoverable.`,
      );
      return [];
    }

    const prdVaults = await this.registry.getProductionVaults();

    return prdVaults
      .flatMap((vaultInfo) => {
        return vaultInfo.list.map((metaVault) => ({
          address: metaVault.vault,
          state: getVaultRegv2State(vaultInfo.status),
          version: getVaultVersion(vaultInfo.version),
          metadata: parseRegVaultMetadata(metaVault.metadata),
        }));
      })
      .filter((v) => !!v);
  }

  async #init() {
    try {
      const deployed = await this.provider.getCode(
        RegistryService.REGISTRY_ADDRESS,
      );
      if (deployed === '0x') {
        this.debug(
          `No registry deployed for ${this.sdk.config.network}, skipping...`,
        );
        return;
      }
      this._registry = RegistryV2__factory.connect(
        RegistryService.REGISTRY_ADDRESS,
        this.provider,
      );
    } catch (err) {
      this.debug(
        `Failed to initialize registry for ${this.sdk.config.network}`,
        err,
      );
    }
  }
}
