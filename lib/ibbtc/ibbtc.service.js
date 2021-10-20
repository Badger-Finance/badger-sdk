"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ibBTCService = void 0;
const network_enum_1 = require("../config/enums/network.enum");
const Ibbtc__factory_1 = require("../contracts/factories/Ibbtc__factory");
const service_1 = require("../service");
const tokens_utils_1 = require("../tokens/tokens.utils");
class ibBTCService extends service_1.Service {
    constructor(sdk) {
        super(sdk);
        this.loading = this.init();
    }
    async ready() {
        return this.loading;
    }
    async getPricePerFullShare() {
        if (!this.ibBTC) {
            throw new Error(`ibBTC is not defined on ${this.config.network}`);
        }
        const [pricePerFullShare, token] = await Promise.all([
            this.ibBTC.pricePerShare(),
            this.sdk.tokens.loadToken(this.ibBTC.address),
        ]);
        return (0, tokens_utils_1.formatBalance)(pricePerFullShare, token.decimals);
    }
    async init() {
        if (this.config.network !== network_enum_1.Network.Ethereum) {
            return;
        }
        this.ibBTC = Ibbtc__factory_1.Ibbtc__factory.connect('0xc4E15973E6fF2A35cC804c2CF9D2a1b817a8b40F', this.provider);
    }
}
exports.ibBTCService = ibBTCService;
//# sourceMappingURL=ibbtc.service.js.map