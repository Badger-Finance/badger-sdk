import { ethers } from 'ethers';
import { ContractRegistry } from '../../types/contract-registry';
import { ETH_CONFIG } from './ethereum.config';

export const SUPPORTED_NETWORKS = [ETH_CONFIG];

export const checksumEntries = (
  registry: ContractRegistry,
): ContractRegistry => {
  return Object.fromEntries(
    Object.entries(registry).map(([key, val]) => [
      key,
      ethers.utils.getAddress(val),
    ]),
  );
};
