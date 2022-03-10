import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BadgerTreeDistribution = TokenDistribution & {
  __typename?: 'BadgerTreeDistribution';
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  token: Token;
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  strategy?: Maybe<Strategy>;
  sett?: Maybe<Sett>;
};

export type BadgerTreeDistribution_Filter = {
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

export enum BadgerTreeDistribution_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Token = 'token',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Strategy = 'strategy',
  Sett = 'sett',
}

/** The block at which the query should be executed. */
export type Block_Height = {
  /** Value containing a block hash */
  hash?: Maybe<Scalars['Bytes']>;
  /** Value containing a block number */
  number?: Maybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   */
  number_gte?: Maybe<Scalars['Int']>;
};

export type Controller = {
  __typename?: 'Controller';
  id: Scalars['ID'];
  strategies: Array<Strategy>;
  setts: Array<Sett>;
};

export type ControllerStrategiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Strategy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Strategy_Filter>;
};

export type ControllerSettsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Sett_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Sett_Filter>;
};

export type Controller_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum Controller_OrderBy {
  Id = 'id',
  Strategies = 'strategies',
  Setts = 'setts',
}

export type Erc20 = {
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
};

export type Erc20_Filter = {
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

export enum Erc20_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Query = {
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
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
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

export type QueryRegistryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRegistriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Registry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Registry_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySettArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySettsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Sett_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Sett_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySettSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySettSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SettSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SettSnapshot_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserSettBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserSettBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserSettBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserSettBalance_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransferArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transfer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transfer_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBadgerTreeDistributionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBadgerTreeDistributionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BadgerTreeDistribution_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BadgerTreeDistribution_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySettHarvestArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySettHarvestsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SettHarvest_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SettHarvest_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryStrategyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryStrategiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Strategy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Strategy_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryControllerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryControllersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Controller_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Controller_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc20Args = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc20SArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Erc20_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Erc20_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVaultArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVaultsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Vault_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Vault_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVaultBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVaultBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultBalance_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Snapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Snapshot_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenDistributionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenDistributionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDistribution_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDistribution_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Registry = {
  __typename?: 'Registry';
  id: Scalars['ID'];
};

export type Registry_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum Registry_OrderBy {
  Id = 'id',
}

export type Sett = Erc20 &
  Vault &
  VaultBalance & {
    __typename?: 'Sett';
    id: Scalars['ID'];
    name: Scalars['String'];
    symbol: Scalars['String'];
    decimals: Scalars['BigInt'];
    totalSupply: Scalars['BigInt'];
    token: Token;
    available: Scalars['BigInt'];
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

export type SettTreeDistributionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BadgerTreeDistribution_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BadgerTreeDistribution_Filter>;
};

export type SettHarvestsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SettHarvest_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SettHarvest_Filter>;
};

export type SettHarvest = TokenDistribution & {
  __typename?: 'SettHarvest';
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  token: Token;
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  strategy?: Maybe<Strategy>;
  sett?: Maybe<Sett>;
};

export type SettHarvest_Filter = {
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

export enum SettHarvest_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Token = 'token',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Strategy = 'strategy',
  Sett = 'sett',
}

export type SettSnapshot = Erc20 &
  Vault &
  VaultBalance &
  Snapshot & {
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

export type SettSnapshot_Filter = {
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

export enum SettSnapshot_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
  Token = 'token',
  Balance = 'balance',
  PricePerFullShare = 'pricePerFullShare',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossWithdraw = 'grossWithdraw',
  GrossShareWithdraw = 'grossShareWithdraw',
}

export type Sett_Filter = {
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
  available?: Maybe<Scalars['BigInt']>;
  available_not?: Maybe<Scalars['BigInt']>;
  available_gt?: Maybe<Scalars['BigInt']>;
  available_lt?: Maybe<Scalars['BigInt']>;
  available_gte?: Maybe<Scalars['BigInt']>;
  available_lte?: Maybe<Scalars['BigInt']>;
  available_in?: Maybe<Array<Scalars['BigInt']>>;
  available_not_in?: Maybe<Array<Scalars['BigInt']>>;
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

export enum Sett_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
  Token = 'token',
  Available = 'available',
  Balance = 'balance',
  PricePerFullShare = 'pricePerFullShare',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossWithdraw = 'grossWithdraw',
  GrossShareWithdraw = 'grossShareWithdraw',
  Controller = 'controller',
  Strategy = 'strategy',
  TreeDistributions = 'treeDistributions',
  Harvests = 'harvests',
}

export type Snapshot = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
};

export type Snapshot_Filter = {
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

export enum Snapshot_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
}

export type Strategy = {
  __typename?: 'Strategy';
  id: Scalars['ID'];
  balance: Scalars['BigInt'];
  controller?: Maybe<Controller>;
  sett?: Maybe<Sett>;
  treeDistributions: Array<BadgerTreeDistribution>;
  harvests: Array<SettHarvest>;
};

export type StrategyTreeDistributionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BadgerTreeDistribution_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BadgerTreeDistribution_Filter>;
};

