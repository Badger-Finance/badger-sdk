import { SdkServices } from '../enums';
import { BadgerGraph } from '../../../src';
import { Service } from '../../../src/service';

export type MethodsCacheRecordsMap = {
  [key in SdkServices]?: {
    [method: string]: string;
  };
};

export type ServicesMethodsBodies = MethodsCacheRecordsMap;

export type ServicesMethodsList = {
  [key in SdkServices]: string[];
};

type StandAloneModulesMap = {
  graph: BadgerGraph;
};

type ServiceClsBaseMap = {
  [key in Exclude<SdkServices, SdkServices.Graph>]: Service;
};

export type ServiceClsMap = ServiceClsBaseMap & StandAloneModulesMap;
