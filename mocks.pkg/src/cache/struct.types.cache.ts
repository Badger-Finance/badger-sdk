import { SdkServices } from '../enums';
import { BadgerGraph } from '../../../src';
import { Service } from '../../../src/service';
import { ServicesMethodsList } from '../config/struct.types.config';

export type MethodsCacheRecordsMap = {
  [key in SdkServices]?: {
    [method: string]: string;
  };
};

export type ServicesMethodsBodies = MethodsCacheRecordsMap;

type MethodsCacheRecordsLengthMap = {
  length: number;
};

export type MethodsCacheRecordsDiffMap = ServicesMethodsList &
  MethodsCacheRecordsLengthMap;

type StandAloneModulesMap = {
  graph: BadgerGraph;
};

type ServiceClsBaseMap = {
  [key in Exclude<SdkServices, SdkServices.Graph>]: Service;
};

export type ServiceClsMap = ServiceClsBaseMap & StandAloneModulesMap;
