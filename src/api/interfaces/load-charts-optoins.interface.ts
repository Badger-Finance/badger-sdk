import { ChartGranularity } from '../enums';
import { DateIsoFormat } from '../types';

export interface LoadChartsOptions {
  vault: string;
  start?: DateIsoFormat;
  end?: DateIsoFormat;
  period?: number;
  granularity?: ChartGranularity;
}
