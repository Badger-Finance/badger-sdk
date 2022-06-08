import { MockProxy } from 'jest-mock-extended';
import {
  Controller,
  Vault,
  VaultV15,
  Strategy,
  StrategyV15,
} from '../../contracts';

export interface MockVaultSystem {
  controller: MockProxy<Controller>;
  vault: MockProxy<Vault>;
  vaultV15: MockProxy<VaultV15>;
  strategy: MockProxy<Strategy>;
  strategyV15: MockProxy<StrategyV15>;
}
