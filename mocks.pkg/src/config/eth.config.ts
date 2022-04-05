import { objDeepCopy } from '../utils';
import { baseArgsConfig } from './base.config';
import { ServicesArgsConfig } from './struct.types.config';

export const ethArgsConfig = objDeepCopy<ServicesArgsConfig>(baseArgsConfig);
