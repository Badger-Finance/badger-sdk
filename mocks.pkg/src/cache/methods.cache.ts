import crypto from 'crypto';

import { BadgerGraph, DiggService } from '../../../src';
import {
  MethodsCacheRecordsDiffMap,
  MethodsCacheRecordsMap,
  ServiceClsMap,
  ServicesMethodsBodies,
} from './struct.types.cache';
import { CHACHE_FILE_NAME, ROOT_DIR } from './constants.cache';

import cacheRecords from '../../__chache__/methods.json';
import { ServicesConfig } from '../config';
import { SdkServices } from '../enums';
import { BaseFsIo } from '../fs.io/base.fs.io';
import { ServicesMethodsList } from '../config/struct.types.config';

export class MethodsCache {
  readonly rootDir: string = ROOT_DIR;
  readonly cacheFileName: string = CHACHE_FILE_NAME;

  missMatchMethodsNum: number = 0;

  private oldCacheRecords: MethodsCacheRecordsMap = cacheRecords;
  private readonly newCacheRecords: MethodsCacheRecordsMap = {};
  private fsIo: BaseFsIo;

  readonly serviceClsMap: ServiceClsMap = {
    [SdkServices.Digg]: DiggService.prototype,
    [SdkServices.Ibbtc]: DiggService.prototype,
    [SdkServices.Registry]: DiggService.prototype,
    [SdkServices.Rewards]: DiggService.prototype,
    [SdkServices.Tokens]: DiggService.prototype,
    [SdkServices.Vaults]: DiggService.prototype,
    graph: BadgerGraph.prototype,
  };

  constructor() {
    this.fsIo = new BaseFsIo(this.rootDir);

    this.newCacheRecords = this.genNewRecords();
  }

  getRelevantServicesMethods() {
    return ServicesConfig.listServices.reduce((acc, service) => {
      acc[service] = Object.getOwnPropertyNames(
        this.serviceClsMap[service],
      ).filter((method) => method !== 'constructor');
      return acc;
    }, {} as ServicesMethodsList);
  }

  getMissMatch() {
    const cacheMissMatch: MethodsCacheRecordsDiffMap = {
      length: 0,
    };

    ServicesConfig.listServices.forEach((service) => {
      Object.keys(this.newCacheRecords).forEach((method) => {
        const newMethodsCache = this.newCacheRecords[service]?.[method];
        const oldMethodsCache = this.oldCacheRecords[service]?.[method];
        if (newMethodsCache !== oldMethodsCache) {
          if (cacheMissMatch[service]) {
            (<string[]>cacheMissMatch[service]).push(method);
          } else {
            cacheMissMatch[service] = [];
          }
        }
        cacheMissMatch.length++;
      });
    });

    this.missMatchMethodsNum = cacheMissMatch.length;

    return cacheMissMatch;
  }

  saveToFile() {
    if (this.missMatchMethodsNum === 0) return;

    this.fsIo.write<MethodsCacheRecordsMap>(
      this.cacheFileName,
      this.newCacheRecords,
    );
  }

  private genNewRecords() {
    return ServicesConfig.listServices.reduce((acc, service) => {
      acc[service] = Object.getOwnPropertyNames(this.serviceClsMap[service])
        .filter((method) => method !== 'constructor')
        .reduce(
          (acc, method) => {
            acc[method] = crypto
              .createHash('sha256')
              .update(
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
