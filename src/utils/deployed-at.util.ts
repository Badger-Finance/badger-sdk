import { Network } from '../config';
import deployedAtMap from '../data/deployed.at.json';

export interface DeployedAtMap {
  [chain: string]: {
    [address: string]: number;
  };
}

export function getBlockDeployedAt(address: string, network: Network): number {
  const currentVaultDeployedAtMap = (<DeployedAtMap>deployedAtMap)[
    <string>network
  ];

  if (Object.keys(currentVaultDeployedAtMap).length === 0) return 0;

  let blockDeployedAt = currentVaultDeployedAtMap[address];

  // if we can't find deployed at block, then take the lowest value
  if (!blockDeployedAt) {
    blockDeployedAt = Math.min(...Object.values(currentVaultDeployedAtMap));
  }

  return blockDeployedAt;
}
