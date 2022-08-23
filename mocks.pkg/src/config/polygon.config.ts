import { SdkServices } from '../enums';
import { objDeepCopy } from '../utils';
import { baseArgsConfig } from './base.config';
import { ServicesArgsConfig } from './struct.types.config';

const polygonArgsConfigBase = objDeepCopy<ServicesArgsConfig>(baseArgsConfig);

export const polygonArgsConfig = {
  ...polygonArgsConfigBase,
  [SdkServices.Api]: {
    ...polygonArgsConfigBase[SdkServices.Api],
    loadCitadelTreasury: { ignore: true },
    loadCitadelSummary: { ignore: true },
    loadCitadelUserTotalRewards: { ignore: true },
    loadCitadelTreasuryCharts: { ignore: true },
    loadCitadelAccount: { ignore: true },
    loadCitadelKnightingRoundLeaderboard: { ignore: true },
  },
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
    getDepositCaps: { ignore: true },
  },
  [SdkServices.Tokens]: {
    ...polygonArgsConfigBase[SdkServices.Tokens],
    loadAllowances: { ignore: true },
    loadAllowance: { ignore: true },
  },
};