export type StrategyHarvestsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SettHarvest_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SettHarvest_Filter>;
};

export type Strategy_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  balance?: Maybe<Scalars['BigInt']>;
  balance_not?: Maybe<Scalars['BigInt']>;
  balance_gt?: Maybe<Scalars['BigInt']>;
  balance_lt?: Maybe<Scalars['BigInt']>;
  balance_gte?: Maybe<Scalars['BigInt']>;
  balance_lte?: Maybe<Scalars['BigInt']>;
  balance_in?: Maybe<Array<Scalars['BigInt']>>;
  balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
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

export enum Strategy_OrderBy {
  Id = 'id',
  Balance = 'balance',
  Controller = 'controller',
  Sett = 'sett',
  TreeDistributions = 'treeDistributions',
  Harvests = 'harvests',
}

export type Subscription = {
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
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
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

export type SubscriptionRegistryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRegistriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Registry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Registry_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSettArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSettsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Sett_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Sett_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSettSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSettSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SettSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SettSnapshot_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserSettBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserSettBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserSettBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserSettBalance_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransferArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transfer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transfer_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBadgerTreeDistributionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBadgerTreeDistributionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BadgerTreeDistribution_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BadgerTreeDistribution_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSettHarvestArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSettHarvestsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SettHarvest_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SettHarvest_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionStrategyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionStrategiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Strategy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Strategy_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionControllerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionControllersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Controller_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Controller_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc20Args = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc20SArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Erc20_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Erc20_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVaultArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVaultsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Vault_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Vault_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVaultBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVaultBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultBalance_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Snapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Snapshot_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenDistributionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenDistributionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDistribution_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDistribution_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Token = Erc20 & {
  __typename?: 'Token';
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
};

export type TokenDistribution = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  token: Token;
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  strategy?: Maybe<Strategy>;
  sett?: Maybe<Sett>;
};

export type TokenDistribution_Filter = {
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

export enum TokenDistribution_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Token = 'token',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Strategy = 'strategy',
  Sett = 'sett',
}

export type Token_Filter = {
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

export enum Token_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
}

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  transfers: Array<Transfer>;
};

export type TransactionTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transfer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transfer_Filter>;
};

export type Transaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum Transaction_OrderBy {
  Id = 'id',
  Transfers = 'transfers',
}

export type Transfer = Snapshot & {
  __typename?: 'Transfer';
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  sett: Sett;
  from: User;
  to: User;
  amount: Scalars['BigInt'];
  transaction: Transaction;
};

export type Transfer_Filter = {
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
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Transfer_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Sett = 'sett',
  From = 'from',
  To = 'to',
  Amount = 'amount',
  Transaction = 'transaction',
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  settBalances: Array<UserSettBalance>;
};

export type UserSettBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserSettBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserSettBalance_Filter>;
};

