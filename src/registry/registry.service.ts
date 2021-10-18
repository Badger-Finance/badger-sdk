import { Registry, Registry__factory } from '../contracts';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { RegistryKey } from './enums/registry-key.enum';
import { RegistryVault } from './interfaces/registry-vault.interface';

export class RegistryService extends Service {
  private entries: Record<string, string> = {};
  private loading: Promise<void>;
  private registry: Registry;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.registry = Registry__factory.connect(
      '0xFda7eB6f8b7a9e9fCFd348042ae675d1d652454f',
      this.provider,
    );
    this.loading = this.init();
  }

  async ready() {
    return this.loading;
  }

  async get(key: string): Promise<string | undefined> {
    if (!this.entries[key]) {
      this.entries[key] = await this.registry.get(key);
    }
    return this.entries[key];
  }

  async getProductionVaults(): Promise<RegistryVault[]> {
    return this.registry.getProductionVaults();
  }

  private async init() {
    const queries = [];
    for (const key in RegistryKey) {
      queries.push(this.get(key));
    }
    await Promise.all(queries);
  }
}
