import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { Currency } from './enums/currency.enum';
import { PriceSummary } from './interfaces/price-summary.interface';
export declare class ApiService extends Service {
    private readonly client;
    constructor(sdk: BadgerSDK);
    loadPrices(currency?: Currency): Promise<PriceSummary>;
    loadProof(address: string): Promise<string[]>;
    private get;
}