export type UserSettBalance = VaultBalance & {
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

export type UserSettBalance_Filter = {
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

export enum UserSettBalance_OrderBy {
  Id = 'id',
  User = 'user',
  Sett = 'sett',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossWithdraw = 'grossWithdraw',
  GrossShareWithdraw = 'grossShareWithdraw',
}

export type User_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum User_OrderBy {
  Id = 'id',
  SettBalances = 'settBalances',
}

export type Vault = {
  id: Scalars['ID'];
  token: Token;
  balance: Scalars['BigInt'];
  pricePerFullShare: Scalars['BigInt'];
};

export type VaultBalance = {
  id: Scalars['ID'];
  netDeposit: Scalars['BigInt'];
  netShareDeposit: Scalars['BigInt'];
  grossDeposit: Scalars['BigInt'];
  grossShareDeposit: Scalars['BigInt'];
  grossWithdraw: Scalars['BigInt'];
  grossShareWithdraw: Scalars['BigInt'];
};

export type VaultBalance_Filter = {
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

export enum VaultBalance_OrderBy {
  Id = 'id',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossWithdraw = 'grossWithdraw',
  GrossShareWithdraw = 'grossShareWithdraw',
}

export type Vault_Filter = {
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

export enum Vault_OrderBy {
  Id = 'id',
  Token = 'token',
  Balance = 'balance',
  PricePerFullShare = 'pricePerFullShare',
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
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

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny',
}

export const TokenFragmentDoc = gql`
  fragment Token on Token {
    id
    name
    symbol
    decimals
    totalSupply
  }
`;
export const SettSnapshotFragmentDoc = gql`
  fragment SettSnapshot on SettSnapshot {
    id
    timestamp
    name
    symbol
    decimals
    totalSupply
    token {
      ...Token
    }
    balance
    pricePerFullShare
    netDeposit
    netShareDeposit
    grossDeposit
    grossShareDeposit
    grossWithdraw
    grossShareWithdraw
  }
  ${TokenFragmentDoc}
`;
export const SettFragmentDoc = gql`
  fragment Sett on Sett {
    id
    name
    symbol
    decimals
    totalSupply
    token {
      ...Token
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
  ${TokenFragmentDoc}
`;
export const BadgerTreeDistributionFragmentDoc = gql`
  fragment BadgerTreeDistribution on BadgerTreeDistribution {
    id
    timestamp
    token {
      ...Token
    }
    amount
    blockNumber
    strategy {
      id
    }
    sett {
      id
    }
  }
  ${TokenFragmentDoc}
`;
export const SettHarvestFragmentDoc = gql`
  fragment SettHarvest on SettHarvest {
    id
    timestamp
    token {
      ...Token
    }
    amount
    blockNumber
    strategy {
      id
    }
    sett {
      id
    }
  }
  ${TokenFragmentDoc}
`;
export const StrategyFragmentDoc = gql`
  fragment Strategy on Strategy {
    id
    balance
    controller {
      id
    }
    sett {
      id
    }
    treeDistributions {
      ...BadgerTreeDistribution
    }
    harvests {
      ...SettHarvest
    }
  }
  ${BadgerTreeDistributionFragmentDoc}
  ${SettHarvestFragmentDoc}
`;
export const TransferFragmentDoc = gql`
  fragment Transfer on Transfer {
    id
    timestamp
    sett {
      id
    }
    from {
      id
    }
    to {
      id
    }
    amount
    transaction {
      id
    }
  }
`;
export const UserSettBalanceFragmentDoc = gql`
  fragment UserSettBalance on UserSettBalance {
    id
    user {
      id
    }
    sett {
      id
    }
    netDeposit
    netShareDeposit
    grossDeposit
    grossShareDeposit
    grossWithdraw
    grossShareWithdraw
  }
`;
export const UserFragmentDoc = gql`
  fragment User on User {
    id
    settBalances {
      ...UserSettBalance
    }
  }
  ${UserSettBalanceFragmentDoc}
`;
export const BadgerTreeDistributionDocument = gql`
  query BadgerTreeDistribution($id: ID!, $block: Block_height) {
    badgerTreeDistribution(id: $id, block: $block) {
      ...BadgerTreeDistribution
    }
  }
  ${BadgerTreeDistributionFragmentDoc}
`;
export const BadgerTreeDistributionsDocument = gql`
  query BadgerTreeDistributions(
    $block: Block_height
    $first: Int = 100
    $skip: Int = 0
    $orderBy: BadgerTreeDistribution_orderBy
    $orderDirection: OrderDirection
    $where: BadgerTreeDistribution_filter
  ) {
    badgerTreeDistributions(
      block: $block
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...BadgerTreeDistribution
    }
  }
  ${BadgerTreeDistributionFragmentDoc}
`;
export const ControllersDocument = gql`
  query Controllers(
    $block: Block_height
    $first: Int = 100
    $skip: Int = 0
    $orderBy: Controller_orderBy
    $orderDirection: OrderDirection
    $where: Controller_filter
  ) {
    controllers(
      block: $block
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
    }
  }
`;
export const SettHarvestDocument = gql`
  query SettHarvest($id: ID!, $block: Block_height) {
    settHarvest(id: $id, block: $block) {
      ...SettHarvest
    }
  }
  ${SettHarvestFragmentDoc}
`;
export const SettHarvestsDocument = gql`
  query SettHarvests(
    $block: Block_height
    $first: Int = 100
    $skip: Int = 0
    $orderBy: SettHarvest_orderBy
    $orderDirection: OrderDirection
    $where: SettHarvest_filter
  ) {
    settHarvests(
      block: $block
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...SettHarvest
    }
  }
  ${SettHarvestFragmentDoc}
`;
export const SettSnapshotDocument = gql`
  query SettSnapshot($id: ID!, $block: Block_height) {
    settSnapshot(id: $id, block: $block) {
      ...SettSnapshot
    }
  }
  ${SettSnapshotFragmentDoc}
`;
export const SettSnapshotsDocument = gql`
  query SettSnapshots(
    $block: Block_height
    $first: Int = 100
    $skip: Int = 0
    $orderBy: SettSnapshot_orderBy
    $orderDirection: OrderDirection
    $where: SettSnapshot_filter
  ) {
    settSnapshots(
      block: $block
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...SettSnapshot
    }
  }
  ${SettSnapshotFragmentDoc}
`;
export const SettDocument = gql`
  query Sett($id: ID!, $block: Block_height) {
    sett(id: $id, block: $block) {
      ...Sett
    }
  }
  ${SettFragmentDoc}
`;
export const SettsDocument = gql`
  query Setts(
    $block: Block_height
    $first: Int = 100
    $orderBy: Sett_orderBy
    $orderDirection: OrderDirection
    $where: Sett_filter
  ) {
    setts(
      block: $block
      first: $first
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...Sett
    }
  }
  ${SettFragmentDoc}
`;
export const StrategyDocument = gql`
  query Strategy($id: ID!, $block: Block_height) {
    strategy(id: $id, block: $block) {
      ...Strategy
    }
  }
  ${StrategyFragmentDoc}
`;
export const StrategiesDocument = gql`
  query Strategies(
    $block: Block_height
    $first: Int = 100
    $skip: Int = 0
    $orderBy: Strategy_orderBy
    $orderDirection: OrderDirection
    $where: Strategy_filter
  ) {
    strategies(
      block: $block
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...Strategy
    }
  }
  ${StrategyFragmentDoc}
`;
export const TokenDocument = gql`
  query Token($id: ID!, $block: Block_height) {
    token(id: $id, block: $block) {
      ...Token
    }
  }
  ${TokenFragmentDoc}
`;
export const TokensDocument = gql`
  query Tokens(
    $block: Block_height
    $first: Int = 100
    $skip: Int = 0
    $orderBy: Token_orderBy
    $orderDirection: OrderDirection
    $where: Token_filter
  ) {
    tokens(
      block: $block
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...Token
    }
  }
  ${TokenFragmentDoc}
`;
export const TransferDocument = gql`
  query Transfer($id: ID!, $block: Block_height) {
    transfer(id: $id, block: $block) {
      ...Transfer
    }
  }
  ${TransferFragmentDoc}
`;
export const TransfersDocument = gql`
  query Transfers(
    $block: Block_height
    $first: Int = 100
    $skip: Int = 0
    $orderBy: Transfer_orderBy
    $orderDirection: OrderDirection
    $where: Transfer_filter
  ) {
    transfers(
      block: $block
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...Transfer
    }
  }
  ${TransferFragmentDoc}
`;
export const UserSettBalanceDocument = gql`
  query UserSettBalance($id: ID!, $block: Block_height) {
    userSettBalance(id: $id, block: $block) {
      ...UserSettBalance
    }
  }
  ${UserSettBalanceFragmentDoc}
`;
export const UserSettBalancesDocument = gql`
  query UserSettBalances(
    $block: Block_height
    $first: Int = 100
    $skip: Int = 0
    $orderBy: UserSettBalance_orderBy
    $orderDirection: OrderDirection
    $where: UserSettBalance_filter
  ) {
    userSettBalances(
      block: $block
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...UserSettBalance
    }
  }
  ${UserSettBalanceFragmentDoc}
`;
export const UserDocument = gql`
  query User($id: ID!, $block: Block_height) {
    user(id: $id, block: $block) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const UsersDocument = gql`
  query Users(
    $block: Block_height
    $first: Int = 100
    $skip: Int = 0
    $orderBy: User_orderBy
    $orderDirection: OrderDirection
    $where: User_filter
  ) {
    users(
      block: $block
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    BadgerTreeDistribution(
      variables: BadgerTreeDistributionQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<BadgerTreeDistributionQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<BadgerTreeDistributionQuery>(
            BadgerTreeDistributionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'BadgerTreeDistribution',
      );
    },
    BadgerTreeDistributions(
      variables?: BadgerTreeDistributionsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<BadgerTreeDistributionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<BadgerTreeDistributionsQuery>(
            BadgerTreeDistributionsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'BadgerTreeDistributions',
      );
    },
    Controllers(
      variables?: ControllersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<ControllersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ControllersQuery>(ControllersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Controllers',
      );
    },
    SettHarvest(
      variables: SettHarvestQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SettHarvestQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SettHarvestQuery>(SettHarvestDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'SettHarvest',
      );
    },
    SettHarvests(
      variables?: SettHarvestsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SettHarvestsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SettHarvestsQuery>(SettHarvestsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'SettHarvests',
      );
    },
    SettSnapshot(
      variables: SettSnapshotQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SettSnapshotQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SettSnapshotQuery>(SettSnapshotDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'SettSnapshot',
      );
    },
    SettSnapshots(
      variables?: SettSnapshotsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SettSnapshotsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SettSnapshotsQuery>(SettSnapshotsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'SettSnapshots',
      );
    },
    Sett(
      variables: SettQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SettQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SettQuery>(SettDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Sett',
      );
    },
    Setts(
      variables?: SettsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SettsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SettsQuery>(SettsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Setts',
      );
    },
    Strategy(
      variables: StrategyQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<StrategyQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<StrategyQuery>(StrategyDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Strategy',
      );
    },
    Strategies(
      variables?: StrategiesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<StrategiesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<StrategiesQuery>(StrategiesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Strategies',
      );
    },
    Token(
      variables: TokenQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<TokenQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TokenQuery>(TokenDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Token',
      );
    },
    Tokens(
      variables?: TokensQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<TokensQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TokensQuery>(TokensDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Tokens',
      );
    },
    Transfer(
      variables: TransferQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<TransferQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TransferQuery>(TransferDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Transfer',
      );
    },
    Transfers(
      variables?: TransfersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<TransfersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TransfersQuery>(TransfersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Transfers',
      );
    },
    UserSettBalance(
      variables: UserSettBalanceQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UserSettBalanceQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UserSettBalanceQuery>(
            UserSettBalanceDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'UserSettBalance',
      );
    },
    UserSettBalances(
      variables?: UserSettBalancesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UserSettBalancesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UserSettBalancesQuery>(
            UserSettBalancesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'UserSettBalances',
      );
    },
    User(
      variables: UserQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UserQuery>(UserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'User',
      );
    },
    Users(
      variables?: UsersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UsersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UsersQuery>(UsersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Users',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type BadgerTreeDistributionFragment = {
  __typename?: 'BadgerTreeDistribution';
} & Pick<
  BadgerTreeDistribution,
  'id' | 'timestamp' | 'amount' | 'blockNumber'
> & {
    token: { __typename?: 'Token' } & TokenFragment;
    strategy?: Maybe<{ __typename?: 'Strategy' } & Pick<Strategy, 'id'>>;
    sett?: Maybe<{ __typename?: 'Sett' } & Pick<Sett, 'id'>>;
  };

export type SettHarvestFragment = { __typename?: 'SettHarvest' } & Pick<
  SettHarvest,
  'id' | 'timestamp' | 'amount' | 'blockNumber'
> & {
    token: { __typename?: 'Token' } & TokenFragment;
    strategy?: Maybe<{ __typename?: 'Strategy' } & Pick<Strategy, 'id'>>;
    sett?: Maybe<{ __typename?: 'Sett' } & Pick<Sett, 'id'>>;
  };

export type SettSnapshotFragment = { __typename?: 'SettSnapshot' } & Pick<
  SettSnapshot,
  | 'id'
  | 'timestamp'
  | 'name'
  | 'symbol'
  | 'decimals'
  | 'totalSupply'
  | 'balance'
  | 'pricePerFullShare'
  | 'netDeposit'
  | 'netShareDeposit'
  | 'grossDeposit'
  | 'grossShareDeposit'
  | 'grossWithdraw'
  | 'grossShareWithdraw'
> & { token: { __typename?: 'Token' } & TokenFragment };

export type SettFragment = { __typename?: 'Sett' } & Pick<
  Sett,
  | 'id'
  | 'name'
  | 'symbol'
  | 'decimals'
  | 'totalSupply'
  | 'balance'
  | 'pricePerFullShare'
  | 'netDeposit'
  | 'netShareDeposit'
  | 'grossDeposit'
  | 'grossShareDeposit'
  | 'grossWithdraw'
  | 'grossShareWithdraw'
> & {
    token: { __typename?: 'Token' } & TokenFragment;
    controller?: Maybe<{ __typename?: 'Controller' } & Pick<Controller, 'id'>>;
    strategy?: Maybe<{ __typename?: 'Strategy' } & Pick<Strategy, 'id'>>;
  };

export type StrategyFragment = { __typename?: 'Strategy' } & Pick<
  Strategy,
  'id' | 'balance'
> & {
    controller?: Maybe<{ __typename?: 'Controller' } & Pick<Controller, 'id'>>;
    sett?: Maybe<{ __typename?: 'Sett' } & Pick<Sett, 'id'>>;
    treeDistributions: Array<
      { __typename?: 'BadgerTreeDistribution' } & BadgerTreeDistributionFragment
    >;
    harvests: Array<{ __typename?: 'SettHarvest' } & SettHarvestFragment>;
  };

export type TokenFragment = { __typename?: 'Token' } & Pick<
  Token,
  'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply'
>;

export type TransferFragment = { __typename?: 'Transfer' } & Pick<
  Transfer,
  'id' | 'timestamp' | 'amount'
> & {
    sett: { __typename?: 'Sett' } & Pick<Sett, 'id'>;
    from: { __typename?: 'User' } & Pick<User, 'id'>;
    to: { __typename?: 'User' } & Pick<User, 'id'>;
    transaction: { __typename?: 'Transaction' } & Pick<Transaction, 'id'>;
  };

export type UserSettBalanceFragment = { __typename?: 'UserSettBalance' } & Pick<
  UserSettBalance,
  | 'id'
  | 'netDeposit'
  | 'netShareDeposit'
  | 'grossDeposit'
  | 'grossShareDeposit'
  | 'grossWithdraw'
  | 'grossShareWithdraw'
> & {
    user: { __typename?: 'User' } & Pick<User, 'id'>;
    sett: { __typename?: 'Sett' } & Pick<Sett, 'id'>;
  };

export type UserFragment = { __typename?: 'User' } & Pick<User, 'id'> & {
    settBalances: Array<
      { __typename?: 'UserSettBalance' } & UserSettBalanceFragment
    >;
  };

export type BadgerTreeDistributionQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;

export type BadgerTreeDistributionQuery = { __typename?: 'Query' } & {
  badgerTreeDistribution?: Maybe<
    { __typename?: 'BadgerTreeDistribution' } & BadgerTreeDistributionFragment
  >;
};

export type BadgerTreeDistributionsQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BadgerTreeDistribution_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BadgerTreeDistribution_Filter>;
}>;

export type BadgerTreeDistributionsQuery = { __typename?: 'Query' } & {
  badgerTreeDistributions: Array<
    { __typename?: 'BadgerTreeDistribution' } & BadgerTreeDistributionFragment
  >;
};

export type ControllersQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Controller_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Controller_Filter>;
}>;

export type ControllersQuery = { __typename?: 'Query' } & {
  controllers: Array<{ __typename?: 'Controller' } & Pick<Controller, 'id'>>;
};

export type SettHarvestQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;

export type SettHarvestQuery = { __typename?: 'Query' } & {
  settHarvest?: Maybe<{ __typename?: 'SettHarvest' } & SettHarvestFragment>;
};

export type SettHarvestsQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SettHarvest_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SettHarvest_Filter>;
}>;

export type SettHarvestsQuery = { __typename?: 'Query' } & {
  settHarvests: Array<{ __typename?: 'SettHarvest' } & SettHarvestFragment>;
};

export type SettSnapshotQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;

export type SettSnapshotQuery = { __typename?: 'Query' } & {
  settSnapshot?: Maybe<{ __typename?: 'SettSnapshot' } & SettSnapshotFragment>;
};

export type SettSnapshotsQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SettSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SettSnapshot_Filter>;
}>;

export type SettSnapshotsQuery = { __typename?: 'Query' } & {
  settSnapshots: Array<{ __typename?: 'SettSnapshot' } & SettSnapshotFragment>;
};

export type SettQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;

export type SettQuery = { __typename?: 'Query' } & {
  sett?: Maybe<{ __typename?: 'Sett' } & SettFragment>;
};

export type SettsQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Sett_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Sett_Filter>;
}>;

export type SettsQuery = { __typename?: 'Query' } & {
  setts: Array<{ __typename?: 'Sett' } & SettFragment>;
};

export type StrategyQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;

export type StrategyQuery = { __typename?: 'Query' } & {
  strategy?: Maybe<{ __typename?: 'Strategy' } & StrategyFragment>;
};

export type StrategiesQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Strategy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Strategy_Filter>;
}>;

export type StrategiesQuery = { __typename?: 'Query' } & {
  strategies: Array<{ __typename?: 'Strategy' } & StrategyFragment>;
};

export type TokenQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;

export type TokenQuery = { __typename?: 'Query' } & {
  token?: Maybe<{ __typename?: 'Token' } & TokenFragment>;
};

export type TokensQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
}>;

