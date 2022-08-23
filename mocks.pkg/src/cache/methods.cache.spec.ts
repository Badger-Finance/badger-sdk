/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SdkServices } from '../enums';
import { MethodsCacheTestClsMock } from './mocks/methods.cache.test.cls.mock';
import { cacheMethodsJSONMocks } from './mocks/__cache__.methods.mocks';
import { ServicesConfig } from '../config';
import { MethodsCacheTestWrapper } from './mocks/methods.chache.test.wrapper';
import { methodsToSkip } from '../constants';
import { BaseFsIo } from '../fs.io';

describe('MethodsCache', () => {
  const TEST_SERVICE = SdkServices.Vaults;

  let methodsCache: MethodsCacheTestWrapper;

  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation();

    jest.spyOn(ServicesConfig, 'listServices', 'get').mockReturnValue([TEST_SERVICE]);

    methodsCache = new MethodsCacheTestWrapper();

    // @ts-ignore, the only way to mock readonly properties
    Object.defineProperty(methodsCache, 'serviceClsMap', {
      value: { [TEST_SERVICE]: MethodsCacheTestClsMock.prototype },
    });
    Object.defineProperty(methodsCache, 'oldCacheRecords', { value: cacheMethodsJSONMocks });

    Object.defineProperty(methodsCache, 'newCacheRecords', { value: methodsCache.genNewRecordsPub() });
  });

  it('should get and return cache for relevant service methods', () => {
    expect(methodsCache.genNewRecordsPub()).toMatchSnapshot();
  });

  it('should return relevant service methods', () => {
    expect(methodsCache.getRelevantServicesMethods()).toMatchSnapshot();
  });

  it('should return relevant service methods, but filter methodsToSkip', () => {
    Object.defineProperty(methodsCache, 'methodsToSkip', { value: methodsToSkip.concat(['method1ToCache']) });
    expect(methodsCache.getRelevantServicesMethods()).toMatchSnapshot();
  });

  it('should count and return cache missmatch with cache file', () => {
    expect(methodsCache.getMissMatch().length).toBe(0);
  });

  it('should count and return cache missmatch wo cache file', () => {
    Object.defineProperty(methodsCache, 'oldCacheRecords', { value: {} });

    expect(methodsCache.getMissMatch().length).toBe(2);
  });

  it('should save file, if cache missmatch is greater then 1', () => {
    Object.defineProperty(methodsCache, 'oldCacheRecords', { value: {} });

    const fsIoSpy = jest.spyOn(BaseFsIo.prototype, 'write').mockImplementation();

    methodsCache.getMissMatch();
    methodsCache.saveToFile();

    expect(fsIoSpy.mock.calls.length).toBe(1);
  });

  it('shouldnt save file, if cache missmatch is 0', () => {
    const fsIoSpy = jest.spyOn(BaseFsIo.prototype, 'write').mockImplementation();

    methodsCache.saveToFile();

    expect(fsIoSpy.mock.calls.length).toBe(0);
  });
});
