import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { Token } from './interfaces/token.interface';
export declare class TokensService extends Service {
    private tokens;
    constructor(sdk: BadgerSDK);
    loadTokens(addresses: string[]): Promise<Record<string, Token>>;
    loadToken(address: string): Promise<Token>;
}
