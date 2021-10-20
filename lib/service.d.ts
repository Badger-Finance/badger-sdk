import { BadgerSDK } from '.';
import { NetworkConfig } from './config/network/network.config';
import { SdkProvider } from './types/sdk-provider';
export declare abstract class Service {
    protected sdk: BadgerSDK;
    constructor(sdk: BadgerSDK);
    get provider(): SdkProvider;
    get config(): NetworkConfig;
}
