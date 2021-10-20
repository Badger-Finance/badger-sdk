"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBalance = void 0;
const ethers_1 = require("ethers");
function formatBalance(amount, decimals = 18) {
    return Number(ethers_1.ethers.utils.formatUnits(amount, decimals));
}
exports.formatBalance = formatBalance;
//# sourceMappingURL=tokens.utils.js.map