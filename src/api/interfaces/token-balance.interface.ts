import { Token } from '../../tokens/interfaces/token.interface';

export interface TokenBalance extends Token {
  balance: number;
  value: number;
}
