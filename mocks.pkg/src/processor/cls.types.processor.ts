import { Network } from '../../../src';
import { ServicesConfig } from '../config';

export type ProcessorClsArgs = {
  action: string;
  forced: boolean;
};

export type ProcessorNetworksConfigMap = {
  [key in Network]?: ServicesConfig;
};
