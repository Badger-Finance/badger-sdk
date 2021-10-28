import { Registry, Registry__factory } from '../contracts';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { RegistryVault } from './interfaces/registry-vault.interface';

export class RegistryService extends Service {
  private entries: Record<string, string> = {};
  private registry: Registry;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.registry = Registry__factory.connect(
      '0xFda7eB6f8b7a9e9fCFd348042ae675d1d652454f',
      this.provider,
    );
  }

  async get(key: string): Promise<string | undefined> {
    if (!this.entries[key]) {
      try {
        this.entries[key] = await this.registry.get(key);
      } catch (err) {
        console.error(`Failed to get ${key}`, err);
      }
    }
    return this.entries[key];
  }

  async getProductionVaults(): Promise<RegistryVault[]> {
    return this.registry.getProductionVaults();
  }
}
