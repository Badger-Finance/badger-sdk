"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettsService = void 0;
const ethers_1 = require("ethers");
const contracts_1 = require("../contracts");
const service_1 = require("../service");
const tokens_utils_1 = require("../tokens/tokens.utils");
class SettsService extends service_1.Service {
    constructor(sdk) {
        super(sdk);
        this.setts = {};
    }
    async loadSett(address, update = false) {
        const checksumAddress = ethers_1.ethers.utils.getAddress(address);
        if (!this.setts[checksumAddress] || update) {
            const sett = contracts_1.Sett__factory.connect(checksumAddress, this.provider);
            const [name, symbol, decimals, token, available, balance, totalSupply, pricePerFullShare,] = await Promise.all([
                sett.name(),
                sett.symbol(),
                sett.decimals(),
                sett.token(),
                sett.available(),
                sett.balance(),
                sett.totalSupply(),
                sett.getPricePerFullShare(),
            ]);
            this.setts[checksumAddress] = {
                address: checksumAddress,
                name,
                symbol,
                decimals,
                token,
                available: (0, tokens_utils_1.formatBalance)(available, decimals),
                totalSupply: (0, tokens_utils_1.formatBalance)(totalSupply, decimals),
                balance: (0, tokens_utils_1.formatBalance)(balance, decimals),
                pricePerFullShare: (0, tokens_utils_1.formatBalance)(pricePerFullShare, decimals),
            };
        }
        return this.setts[checksumAddress];
    }
}
exports.SettsService = SettsService;
//# sourceMappingURL=setts.service.js.map