export type TokensQuery = { __typename?: 'Query' } & {
  tokens: Array<{ __typename?: 'Token' } & TokenFragment>;
};

export type TransferQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;

export type TransferQuery = { __typename?: 'Query' } & {
  transfer?: Maybe<{ __typename?: 'Transfer' } & TransferFragment>;
};

export type TransfersQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transfer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transfer_Filter>;
}>;

export type TransfersQuery = { __typename?: 'Query' } & {
  transfers: Array<{ __typename?: 'Transfer' } & TransferFragment>;
};

export type UserSettBalanceQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;

export type UserSettBalanceQuery = { __typename?: 'Query' } & {
  userSettBalance?: Maybe<
    { __typename?: 'UserSettBalance' } & UserSettBalanceFragment
  >;
};

export type UserSettBalancesQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserSettBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserSettBalance_Filter>;
}>;

export type UserSettBalancesQuery = { __typename?: 'Query' } & {
  userSettBalances: Array<
    { __typename?: 'UserSettBalance' } & UserSettBalanceFragment
  >;
};

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;

export type UserQuery = { __typename?: 'Query' } & {
  user?: Maybe<{ __typename?: 'User' } & UserFragment>;
};

export type UsersQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
}>;

export type UsersQuery = { __typename?: 'Query' } & {
  users: Array<{ __typename?: 'User' } & UserFragment>;
};
