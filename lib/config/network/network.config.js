"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkConfig = void 0;
class NetworkConfig {
    constructor(name, network, id, tokens, setts) {
        this.name = name;
        this.network = network;
        this.id = id;
        this.tokens = tokens;
        this.setts = setts;
        NetworkConfig.register(this);
    }
    static register(config) {
        this.configs[config.network] = config;
        this.configs[config.id] = config;
        this.configs[config.name] = config;
    }
    static getConfig(network) {
        let config;
        if (typeof network === 'string' || typeof network === 'number') {
            config = this.configs[network];
        }
        else {
            const nameConfig = this.configs[network.name];
            if (!nameConfig) {
                const chainIdConfig = this.configs[network.chainId];
                if (chainIdConfig) {
                    config = chainIdConfig;
                }
            }
            else {
                config = nameConfig;
            }
        }
        if (!config) {
            throw new Error(`No network configuration defined for ${network}`);
        }
        return config;
    }
}
exports.NetworkConfig = NetworkConfig;
NetworkConfig.configs = {};
//# sourceMappingURL=network.config.js.map