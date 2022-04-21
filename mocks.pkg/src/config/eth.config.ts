import { SdkServices } from '../enums';
import { objDeepCopy } from '../utils';
import { baseArgsConfig } from './base.config';
import { ServicesArgsConfig } from './struct.types.config';

export const baseEthConfig = objDeepCopy<ServicesArgsConfig>(baseArgsConfig);

baseArgsConfig[SdkServices.Api]['loadCitadelTreasury'] = { args: [] };

export const ethArgsConfig = baseEthConfig;
