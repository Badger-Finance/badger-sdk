import { BadgerSDK } from '../sdk';
import { Service } from '../service';
export declare class ibBTCService extends Service {
    private loading;
    private ibBTC?;
    constructor(sdk: BadgerSDK);
    ready(): Promise<void>;
    getPricePerFullShare(): Promise<number>;
    private init;
}
