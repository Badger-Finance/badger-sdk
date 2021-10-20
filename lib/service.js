"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
class Service {
    constructor(sdk) {
        this.sdk = sdk;
    }
    get provider() {
        return this.sdk.provider;
    }
    get config() {
        return this.sdk.network;
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map