import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { SettQuery, SettQueryVariables } from './generated/badger';
export declare class GraphQLService extends Service {
    private graphSDK;
    constructor(sdk: BadgerSDK);
    loadSett(options: SettQueryVariables): Promise<SettQuery>;
    private resolveClientUrl;
}
