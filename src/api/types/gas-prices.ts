import { GasSpeed } from '..';
import { GasFees } from '../interfaces/gas-fees.interface';

export type GasPrices = {
  [key in GasSpeed]: number | GasFees;
};
