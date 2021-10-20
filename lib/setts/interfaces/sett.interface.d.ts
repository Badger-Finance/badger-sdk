import { Token } from '../../tokens/interfaces/token.interface';
export interface Sett extends Token {
    available: number;
    balance: number;
    totalSupply: number;
    pricePerFullShare: number;
    token: string;
}
