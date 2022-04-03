import { BigNumber } from 'ethers';

import { SdkServices } from '../enums';

import { ServicesArgsConfig } from './struct.types.config';
import { RegistryKey } from '../../../src';
import { VaultVersion } from '../../../lib';

const tokens = {
  BADGER: '0x3472A5A71965499acd81997a54BBA8D852C6E53d',
  DIGG: '0x798D1bE841a82a273720CE31c822C61a67a601C3',
  WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
};

const vaults = {
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

const bcrvBadgerAuthor = '0xeE8b29AA52dD5fF2559da2C50b1887ADee257556';

const lastIbBTCBlock = 14504479;

export const ethArgsConfig: ServicesArgsConfig = {
  [SdkServices.Vaults]: {
    loadVaults: [],
    loadVault: [{ address: vaults.BCVX.addr }],
    listHarvests: [{ address: vaults.BCVX.addr }],
    getVaultStrategy: [{ address: vaults.BCVX.addr }],
    getPendingHarvest: [{ address: vaults.BCVX.addr }],
  },
  [SdkServices.Tokens]: {
    loadTokens: [[tokens.BADGER, tokens.WBTC, tokens.DIGG]],
    loadToken: [tokens.BADGER],
    loadBalances: [[tokens.BADGER, tokens.WBTC, tokens.DIGG]],
    loadBalance: [tokens.BADGER],
  },
  [SdkServices.Rewards]: {
    loadSchedules: [vaults.BBADGER],
    // here, we should rly search for acrive schedules
    loadActiveSchedules: [vaults.BCVX],
  },
  [SdkServices.Registry]: {
    get: [RegistryKey.BadgerTree],
    getProductionVaults: [],
    getVaults: [VaultVersion.v1, bcrvBadgerAuthor],
  },
  [SdkServices.Ibbtc]: {
    getPricePerFullShare: [lastIbBTCBlock],
  },
  [SdkServices.Digg]: {
    convert: [BigNumber.from(5100)],
  },
  [SdkServices.Graph]: {
    loadSett: [{ id: vaults.BCVX.addr }],
    loadSetts: [],
    loadSettSpanshot: [{ id: vaults.BCVX.snapshot }],
    loadSettSpanshots: [{ id: vaults.BCVX.addr }],
    loadUserSettBalance: [{ id: vaults.BCVX.userBalance }],
    loadUserSettBalances: [{ id: vaults.BCVX.addr }],
    loadSettHarvest: [{ id: vaults.BCVX.harvest }],
    loadSettHarvests: [{ id: vaults.BCVX.addr }],
    loadTransfer: [{ id: vaults.BCVX.transfer }],
    loadTransfers: [{ id: vaults.BCVX.addr }],
    loadUser: [{ id: vaults.BCVX.user }],
    loadUsers: [{ id: vaults.BCVX.addr }],
    loadToken: [{ id: vaults.BCVX.token }],
    loadTokens: [{ id: vaults.BCVX.addr }],
    loadBadgerTreeDistribution: [{ id: vaults.BCVX.badgerTreeDistr }],
    loadBadgerTreeDistributions: [{ id: vaults.BCVX.addr }],
    loadStrategy: [{ id: vaults.BCVX.strategy }],
    loadStrategies: [{ id: vaults.BCVX.addr }],
    loadControllers: [{ id: vaults.BCVX.addr }],
  },
};
