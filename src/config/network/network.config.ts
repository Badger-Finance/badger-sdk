import { Networkish } from '@ethersproject/networks';
import { ContractRegistry } from '../types/contract-registry';
import { NETWORK_ID_MAP } from '../maps/network.id.map';
import { Network } from '../enums/network.enum';

type Configs = Record<string, NetworkConfig>;

export abstract class NetworkConfig {
  readonly id: number;
  private static configs: Configs = {};

  constructor(
    readonly network: Network,
    readonly tokens: ContractRegistry,
    readonly vaults: ContractRegistry,
  ) {
    if (!NETWORK_ID_MAP[network]) throw new Error(`Network withoud id ${network}`);

    this.id = NETWORK_ID_MAP[network];
  }

  static register(config: NetworkConfig) {
    this.configs[config.network] = config;
    this.configs[config.id] = config;
  }

  static getConfig(network: Networkish): NetworkConfig {
    let config;
    if (typeof network === 'string' || typeof network === 'number') {
      config = this.configs[network];
    } else {
      const nameConfig = this.configs[network.name];
      if (!nameConfig) {
        const chainIdConfig = this.configs[network.chainId];
        if (chainIdConfig) {
          config = chainIdConfig;
        }
      } else {
        config = nameConfig;
      }
    }
    if (!config) {
      throw new Error(`No network configuration defined for ${network}`);
    }
    return config;
  }
}
