import { MethodsCache } from '../methods.cache';

export class MethodsCacheTestWrapper extends MethodsCache {
  constructor() {
    super();
  }

  genNewRecordsPub() {
    return this.genNewRecords();
  }

  get newCacheRecordsPub() {
    return this.newCacheRecords;
  }
}
