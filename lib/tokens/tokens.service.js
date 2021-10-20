"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensService = void 0;
const ethers_1 = require("ethers");
const contracts_1 = require("../contracts");
const service_1 = require("../service");
const tokens_utils_1 = require("./tokens.utils");
class TokensService extends service_1.Service {
    constructor(sdk) {
        super(sdk);
        this.tokens = {};
    }
    async loadTokens(addresses) {
        const tokens = await Promise.all(addresses.map(async (addr) => this.loadToken(addr)));
        return Object.fromEntries(tokens.map((token) => [token.address, token]));
    }
    async loadToken(address) {
        const checksumAddress = ethers_1.ethers.utils.getAddress(address);
        if (!this.tokens[checksumAddress]) {
            const token = contracts_1.Erc20__factory.connect(checksumAddress, this.provider);
            const [name, symbol, decimals, supply] = await Promise.all([
                token.name(),
                token.symbol(),
                token.decimals(),
                token.totalSupply(),
            ]);
            this.tokens[checksumAddress] = {
                address: checksumAddress,
                name,
                symbol,
                decimals,
                totalSupply: (0, tokens_utils_1.formatBalance)(supply, decimals),
            };
        }
        return this.tokens[checksumAddress];
    }
}
exports.TokensService = TokensService;
//# sourceMappingURL=tokens.service.js.map