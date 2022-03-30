import { Network } from '../../../src';
import { SdkServices } from '../enums';

export type ServicesArgsConfig = {
  [key in SdkServices]: {
    [method: string]: any[];
  };
};

export type NetworksArgsConfigMap = {
  [key in Exclude<Network, Network.Local>]: ServicesArgsConfig;
};
