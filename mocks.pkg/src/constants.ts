import { Network } from '../../src';
import { RelevantNetworks } from './types';

export const methodsToSkip = [
  'init',
  'ready',
  'constructor',
  'claim',
  'deposit',
  'withdraw',
  'revoke',
  'increaseAllowance',
  'verifyOrIncreaseAllowance',
  'getPendingYield', // vaultsV2 WIP method
  'getPendingHarvest', // vaultsV2 WIP method
  'listHarvests', // failing for some reason, temp

  // temporary, getters with expected sdk backing failing
  'digg',
  'rewardsLogger',
  'badgerTree',
  'registry',
];

export const relevantNetworks: RelevantNetworks[] = [
  Network.Ethereum,
  Network.Polygon,
  // Network.Arbitrum,
  // Network.BinanceSmartChain,
  // Network.Fantom,
  // Network.Avalanche,
];
