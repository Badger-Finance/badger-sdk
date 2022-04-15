import { SdkServices } from '../enums';
import { BadgerAPI, BadgerGraph } from '../../../src';
import { Service } from '../../../src/service';
import { ServicesMethodsList } from '../config/struct.types.config';

export type MethodsCacheRecordsMap = {
  [key in SdkServices]?: MethodsMap;
};

export type MethodsMap = {
  [method: string]: string;
};

export type ServicesMethodsBodies = MethodsCacheRecordsMap;

type MethodsCacheRecordsLengthMap = {
  length: number;
};

export type MethodsCacheRecordsDiffMap = ServicesMethodsList &
  MethodsCacheRecordsLengthMap;

type StandAloneModulesMap = {
  api: BadgerAPI;
  graph: BadgerGraph;
};

type ServiceClsBaseMap = {
  [key in Exclude<SdkServices, SdkServices.Graph | SdkServices.Api>]: Service;
};

export type ServiceClsMap = ServiceClsBaseMap & StandAloneModulesMap;
