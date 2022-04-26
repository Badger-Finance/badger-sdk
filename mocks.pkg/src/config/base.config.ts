import { ServicesArgsConfig } from './struct.types.config';
import { SdkServices } from '../enums';
import { RegistryKey, VaultVersion } from '../../../src';
import { BigNumber } from 'ethers';
import { RewardFilter } from '../../../src/citadel/enums/reward-filter.enum';

export const baseServiceArgsConfig = {
  provider: [],
  config: [],
  address: [],
};

export const tokens = {
  BADGER: '0x3472A5A71965499acd81997a54BBA8D852C6E53d',
  DIGG: '0x798D1bE841a82a273720CE31c822C61a67a601C3',
  WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
};

export const vaults = {
  BBADGER: '0x19d97d8fa813ee2f51ad4b4e04ea08baf4dffc28',
  BCVX: {
    addr: '0x53c8e199eb2cb7c01543c137078a038937a68e40',
    user: '0x0077b5f1a8ba00cdef762ce1ebaf3e3fa03e35f1',
    strategy: '0xf2f3ab09e2d8986fbecbba59ae838a5418a6680c',
    token: '0xfbdca68601f835b27790d98bbb8ec7f05fdeaa9b',
    snapshot: '0x1862a18181346ebd9edaf800804f89190def24a5-18719',
    badgerTreeDistr:
      '0x0d69481518ed535f88bd698c76551437af98ca3b6dfdbdd1a58a353d853777f8-528',
    userBalance:
      '0x000e66639f17982ce2d1d71aafcf443154ed1e08-0x19d97d8fa813ee2f51ad4b4e04ea08baf4dffc28',
    harvest:
      '0x0fde871d95ce0280585eda95bf6cfdac0c4c066bdbe4f0b3a80f53ed3aeb246d-169',
    transfer:
      '0x001bbab32ed595532975cb96d01b26a09368cee1e2d644deee67117ff0b1f41d-92',
  },
};

export const badgerWhale = '0x3BD517f6d564aC5793d0cb2358d1a03054c00fc8';
export const bcrvBadgerAuthor = '0xeE8b29AA52dD5fF2559da2C50b1887ADee257556';
export const ibbtc = '0xaE96fF08771a109dc6650a1BdCa62F2d558E40af';

export const lastIbBTCBlock = 14504479;

export const baseArgsConfig: ServicesArgsConfig = {
  [SdkServices.Api]: {
    loadPrices: { args: [] },
    loadRewardTree: { args: [badgerWhale] },
    loadVaults: { args: [] },
    loadVault: { args: [vaults.BCVX.addr] },
    loadSetts: { args: [] },
    loadSett: { args: [vaults.BCVX.addr] },
    loadAccount: { args: [badgerWhale] },
    loadTokens: { args: [] },
    loadProof: { args: [badgerWhale] },
    loadGasPrices: { args: [] },
    loadProtocolMetrics: { args: [] },
    loadProtocolSummary: { args: [] },
    loadLeaderboardSummary: { args: [] },
    loadCharts: { args: [{ vault: vaults.BCVX.addr }] },
    loadSchedules: { args: [] },
    loadSchedule: { args: [vaults.BCVX.addr] },
    loadCitadelTreasury: { args: [] },
    loadCitadelUserTotalRewards: { args: [ibbtc, ibbtc, RewardFilter.ADDED] },
    loadCitadelTreasuryCharts: { args: [] },
    get: { ignore: true },
    isLocal: { ignore: true },
  },
  [SdkServices.Vaults]: {
    loadVaults: { args: [] },
    loadVault: { args: [{ address: vaults.BCVX.addr }] },
    listHarvests: { args: [{ address: vaults.BBADGER }] },
    getVaultStrategy: { args: [{ address: vaults.BCVX.addr }] },
    getPendingHarvest: { args: [vaults.BCVX.addr] },
  },
  [SdkServices.Tokens]: {
    loadTokens: { args: [[tokens.BADGER, tokens.WBTC, tokens.DIGG]] },
    loadToken: { args: [tokens.BADGER] },
    loadBalances: { args: [[tokens.BADGER, tokens.WBTC, tokens.DIGG]] },
    loadBalance: { args: [tokens.BADGER] },
  },
  [SdkServices.Rewards]: {
    loadSchedules: { args: [vaults.BBADGER] },
    // here, we should rly search for acrive schedules
    loadActiveSchedules: { args: [vaults.BCVX.addr] },
  },
  [SdkServices.Registry]: {
    get: { args: [RegistryKey.BadgerTree] },
    getProductionVaults: { args: [] },
    getVaults: { args: [VaultVersion.v1, bcrvBadgerAuthor] },
  },
  [SdkServices.Ibbtc]: {
    getPricePerFullShare: { args: [lastIbBTCBlock] },
  },
  [SdkServices.Digg]: {
    convert: { args: [BigNumber.from(5100)] },
  },
  [SdkServices.Graph]: {
    loadSett: { args: [{ id: vaults.BCVX.addr }] },
    loadSetts: { args: [] },
    loadSettSpanshot: { args: [{ id: vaults.BCVX.snapshot }] },
    loadSettSpanshots: { args: [{ id: vaults.BCVX.addr }] },
    loadUserSettBalance: { args: [{ id: vaults.BCVX.userBalance }] },
    loadUserSettBalances: { args: [{ id: vaults.BCVX.addr }] },
    loadSettHarvest: { args: [{ id: vaults.BCVX.harvest }] },
    loadSettHarvests: { args: [{ id: vaults.BCVX.addr }] },
    loadTransfer: { args: [{ id: vaults.BCVX.transfer }] },
    loadTransfers: { args: [{ id: vaults.BCVX.addr }] },
    loadUser: { args: [{ id: vaults.BCVX.user }] },
    loadUsers: { args: [{ id: vaults.BCVX.addr }] },
    loadToken: { args: [{ id: vaults.BCVX.token }] },
    loadTokens: { args: [{ id: vaults.BCVX.addr }] },
    loadBadgerTreeDistribution: { args: [{ id: vaults.BCVX.badgerTreeDistr }] },
    loadBadgerTreeDistributions: { args: [{ id: vaults.BCVX.addr }] },
    loadStrategy: { args: [{ id: vaults.BCVX.strategy }] },
    loadStrategies: { args: [{ id: vaults.BCVX.addr }] },
    loadControllers: { args: [{ id: vaults.BCVX.addr }] },
  },
};