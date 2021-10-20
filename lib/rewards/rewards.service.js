"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsService = void 0;
const contracts_1 = require("../contracts");
const registry_key_enum_1 = require("../registry/enums/registry-key.enum");
const service_1 = require("../service");
const network_enum_1 = require("../config/enums/network.enum");
const tokens_utils_1 = require("../tokens/tokens.utils");
class RewardsService extends service_1.Service {
    constructor(sdk) {
        super(sdk);
        this.loading = this.init();
    }
    async ready() {
        return this.loading;
    }
    async claim(options) {
        const { network } = this.config;
        if (!this.badgerTree) {
            throw new Error(`Badger Tree is not defined for ${network}`);
        }
        const { tokens, cumulativeAmounts, index, cycle, proof, claimAmounts } = options;
        const tx = await this.badgerTree.claim(tokens, cumulativeAmounts, index, cycle, proof, claimAmounts);
        return tx.wait();
    }
    async loadActiveSchedules(beneficiary) {
        const schedules = await this.loadSchedules(beneficiary);
        const now = Number((Date.now() / 1000).toFixed());
        return schedules.filter((schedule) => schedule.start < now && schedule.end > now);
    }
    async loadSchedules(beneficiary) {
        const { network, tokens } = this.config;
        if (!this.rewardsLogger) {
            throw new Error(`Rewards Logger is not defined for ${network}`);
        }
        const schedules = await this.rewardsLogger.getAllUnlockSchedulesFor(beneficiary);
        return Promise.all(schedules.map(async (schedule) => {
            const { token, totalAmount } = schedule;
            const tokenInfo = await this.sdk.tokens.loadToken(token);
            let amount = (0, tokens_utils_1.formatBalance)(totalAmount, tokenInfo.decimals);
            if (network === network_enum_1.Network.Ethereum && token === tokens.DIGG) {
                amount = await this.sdk.digg.convert(totalAmount);
            }
            return {
                beneficiary,
                token,
                amount,
                start: schedule.start.toNumber(),
                end: schedule.end.toNumber(),
            };
        }));
    }
    async init() {
        await this.sdk.registry.ready();
        const [badgerTreeAddress, rewardsLoggerAddress] = await Promise.all([
            this.sdk.registry.get(registry_key_enum_1.RegistryKey.BadgerTree),
            this.sdk.registry.get(registry_key_enum_1.RegistryKey.RewardsLogger),
        ]);
        if (badgerTreeAddress) {
            this.badgerTree = contracts_1.BadgerTree__factory.connect(badgerTreeAddress, this.provider);
        }
        if (rewardsLoggerAddress) {
            this.rewardsLogger = contracts_1.RewardsLogger__factory.connect(rewardsLoggerAddress, this.provider);
        }
    }
}
exports.RewardsService = RewardsService;
//# sourceMappingURL=rewards.service.js.map