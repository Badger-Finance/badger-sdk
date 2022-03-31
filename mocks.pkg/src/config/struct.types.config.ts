import { SdkServices } from '../enums';
import { RelevantNetworks } from '../types';

export type ServicesArgsConfig = {
  [key in SdkServices]: {
    [method: string]: any[];
  };
};

export type ServicesMethodsList = {
  [key in SdkServices]?: string[];
};

export type NetworksArgsConfigMap = {
  [key in RelevantNetworks]: ServicesArgsConfig;
};
