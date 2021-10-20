import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { RegistryVault } from './interfaces/registry-vault.interface';
export declare class RegistryService extends Service {
    private entries;
    private loading;
    private registry;
    constructor(sdk: BadgerSDK);
    ready(): Promise<void>;
    get(key: string): Promise<string | undefined>;
    getProductionVaults(): Promise<RegistryVault[]>;
    private init;
}
