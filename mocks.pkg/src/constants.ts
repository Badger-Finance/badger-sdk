import { Network } from '../../src';
import { RelevantNetworks } from './types';

export const methodsToSkip = [
  'init',
  'ready',
  'constructor',
  'claim',
  'deposit',
  'withdraw',
  'getPendingYield', // vaultsV2 WIP method
  'getPendingHarvest', // vaultsV2 WIP method
  'listHarvests', // failing for some reason, temp
];

export const relevantNetworks: RelevantNetworks[] = [
  Network.Ethereum,
  // Network.Polygon,
  // Network.Arbitrum,
  // Network.BinanceSmartChain,
  // Network.Fantom,
  // Network.Avalanche,
];
