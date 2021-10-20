import { GasFees } from './gas-fees.interface';

export interface GasPrices {
  rapid: number | GasFees;
  fast: number | GasFees;
  standard: number | GasFees;
  slow: number | GasFees;
}
