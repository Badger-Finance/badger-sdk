import { Signer } from '@ethersproject/abstract-signer';
import { Networkish } from '@ethersproject/providers';
import { BadgerAPI } from './api';
import { NetworkConfig } from './config/network/network.config';
import { DiggService } from './digg/digg.service';
import { ibBTCService } from './ibbtc/ibbtc.service';
import { RegistryService } from './registry/registry.service';
import { RewardsService } from './rewards/rewards.service';
import { SettsService } from './setts/setts.service';
import { TokensService } from './tokens/tokens.service';
import { SdkProvider } from './types/sdk-provider';
export declare class BadgerSDK {
    provider: SdkProvider;
    config: NetworkConfig;
    signer?: Signer;
    readonly api: BadgerAPI;
    readonly registry: RegistryService;
    readonly tokens: TokensService;
    readonly setts: SettsService;
    readonly rewards: RewardsService;
    readonly digg: DiggService;
    readonly ibbtc: ibBTCService;
    constructor(network: Networkish, provider: SdkProvider);
    ready(): Promise<void[]>;
}
