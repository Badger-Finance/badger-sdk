import { ARB_CONFIG } from './network/arbitrum.config';
import { BSC_CONFIG } from './network/binance.config';
import { ETH_CONFIG } from './network/ethereum.config';
import { MATIC_CONFIG } from './network/polygon.config';

export const ONE_MIN_MS = 60 * 1000;
export const ONE_HOUR_MS = 60 * ONE_MIN_MS;
export const ONE_DAY_MS = 24 * ONE_HOUR_MS;
export const ONE_YEAR_MS = 365 * ONE_DAY_MS;

export const SUPPORTED_NETWORKS = [
  ETH_CONFIG,
  BSC_CONFIG,
  MATIC_CONFIG,
  ARB_CONFIG,
];

export const VERSION = '1.0.8';
