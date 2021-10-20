"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiggService = void 0;
const network_enum_1 = require("../config/enums/network.enum");
const Digg__factory_1 = require("../contracts/factories/Digg__factory");
const service_1 = require("../service");
const tokens_utils_1 = require("../tokens/tokens.utils");
class DiggService extends service_1.Service {
    constructor(sdk) {
        super(sdk);
        if (this.config.network === network_enum_1.Network.Ethereum) {
            this.digg = Digg__factory_1.Digg__factory.connect(this.config.tokens.DIGG, this.provider);
        }
    }
    async convert(shares) {
        if (!this.digg) {
            throw new Error(`Digg is not defined for ${this.config.network}`);
        }
        const [fragments, token] = await Promise.all([
            this.digg.sharesToFragments(shares),
            this.sdk.tokens.loadToken(this.digg.address),
        ]);
        return (0, tokens_utils_1.formatBalance)(fragments, token.decimals);
    }
}
exports.DiggService = DiggService;
//# sourceMappingURL=digg.service.js.map