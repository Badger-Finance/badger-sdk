"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const constants_1 = require("../constants");
const service_1 = require("../service");
const currency_enum_1 = require("./enums/currency.enum");
const DEFAULT_URL = 'https://api.badger.com/v2';
class ApiService extends service_1.Service {
    constructor(sdk) {
        super(sdk);
        this.client = axios_1.default.create({
            baseURL: DEFAULT_URL,
            headers: {
                'User-Agent': `@badger-dao/sdk/${constants_1.VERSION}`,
            },
        });
    }
    async loadPrices(currency = currency_enum_1.Currency.USD) {
        return this.get('prices', {
            chain: this.config.network,
            currency,
        });
    }
    async loadProof(address) {
        return this.get('proofs', {
            chain: this.config.network,
            address,
        });
    }
    async get(path, params = {}) {
        try {
            const { data } = await this.client.get(path, {
                params,
            });
            return data;
        }
        catch (error) {
            const { response } = error;
            if (response) {
                const { status } = response;
                throw new Error(status.toFixed());
            }
            throw error;
        }
    }
}
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map