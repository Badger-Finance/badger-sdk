import { Currency } from './enums/currency.enum';
import { PriceSummary } from './interfaces/price-summary.interface';
import { Network } from '../config/enums/network.enum';
export declare class BadgerAPI {
    private readonly client;
    private network;
    constructor(network: Network);
    loadPrices(currency?: Currency): Promise<PriceSummary>;
    loadProof(address: string): Promise<string[]>;
    private get;
}
