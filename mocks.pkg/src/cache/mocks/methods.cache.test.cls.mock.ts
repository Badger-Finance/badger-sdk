import { Service } from '../../../../src/service';
import { mockSDK } from '../../../../src/tests';

export class MethodsCacheTestClsMock extends Service {
  nothing: undefined;

  constructor() {
    super(mockSDK());
    this.nothing = this.#protectedMethod3ToCache();
  }

  method1ToCache() {
    return 'dummy';
  }

  method2ToCache(fakeArg1: string, fakeArg2: number) {
    console.info('fakeArg1', fakeArg1);
    return [fakeArg1, fakeArg2];
  }

  // should skeep protected methods
  #protectedMethod3ToCache() {
    return void 0;
  }
}
