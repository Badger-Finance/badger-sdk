import { ethers } from 'ethers';
import { ContractRegistry } from '../config/types/contract-registry';

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
