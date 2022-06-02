import { Networkish } from '@ethersproject/providers';

import { Network, NetworkConfig } from '..';

export const NETWORK_CONFIGS: Record<Network, NetworkConfig> = {
  [Network.Ethereum]: {
    network: Network.Ethereum,
    name: 'Ethereum',
    chainId: 1,
    currencySymbol: 'ETH',
    explorerUrl: 'https://etherscan.io',
  },
  [Network.Local]: {
    network: Network.Local,
    name: 'Local',
    chainId: 1337,
    currencySymbol: 'HH-ETH',
    explorerUrl: 'https://etherscan.io',
  },
  [Network.BinanceSmartChain]: {
    network: Network.BinanceSmartChain,
    name: 'Binance Smart Chain',
    chainId: 56,
    currencySymbol: 'BNB',
    explorerUrl: 'https://bscscan.com',
  },
  [Network.Polygon]: {
    network: Network.Polygon,
    name: 'Polygon',
    chainId: 137,
    currencySymbol: 'MATIC',
    explorerUrl: 'https://polygonscan.com',
  },
  [Network.Arbitrum]: {
    network: Network.Arbitrum,
    name: 'Arbitrum',
    chainId: 42161,
    currencySymbol: 'AETH',
    explorerUrl: 'https://arbiscan.io',
  },
  [Network.Avalanche]: {
    network: Network.Avalanche,
    name: 'Avalanche',
    chainId: 43114,
    currencySymbol: 'AVAX',
    explorerUrl: 'https://snowtrace.io',
  },
  [Network.Fantom]: {
    network: Network.Fantom,
    name: 'Fantom',
    chainId: 250,
    currencySymbol: 'FTM',
    explorerUrl: 'https://ftmscan.com',
  },
  [Network.Optimism]: {
    network: Network.Optimism,
    name: 'Optimism',
    chainId: 10,
    currencySymbol: 'oETH',
    explorerUrl: 'https://optimistic.etherscan.io',
  },
};

const NETWORK_CONFIG_MAP: Record<string, NetworkConfig> = Object.fromEntries(
  Object.entries(Network).flatMap((e) => {
    const [key, value] = e;
    // really, it's funny how ts enums work
    const config = NETWORK_CONFIGS[value];
    return [
      [key, config],
      [value, config],
      [config.chainId.toString(), config],
      [config.chainId.toString(16), config],
      [config.currencySymbol, config],
      [config.currencySymbol.toLowerCase(), config],
      [config.name, config],
      [config.name.replace(/ /g, '-').toLowerCase(), config],
    ];
  }),
);

export function getNetworkConfig(network: Networkish): NetworkConfig {
  let config;
  if (typeof network === 'number') {
    config = NETWORK_CONFIG_MAP[network];
  } else if (typeof network === 'string') {
    const nameConfig = NETWORK_CONFIG_MAP[network];
    if (!nameConfig) {
      config = NETWORK_CONFIG_MAP[network.replace(/ /g, '-').toLowerCase()];
    } else {
      config = nameConfig;
    }
  } else {
    const nameConfig = NETWORK_CONFIG_MAP[network.name];
    if (!nameConfig) {
      const chainIdConfig = NETWORK_CONFIG_MAP[network.chainId];
      if (chainIdConfig) {
        config = chainIdConfig;
      }
    } else {
      config =
        NETWORK_CONFIG_MAP[network.name.replace(/ /g, '-').toLowerCase()];
    }
  }
  if (!config) {
    throw new Error(`No network configuration defined for ${network}`);
  }
  return config;
}
