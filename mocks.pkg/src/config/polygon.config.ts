import { ServicesArgsConfig } from './struct.types.config';
import { baseArgsConfig } from './base.config';
import { objDeepCopy } from '../utils';
import { SdkServices } from '../enums';

const polygonArgsConfigBase = objDeepCopy<ServicesArgsConfig>(baseArgsConfig);

export const polygonArgsConfig = {
  ...polygonArgsConfigBase,
  [SdkServices.Digg]: {
    convert: { ignore: true },
  },
  [SdkServices.Ibbtc]: {
    getPricePerFullShare: { ignore: true },
  },
  [SdkServices.Vaults]: {
    ...polygonArgsConfigBase[SdkServices.Vaults],
    loadVault: { ignore: true },
    getVaultStrategy: { ignore: true },
  },
};