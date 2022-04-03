import { Network } from '../../src';
import { RelevantNetworks } from './types';

export const methodsToSkip = [
  'init',
  'ready',
  'claim',
  'deposit',
  'withdraw',
  'constructor',
  'getPendingYield',
];

export const relevantNetworks: RelevantNetworks[] = [
  Network.Ethereum,
  Network.Polygon,
  Network.Arbitrum,
  Network.BinanceSmartChain,
  Network.Fantom,
  Network.Avalanche,
];
