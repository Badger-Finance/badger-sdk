import crypto from 'crypto';

import {
  BadgerAPI,
  BadgerGraph,
  DiggService,
  ibBTCService,
  RegistryService,
  RewardsService,
  TokensService,
  VaultsService,
} from '../../../src';
import cacheRecords from '../../__cache__/methods.json';
import { ServicesConfig } from '../config';
import { ServicesMethodsList } from '../config/struct.types.config';
import { methodsToSkip } from '../constants';
import { SdkServices } from '../enums';
import { BaseFsIo } from '../fs.io/base.fs.io';
import { CACHE_FILE_NAME, ROOT_DIR } from './constants.cache';
import {
  MethodsCacheRecordsDiffMap,
  MethodsCacheRecordsMap,
  MethodsMap,
  ServiceClsMap,
  ServicesMethodsBodies,
} from './struct.types.cache';

export class MethodsCache {
  readonly rootDir: string = ROOT_DIR;
  readonly cacheFileName: string = CACHE_FILE_NAME;
  readonly methodsToSkip: string[] = methodsToSkip;

  missMatchMethodsNum = 0;

  protected oldCacheRecords: MethodsCacheRecordsMap = cacheRecords;
  protected readonly newCacheRecords: MethodsCacheRecordsMap = {};
  protected fsIo: BaseFsIo;

  readonly serviceClsMap: ServiceClsMap = {
    [SdkServices.Digg]: DiggService.prototype,
    [SdkServices.Ibbtc]: ibBTCService.prototype,
    [SdkServices.Registry]: RegistryService.prototype,
    [SdkServices.Rewards]: RewardsService.prototype,
    [SdkServices.Tokens]: TokensService.prototype,
    [SdkServices.Vaults]: VaultsService.prototype,
    api: BadgerAPI.prototype,
    graph: BadgerGraph.prototype,
  };

  constructor() {
    this.fsIo = new BaseFsIo(this.rootDir);

    this.newCacheRecords = this.genNewRecords();
  }

  getRelevantServicesMethods() {
    return ServicesConfig.listServices.reduce((acc, service) => {
      acc[service] = Object.getOwnPropertyNames(this.serviceClsMap[service]).filter(
        (method) => !this.methodsToSkip.includes(method),
      );
      return acc;
    }, {} as ServicesMethodsList);
  }

  getMissMatch() {
    console.log('Counting cache missmatch for services methods bodies...');

    const cacheMissMatch: MethodsCacheRecordsDiffMap = {
      length: 0,
    };

    ServicesConfig.listServices.forEach((service) => {
      Object.keys(<MethodsMap>this.newCacheRecords[service]).forEach((method) => {
        const newMethodsCache = this.newCacheRecords[service]?.[method];
        const oldMethodsCache = this.oldCacheRecords[service]?.[method];

        if (newMethodsCache !== oldMethodsCache) {
          if (cacheMissMatch[service]) {
            (<string[]>cacheMissMatch[service]).push(method);
          } else {
            cacheMissMatch[service] = [method];
          }
          cacheMissMatch.length++;
        }
      });
    });

    this.missMatchMethodsNum = cacheMissMatch.length;

    console.log(`Cache missmatch number of methods is ${this.missMatchMethodsNum}`);

    return cacheMissMatch;
  }

  saveToFile() {
    console.log(`Saving new cache values in ${this.rootDir}/${this.cacheFileName}`);

    if (this.missMatchMethodsNum === 0) return;

    this.fsIo.write<MethodsCacheRecordsMap>(this.cacheFileName, this.newCacheRecords);
  }

  protected genNewRecords() {
    return ServicesConfig.listServices.reduce((acc, service) => {
      acc[service] = Object.getOwnPropertyNames(this.serviceClsMap[service])
        .filter((method) => !this.methodsToSkip.includes(method))
        .reduce(
          (acc, method) => {
            acc[method] = crypto
              .createHash('sha256')
              .update(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore Here are children protos of Services
                this.serviceClsMap[service][method].toString(),
              )
              .digest('base64');
            return acc;
          },
          {} as {
            [method: string]: string;
          },
        );
      return acc;
    }, {} as ServicesMethodsBodies);
  }
}
