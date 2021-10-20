"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgerSDK = void 0;
const api_1 = require("./api");
const network_config_1 = require("./config/network/network.config");
const digg_service_1 = require("./digg/digg.service");
const ibbtc_service_1 = require("./ibbtc/ibbtc.service");
const registry_service_1 = require("./registry/registry.service");
const rewards_service_1 = require("./rewards/rewards.service");
const setts_service_1 = require("./setts/setts.service");
const tokens_service_1 = require("./tokens/tokens.service");
class BadgerSDK {
    constructor(network, provider) {
        this.provider = provider;
        this.config = network_config_1.NetworkConfig.getConfig(network);
        this.signer = this.provider.getSigner();
        this.api = new api_1.BadgerAPI(this.config.network);
        this.registry = new registry_service_1.RegistryService(this);
        this.tokens = new tokens_service_1.TokensService(this);
        this.setts = new setts_service_1.SettsService(this);
        this.rewards = new rewards_service_1.RewardsService(this);
        this.digg = new digg_service_1.DiggService(this);
        this.ibbtc = new ibbtc_service_1.ibBTCService(this);
    }
    async ready() {
        return Promise.all([this.registry.ready()]);
    }
}
exports.BadgerSDK = BadgerSDK;
//# sourceMappingURL=sdk.js.map