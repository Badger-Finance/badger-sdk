import { BadgerSDK } from '../sdk';
import { VaultVersion } from './enums';
import { Network } from '../config';
import {
  Controller,
  Controller__factory,
  RegistryService,
  RewardsService,
  Strategy,
  StrategyV15,
  StrategyV15__factory,
  Strategy__factory,
  TokensService,
  Vault,
  VaultV15,
  VaultV15__factory,
  Vault__factory,
} from '..';
import { any, mock, MockProxy } from 'jest-mock-extended';
import { BigNumber } from '@ethersproject/bignumber';
import { BaseStrategy } from '../contracts/StrategyV15';
import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';

describe('vaults.service', () => {
  const TEST_ADDR = '0x96d4dBdc91Bef716eb407e415c9987a9fAfb8906';

  let sdk: BadgerSDK;
  let controller: MockProxy<Controller>;
  let vault: MockProxy<Vault>;
  let vaultV15: MockProxy<VaultV15>;
  let strategy: MockProxy<Strategy>;
  let strategyV15: MockProxy<StrategyV15>;

  beforeEach(async () => {
    // Setup Jest Mocks
    const mockSigner = mock<JsonRpcSigner>();
    mockSigner.getAddress
      .calledWith()
      .mockImplementation(async () => TEST_ADDR);
    const mockProvider = mock<JsonRpcProvider>();
    mockProvider.getSigner.calledWith().mockImplementation(() => mockSigner);

    sdk = new BadgerSDK({
      network: Network.Fantom,
      provider: mockProvider,
    });

    jest.spyOn(RegistryService.prototype, 'ready').mockImplementation();
    jest.spyOn(RewardsService.prototype, 'ready').mockImplementation();

    controller = mock<Controller>();
    vault = mock<Vault>();
    vaultV15 = mock<VaultV15>();
    strategy = mock<Strategy>();
    strategyV15 = mock<StrategyV15>();

    jest
      .spyOn(Controller__factory, 'connect')
      .mockImplementation(() => controller);
    jest.spyOn(Vault__factory, 'connect').mockImplementation(() => vault);
    jest.spyOn(VaultV15__factory, 'connect').mockImplementation(() => vaultV15);
    jest.spyOn(Strategy__factory, 'connect').mockImplementation(() => strategy);
    jest
      .spyOn(StrategyV15__factory, 'connect')
      .mockImplementation(() => strategyV15);

    // Let the SDK Prepare
    await sdk.ready();
  });

  describe('getPendingYield', () => {
    it('returns pending reward tokens from the underlying yield source', async () => {
      vaultV15.strategy.calledWith().mockImplementation(async () => TEST_ADDR);
      vaultV15.lastHarvestedAt
        .calledWith()
        .mockImplementation(async () => BigNumber.from('1649865952'));

      const rewards = [
        {
          token: '0xD533a949740bb3306d119CC777fa900bA034cd52',
          amount: BigNumber.from('3140000000000000000'),
        }, // 3.14 CRV
        {
          token: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b',
          amount: BigNumber.from('69000000000000000'),
        }, // 0.69 CVX
      ] as BaseStrategy.TokenAmountStructOutput[];
      strategyV15.balanceOfRewards
        .calledWith(any())
        .mockImplementation(async () => rewards);

      jest
        .spyOn(TokensService.prototype, 'loadToken')
        .mockImplementation(async (token) => {
          if (token === '0xD533a949740bb3306d119CC777fa900bA034cd52') {
            // CRV
            return {
              address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
              name: 'Curve DAO Token',
              symbol: 'CRV',
              decimals: 18,
            };
          }
          return {
            address: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b',
            name: 'Convex DAO Token',
            symbol: 'CVX',
            decimals: 18,
          };
        });

      const actual = await sdk.vaults.getPendingYield(TEST_ADDR);
      expect(actual).toMatchSnapshot();
    });
  });

  describe('getVaultStrategy', () => {
    it('should return v1.5 strategy', async function () {
      // BVEOXD vault that is v1.5 vault
      const address = '0x96d4dBdc91Bef716eb407e415c9987a9fAfb8906';
      const strategy = '0x0c7E0807011A218d0F1A156D3965875ff233933E';
      vaultV15.strategy.calledWith().mockImplementation(async () => strategy);
      const version = VaultVersion.v1_5;
      const strategyAddress = await sdk.vaults.getVaultStrategy({
        address,
        version,
      });
      expect(strategyAddress).toEqual(strategy);
    });
    it('should return v1 strategy', async function () {
      // BSMM_WBTC_RENBTC vault that is v1 vault
      const address = '0xb6d63a4e5ca740e96c26adabcac73be78ee39dc5';
      const strategy = '0x711555f2B421DA9A86a18Dc163d04699310fE297';
      vault.controller.calledWith().mockImplementation(async () => TEST_ADDR);
      vault.token.calledWith().mockImplementation(async () => TEST_ADDR);
      controller.strategies
        .calledWith(any())
        .mockImplementation(async () => strategy);
      const version = VaultVersion.v1;
      const strategyAddress = await sdk.vaults.getVaultStrategy({
        address,
        version,
      });
      expect(strategyAddress).toEqual(strategy);
    });
    it('incompatible vault should throw', async function () {
      const address = '0x96d4dBdc91Bef716eb407e415c9987a9fAfb8906';
      vault.controller.calledWith().mockImplementation(async () => {
        throw new Error('v1.5 Vault Requested!');
      });
      // Set incompatible vault version
      const version = VaultVersion.v1;
      await expect(
        async () => await sdk.vaults.getVaultStrategy({ address, version }),
      ).rejects.toThrow(Error);
    });
  });
});
