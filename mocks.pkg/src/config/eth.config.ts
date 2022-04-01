import { BigNumber } from 'ethers';

import { SdkServices } from '../enums';

import { baseServiceArgsConfig } from './base.config';

import { ServicesArgsConfig } from './struct.types.config';

const bCVXvaultV1 = '0x53C8E199eb2Cb7c01543C137078a038937a68E40';

export const ethArgsConfig: ServicesArgsConfig = {
  [SdkServices.Vaults]: {
    loadVaults: [],
    loadVault: [{ address: bCVXvaultV1 }],
    listHarvests: [{ address: bCVXvaultV1 }],
    getVaultStrategy: [{ address: bCVXvaultV1 }],
    getPendingHarvest: [{ address: bCVXvaultV1 }],
  },
  [SdkServices.Tokens]: {
    convert: [BigNumber.from(5100)],
    ...baseServiceArgsConfig,
  },
  [SdkServices.Rewards]: {
    convert: [BigNumber.from(5100)],
    ...baseServiceArgsConfig,
  },
  [SdkServices.Registry]: {
    convert: [BigNumber.from(5100)],
    ...baseServiceArgsConfig,
  },
  [SdkServices.Ibbtc]: {
    convert: [BigNumber.from(5100)],
    ...baseServiceArgsConfig,
  },
  [SdkServices.Digg]: {
    convert: [BigNumber.from(5100)],
    ...baseServiceArgsConfig,
  },
  [SdkServices.Graph]: {
    convert: [BigNumber.from(5100)],
  },
};
