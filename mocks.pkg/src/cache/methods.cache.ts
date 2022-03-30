import crypto from 'crypto';

import { BadgerGraph, DiggService } from '../../../src';
import {
  MethodsCacheRecordsMap,
  ServiceClsMap,
  ServicesMethodsBodies,
  ServicesMethodsList,
} from './struct.types.cache';
import { ROOT_DIR } from './constants.cache';

import cacheRecords from '../../__chache__/methods.json';
import { ServicesConfig } from '../config';
import { SdkServices } from '../enums';

export class MethodsCache {
  rootDir: string = ROOT_DIR;

  private oldCacheRecords: MethodsCacheRecordsMap = cacheRecords;
  private newCacheRecords: MethodsCacheRecordsMap | {} = {};
  private servicesConfig: ServicesConfig;

  readonly serviceClsMap: ServiceClsMap = {
    [SdkServices.Digg]: DiggService.prototype,
    [SdkServices.Ibbtc]: DiggService.prototype,
    [SdkServices.Registry]: DiggService.prototype,
    [SdkServices.Rewards]: DiggService.prototype,
    [SdkServices.Tokens]: DiggService.prototype,
    [SdkServices.Vaults]: DiggService.prototype,
    graph: BadgerGraph.prototype,
  };

  constructor(config: ServicesConfig) {
    this.servicesConfig = config;
  }

  getRelevantServicesMethods() {
    return this.servicesConfig.listServices.reduce((acc, service) => {
      acc[service] = Object.getOwnPropertyNames(
        this.serviceClsMap[service],
      ).filter((method) => method !== 'constructor');
      return acc;
    }, {} as ServicesMethodsList);
  }

  getMissMatch() {
    // here we will have only changed method in sdk
  }

  private genNewRecords() {
    this.newCacheRecords = this.servicesConfig.listServices.reduce(
      (acc, service) => {
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
      },
      {} as ServicesMethodsBodies,
    );
  }
}
