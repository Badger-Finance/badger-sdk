import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: any;
    BigInt: any;
    Bytes: any;
};
export declare type BadgerTreeDistribution = TokenDistribution & {
    __typename?: 'BadgerTreeDistribution';
    id: Scalars['ID'];
    timestamp: Scalars['Int'];
    token: Token;
    amount: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    strategy?: Maybe<Strategy>;
    sett?: Maybe<Sett>;
};
export declare type BadgerTreeDistribution_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    token?: Maybe<Scalars['String']>;
    token_not?: Maybe<Scalars['String']>;
    token_gt?: Maybe<Scalars['String']>;
    token_lt?: Maybe<Scalars['String']>;
    token_gte?: Maybe<Scalars['String']>;
    token_lte?: Maybe<Scalars['String']>;
    token_in?: Maybe<Array<Scalars['String']>>;
    token_not_in?: Maybe<Array<Scalars['String']>>;
    token_contains?: Maybe<Scalars['String']>;
    token_not_contains?: Maybe<Scalars['String']>;
    token_starts_with?: Maybe<Scalars['String']>;
    token_not_starts_with?: Maybe<Scalars['String']>;
    token_ends_with?: Maybe<Scalars['String']>;
    token_not_ends_with?: Maybe<Scalars['String']>;
    amount?: Maybe<Scalars['BigInt']>;
    amount_not?: Maybe<Scalars['BigInt']>;
    amount_gt?: Maybe<Scalars['BigInt']>;
    amount_lt?: Maybe<Scalars['BigInt']>;
    amount_gte?: Maybe<Scalars['BigInt']>;
    amount_lte?: Maybe<Scalars['BigInt']>;
    amount_in?: Maybe<Array<Scalars['BigInt']>>;
    amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
    blockNumber?: Maybe<Scalars['BigInt']>;
    blockNumber_not?: Maybe<Scalars['BigInt']>;
    blockNumber_gt?: Maybe<Scalars['BigInt']>;
    blockNumber_lt?: Maybe<Scalars['BigInt']>;
    blockNumber_gte?: Maybe<Scalars['BigInt']>;
    blockNumber_lte?: Maybe<Scalars['BigInt']>;
    blockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
    strategy?: Maybe<Scalars['String']>;
    strategy_not?: Maybe<Scalars['String']>;
    strategy_gt?: Maybe<Scalars['String']>;
    strategy_lt?: Maybe<Scalars['String']>;
    strategy_gte?: Maybe<Scalars['String']>;
    strategy_lte?: Maybe<Scalars['String']>;
    strategy_in?: Maybe<Array<Scalars['String']>>;
    strategy_not_in?: Maybe<Array<Scalars['String']>>;
    strategy_contains?: Maybe<Scalars['String']>;
    strategy_not_contains?: Maybe<Scalars['String']>;
    strategy_starts_with?: Maybe<Scalars['String']>;
    strategy_not_starts_with?: Maybe<Scalars['String']>;
    strategy_ends_with?: Maybe<Scalars['String']>;
    strategy_not_ends_with?: Maybe<Scalars['String']>;
    sett?: Maybe<Scalars['String']>;
    sett_not?: Maybe<Scalars['String']>;
    sett_gt?: Maybe<Scalars['String']>;
    sett_lt?: Maybe<Scalars['String']>;
    sett_gte?: Maybe<Scalars['String']>;
    sett_lte?: Maybe<Scalars['String']>;
    sett_in?: Maybe<Array<Scalars['String']>>;
    sett_not_in?: Maybe<Array<Scalars['String']>>;
    sett_contains?: Maybe<Scalars['String']>;
    sett_not_contains?: Maybe<Scalars['String']>;
    sett_starts_with?: Maybe<Scalars['String']>;
    sett_not_starts_with?: Maybe<Scalars['String']>;
    sett_ends_with?: Maybe<Scalars['String']>;
    sett_not_ends_with?: Maybe<Scalars['String']>;
};
export declare enum BadgerTreeDistribution_OrderBy {
    Id = "id",
    Timestamp = "timestamp",
    Token = "token",
    Amount = "amount",
    BlockNumber = "blockNumber",
    Strategy = "strategy",
    Sett = "sett"
}
export declare type Block_Height = {
    hash?: Maybe<Scalars['Bytes']>;
    number?: Maybe<Scalars['Int']>;
};
export declare type Controller = {
    __typename?: 'Controller';
    id: Scalars['ID'];
    strategies: Array<Strategy>;
    setts: Array<Sett>;
};
export declare type ControllerStrategiesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Strategy_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Strategy_Filter>;
};
export declare type ControllerSettsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Sett_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Sett_Filter>;
};
export declare type Controller_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
};
export declare enum Controller_OrderBy {
    Id = "id",
    Strategies = "strategies",
    Setts = "setts"
}
export declare type Erc20 = {
    id: Scalars['ID'];
    name: Scalars['String'];
    symbol: Scalars['String'];
    decimals: Scalars['BigInt'];
    totalSupply: Scalars['BigInt'];
};
export declare type Erc20_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    name?: Maybe<Scalars['String']>;
    name_not?: Maybe<Scalars['String']>;
    name_gt?: Maybe<Scalars['String']>;
    name_lt?: Maybe<Scalars['String']>;
    name_gte?: Maybe<Scalars['String']>;
    name_lte?: Maybe<Scalars['String']>;
    name_in?: Maybe<Array<Scalars['String']>>;
    name_not_in?: Maybe<Array<Scalars['String']>>;
    name_contains?: Maybe<Scalars['String']>;
    name_not_contains?: Maybe<Scalars['String']>;
    name_starts_with?: Maybe<Scalars['String']>;
    name_not_starts_with?: Maybe<Scalars['String']>;
    name_ends_with?: Maybe<Scalars['String']>;
    name_not_ends_with?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    symbol_not?: Maybe<Scalars['String']>;
    symbol_gt?: Maybe<Scalars['String']>;
    symbol_lt?: Maybe<Scalars['String']>;
    symbol_gte?: Maybe<Scalars['String']>;
    symbol_lte?: Maybe<Scalars['String']>;
    symbol_in?: Maybe<Array<Scalars['String']>>;
    symbol_not_in?: Maybe<Array<Scalars['String']>>;
    symbol_contains?: Maybe<Scalars['String']>;
    symbol_not_contains?: Maybe<Scalars['String']>;
    symbol_starts_with?: Maybe<Scalars['String']>;
    symbol_not_starts_with?: Maybe<Scalars['String']>;
    symbol_ends_with?: Maybe<Scalars['String']>;
    symbol_not_ends_with?: Maybe<Scalars['String']>;
    decimals?: Maybe<Scalars['BigInt']>;
    decimals_not?: Maybe<Scalars['BigInt']>;
    decimals_gt?: Maybe<Scalars['BigInt']>;
    decimals_lt?: Maybe<Scalars['BigInt']>;
    decimals_gte?: Maybe<Scalars['BigInt']>;
    decimals_lte?: Maybe<Scalars['BigInt']>;
    decimals_in?: Maybe<Array<Scalars['BigInt']>>;
    decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSupply?: Maybe<Scalars['BigInt']>;
    totalSupply_not?: Maybe<Scalars['BigInt']>;
    totalSupply_gt?: Maybe<Scalars['BigInt']>;
    totalSupply_lt?: Maybe<Scalars['BigInt']>;
    totalSupply_gte?: Maybe<Scalars['BigInt']>;
    totalSupply_lte?: Maybe<Scalars['BigInt']>;
    totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum Erc20_OrderBy {
    Id = "id",
    Name = "name",
    Symbol = "symbol",
    Decimals = "decimals",
    TotalSupply = "totalSupply"
}
export declare enum OrderDirection {
    Asc = "asc",
    Desc = "desc"
}
export declare type Query = {
    __typename?: 'Query';
    registry?: Maybe<Registry>;
    registries: Array<Registry>;
    token?: Maybe<Token>;
    tokens: Array<Token>;
    sett?: Maybe<Sett>;
    setts: Array<Sett>;
    settSnapshot?: Maybe<SettSnapshot>;
    settSnapshots: Array<SettSnapshot>;
    userSettBalance?: Maybe<UserSettBalance>;
    userSettBalances: Array<UserSettBalance>;
    transfer?: Maybe<Transfer>;
    transfers: Array<Transfer>;
    user?: Maybe<User>;
    users: Array<User>;
    badgerTreeDistribution?: Maybe<BadgerTreeDistribution>;
    badgerTreeDistributions: Array<BadgerTreeDistribution>;
    settHarvest?: Maybe<SettHarvest>;
    settHarvests: Array<SettHarvest>;
    strategy?: Maybe<Strategy>;
    strategies: Array<Strategy>;
    controller?: Maybe<Controller>;
    controllers: Array<Controller>;
    erc20?: Maybe<Erc20>;
    erc20S: Array<Erc20>;
    vault?: Maybe<Vault>;
    vaults: Array<Vault>;
    vaultBalance?: Maybe<VaultBalance>;
    vaultBalances: Array<VaultBalance>;
    snapshot?: Maybe<Snapshot>;
    snapshots: Array<Snapshot>;
    tokenDistribution?: Maybe<TokenDistribution>;
    tokenDistributions: Array<TokenDistribution>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
};
export declare type QueryRegistryArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryRegistriesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Registry_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Registry_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QueryTokenArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryTokensArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Token_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Token_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QuerySettArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QuerySettsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Sett_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Sett_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QuerySettSnapshotArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QuerySettSnapshotsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<SettSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<SettSnapshot_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QueryUserSettBalanceArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryUserSettBalancesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<UserSettBalance_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<UserSettBalance_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QueryTransferArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryTransfersArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Transfer_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Transfer_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QueryUserArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryUsersArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<User_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<User_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QueryBadgerTreeDistributionArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryBadgerTreeDistributionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<BadgerTreeDistribution_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<BadgerTreeDistribution_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QuerySettHarvestArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QuerySettHarvestsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<SettHarvest_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<SettHarvest_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QueryStrategyArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryStrategiesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Strategy_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Strategy_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QueryControllerArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryControllersArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Controller_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Controller_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QueryErc20Args = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryErc20SArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Erc20_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Erc20_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QueryVaultArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryVaultsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Vault_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Vault_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QueryVaultBalanceArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryVaultBalancesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<VaultBalance_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<VaultBalance_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QuerySnapshotArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QuerySnapshotsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Snapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Snapshot_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type QueryTokenDistributionArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type QueryTokenDistributionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TokenDistribution_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<TokenDistribution_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type Query_MetaArgs = {
    block?: Maybe<Block_Height>;
};
export declare type Registry = {
    __typename?: 'Registry';
    id: Scalars['ID'];
};
export declare type Registry_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
};
export declare enum Registry_OrderBy {
    Id = "id"
}
export declare type Sett = Erc20 & Vault & VaultBalance & {
    __typename?: 'Sett';
    id: Scalars['ID'];
    name: Scalars['String'];
    symbol: Scalars['String'];
    decimals: Scalars['BigInt'];
    totalSupply: Scalars['BigInt'];
    token: Token;
    balance: Scalars['BigInt'];
    pricePerFullShare: Scalars['BigInt'];
    netDeposit: Scalars['BigInt'];
    netShareDeposit: Scalars['BigInt'];
    grossDeposit: Scalars['BigInt'];
    grossShareDeposit: Scalars['BigInt'];
    grossWithdraw: Scalars['BigInt'];
    grossShareWithdraw: Scalars['BigInt'];
    controller?: Maybe<Controller>;
    strategy?: Maybe<Strategy>;
    treeDistributions: Array<BadgerTreeDistribution>;
    harvests: Array<SettHarvest>;
};
export declare type SettTreeDistributionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<BadgerTreeDistribution_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<BadgerTreeDistribution_Filter>;
};
export declare type SettHarvestsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<SettHarvest_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<SettHarvest_Filter>;
};
export declare type SettHarvest = TokenDistribution & {
    __typename?: 'SettHarvest';
    id: Scalars['ID'];
    timestamp: Scalars['Int'];
    token: Token;
    amount: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    strategy?: Maybe<Strategy>;
    sett?: Maybe<Sett>;
};
export declare type SettHarvest_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    token?: Maybe<Scalars['String']>;
    token_not?: Maybe<Scalars['String']>;
    token_gt?: Maybe<Scalars['String']>;
    token_lt?: Maybe<Scalars['String']>;
    token_gte?: Maybe<Scalars['String']>;
    token_lte?: Maybe<Scalars['String']>;
    token_in?: Maybe<Array<Scalars['String']>>;
    token_not_in?: Maybe<Array<Scalars['String']>>;
    token_contains?: Maybe<Scalars['String']>;
    token_not_contains?: Maybe<Scalars['String']>;
    token_starts_with?: Maybe<Scalars['String']>;
    token_not_starts_with?: Maybe<Scalars['String']>;
    token_ends_with?: Maybe<Scalars['String']>;
    token_not_ends_with?: Maybe<Scalars['String']>;
    amount?: Maybe<Scalars['BigInt']>;
    amount_not?: Maybe<Scalars['BigInt']>;
    amount_gt?: Maybe<Scalars['BigInt']>;
    amount_lt?: Maybe<Scalars['BigInt']>;
    amount_gte?: Maybe<Scalars['BigInt']>;
    amount_lte?: Maybe<Scalars['BigInt']>;
    amount_in?: Maybe<Array<Scalars['BigInt']>>;
    amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
    blockNumber?: Maybe<Scalars['BigInt']>;
    blockNumber_not?: Maybe<Scalars['BigInt']>;
    blockNumber_gt?: Maybe<Scalars['BigInt']>;
    blockNumber_lt?: Maybe<Scalars['BigInt']>;
    blockNumber_gte?: Maybe<Scalars['BigInt']>;
    blockNumber_lte?: Maybe<Scalars['BigInt']>;
    blockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
    strategy?: Maybe<Scalars['String']>;
    strategy_not?: Maybe<Scalars['String']>;
    strategy_gt?: Maybe<Scalars['String']>;
    strategy_lt?: Maybe<Scalars['String']>;
    strategy_gte?: Maybe<Scalars['String']>;
    strategy_lte?: Maybe<Scalars['String']>;
    strategy_in?: Maybe<Array<Scalars['String']>>;
    strategy_not_in?: Maybe<Array<Scalars['String']>>;
    strategy_contains?: Maybe<Scalars['String']>;
    strategy_not_contains?: Maybe<Scalars['String']>;
    strategy_starts_with?: Maybe<Scalars['String']>;
    strategy_not_starts_with?: Maybe<Scalars['String']>;
    strategy_ends_with?: Maybe<Scalars['String']>;
    strategy_not_ends_with?: Maybe<Scalars['String']>;
    sett?: Maybe<Scalars['String']>;
    sett_not?: Maybe<Scalars['String']>;
    sett_gt?: Maybe<Scalars['String']>;
    sett_lt?: Maybe<Scalars['String']>;
    sett_gte?: Maybe<Scalars['String']>;
    sett_lte?: Maybe<Scalars['String']>;
    sett_in?: Maybe<Array<Scalars['String']>>;
    sett_not_in?: Maybe<Array<Scalars['String']>>;
    sett_contains?: Maybe<Scalars['String']>;
    sett_not_contains?: Maybe<Scalars['String']>;
    sett_starts_with?: Maybe<Scalars['String']>;
    sett_not_starts_with?: Maybe<Scalars['String']>;
    sett_ends_with?: Maybe<Scalars['String']>;
    sett_not_ends_with?: Maybe<Scalars['String']>;
};
export declare enum SettHarvest_OrderBy {
    Id = "id",
    Timestamp = "timestamp",
    Token = "token",
    Amount = "amount",
    BlockNumber = "blockNumber",
    Strategy = "strategy",
    Sett = "sett"
}
export declare type SettSnapshot = Erc20 & Vault & VaultBalance & Snapshot & {
    __typename?: 'SettSnapshot';
    id: Scalars['ID'];
    timestamp: Scalars['Int'];
    name: Scalars['String'];
    symbol: Scalars['String'];
    decimals: Scalars['BigInt'];
    totalSupply: Scalars['BigInt'];
    token: Token;
    balance: Scalars['BigInt'];
    pricePerFullShare: Scalars['BigInt'];
    netDeposit: Scalars['BigInt'];
    netShareDeposit: Scalars['BigInt'];
    grossDeposit: Scalars['BigInt'];
    grossShareDeposit: Scalars['BigInt'];
    grossWithdraw: Scalars['BigInt'];
    grossShareWithdraw: Scalars['BigInt'];
};
export declare type SettSnapshot_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    name?: Maybe<Scalars['String']>;
    name_not?: Maybe<Scalars['String']>;
    name_gt?: Maybe<Scalars['String']>;
    name_lt?: Maybe<Scalars['String']>;
    name_gte?: Maybe<Scalars['String']>;
    name_lte?: Maybe<Scalars['String']>;
    name_in?: Maybe<Array<Scalars['String']>>;
    name_not_in?: Maybe<Array<Scalars['String']>>;
    name_contains?: Maybe<Scalars['String']>;
    name_not_contains?: Maybe<Scalars['String']>;
    name_starts_with?: Maybe<Scalars['String']>;
    name_not_starts_with?: Maybe<Scalars['String']>;
    name_ends_with?: Maybe<Scalars['String']>;
    name_not_ends_with?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    symbol_not?: Maybe<Scalars['String']>;
    symbol_gt?: Maybe<Scalars['String']>;
    symbol_lt?: Maybe<Scalars['String']>;
    symbol_gte?: Maybe<Scalars['String']>;
    symbol_lte?: Maybe<Scalars['String']>;
    symbol_in?: Maybe<Array<Scalars['String']>>;
    symbol_not_in?: Maybe<Array<Scalars['String']>>;
    symbol_contains?: Maybe<Scalars['String']>;
    symbol_not_contains?: Maybe<Scalars['String']>;
    symbol_starts_with?: Maybe<Scalars['String']>;
    symbol_not_starts_with?: Maybe<Scalars['String']>;
    symbol_ends_with?: Maybe<Scalars['String']>;
    symbol_not_ends_with?: Maybe<Scalars['String']>;
    decimals?: Maybe<Scalars['BigInt']>;
    decimals_not?: Maybe<Scalars['BigInt']>;
    decimals_gt?: Maybe<Scalars['BigInt']>;
    decimals_lt?: Maybe<Scalars['BigInt']>;
    decimals_gte?: Maybe<Scalars['BigInt']>;
    decimals_lte?: Maybe<Scalars['BigInt']>;
    decimals_in?: Maybe<Array<Scalars['BigInt']>>;
    decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSupply?: Maybe<Scalars['BigInt']>;
    totalSupply_not?: Maybe<Scalars['BigInt']>;
    totalSupply_gt?: Maybe<Scalars['BigInt']>;
    totalSupply_lt?: Maybe<Scalars['BigInt']>;
    totalSupply_gte?: Maybe<Scalars['BigInt']>;
    totalSupply_lte?: Maybe<Scalars['BigInt']>;
    totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
    token?: Maybe<Scalars['String']>;
    token_not?: Maybe<Scalars['String']>;
    token_gt?: Maybe<Scalars['String']>;
    token_lt?: Maybe<Scalars['String']>;
    token_gte?: Maybe<Scalars['String']>;
    token_lte?: Maybe<Scalars['String']>;
    token_in?: Maybe<Array<Scalars['String']>>;
    token_not_in?: Maybe<Array<Scalars['String']>>;
    token_contains?: Maybe<Scalars['String']>;
    token_not_contains?: Maybe<Scalars['String']>;
    token_starts_with?: Maybe<Scalars['String']>;
    token_not_starts_with?: Maybe<Scalars['String']>;
    token_ends_with?: Maybe<Scalars['String']>;
    token_not_ends_with?: Maybe<Scalars['String']>;
    balance?: Maybe<Scalars['BigInt']>;
    balance_not?: Maybe<Scalars['BigInt']>;
    balance_gt?: Maybe<Scalars['BigInt']>;
    balance_lt?: Maybe<Scalars['BigInt']>;
    balance_gte?: Maybe<Scalars['BigInt']>;
    balance_lte?: Maybe<Scalars['BigInt']>;
    balance_in?: Maybe<Array<Scalars['BigInt']>>;
    balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
    pricePerFullShare?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_not?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_gt?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_lt?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_gte?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_lte?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_in?: Maybe<Array<Scalars['BigInt']>>;
    pricePerFullShare_not_in?: Maybe<Array<Scalars['BigInt']>>;
    netDeposit?: Maybe<Scalars['BigInt']>;
    netDeposit_not?: Maybe<Scalars['BigInt']>;
    netDeposit_gt?: Maybe<Scalars['BigInt']>;
    netDeposit_lt?: Maybe<Scalars['BigInt']>;
    netDeposit_gte?: Maybe<Scalars['BigInt']>;
    netDeposit_lte?: Maybe<Scalars['BigInt']>;
    netDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    netDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    netShareDeposit?: Maybe<Scalars['BigInt']>;
    netShareDeposit_not?: Maybe<Scalars['BigInt']>;
    netShareDeposit_gt?: Maybe<Scalars['BigInt']>;
    netShareDeposit_lt?: Maybe<Scalars['BigInt']>;
    netShareDeposit_gte?: Maybe<Scalars['BigInt']>;
    netShareDeposit_lte?: Maybe<Scalars['BigInt']>;
    netShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    netShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossDeposit?: Maybe<Scalars['BigInt']>;
    grossDeposit_not?: Maybe<Scalars['BigInt']>;
    grossDeposit_gt?: Maybe<Scalars['BigInt']>;
    grossDeposit_lt?: Maybe<Scalars['BigInt']>;
    grossDeposit_gte?: Maybe<Scalars['BigInt']>;
    grossDeposit_lte?: Maybe<Scalars['BigInt']>;
    grossDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    grossDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareDeposit?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_not?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_gt?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_lt?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_gte?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_lte?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossWithdraw?: Maybe<Scalars['BigInt']>;
    grossWithdraw_not?: Maybe<Scalars['BigInt']>;
    grossWithdraw_gt?: Maybe<Scalars['BigInt']>;
    grossWithdraw_lt?: Maybe<Scalars['BigInt']>;
    grossWithdraw_gte?: Maybe<Scalars['BigInt']>;
    grossWithdraw_lte?: Maybe<Scalars['BigInt']>;
    grossWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
    grossWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareWithdraw?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_not?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_gt?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_lt?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_gte?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_lte?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum SettSnapshot_OrderBy {
    Id = "id",
    Timestamp = "timestamp",
    Name = "name",
    Symbol = "symbol",
    Decimals = "decimals",
    TotalSupply = "totalSupply",
    Token = "token",
    Balance = "balance",
    PricePerFullShare = "pricePerFullShare",
    NetDeposit = "netDeposit",
    NetShareDeposit = "netShareDeposit",
    GrossDeposit = "grossDeposit",
    GrossShareDeposit = "grossShareDeposit",
    GrossWithdraw = "grossWithdraw",
    GrossShareWithdraw = "grossShareWithdraw"
}
export declare type Sett_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    name?: Maybe<Scalars['String']>;
    name_not?: Maybe<Scalars['String']>;
    name_gt?: Maybe<Scalars['String']>;
    name_lt?: Maybe<Scalars['String']>;
    name_gte?: Maybe<Scalars['String']>;
    name_lte?: Maybe<Scalars['String']>;
    name_in?: Maybe<Array<Scalars['String']>>;
    name_not_in?: Maybe<Array<Scalars['String']>>;
    name_contains?: Maybe<Scalars['String']>;
    name_not_contains?: Maybe<Scalars['String']>;
    name_starts_with?: Maybe<Scalars['String']>;
    name_not_starts_with?: Maybe<Scalars['String']>;
    name_ends_with?: Maybe<Scalars['String']>;
    name_not_ends_with?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    symbol_not?: Maybe<Scalars['String']>;
    symbol_gt?: Maybe<Scalars['String']>;
    symbol_lt?: Maybe<Scalars['String']>;
    symbol_gte?: Maybe<Scalars['String']>;
    symbol_lte?: Maybe<Scalars['String']>;
    symbol_in?: Maybe<Array<Scalars['String']>>;
    symbol_not_in?: Maybe<Array<Scalars['String']>>;
    symbol_contains?: Maybe<Scalars['String']>;
    symbol_not_contains?: Maybe<Scalars['String']>;
    symbol_starts_with?: Maybe<Scalars['String']>;
    symbol_not_starts_with?: Maybe<Scalars['String']>;
    symbol_ends_with?: Maybe<Scalars['String']>;
    symbol_not_ends_with?: Maybe<Scalars['String']>;
    decimals?: Maybe<Scalars['BigInt']>;
    decimals_not?: Maybe<Scalars['BigInt']>;
    decimals_gt?: Maybe<Scalars['BigInt']>;
    decimals_lt?: Maybe<Scalars['BigInt']>;
    decimals_gte?: Maybe<Scalars['BigInt']>;
    decimals_lte?: Maybe<Scalars['BigInt']>;
    decimals_in?: Maybe<Array<Scalars['BigInt']>>;
    decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSupply?: Maybe<Scalars['BigInt']>;
    totalSupply_not?: Maybe<Scalars['BigInt']>;
    totalSupply_gt?: Maybe<Scalars['BigInt']>;
    totalSupply_lt?: Maybe<Scalars['BigInt']>;
    totalSupply_gte?: Maybe<Scalars['BigInt']>;
    totalSupply_lte?: Maybe<Scalars['BigInt']>;
    totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
    token?: Maybe<Scalars['String']>;
    token_not?: Maybe<Scalars['String']>;
    token_gt?: Maybe<Scalars['String']>;
    token_lt?: Maybe<Scalars['String']>;
    token_gte?: Maybe<Scalars['String']>;
    token_lte?: Maybe<Scalars['String']>;
    token_in?: Maybe<Array<Scalars['String']>>;
    token_not_in?: Maybe<Array<Scalars['String']>>;
    token_contains?: Maybe<Scalars['String']>;
    token_not_contains?: Maybe<Scalars['String']>;
    token_starts_with?: Maybe<Scalars['String']>;
    token_not_starts_with?: Maybe<Scalars['String']>;
    token_ends_with?: Maybe<Scalars['String']>;
    token_not_ends_with?: Maybe<Scalars['String']>;
    balance?: Maybe<Scalars['BigInt']>;
    balance_not?: Maybe<Scalars['BigInt']>;
    balance_gt?: Maybe<Scalars['BigInt']>;
    balance_lt?: Maybe<Scalars['BigInt']>;
    balance_gte?: Maybe<Scalars['BigInt']>;
    balance_lte?: Maybe<Scalars['BigInt']>;
    balance_in?: Maybe<Array<Scalars['BigInt']>>;
    balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
    pricePerFullShare?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_not?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_gt?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_lt?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_gte?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_lte?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_in?: Maybe<Array<Scalars['BigInt']>>;
    pricePerFullShare_not_in?: Maybe<Array<Scalars['BigInt']>>;
    netDeposit?: Maybe<Scalars['BigInt']>;
    netDeposit_not?: Maybe<Scalars['BigInt']>;
    netDeposit_gt?: Maybe<Scalars['BigInt']>;
    netDeposit_lt?: Maybe<Scalars['BigInt']>;
    netDeposit_gte?: Maybe<Scalars['BigInt']>;
    netDeposit_lte?: Maybe<Scalars['BigInt']>;
    netDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    netDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    netShareDeposit?: Maybe<Scalars['BigInt']>;
    netShareDeposit_not?: Maybe<Scalars['BigInt']>;
    netShareDeposit_gt?: Maybe<Scalars['BigInt']>;
    netShareDeposit_lt?: Maybe<Scalars['BigInt']>;
    netShareDeposit_gte?: Maybe<Scalars['BigInt']>;
    netShareDeposit_lte?: Maybe<Scalars['BigInt']>;
    netShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    netShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossDeposit?: Maybe<Scalars['BigInt']>;
    grossDeposit_not?: Maybe<Scalars['BigInt']>;
    grossDeposit_gt?: Maybe<Scalars['BigInt']>;
    grossDeposit_lt?: Maybe<Scalars['BigInt']>;
    grossDeposit_gte?: Maybe<Scalars['BigInt']>;
    grossDeposit_lte?: Maybe<Scalars['BigInt']>;
    grossDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    grossDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareDeposit?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_not?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_gt?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_lt?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_gte?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_lte?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossWithdraw?: Maybe<Scalars['BigInt']>;
    grossWithdraw_not?: Maybe<Scalars['BigInt']>;
    grossWithdraw_gt?: Maybe<Scalars['BigInt']>;
    grossWithdraw_lt?: Maybe<Scalars['BigInt']>;
    grossWithdraw_gte?: Maybe<Scalars['BigInt']>;
    grossWithdraw_lte?: Maybe<Scalars['BigInt']>;
    grossWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
    grossWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareWithdraw?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_not?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_gt?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_lt?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_gte?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_lte?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
    controller?: Maybe<Scalars['String']>;
    controller_not?: Maybe<Scalars['String']>;
    controller_gt?: Maybe<Scalars['String']>;
    controller_lt?: Maybe<Scalars['String']>;
    controller_gte?: Maybe<Scalars['String']>;
    controller_lte?: Maybe<Scalars['String']>;
    controller_in?: Maybe<Array<Scalars['String']>>;
    controller_not_in?: Maybe<Array<Scalars['String']>>;
    controller_contains?: Maybe<Scalars['String']>;
    controller_not_contains?: Maybe<Scalars['String']>;
    controller_starts_with?: Maybe<Scalars['String']>;
    controller_not_starts_with?: Maybe<Scalars['String']>;
    controller_ends_with?: Maybe<Scalars['String']>;
    controller_not_ends_with?: Maybe<Scalars['String']>;
    strategy?: Maybe<Scalars['String']>;
    strategy_not?: Maybe<Scalars['String']>;
    strategy_gt?: Maybe<Scalars['String']>;
    strategy_lt?: Maybe<Scalars['String']>;
    strategy_gte?: Maybe<Scalars['String']>;
    strategy_lte?: Maybe<Scalars['String']>;
    strategy_in?: Maybe<Array<Scalars['String']>>;
    strategy_not_in?: Maybe<Array<Scalars['String']>>;
    strategy_contains?: Maybe<Scalars['String']>;
    strategy_not_contains?: Maybe<Scalars['String']>;
    strategy_starts_with?: Maybe<Scalars['String']>;
    strategy_not_starts_with?: Maybe<Scalars['String']>;
    strategy_ends_with?: Maybe<Scalars['String']>;
    strategy_not_ends_with?: Maybe<Scalars['String']>;
};
export declare enum Sett_OrderBy {
    Id = "id",
    Name = "name",
    Symbol = "symbol",
    Decimals = "decimals",
    TotalSupply = "totalSupply",
    Token = "token",
    Balance = "balance",
    PricePerFullShare = "pricePerFullShare",
    NetDeposit = "netDeposit",
    NetShareDeposit = "netShareDeposit",
    GrossDeposit = "grossDeposit",
    GrossShareDeposit = "grossShareDeposit",
    GrossWithdraw = "grossWithdraw",
    GrossShareWithdraw = "grossShareWithdraw",
    Controller = "controller",
    Strategy = "strategy",
    TreeDistributions = "treeDistributions",
    Harvests = "harvests"
}
export declare type Snapshot = {
    id: Scalars['ID'];
    timestamp: Scalars['Int'];
};
export declare type Snapshot_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};
export declare enum Snapshot_OrderBy {
    Id = "id",
    Timestamp = "timestamp"
}
export declare type Strategy = {
    __typename?: 'Strategy';
    id: Scalars['ID'];
    controller?: Maybe<Controller>;
    sett?: Maybe<Sett>;
    treeDistributions: Array<BadgerTreeDistribution>;
    harvests: Array<SettHarvest>;
};
export declare type StrategyTreeDistributionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<BadgerTreeDistribution_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<BadgerTreeDistribution_Filter>;
};
export declare type StrategyHarvestsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<SettHarvest_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<SettHarvest_Filter>;
};
export declare type Strategy_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    controller?: Maybe<Scalars['String']>;
    controller_not?: Maybe<Scalars['String']>;
    controller_gt?: Maybe<Scalars['String']>;
    controller_lt?: Maybe<Scalars['String']>;
    controller_gte?: Maybe<Scalars['String']>;
    controller_lte?: Maybe<Scalars['String']>;
    controller_in?: Maybe<Array<Scalars['String']>>;
    controller_not_in?: Maybe<Array<Scalars['String']>>;
    controller_contains?: Maybe<Scalars['String']>;
    controller_not_contains?: Maybe<Scalars['String']>;
    controller_starts_with?: Maybe<Scalars['String']>;
    controller_not_starts_with?: Maybe<Scalars['String']>;
    controller_ends_with?: Maybe<Scalars['String']>;
    controller_not_ends_with?: Maybe<Scalars['String']>;
    sett?: Maybe<Scalars['String']>;
    sett_not?: Maybe<Scalars['String']>;
    sett_gt?: Maybe<Scalars['String']>;
    sett_lt?: Maybe<Scalars['String']>;
    sett_gte?: Maybe<Scalars['String']>;
    sett_lte?: Maybe<Scalars['String']>;
    sett_in?: Maybe<Array<Scalars['String']>>;
    sett_not_in?: Maybe<Array<Scalars['String']>>;
    sett_contains?: Maybe<Scalars['String']>;
    sett_not_contains?: Maybe<Scalars['String']>;
    sett_starts_with?: Maybe<Scalars['String']>;
    sett_not_starts_with?: Maybe<Scalars['String']>;
    sett_ends_with?: Maybe<Scalars['String']>;
    sett_not_ends_with?: Maybe<Scalars['String']>;
};
export declare enum Strategy_OrderBy {
    Id = "id",
    Controller = "controller",
    Sett = "sett",
    TreeDistributions = "treeDistributions",
    Harvests = "harvests"
}
export declare type Subscription = {
    __typename?: 'Subscription';
    registry?: Maybe<Registry>;
    registries: Array<Registry>;
    token?: Maybe<Token>;
    tokens: Array<Token>;
    sett?: Maybe<Sett>;
    setts: Array<Sett>;
    settSnapshot?: Maybe<SettSnapshot>;
    settSnapshots: Array<SettSnapshot>;
    userSettBalance?: Maybe<UserSettBalance>;
    userSettBalances: Array<UserSettBalance>;
    transfer?: Maybe<Transfer>;
    transfers: Array<Transfer>;
    user?: Maybe<User>;
    users: Array<User>;
    badgerTreeDistribution?: Maybe<BadgerTreeDistribution>;
    badgerTreeDistributions: Array<BadgerTreeDistribution>;
    settHarvest?: Maybe<SettHarvest>;
    settHarvests: Array<SettHarvest>;
    strategy?: Maybe<Strategy>;
    strategies: Array<Strategy>;
    controller?: Maybe<Controller>;
    controllers: Array<Controller>;
    erc20?: Maybe<Erc20>;
    erc20S: Array<Erc20>;
    vault?: Maybe<Vault>;
    vaults: Array<Vault>;
    vaultBalance?: Maybe<VaultBalance>;
    vaultBalances: Array<VaultBalance>;
    snapshot?: Maybe<Snapshot>;
    snapshots: Array<Snapshot>;
    tokenDistribution?: Maybe<TokenDistribution>;
    tokenDistributions: Array<TokenDistribution>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
};
export declare type SubscriptionRegistryArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionRegistriesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Registry_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Registry_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionTokenArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionTokensArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Token_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Token_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionSettArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionSettsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Sett_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Sett_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionSettSnapshotArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionSettSnapshotsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<SettSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<SettSnapshot_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionUserSettBalanceArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionUserSettBalancesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<UserSettBalance_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<UserSettBalance_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionTransferArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionTransfersArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Transfer_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Transfer_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionUserArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionUsersArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<User_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<User_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionBadgerTreeDistributionArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionBadgerTreeDistributionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<BadgerTreeDistribution_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<BadgerTreeDistribution_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionSettHarvestArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionSettHarvestsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<SettHarvest_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<SettHarvest_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionStrategyArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionStrategiesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Strategy_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Strategy_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionControllerArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionControllersArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Controller_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Controller_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionErc20Args = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionErc20SArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Erc20_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Erc20_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionVaultArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionVaultsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Vault_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Vault_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionVaultBalanceArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionVaultBalancesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<VaultBalance_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<VaultBalance_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionSnapshotArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionSnapshotsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Snapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Snapshot_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionTokenDistributionArgs = {
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
};
export declare type SubscriptionTokenDistributionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TokenDistribution_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<TokenDistribution_Filter>;
    block?: Maybe<Block_Height>;
};
export declare type Subscription_MetaArgs = {
    block?: Maybe<Block_Height>;
};
export declare type Token = Erc20 & {
    __typename?: 'Token';
    id: Scalars['ID'];
    name: Scalars['String'];
    symbol: Scalars['String'];
    decimals: Scalars['BigInt'];
    totalSupply: Scalars['BigInt'];
};
export declare type TokenDistribution = {
    id: Scalars['ID'];
    timestamp: Scalars['Int'];
    token: Token;
    amount: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    strategy?: Maybe<Strategy>;
    sett?: Maybe<Sett>;
};
export declare type TokenDistribution_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    token?: Maybe<Scalars['String']>;
    token_not?: Maybe<Scalars['String']>;
    token_gt?: Maybe<Scalars['String']>;
    token_lt?: Maybe<Scalars['String']>;
    token_gte?: Maybe<Scalars['String']>;
    token_lte?: Maybe<Scalars['String']>;
    token_in?: Maybe<Array<Scalars['String']>>;
    token_not_in?: Maybe<Array<Scalars['String']>>;
    token_contains?: Maybe<Scalars['String']>;
    token_not_contains?: Maybe<Scalars['String']>;
    token_starts_with?: Maybe<Scalars['String']>;
    token_not_starts_with?: Maybe<Scalars['String']>;
    token_ends_with?: Maybe<Scalars['String']>;
    token_not_ends_with?: Maybe<Scalars['String']>;
    amount?: Maybe<Scalars['BigInt']>;
    amount_not?: Maybe<Scalars['BigInt']>;
    amount_gt?: Maybe<Scalars['BigInt']>;
    amount_lt?: Maybe<Scalars['BigInt']>;
    amount_gte?: Maybe<Scalars['BigInt']>;
    amount_lte?: Maybe<Scalars['BigInt']>;
    amount_in?: Maybe<Array<Scalars['BigInt']>>;
    amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
    blockNumber?: Maybe<Scalars['BigInt']>;
    blockNumber_not?: Maybe<Scalars['BigInt']>;
    blockNumber_gt?: Maybe<Scalars['BigInt']>;
    blockNumber_lt?: Maybe<Scalars['BigInt']>;
    blockNumber_gte?: Maybe<Scalars['BigInt']>;
    blockNumber_lte?: Maybe<Scalars['BigInt']>;
    blockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
    strategy?: Maybe<Scalars['String']>;
    strategy_not?: Maybe<Scalars['String']>;
    strategy_gt?: Maybe<Scalars['String']>;
    strategy_lt?: Maybe<Scalars['String']>;
    strategy_gte?: Maybe<Scalars['String']>;
    strategy_lte?: Maybe<Scalars['String']>;
    strategy_in?: Maybe<Array<Scalars['String']>>;
    strategy_not_in?: Maybe<Array<Scalars['String']>>;
    strategy_contains?: Maybe<Scalars['String']>;
    strategy_not_contains?: Maybe<Scalars['String']>;
    strategy_starts_with?: Maybe<Scalars['String']>;
    strategy_not_starts_with?: Maybe<Scalars['String']>;
    strategy_ends_with?: Maybe<Scalars['String']>;
    strategy_not_ends_with?: Maybe<Scalars['String']>;
    sett?: Maybe<Scalars['String']>;
    sett_not?: Maybe<Scalars['String']>;
    sett_gt?: Maybe<Scalars['String']>;
    sett_lt?: Maybe<Scalars['String']>;
    sett_gte?: Maybe<Scalars['String']>;
    sett_lte?: Maybe<Scalars['String']>;
    sett_in?: Maybe<Array<Scalars['String']>>;
    sett_not_in?: Maybe<Array<Scalars['String']>>;
    sett_contains?: Maybe<Scalars['String']>;
    sett_not_contains?: Maybe<Scalars['String']>;
    sett_starts_with?: Maybe<Scalars['String']>;
    sett_not_starts_with?: Maybe<Scalars['String']>;
    sett_ends_with?: Maybe<Scalars['String']>;
    sett_not_ends_with?: Maybe<Scalars['String']>;
};
export declare enum TokenDistribution_OrderBy {
    Id = "id",
    Timestamp = "timestamp",
    Token = "token",
    Amount = "amount",
    BlockNumber = "blockNumber",
    Strategy = "strategy",
    Sett = "sett"
}
export declare type Token_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    name?: Maybe<Scalars['String']>;
    name_not?: Maybe<Scalars['String']>;
    name_gt?: Maybe<Scalars['String']>;
    name_lt?: Maybe<Scalars['String']>;
    name_gte?: Maybe<Scalars['String']>;
    name_lte?: Maybe<Scalars['String']>;
    name_in?: Maybe<Array<Scalars['String']>>;
    name_not_in?: Maybe<Array<Scalars['String']>>;
    name_contains?: Maybe<Scalars['String']>;
    name_not_contains?: Maybe<Scalars['String']>;
    name_starts_with?: Maybe<Scalars['String']>;
    name_not_starts_with?: Maybe<Scalars['String']>;
    name_ends_with?: Maybe<Scalars['String']>;
    name_not_ends_with?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    symbol_not?: Maybe<Scalars['String']>;
    symbol_gt?: Maybe<Scalars['String']>;
    symbol_lt?: Maybe<Scalars['String']>;
    symbol_gte?: Maybe<Scalars['String']>;
    symbol_lte?: Maybe<Scalars['String']>;
    symbol_in?: Maybe<Array<Scalars['String']>>;
    symbol_not_in?: Maybe<Array<Scalars['String']>>;
    symbol_contains?: Maybe<Scalars['String']>;
    symbol_not_contains?: Maybe<Scalars['String']>;
    symbol_starts_with?: Maybe<Scalars['String']>;
    symbol_not_starts_with?: Maybe<Scalars['String']>;
    symbol_ends_with?: Maybe<Scalars['String']>;
    symbol_not_ends_with?: Maybe<Scalars['String']>;
    decimals?: Maybe<Scalars['BigInt']>;
    decimals_not?: Maybe<Scalars['BigInt']>;
    decimals_gt?: Maybe<Scalars['BigInt']>;
    decimals_lt?: Maybe<Scalars['BigInt']>;
    decimals_gte?: Maybe<Scalars['BigInt']>;
    decimals_lte?: Maybe<Scalars['BigInt']>;
    decimals_in?: Maybe<Array<Scalars['BigInt']>>;
    decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSupply?: Maybe<Scalars['BigInt']>;
    totalSupply_not?: Maybe<Scalars['BigInt']>;
    totalSupply_gt?: Maybe<Scalars['BigInt']>;
    totalSupply_lt?: Maybe<Scalars['BigInt']>;
    totalSupply_gte?: Maybe<Scalars['BigInt']>;
    totalSupply_lte?: Maybe<Scalars['BigInt']>;
    totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum Token_OrderBy {
    Id = "id",
    Name = "name",
    Symbol = "symbol",
    Decimals = "decimals",
    TotalSupply = "totalSupply"
}
export declare type Transfer = Snapshot & {
    __typename?: 'Transfer';
    id: Scalars['ID'];
    timestamp: Scalars['Int'];
    sett: Sett;
    from: User;
    to: User;
    amount: Scalars['BigInt'];
};
export declare type Transfer_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    sett?: Maybe<Scalars['String']>;
    sett_not?: Maybe<Scalars['String']>;
    sett_gt?: Maybe<Scalars['String']>;
    sett_lt?: Maybe<Scalars['String']>;
    sett_gte?: Maybe<Scalars['String']>;
    sett_lte?: Maybe<Scalars['String']>;
    sett_in?: Maybe<Array<Scalars['String']>>;
    sett_not_in?: Maybe<Array<Scalars['String']>>;
    sett_contains?: Maybe<Scalars['String']>;
    sett_not_contains?: Maybe<Scalars['String']>;
    sett_starts_with?: Maybe<Scalars['String']>;
    sett_not_starts_with?: Maybe<Scalars['String']>;
    sett_ends_with?: Maybe<Scalars['String']>;
    sett_not_ends_with?: Maybe<Scalars['String']>;
    from?: Maybe<Scalars['String']>;
    from_not?: Maybe<Scalars['String']>;
    from_gt?: Maybe<Scalars['String']>;
    from_lt?: Maybe<Scalars['String']>;
    from_gte?: Maybe<Scalars['String']>;
    from_lte?: Maybe<Scalars['String']>;
    from_in?: Maybe<Array<Scalars['String']>>;
    from_not_in?: Maybe<Array<Scalars['String']>>;
    from_contains?: Maybe<Scalars['String']>;
    from_not_contains?: Maybe<Scalars['String']>;
    from_starts_with?: Maybe<Scalars['String']>;
    from_not_starts_with?: Maybe<Scalars['String']>;
    from_ends_with?: Maybe<Scalars['String']>;
    from_not_ends_with?: Maybe<Scalars['String']>;
    to?: Maybe<Scalars['String']>;
    to_not?: Maybe<Scalars['String']>;
    to_gt?: Maybe<Scalars['String']>;
    to_lt?: Maybe<Scalars['String']>;
    to_gte?: Maybe<Scalars['String']>;
    to_lte?: Maybe<Scalars['String']>;
    to_in?: Maybe<Array<Scalars['String']>>;
    to_not_in?: Maybe<Array<Scalars['String']>>;
    to_contains?: Maybe<Scalars['String']>;
    to_not_contains?: Maybe<Scalars['String']>;
    to_starts_with?: Maybe<Scalars['String']>;
    to_not_starts_with?: Maybe<Scalars['String']>;
    to_ends_with?: Maybe<Scalars['String']>;
    to_not_ends_with?: Maybe<Scalars['String']>;
    amount?: Maybe<Scalars['BigInt']>;
    amount_not?: Maybe<Scalars['BigInt']>;
    amount_gt?: Maybe<Scalars['BigInt']>;
    amount_lt?: Maybe<Scalars['BigInt']>;
    amount_gte?: Maybe<Scalars['BigInt']>;
    amount_lte?: Maybe<Scalars['BigInt']>;
    amount_in?: Maybe<Array<Scalars['BigInt']>>;
    amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum Transfer_OrderBy {
    Id = "id",
    Timestamp = "timestamp",
    Sett = "sett",
    From = "from",
    To = "to",
    Amount = "amount"
}
export declare type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    settBalances: Array<UserSettBalance>;
};
export declare type UserSettBalancesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<UserSettBalance_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<UserSettBalance_Filter>;
};
export declare type UserSettBalance = VaultBalance & {
    __typename?: 'UserSettBalance';
    id: Scalars['ID'];
    user: User;
    sett: Sett;
    netDeposit: Scalars['BigInt'];
    netShareDeposit: Scalars['BigInt'];
    grossDeposit: Scalars['BigInt'];
    grossShareDeposit: Scalars['BigInt'];
    grossWithdraw: Scalars['BigInt'];
    grossShareWithdraw: Scalars['BigInt'];
};
export declare type UserSettBalance_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    user?: Maybe<Scalars['String']>;
    user_not?: Maybe<Scalars['String']>;
    user_gt?: Maybe<Scalars['String']>;
    user_lt?: Maybe<Scalars['String']>;
    user_gte?: Maybe<Scalars['String']>;
    user_lte?: Maybe<Scalars['String']>;
    user_in?: Maybe<Array<Scalars['String']>>;
    user_not_in?: Maybe<Array<Scalars['String']>>;
    user_contains?: Maybe<Scalars['String']>;
    user_not_contains?: Maybe<Scalars['String']>;
    user_starts_with?: Maybe<Scalars['String']>;
    user_not_starts_with?: Maybe<Scalars['String']>;
    user_ends_with?: Maybe<Scalars['String']>;
    user_not_ends_with?: Maybe<Scalars['String']>;
    sett?: Maybe<Scalars['String']>;
    sett_not?: Maybe<Scalars['String']>;
    sett_gt?: Maybe<Scalars['String']>;
    sett_lt?: Maybe<Scalars['String']>;
    sett_gte?: Maybe<Scalars['String']>;
    sett_lte?: Maybe<Scalars['String']>;
    sett_in?: Maybe<Array<Scalars['String']>>;
    sett_not_in?: Maybe<Array<Scalars['String']>>;
    sett_contains?: Maybe<Scalars['String']>;
    sett_not_contains?: Maybe<Scalars['String']>;
    sett_starts_with?: Maybe<Scalars['String']>;
    sett_not_starts_with?: Maybe<Scalars['String']>;
    sett_ends_with?: Maybe<Scalars['String']>;
    sett_not_ends_with?: Maybe<Scalars['String']>;
    netDeposit?: Maybe<Scalars['BigInt']>;
    netDeposit_not?: Maybe<Scalars['BigInt']>;
    netDeposit_gt?: Maybe<Scalars['BigInt']>;
    netDeposit_lt?: Maybe<Scalars['BigInt']>;
    netDeposit_gte?: Maybe<Scalars['BigInt']>;
    netDeposit_lte?: Maybe<Scalars['BigInt']>;
    netDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    netDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    netShareDeposit?: Maybe<Scalars['BigInt']>;
    netShareDeposit_not?: Maybe<Scalars['BigInt']>;
    netShareDeposit_gt?: Maybe<Scalars['BigInt']>;
    netShareDeposit_lt?: Maybe<Scalars['BigInt']>;
    netShareDeposit_gte?: Maybe<Scalars['BigInt']>;
    netShareDeposit_lte?: Maybe<Scalars['BigInt']>;
    netShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    netShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossDeposit?: Maybe<Scalars['BigInt']>;
    grossDeposit_not?: Maybe<Scalars['BigInt']>;
    grossDeposit_gt?: Maybe<Scalars['BigInt']>;
    grossDeposit_lt?: Maybe<Scalars['BigInt']>;
    grossDeposit_gte?: Maybe<Scalars['BigInt']>;
    grossDeposit_lte?: Maybe<Scalars['BigInt']>;
    grossDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    grossDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareDeposit?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_not?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_gt?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_lt?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_gte?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_lte?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossWithdraw?: Maybe<Scalars['BigInt']>;
    grossWithdraw_not?: Maybe<Scalars['BigInt']>;
    grossWithdraw_gt?: Maybe<Scalars['BigInt']>;
    grossWithdraw_lt?: Maybe<Scalars['BigInt']>;
    grossWithdraw_gte?: Maybe<Scalars['BigInt']>;
    grossWithdraw_lte?: Maybe<Scalars['BigInt']>;
    grossWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
    grossWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareWithdraw?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_not?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_gt?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_lt?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_gte?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_lte?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum UserSettBalance_OrderBy {
    Id = "id",
    User = "user",
    Sett = "sett",
    NetDeposit = "netDeposit",
    NetShareDeposit = "netShareDeposit",
    GrossDeposit = "grossDeposit",
    GrossShareDeposit = "grossShareDeposit",
    GrossWithdraw = "grossWithdraw",
    GrossShareWithdraw = "grossShareWithdraw"
}
export declare type User_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
};
export declare enum User_OrderBy {
    Id = "id",
    SettBalances = "settBalances"
}
export declare type Vault = {
    id: Scalars['ID'];
    token: Token;
    balance: Scalars['BigInt'];
    pricePerFullShare: Scalars['BigInt'];
};
export declare type VaultBalance = {
    id: Scalars['ID'];
    netDeposit: Scalars['BigInt'];
    netShareDeposit: Scalars['BigInt'];
    grossDeposit: Scalars['BigInt'];
    grossShareDeposit: Scalars['BigInt'];
    grossWithdraw: Scalars['BigInt'];
    grossShareWithdraw: Scalars['BigInt'];
};
export declare type VaultBalance_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    netDeposit?: Maybe<Scalars['BigInt']>;
    netDeposit_not?: Maybe<Scalars['BigInt']>;
    netDeposit_gt?: Maybe<Scalars['BigInt']>;
    netDeposit_lt?: Maybe<Scalars['BigInt']>;
    netDeposit_gte?: Maybe<Scalars['BigInt']>;
    netDeposit_lte?: Maybe<Scalars['BigInt']>;
    netDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    netDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    netShareDeposit?: Maybe<Scalars['BigInt']>;
    netShareDeposit_not?: Maybe<Scalars['BigInt']>;
    netShareDeposit_gt?: Maybe<Scalars['BigInt']>;
    netShareDeposit_lt?: Maybe<Scalars['BigInt']>;
    netShareDeposit_gte?: Maybe<Scalars['BigInt']>;
    netShareDeposit_lte?: Maybe<Scalars['BigInt']>;
    netShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    netShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossDeposit?: Maybe<Scalars['BigInt']>;
    grossDeposit_not?: Maybe<Scalars['BigInt']>;
    grossDeposit_gt?: Maybe<Scalars['BigInt']>;
    grossDeposit_lt?: Maybe<Scalars['BigInt']>;
    grossDeposit_gte?: Maybe<Scalars['BigInt']>;
    grossDeposit_lte?: Maybe<Scalars['BigInt']>;
    grossDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    grossDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareDeposit?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_not?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_gt?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_lt?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_gte?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_lte?: Maybe<Scalars['BigInt']>;
    grossShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossWithdraw?: Maybe<Scalars['BigInt']>;
    grossWithdraw_not?: Maybe<Scalars['BigInt']>;
    grossWithdraw_gt?: Maybe<Scalars['BigInt']>;
    grossWithdraw_lt?: Maybe<Scalars['BigInt']>;
    grossWithdraw_gte?: Maybe<Scalars['BigInt']>;
    grossWithdraw_lte?: Maybe<Scalars['BigInt']>;
    grossWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
    grossWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareWithdraw?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_not?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_gt?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_lt?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_gte?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_lte?: Maybe<Scalars['BigInt']>;
    grossShareWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
    grossShareWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum VaultBalance_OrderBy {
    Id = "id",
    NetDeposit = "netDeposit",
    NetShareDeposit = "netShareDeposit",
    GrossDeposit = "grossDeposit",
    GrossShareDeposit = "grossShareDeposit",
    GrossWithdraw = "grossWithdraw",
    GrossShareWithdraw = "grossShareWithdraw"
}
export declare type Vault_Filter = {
    id?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_lt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    token?: Maybe<Scalars['String']>;
    token_not?: Maybe<Scalars['String']>;
    token_gt?: Maybe<Scalars['String']>;
    token_lt?: Maybe<Scalars['String']>;
    token_gte?: Maybe<Scalars['String']>;
    token_lte?: Maybe<Scalars['String']>;
    token_in?: Maybe<Array<Scalars['String']>>;
    token_not_in?: Maybe<Array<Scalars['String']>>;
    token_contains?: Maybe<Scalars['String']>;
    token_not_contains?: Maybe<Scalars['String']>;
    token_starts_with?: Maybe<Scalars['String']>;
    token_not_starts_with?: Maybe<Scalars['String']>;
    token_ends_with?: Maybe<Scalars['String']>;
    token_not_ends_with?: Maybe<Scalars['String']>;
    balance?: Maybe<Scalars['BigInt']>;
    balance_not?: Maybe<Scalars['BigInt']>;
    balance_gt?: Maybe<Scalars['BigInt']>;
    balance_lt?: Maybe<Scalars['BigInt']>;
    balance_gte?: Maybe<Scalars['BigInt']>;
    balance_lte?: Maybe<Scalars['BigInt']>;
    balance_in?: Maybe<Array<Scalars['BigInt']>>;
    balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
    pricePerFullShare?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_not?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_gt?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_lt?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_gte?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_lte?: Maybe<Scalars['BigInt']>;
    pricePerFullShare_in?: Maybe<Array<Scalars['BigInt']>>;
    pricePerFullShare_not_in?: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum Vault_OrderBy {
    Id = "id",
    Token = "token",
    Balance = "balance",
    PricePerFullShare = "pricePerFullShare"
}
export declare type _Block_ = {
    __typename?: '_Block_';
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
};
/** The type for the top-level _meta field */
export declare type _Meta_ = {
    __typename?: '_Meta_';
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
};
export declare enum _SubgraphErrorPolicy_ {
    /** Data will be returned even if the subgraph has indexing errors */
    Allow = "allow",
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    Deny = "deny"
}
export declare const SettFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const SettDocument: import("graphql/language/ast").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    Sett(variables: SettQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<SettQuery>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
export declare type SettFragment = {
    __typename?: 'Sett';
} & Pick<Sett, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'balance' | 'pricePerFullShare' | 'netDeposit' | 'netShareDeposit' | 'grossDeposit' | 'grossShareDeposit' | 'grossWithdraw' | 'grossShareWithdraw'> & {
    token: {
        __typename?: 'Token';
    } & Pick<Token, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply'>;
    controller?: Maybe<{
        __typename?: 'Controller';
    } & Pick<Controller, 'id'>>;
    strategy?: Maybe<{
        __typename?: 'Strategy';
    } & Pick<Strategy, 'id'>>;
};
export declare type SettQueryVariables = Exact<{
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
}>;
export declare type SettQuery = {
    __typename?: 'Query';
} & {
    sett?: Maybe<{
        __typename?: 'Sett';
    } & SettFragment>;
};
