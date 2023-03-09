import axios from 'axios';

import { Network, NETWORK_CONFIGS } from '../config';
import deployedAtMap from '../data/deployed.at.json';
import * as utils from './deployed-at.util';

export async function getContractDeployedAtBlock(
  address: string,
  network: Network,
): Promise<number | null> {
  const networkConfig = NETWORK_CONFIGS[network];

  const scanApiUrl = utils.formScanApiUrl(networkConfig.explorerUrl);

  return fetchDeployedAt(scanApiUrl, address);
}

export function formScanApiUrl(explorerUrl: string): string {
  const expUrlObj = new URL(explorerUrl);
  return `${expUrlObj.protocol}//api.${expUrlObj.host}/api`;
}

export async function fetchDeployedAt(
  scanUrl: string,
  address: string,
): Promise<number | null> {
  const txInfoApiUrl = `${scanUrl}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=1&sort=asc`;

  const scanResp = await axios.get<{
    result: { blockNumber: string }[];
  }>(txInfoApiUrl);

  const scanRespJson = scanResp.data;

  if (scanResp.status !== 200) {
    console.warn(
      `Attempt to fetch deployed at block failed for ${address}, with status ${scanResp.status}`,
    );
    return null;
  }

  if (
    !scanRespJson ||
    !scanRespJson?.result ||
    scanRespJson?.result?.length === 0
  ) {
    console.warn(`Failed to get deployed at for ${address}. Empty response`);
    return null;
  }

  return Number(scanRespJson.result[0].blockNumber);
}

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
