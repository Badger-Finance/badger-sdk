import { Network } from '../../src';
import { RelevantNetworks } from './types';

export const methodsToSkip = [
  'init',
  'ready',
  'constructor',
  'claim',
  'deposit',
  'withdraw',
  'revoke',
  'increaseAllowance',
  'verifyOrIncreaseAllowance',
  'mint',
  'redeem',
  'getMulticallProvider',
  // temp, till figure out data on stg
  'loadGovernanceProposal',
  'loadGovernanceProposals',

  // temporary, getters with expected sdk backing failing
  'digg',
  'rewardsLogger',
  'badgerTree',
  'registry',
  'ibBTC',
  'vaultPeak',
  'vaultZap',
  'tokenZap',
  'emissionControl',
];

export const relevantNetworks: RelevantNetworks[] = [Network.Ethereum];
