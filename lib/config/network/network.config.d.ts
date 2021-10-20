import { Networkish } from '@ethersproject/networks';
import { ContractRegistry } from '../../types/contract-registry';
import { Network } from '../enums/network.enum';
export declare abstract class NetworkConfig {
    readonly name: string;
    readonly network: Network;
    readonly id: number;
    readonly tokens: ContractRegistry;
    readonly setts: ContractRegistry;
    private static configs;
    constructor(name: string, network: Network, id: number, tokens: ContractRegistry, setts: ContractRegistry);
    static register(config: NetworkConfig): void;
    static getConfig(network: Networkish): NetworkConfig;
}
