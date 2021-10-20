"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLService = void 0;
const graphql_request_1 = require("graphql-request");
const network_enum_1 = require("../config/enums/network.enum");
const service_1 = require("../service");
const badger_1 = require("./generated/badger");
class GraphQLService extends service_1.Service {
    constructor(sdk) {
        super(sdk);
        const client = new graphql_request_1.GraphQLClient(this.resolveClientUrl());
        this.graphSDK = (0, badger_1.getSdk)(client);
    }
    async loadSett(options) {
        options.id = options.id.toLowerCase();
        return this.graphSDK.Sett(options);
    }
    resolveClientUrl() {
        const { network } = this.config;
        return `https://api.thegraph.com/subgraphs/name/badger-finance/badger-dao-setts${network !== network_enum_1.Network.Ethereum ? `-${network}` : ''}`;
    }
}
exports.GraphQLService = GraphQLService;
//# sourceMappingURL=graphql.service.js.map