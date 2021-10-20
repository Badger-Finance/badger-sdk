"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryService = void 0;
const contracts_1 = require("../contracts");
const service_1 = require("../service");
const registry_key_enum_1 = require("./enums/registry-key.enum");
class RegistryService extends service_1.Service {
    constructor(sdk) {
        super(sdk);
        this.entries = {};
        this.registry = contracts_1.Registry__factory.connect('0xFda7eB6f8b7a9e9fCFd348042ae675d1d652454f', this.provider);
        this.loading = this.init();
    }
    async ready() {
        return this.loading;
    }
    async get(key) {
        if (!this.entries[key]) {
            this.entries[key] = await this.registry.get(key);
        }
        return this.entries[key];
    }
    async getProductionVaults() {
        return this.registry.getProductionVaults();
    }
    async init() {
        const queries = [];
        for (const key in registry_key_enum_1.RegistryKey) {
            queries.push(this.get(key));
        }
        await Promise.all(queries);
    }
}
exports.RegistryService = RegistryService;
//# sourceMappingURL=registry.service.js.map