import { MockProxy } from 'jest-mock-extended';

import {
  Controller,
  Strategy,
  StrategyV15,
  Vault,
  VaultV15,
} from '../../contracts';

export interface MockVaultSystem {
  controller: MockProxy<Controller>;
  vault: MockProxy<Vault>;
  vaultV15: MockProxy<VaultV15>;
  strategy: MockProxy<Strategy>;
  strategyV15: MockProxy<StrategyV15>;
}
