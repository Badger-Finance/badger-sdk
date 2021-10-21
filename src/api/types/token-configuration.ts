import { Token } from '../../tokens/interfaces/token.interface';

export type TokenConfiguration = {
  [address: string]: Token;
};
