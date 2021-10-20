"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.SettDocument = exports.SettFragmentDoc = exports._SubgraphErrorPolicy_ = exports.Vault_OrderBy = exports.VaultBalance_OrderBy = exports.User_OrderBy = exports.UserSettBalance_OrderBy = exports.Transfer_OrderBy = exports.Token_OrderBy = exports.TokenDistribution_OrderBy = exports.Strategy_OrderBy = exports.Snapshot_OrderBy = exports.Sett_OrderBy = exports.SettSnapshot_OrderBy = exports.SettHarvest_OrderBy = exports.Registry_OrderBy = exports.OrderDirection = exports.Erc20_OrderBy = exports.Controller_OrderBy = exports.BadgerTreeDistribution_OrderBy = void 0;
const tslib_1 = require("tslib");
const graphql_tag_1 = (0, tslib_1.__importDefault)(require("graphql-tag"));
var BadgerTreeDistribution_OrderBy;
(function (BadgerTreeDistribution_OrderBy) {
    BadgerTreeDistribution_OrderBy["Id"] = "id";
    BadgerTreeDistribution_OrderBy["Timestamp"] = "timestamp";
    BadgerTreeDistribution_OrderBy["Token"] = "token";
    BadgerTreeDistribution_OrderBy["Amount"] = "amount";
    BadgerTreeDistribution_OrderBy["BlockNumber"] = "blockNumber";
    BadgerTreeDistribution_OrderBy["Strategy"] = "strategy";
    BadgerTreeDistribution_OrderBy["Sett"] = "sett";
})(BadgerTreeDistribution_OrderBy = exports.BadgerTreeDistribution_OrderBy || (exports.BadgerTreeDistribution_OrderBy = {}));
var Controller_OrderBy;
(function (Controller_OrderBy) {
    Controller_OrderBy["Id"] = "id";
    Controller_OrderBy["Strategies"] = "strategies";
    Controller_OrderBy["Setts"] = "setts";
})(Controller_OrderBy = exports.Controller_OrderBy || (exports.Controller_OrderBy = {}));
var Erc20_OrderBy;
(function (Erc20_OrderBy) {
    Erc20_OrderBy["Id"] = "id";
    Erc20_OrderBy["Name"] = "name";
    Erc20_OrderBy["Symbol"] = "symbol";
    Erc20_OrderBy["Decimals"] = "decimals";
    Erc20_OrderBy["TotalSupply"] = "totalSupply";
})(Erc20_OrderBy = exports.Erc20_OrderBy || (exports.Erc20_OrderBy = {}));
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Asc"] = "asc";
    OrderDirection["Desc"] = "desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
