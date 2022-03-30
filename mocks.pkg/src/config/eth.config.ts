import { BigNumber } from 'ethers';

import { SdkServices } from '../enums';

import { baseServiceArgsConfig } from './base.config';

import { ServicesArgsConfig } from './struct.types.config';

export const ethArgsConfig: ServicesArgsConfig = {
  [SdkServices.Vaults]: {
    convert: [BigNumber.from(5100)],
    ...baseServiceArgsConfig,
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
