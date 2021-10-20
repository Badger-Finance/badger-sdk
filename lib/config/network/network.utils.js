"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checksumEntries = void 0;
const ethers_1 = require("ethers");
const checksumEntries = (registry) => {
    return Object.fromEntries(Object.entries(registry).map(([key, val]) => [
        key,
        ethers_1.ethers.utils.getAddress(val),
    ]));
};
exports.checksumEntries = checksumEntries;
//# sourceMappingURL=network.utils.js.map