var Registry_OrderBy;
(function (Registry_OrderBy) {
    Registry_OrderBy["Id"] = "id";
})(Registry_OrderBy = exports.Registry_OrderBy || (exports.Registry_OrderBy = {}));
var SettHarvest_OrderBy;
(function (SettHarvest_OrderBy) {
    SettHarvest_OrderBy["Id"] = "id";
    SettHarvest_OrderBy["Timestamp"] = "timestamp";
    SettHarvest_OrderBy["Token"] = "token";
    SettHarvest_OrderBy["Amount"] = "amount";
    SettHarvest_OrderBy["BlockNumber"] = "blockNumber";
    SettHarvest_OrderBy["Strategy"] = "strategy";
    SettHarvest_OrderBy["Sett"] = "sett";
})(SettHarvest_OrderBy = exports.SettHarvest_OrderBy || (exports.SettHarvest_OrderBy = {}));
var SettSnapshot_OrderBy;
(function (SettSnapshot_OrderBy) {
    SettSnapshot_OrderBy["Id"] = "id";
    SettSnapshot_OrderBy["Timestamp"] = "timestamp";
    SettSnapshot_OrderBy["Name"] = "name";
    SettSnapshot_OrderBy["Symbol"] = "symbol";
    SettSnapshot_OrderBy["Decimals"] = "decimals";
    SettSnapshot_OrderBy["TotalSupply"] = "totalSupply";
    SettSnapshot_OrderBy["Token"] = "token";
    SettSnapshot_OrderBy["Balance"] = "balance";
    SettSnapshot_OrderBy["PricePerFullShare"] = "pricePerFullShare";
    SettSnapshot_OrderBy["NetDeposit"] = "netDeposit";
    SettSnapshot_OrderBy["NetShareDeposit"] = "netShareDeposit";
    SettSnapshot_OrderBy["GrossDeposit"] = "grossDeposit";
    SettSnapshot_OrderBy["GrossShareDeposit"] = "grossShareDeposit";
    SettSnapshot_OrderBy["GrossWithdraw"] = "grossWithdraw";
    SettSnapshot_OrderBy["GrossShareWithdraw"] = "grossShareWithdraw";
})(SettSnapshot_OrderBy = exports.SettSnapshot_OrderBy || (exports.SettSnapshot_OrderBy = {}));
var Sett_OrderBy;
(function (Sett_OrderBy) {
    Sett_OrderBy["Id"] = "id";
    Sett_OrderBy["Name"] = "name";
    Sett_OrderBy["Symbol"] = "symbol";
    Sett_OrderBy["Decimals"] = "decimals";
    Sett_OrderBy["TotalSupply"] = "totalSupply";
    Sett_OrderBy["Token"] = "token";
    Sett_OrderBy["Balance"] = "balance";
    Sett_OrderBy["PricePerFullShare"] = "pricePerFullShare";
    Sett_OrderBy["NetDeposit"] = "netDeposit";
    Sett_OrderBy["NetShareDeposit"] = "netShareDeposit";
    Sett_OrderBy["GrossDeposit"] = "grossDeposit";
    Sett_OrderBy["GrossShareDeposit"] = "grossShareDeposit";
    Sett_OrderBy["GrossWithdraw"] = "grossWithdraw";
    Sett_OrderBy["GrossShareWithdraw"] = "grossShareWithdraw";
    Sett_OrderBy["Controller"] = "controller";
    Sett_OrderBy["Strategy"] = "strategy";
    Sett_OrderBy["TreeDistributions"] = "treeDistributions";
    Sett_OrderBy["Harvests"] = "harvests";
})(Sett_OrderBy = exports.Sett_OrderBy || (exports.Sett_OrderBy = {}));
var Snapshot_OrderBy;
(function (Snapshot_OrderBy) {
    Snapshot_OrderBy["Id"] = "id";
    Snapshot_OrderBy["Timestamp"] = "timestamp";
})(Snapshot_OrderBy = exports.Snapshot_OrderBy || (exports.Snapshot_OrderBy = {}));
var Strategy_OrderBy;
(function (Strategy_OrderBy) {
    Strategy_OrderBy["Id"] = "id";
    Strategy_OrderBy["Controller"] = "controller";
    Strategy_OrderBy["Sett"] = "sett";
    Strategy_OrderBy["TreeDistributions"] = "treeDistributions";
    Strategy_OrderBy["Harvests"] = "harvests";
})(Strategy_OrderBy = exports.Strategy_OrderBy || (exports.Strategy_OrderBy = {}));
var TokenDistribution_OrderBy;
(function (TokenDistribution_OrderBy) {
    TokenDistribution_OrderBy["Id"] = "id";
    TokenDistribution_OrderBy["Timestamp"] = "timestamp";
    TokenDistribution_OrderBy["Token"] = "token";
    TokenDistribution_OrderBy["Amount"] = "amount";
    TokenDistribution_OrderBy["BlockNumber"] = "blockNumber";
    TokenDistribution_OrderBy["Strategy"] = "strategy";
    TokenDistribution_OrderBy["Sett"] = "sett";
})(TokenDistribution_OrderBy = exports.TokenDistribution_OrderBy || (exports.TokenDistribution_OrderBy = {}));
var Token_OrderBy;
(function (Token_OrderBy) {
    Token_OrderBy["Id"] = "id";
    Token_OrderBy["Name"] = "name";
    Token_OrderBy["Symbol"] = "symbol";
    Token_OrderBy["Decimals"] = "decimals";
    Token_OrderBy["TotalSupply"] = "totalSupply";
})(Token_OrderBy = exports.Token_OrderBy || (exports.Token_OrderBy = {}));
var Transfer_OrderBy;
(function (Transfer_OrderBy) {
    Transfer_OrderBy["Id"] = "id";
    Transfer_OrderBy["Timestamp"] = "timestamp";
    Transfer_OrderBy["Sett"] = "sett";
    Transfer_OrderBy["From"] = "from";
    Transfer_OrderBy["To"] = "to";
    Transfer_OrderBy["Amount"] = "amount";
})(Transfer_OrderBy = exports.Transfer_OrderBy || (exports.Transfer_OrderBy = {}));
var UserSettBalance_OrderBy;
(function (UserSettBalance_OrderBy) {
    UserSettBalance_OrderBy["Id"] = "id";
    UserSettBalance_OrderBy["User"] = "user";
    UserSettBalance_OrderBy["Sett"] = "sett";
    UserSettBalance_OrderBy["NetDeposit"] = "netDeposit";
    UserSettBalance_OrderBy["NetShareDeposit"] = "netShareDeposit";
    UserSettBalance_OrderBy["GrossDeposit"] = "grossDeposit";
    UserSettBalance_OrderBy["GrossShareDeposit"] = "grossShareDeposit";
    UserSettBalance_OrderBy["GrossWithdraw"] = "grossWithdraw";
    UserSettBalance_OrderBy["GrossShareWithdraw"] = "grossShareWithdraw";
})(UserSettBalance_OrderBy = exports.UserSettBalance_OrderBy || (exports.UserSettBalance_OrderBy = {}));
var User_OrderBy;
(function (User_OrderBy) {
    User_OrderBy["Id"] = "id";
    User_OrderBy["SettBalances"] = "settBalances";
})(User_OrderBy = exports.User_OrderBy || (exports.User_OrderBy = {}));
var VaultBalance_OrderBy;
(function (VaultBalance_OrderBy) {
    VaultBalance_OrderBy["Id"] = "id";
    VaultBalance_OrderBy["NetDeposit"] = "netDeposit";
    VaultBalance_OrderBy["NetShareDeposit"] = "netShareDeposit";
    VaultBalance_OrderBy["GrossDeposit"] = "grossDeposit";
    VaultBalance_OrderBy["GrossShareDeposit"] = "grossShareDeposit";
    VaultBalance_OrderBy["GrossWithdraw"] = "grossWithdraw";
    VaultBalance_OrderBy["GrossShareWithdraw"] = "grossShareWithdraw";
})(VaultBalance_OrderBy = exports.VaultBalance_OrderBy || (exports.VaultBalance_OrderBy = {}));
var Vault_OrderBy;
(function (Vault_OrderBy) {
    Vault_OrderBy["Id"] = "id";
    Vault_OrderBy["Token"] = "token";
    Vault_OrderBy["Balance"] = "balance";
    Vault_OrderBy["PricePerFullShare"] = "pricePerFullShare";
})(Vault_OrderBy = exports.Vault_OrderBy || (exports.Vault_OrderBy = {}));
var _SubgraphErrorPolicy_;
(function (_SubgraphErrorPolicy_) {
    /** Data will be returned even if the subgraph has indexing errors */
    _SubgraphErrorPolicy_["Allow"] = "allow";
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    _SubgraphErrorPolicy_["Deny"] = "deny";
})(_SubgraphErrorPolicy_ = exports._SubgraphErrorPolicy_ || (exports._SubgraphErrorPolicy_ = {}));
exports.SettFragmentDoc = (0, graphql_tag_1.default) `
  fragment Sett on Sett {
    id
    name
    symbol
    decimals
    totalSupply
    token {
      id
      name
      symbol
      decimals
      totalSupply
    }
    balance
    pricePerFullShare
    netDeposit
    netShareDeposit
    grossDeposit
    grossShareDeposit
    grossWithdraw
    grossShareWithdraw
    controller {
      id
    }
    strategy {
      id
    }
  }
`;
exports.SettDocument = (0, graphql_tag_1.default) `
  query Sett($id: ID!, $block: Block_height) {
    sett(id: $id, block: $block) {
      ...Sett
    }
  }
  ${exports.SettFragmentDoc}
`;
const defaultWrapper = (action, _operationName) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        Sett(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SettDocument, variables, {
                ...requestHeaders,
                ...wrappedRequestHeaders,
            }), 'Sett');
        },
    };
}
exports.getSdk = getSdk;
//# sourceMappingURL=badger.js.map