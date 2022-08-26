/* eslint-disable @typescript-eslint/ban-ts-comment */

import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';
import { mock } from 'jest-mock-extended';

import { Network, RegistryService, RewardsService, VaultsService } from '../../../src';
import { TEST_ADDR } from '../../../src/tests';
import { MethodsCache } from '../cache';
import { SdkServices } from '../enums';
import { BaseFsIo } from '../fs.io';
import { ProcessorError } from './base.error.processor';
import { MocksProcessor } from './mocks.processor';
import { ethMethodsConfigMock } from './mocks/eth.methods.config.mock';
import { MocksProcessorTestWrapper } from './mocks/mocks.processor.test.wrapper';

describe('MocksProcessor', () => {
  it('should call proper action on run', async () => {
    const processor1 = new MocksProcessor({ action: MocksProcessor.LAUNCH_ACTION, forced: false });
    const processor2 = new MocksProcessor({ action: MocksProcessor.GUARD_ACTION, forced: false });

    const ps1LaunchMock = jest.fn(async () => void 0);
    const ps1GuardMock = jest.fn(async () => void 0);

    const ps2LaunchMock = jest.fn(async () => void 0);
    const ps2GuardMock = jest.fn(async () => void 0);

    Object.defineProperty(processor1, 'launch', { value: ps1LaunchMock });
    Object.defineProperty(processor1, 'guard', { value: ps1GuardMock });

    Object.defineProperty(processor2, 'launch', { value: ps2LaunchMock });
    Object.defineProperty(processor2, 'guard', { value: ps2GuardMock });

    await processor1.run();
    await processor2.run();

    expect(ps1LaunchMock.mock.calls.length).toBe(1);
    expect(ps1GuardMock.mock.calls.length).toBe(0);

    expect(ps2LaunchMock.mock.calls.length).toBe(0);
    expect(ps2GuardMock.mock.calls.length).toBe(1);
  });

  it('should throw an error if unknown action is passed', async () => {
    const processor = new MocksProcessor({ action: 'do_something', forced: false });

    await expect(processor.run()).rejects.toThrowError('Unknown action for MockProcessor');
  });

  it('should get rpc url from env', async () => {
    process.env.ETHEREUM_RPC_NODE = 'http://localhost:8545';

    expect(MocksProcessorTestWrapper.getNodeRpcUrlPub(Network.Ethereum)).toBe(process.env.ETHEREUM_RPC_NODE);
  });

  it('should throw an error if env not set', async () => {
    delete process.env.ETHEREUM_RPC_NODE;
    expect(() => MocksProcessorTestWrapper.getNodeRpcUrlPub(Network.Ethereum)).toThrowError(
      'ENV var ETHEREUM_RPC_NODE not found',
    );
  });

  describe('interaction methods (launch, guard, etc)', () => {
    function prepareProcessorMocks(
      {
        forced = false,
        ignoreSecond = false,
        method1Throws = false,
        action = MocksProcessor.LAUNCH_ACTION,
      }: {
        forced?: boolean;
        ignoreSecond?: boolean;
        method1Throws?: boolean;
        action?: string;
      } = {
        forced: false,
        ignoreSecond: false,
        method1Throws: false,
        action: MocksProcessor.LAUNCH_ACTION,
      },
    ) {
      const mockSigner = mock<JsonRpcSigner>();
      mockSigner.getAddress.calledWith().mockImplementation(async () => TEST_ADDR);
      const mockProvider = mock<JsonRpcProvider>();
      mockProvider.getSigner.calledWith().mockImplementation(() => mockSigner);

      jest.spyOn(RegistryService.prototype, 'ready').mockImplementation();
      jest.spyOn(RewardsService.prototype, 'ready').mockImplementation();

      const mockProcessor = new MocksProcessor({ action, forced });

      // @ts-ignore
      MocksProcessor.getNodeRpcUrl = jest.fn(() => mockProvider);

      if (ignoreSecond) {
        ethMethodsConfigMock[Network.Ethereum].servicesArgsMap[SdkServices.Vaults].method2.ignore = true;
      }

      Object.defineProperty(mockProcessor, 'configs', { value: ethMethodsConfigMock });

      jest.spyOn(MethodsCache.prototype, 'getMissMatch').mockImplementation(() => ({
        vaults: ['method1', 'method2'],
        length: 2,
      }));

      jest.spyOn(MethodsCache.prototype, 'getRelevantServicesMethods').mockImplementation(() => ({
        vaults: ['method1', 'method2'],
      }));

      const saveToFileMock = jest.spyOn(MethodsCache.prototype, 'saveToFile').mockImplementation();
      const fsIoWriteMock = jest.spyOn(BaseFsIo.prototype, 'write').mockImplementation();

      let method1 = jest.fn(async () => 'im first');
      const method2 = jest.fn(async () => 'im second');

      if (method1Throws) {
        method1 = jest.fn(async () => {
          throw new Error('some error');
        });
      }

      // @ts-ignore
      VaultsService.prototype.method1 = method1;
      // @ts-ignore
      VaultsService.prototype.method2 = method2;

      return { mockProcessor, saveToFileMock, fsIoWriteMock, method1, method2 };
    }

    beforeEach(() => {
      jest.spyOn(console, 'log').mockImplementation();
      jest.spyOn(console, 'error').mockImplementation();
    });

    it.each([
      [
        { forced: false, ignoreSecond: false },
        [
          'method1',
          'im first',
          `${Network.Ethereum}/${SdkServices.Vaults}`,
          'method2',
          'im second',
          `${Network.Ethereum}/${SdkServices.Vaults}`,
          2,
          1,
          1,
          1,
        ],
      ],
      [
        { forced: true, ignoreSecond: false },
        [
          'method1',
          'im first',
          `${Network.Ethereum}/${SdkServices.Vaults}`,
          'method2',
          'im second',
          `${Network.Ethereum}/${SdkServices.Vaults}`,
          2,
          1,
          1,
          1,
        ],
      ],
      [
        { forced: false, ignoreSecond: true },
        [
          'method1',
          'im first',
          `${Network.Ethereum}/${SdkServices.Vaults}`,
          undefined,
          undefined,
          undefined,
          1,
          1,
          0,
          1,
        ],
      ],
    ])('should scan methods and save sdk return vaules to file', async ({ forced, ignoreSecond }, result) => {
      const { mockProcessor, saveToFileMock, fsIoWriteMock, method1, method2 } = prepareProcessorMocks({
        forced,
        ignoreSecond,
      });

      await mockProcessor.run();

      expect(fsIoWriteMock.mock.calls[0][0]).toBe(result[0]);
      expect(fsIoWriteMock.mock.calls[0][1]).toBe(result[1]);
      expect(fsIoWriteMock.mock.calls[0][2]).toBe(result[2]);

      if (!ignoreSecond) {
        expect(fsIoWriteMock.mock.calls[1][0]).toBe(result[3]);
        expect(fsIoWriteMock.mock.calls[1][1]).toBe(result[4]);
        expect(fsIoWriteMock.mock.calls[1][2]).toBe(result[5]);
      }

      expect(fsIoWriteMock.mock.calls.length).toBe(result[6]);

      expect(method1.mock.calls.length).toBe(result[7]);
      expect(method2.mock.calls.length).toBe(result[8]);

      expect(saveToFileMock.mock.calls.length).toBe(result[9]);
    });

    it('should throw an error if fetch of the method fails', async () => {
      const { mockProcessor } = prepareProcessorMocks({ method1Throws: true });

      await expect(mockProcessor.run()).rejects.toThrowError('some error');
    });

    it('should return, if no cache missmatch was found', async () => {
      const { mockProcessor, saveToFileMock, fsIoWriteMock, method1, method2 } = prepareProcessorMocks();

      jest.spyOn(MethodsCache.prototype, 'getMissMatch').mockImplementation(() => ({
        vaults: [],
        length: 0,
      }));

      await mockProcessor.run();

      expect(fsIoWriteMock.mock.calls.length).toBe(0);
      expect(method1.mock.calls.length).toBe(0);
      expect(method2.mock.calls.length).toBe(0);
      expect(saveToFileMock.mock.calls.length).toBe(0);
    });

    it('should throw error if services not implemented in config', async () => {
      const { mockProcessor } = prepareProcessorMocks({ action: MocksProcessor.GUARD_ACTION });

      // @ts-ignore
      jest.spyOn(MethodsCache.prototype, 'getRelevantServicesMethods').mockImplementation(() => ({
        unknown: ['method1', 'method2'],
      }));

      await expect(mockProcessor.run()).rejects.toThrowError(ProcessorError);
    });

    it('should throw error if method not implemented in config', async () => {
      const { mockProcessor } = prepareProcessorMocks({ action: MocksProcessor.GUARD_ACTION });

      jest.spyOn(MethodsCache.prototype, 'getRelevantServicesMethods').mockImplementation(() => ({
        vaults: ['method1', 'method2', 'newUnknown'],
      }));

      await expect(mockProcessor.run()).rejects.toThrowError(ProcessorError);
    });
  });
});
