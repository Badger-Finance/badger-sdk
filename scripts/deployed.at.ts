// There is no legal way to do this via RPC nodes, coz chain doesn't hold historical data.
// Since we don't want to force our users to provide keys for scan, as a 3d party api.
// This script was created to scan and persist data in .json, hence data doesn't change frequently

// Improvment, we can probably add a schedule range and integrate with githook

import { BadgerSDK, Network, NETWORK_CONFIGS } from '../src';
import { ethers } from 'ethers';
import axios from 'axios';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { DeployedAtMap } from '../src/utils/deployed-at.util';

// env var example: ETHEREUM_RPC_NODE=https://alchemynode.com

const DEPLOYED_AT_FILE_NAME = 'deployed.at.json';
const DEPLOYED_AT_SAVE_PATH = 'src/data';

const ADDRS_TO_SCAN = {
  [`${Network.Ethereum}`]: [],
};

let currentChain: string;

async function main() {
  console.log('Fetching of deployed at block for vault started');

  const deployedAtMap: DeployedAtMap = {};

  const chains = Object.values(Network).filter((chain) => chain != 'local');

  for (const chain of chains) {
    console.log(`Work started for ${chain}`);
    currentChain = chain;

    if (!deployedAtMap[chain]) deployedAtMap[chain] = {};

    const networkConfig = NETWORK_CONFIGS[chain];

    const scanApiUrl = formScanApiUrl(networkConfig.explorerUrl);
    const rpcUrl = getNodeRpcUrl(chain);

    const sdk = new BadgerSDK({
      network: chain,
      provider: rpcUrl
        ? new ethers.providers.JsonRpcProvider(<string>rpcUrl)
        : '',
    });

    await sdk.ready();

    const vaults = await sdk.vaults.loadVaults();

    console.log(`Found ${vaults.length} vaults`);

    let addrasses = vaults.map((v) => v.address);

    const custom_addrs = ADDRS_TO_SCAN[`${chain}`];

    if (custom_addrs) {
      addrasses = addrasses.concat(custom_addrs);
      console.log(`Added ${custom_addrs.length} custom addrs`);
    }

    for (const addr of addrasses) {
      try {
        const deployedAtBlock = await fetchDeployedAt(scanApiUrl, addr);

        // here we must trottle, coz free scans accs limited
        // if u want to boost this, add secret key from ur acc in fetchDeployedAt
        await sleep(5.2);

        if (!deployedAtBlock) continue;

        deployedAtMap[chain][addr] = <number>deployedAtBlock;
      } catch (e) {
        console.warn(e);
      }
    }
  }
  console.log(
    `Saving deployed at blocks for vaults data to ${DEPLOYED_AT_FILE_NAME}`,
  );

  persistInJSON(deployedAtMap);

  console.log('Fetching of deployed at block for vault finished');
}

main();

async function fetchDeployedAt(
  scanUrl: string,
  address: string,
): Promise<number | unknown> {
  const scanResp = await axios.get<{
    result: { blockNumber: string }[];
  }>(
    `${scanUrl}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=1&sort=asc`,
  );

  const scanRespJson = scanResp.data;

  if (scanResp.status !== 200) return null;

  if (
    !scanRespJson ||
    !scanRespJson?.result ||
    scanRespJson?.result?.length === 0
  ) {
    console.warn(`Failed to get deployed at for ${address} on ${currentChain}`);
    return null;
  }

  return Number(scanRespJson.result[0].blockNumber);
}

async function sleep(sec: number) {
  const secInMillisec = sec * 1000;

  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, secInMillisec);
  });
}

function formScanApiUrl(explorerUrl: string): string {
  const expUrlObj = new URL(explorerUrl);
  return `${expUrlObj.protocol}//api.${expUrlObj.host}/api`;
}

function getNodeRpcUrl(network: Network): string | unknown {
  let networkForEnvVar = network.toUpperCase();

  if (network === Network.BinanceSmartChain) {
    networkForEnvVar = 'BINANCE';
  }

  const envVarName = `${networkForEnvVar}_RPC_NODE`;

  return process.env[envVarName];
}

function persistInJSON(deployedAtData: DeployedAtMap) {
  writeFileSync(
    resolve(__dirname, '../', DEPLOYED_AT_SAVE_PATH, DEPLOYED_AT_FILE_NAME),
    JSON.stringify(deployedAtData, null, 2),
  );
}
