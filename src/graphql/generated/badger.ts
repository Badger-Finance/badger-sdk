import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  setts: Array<Sett>;
};

export type AuthorSettsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sett_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Sett_Filter>;
};

export type Author_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  setts_?: InputMaybe<Sett_Filter>;
};

export enum Author_OrderBy {
  Id = 'id',
  Setts = 'setts',
}

export type BadgerTreeDistribution = TokenDistribution & {
  __typename?: 'BadgerTreeDistribution';
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  id: Scalars['ID'];
  sett?: Maybe<Sett>;
  strategy?: Maybe<Strategy>;
  timestamp: Scalars['Int'];
  token: Token;
};

export type BadgerTreeDistribution_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sett?: InputMaybe<Scalars['String']>;
  sett_?: InputMaybe<Sett_Filter>;
  sett_contains?: InputMaybe<Scalars['String']>;
  sett_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_ends_with?: InputMaybe<Scalars['String']>;
  sett_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_gt?: InputMaybe<Scalars['String']>;
  sett_gte?: InputMaybe<Scalars['String']>;
  sett_in?: InputMaybe<Array<Scalars['String']>>;
  sett_lt?: InputMaybe<Scalars['String']>;
  sett_lte?: InputMaybe<Scalars['String']>;
  sett_not?: InputMaybe<Scalars['String']>;
  sett_not_contains?: InputMaybe<Scalars['String']>;
  sett_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_not_ends_with?: InputMaybe<Scalars['String']>;
  sett_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_not_in?: InputMaybe<Array<Scalars['String']>>;
  sett_not_starts_with?: InputMaybe<Scalars['String']>;
  sett_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sett_starts_with?: InputMaybe<Scalars['String']>;
  sett_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_?: InputMaybe<Strategy_Filter>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum BadgerTreeDistribution_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Id = 'id',
  Sett = 'sett',
  Strategy = 'strategy',
  Timestamp = 'timestamp',
  Token = 'token',
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Controller = {
  __typename?: 'Controller';
  id: Scalars['ID'];
  setts: Array<Sett>;
  strategies: Array<Strategy>;
};

export type ControllerSettsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sett_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Sett_Filter>;
};

export type ControllerStrategiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Strategy_Filter>;
};

export type Controller_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  setts_?: InputMaybe<Sett_Filter>;
  strategies_?: InputMaybe<Strategy_Filter>;
};

export enum Controller_OrderBy {
  Id = 'id',
  Setts = 'setts',
  Strategies = 'strategies',
}

export type Erc20 = {
  decimals: Scalars['BigInt'];
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  totalSupply: Scalars['BigInt'];
};

export type Erc20_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Erc20_OrderBy {
  Decimals = 'decimals',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  TotalSupply = 'totalSupply',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  author?: Maybe<Author>;
  authors: Array<Author>;
  badgerTreeDistribution?: Maybe<BadgerTreeDistribution>;
  badgerTreeDistributions: Array<BadgerTreeDistribution>;
  controller?: Maybe<Controller>;
  controllers: Array<Controller>;
  erc20?: Maybe<Erc20>;
  erc20S: Array<Erc20>;
  registries: Array<Registry>;
  registry?: Maybe<Registry>;
  sett?: Maybe<Sett>;
  settHarvest?: Maybe<SettHarvest>;
  settHarvests: Array<SettHarvest>;
  settSnapshot?: Maybe<SettSnapshot>;
  settSnapshots: Array<SettSnapshot>;
  setts: Array<Sett>;
  snapshot?: Maybe<Snapshot>;
  snapshots: Array<Snapshot>;
  strategies: Array<Strategy>;
  strategy?: Maybe<Strategy>;
  token?: Maybe<Token>;
  tokenDistribution?: Maybe<TokenDistribution>;
  tokenDistributions: Array<TokenDistribution>;
  tokens: Array<Token>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  user?: Maybe<User>;
  userSettBalance?: Maybe<UserSettBalance>;
  userSettBalances: Array<UserSettBalance>;
  users: Array<User>;
  vault?: Maybe<Vault>;
  vaultBalance?: Maybe<VaultBalance>;
  vaultBalances: Array<VaultBalance>;
  vaults: Array<Vault>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryAuthorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuthorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Author_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Author_Filter>;
};

export type QueryBadgerTreeDistributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBadgerTreeDistributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgerTreeDistribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadgerTreeDistribution_Filter>;
};

export type QueryControllerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryControllersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Controller_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Controller_Filter>;
};

export type QueryErc20Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc20SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc20_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20_Filter>;
};

export type QueryRegistriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Registry_Filter>;
};

export type QueryRegistryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySettArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySettHarvestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySettHarvestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SettHarvest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SettHarvest_Filter>;
};

export type QuerySettSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySettSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SettSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SettSnapshot_Filter>;
};

export type QuerySettsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sett_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Sett_Filter>;
};

export type QuerySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Snapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Snapshot_Filter>;
};

export type QueryStrategiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Strategy_Filter>;
};

export type QueryStrategyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenDistributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenDistributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDistribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDistribution_Filter>;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type QueryTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};

export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserSettBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserSettBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserSettBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserSettBalance_Filter>;
};

export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type QueryVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVaultBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVaultBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VaultBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultBalance_Filter>;
};

export type QueryVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
};

export type Registry = {
  __typename?: 'Registry';
  id: Scalars['ID'];
};

export type Registry_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum Registry_OrderBy {
  Id = 'id',
}

export type Sett = Erc20 &
  Vault &
  VaultBalance & {
    __typename?: 'Sett';
    author?: Maybe<Author>;
    available: Scalars['BigInt'];
    balance: Scalars['BigInt'];
    behavior: Scalars['String'];
    controller?: Maybe<Controller>;
    createdAt: Scalars['BigInt'];
    createdAtBlock: Scalars['BigInt'];
    decimals: Scalars['BigInt'];
    grossDeposit: Scalars['BigInt'];
    grossShareDeposit: Scalars['BigInt'];
    grossShareWithdraw: Scalars['BigInt'];
    grossWithdraw: Scalars['BigInt'];
    harvests: Array<SettHarvest>;
    id: Scalars['ID'];
    isProduction: Scalars['Boolean'];
    lastUpdatedAt: Scalars['BigInt'];
    name: Scalars['String'];
    netDeposit: Scalars['BigInt'];
    netShareDeposit: Scalars['BigInt'];
    pricePerFullShare: Scalars['BigInt'];
    protocol: Scalars['String'];
    releasedAt: Scalars['BigInt'];
    status: Scalars['Int'];
    strategy?: Maybe<Strategy>;
    symbol: Scalars['String'];
    token: Token;
    totalSupply: Scalars['BigInt'];
    treeDistributions: Array<BadgerTreeDistribution>;
    version: Scalars['String'];
  };

export type SettHarvestsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SettHarvest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettHarvest_Filter>;
};

export type SettTreeDistributionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgerTreeDistribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BadgerTreeDistribution_Filter>;
};

export type SettHarvest = TokenDistribution & {
  __typename?: 'SettHarvest';
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  id: Scalars['ID'];
  sett?: Maybe<Sett>;
  strategy?: Maybe<Strategy>;
  timestamp: Scalars['Int'];
  token: Token;
};

export type SettHarvest_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sett?: InputMaybe<Scalars['String']>;
  sett_?: InputMaybe<Sett_Filter>;
  sett_contains?: InputMaybe<Scalars['String']>;
  sett_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_ends_with?: InputMaybe<Scalars['String']>;
  sett_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_gt?: InputMaybe<Scalars['String']>;
  sett_gte?: InputMaybe<Scalars['String']>;
  sett_in?: InputMaybe<Array<Scalars['String']>>;
  sett_lt?: InputMaybe<Scalars['String']>;
  sett_lte?: InputMaybe<Scalars['String']>;
  sett_not?: InputMaybe<Scalars['String']>;
  sett_not_contains?: InputMaybe<Scalars['String']>;
  sett_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_not_ends_with?: InputMaybe<Scalars['String']>;
  sett_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_not_in?: InputMaybe<Array<Scalars['String']>>;
  sett_not_starts_with?: InputMaybe<Scalars['String']>;
  sett_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sett_starts_with?: InputMaybe<Scalars['String']>;
  sett_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_?: InputMaybe<Strategy_Filter>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum SettHarvest_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Id = 'id',
  Sett = 'sett',
  Strategy = 'strategy',
  Timestamp = 'timestamp',
  Token = 'token',
}

export type SettSnapshot = Erc20 &
  Snapshot &
  Vault &
  VaultBalance & {
    __typename?: 'SettSnapshot';
    balance: Scalars['BigInt'];
    decimals: Scalars['BigInt'];
    grossDeposit: Scalars['BigInt'];
    grossShareDeposit: Scalars['BigInt'];
    grossShareWithdraw: Scalars['BigInt'];
    grossWithdraw: Scalars['BigInt'];
    id: Scalars['ID'];
    name: Scalars['String'];
    netDeposit: Scalars['BigInt'];
    netShareDeposit: Scalars['BigInt'];
    pricePerFullShare: Scalars['BigInt'];
    symbol: Scalars['String'];
    timestamp: Scalars['Int'];
    token: Token;
    totalSupply: Scalars['BigInt'];
  };

export type SettSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossDeposit?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_not?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareDeposit?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_not?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_gt?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_gte?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw_lt?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_lte?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_not?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossWithdraw?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_gt?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_gte?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossWithdraw_lt?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_lte?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_not?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  netDeposit?: InputMaybe<Scalars['BigInt']>;
  netDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  netDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  netDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  netDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  netDeposit_not?: InputMaybe<Scalars['BigInt']>;
  netDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netShareDeposit?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netShareDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_not?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pricePerFullShare?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_gt?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_gte?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pricePerFullShare_lt?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_lte?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_not?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum SettSnapshot_OrderBy {
  Balance = 'balance',
  Decimals = 'decimals',
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossShareWithdraw = 'grossShareWithdraw',
  GrossWithdraw = 'grossWithdraw',
  Id = 'id',
  Name = 'name',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
  PricePerFullShare = 'pricePerFullShare',
  Symbol = 'symbol',
  Timestamp = 'timestamp',
  Token = 'token',
  TotalSupply = 'totalSupply',
}

export type Sett_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  author?: InputMaybe<Scalars['String']>;
  author_?: InputMaybe<Author_Filter>;
  author_contains?: InputMaybe<Scalars['String']>;
  author_contains_nocase?: InputMaybe<Scalars['String']>;
  author_ends_with?: InputMaybe<Scalars['String']>;
  author_ends_with_nocase?: InputMaybe<Scalars['String']>;
  author_gt?: InputMaybe<Scalars['String']>;
  author_gte?: InputMaybe<Scalars['String']>;
  author_in?: InputMaybe<Array<Scalars['String']>>;
  author_lt?: InputMaybe<Scalars['String']>;
  author_lte?: InputMaybe<Scalars['String']>;
  author_not?: InputMaybe<Scalars['String']>;
  author_not_contains?: InputMaybe<Scalars['String']>;
  author_not_contains_nocase?: InputMaybe<Scalars['String']>;
  author_not_ends_with?: InputMaybe<Scalars['String']>;
  author_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  author_not_in?: InputMaybe<Array<Scalars['String']>>;
  author_not_starts_with?: InputMaybe<Scalars['String']>;
  author_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  author_starts_with?: InputMaybe<Scalars['String']>;
  author_starts_with_nocase?: InputMaybe<Scalars['String']>;
  available?: InputMaybe<Scalars['BigInt']>;
  available_gt?: InputMaybe<Scalars['BigInt']>;
  available_gte?: InputMaybe<Scalars['BigInt']>;
  available_in?: InputMaybe<Array<Scalars['BigInt']>>;
  available_lt?: InputMaybe<Scalars['BigInt']>;
  available_lte?: InputMaybe<Scalars['BigInt']>;
  available_not?: InputMaybe<Scalars['BigInt']>;
  available_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  behavior?: InputMaybe<Scalars['String']>;
  behavior_contains?: InputMaybe<Scalars['String']>;
  behavior_contains_nocase?: InputMaybe<Scalars['String']>;
  behavior_ends_with?: InputMaybe<Scalars['String']>;
  behavior_ends_with_nocase?: InputMaybe<Scalars['String']>;
  behavior_gt?: InputMaybe<Scalars['String']>;
  behavior_gte?: InputMaybe<Scalars['String']>;
  behavior_in?: InputMaybe<Array<Scalars['String']>>;
  behavior_lt?: InputMaybe<Scalars['String']>;
  behavior_lte?: InputMaybe<Scalars['String']>;
  behavior_not?: InputMaybe<Scalars['String']>;
  behavior_not_contains?: InputMaybe<Scalars['String']>;
  behavior_not_contains_nocase?: InputMaybe<Scalars['String']>;
  behavior_not_ends_with?: InputMaybe<Scalars['String']>;
  behavior_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  behavior_not_in?: InputMaybe<Array<Scalars['String']>>;
  behavior_not_starts_with?: InputMaybe<Scalars['String']>;
  behavior_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  behavior_starts_with?: InputMaybe<Scalars['String']>;
  behavior_starts_with_nocase?: InputMaybe<Scalars['String']>;
  controller?: InputMaybe<Scalars['String']>;
  controller_?: InputMaybe<Controller_Filter>;
  controller_contains?: InputMaybe<Scalars['String']>;
  controller_contains_nocase?: InputMaybe<Scalars['String']>;
  controller_ends_with?: InputMaybe<Scalars['String']>;
  controller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  controller_gt?: InputMaybe<Scalars['String']>;
  controller_gte?: InputMaybe<Scalars['String']>;
  controller_in?: InputMaybe<Array<Scalars['String']>>;
  controller_lt?: InputMaybe<Scalars['String']>;
  controller_lte?: InputMaybe<Scalars['String']>;
  controller_not?: InputMaybe<Scalars['String']>;
  controller_not_contains?: InputMaybe<Scalars['String']>;
  controller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  controller_not_ends_with?: InputMaybe<Scalars['String']>;
  controller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  controller_not_in?: InputMaybe<Array<Scalars['String']>>;
  controller_not_starts_with?: InputMaybe<Scalars['String']>;
  controller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  controller_starts_with?: InputMaybe<Scalars['String']>;
  controller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossDeposit?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_not?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareDeposit?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_not?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_gt?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_gte?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw_lt?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_lte?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_not?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossWithdraw?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_gt?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_gte?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossWithdraw_lt?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_lte?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_not?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvests_?: InputMaybe<SettHarvest_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isProduction?: InputMaybe<Scalars['Boolean']>;
  isProduction_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isProduction_not?: InputMaybe<Scalars['Boolean']>;
  isProduction_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  lastUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  netDeposit?: InputMaybe<Scalars['BigInt']>;
  netDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  netDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  netDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  netDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  netDeposit_not?: InputMaybe<Scalars['BigInt']>;
  netDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netShareDeposit?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netShareDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_not?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pricePerFullShare?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_gt?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_gte?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pricePerFullShare_lt?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_lte?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_not?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  releasedAt?: InputMaybe<Scalars['BigInt']>;
  releasedAt_gt?: InputMaybe<Scalars['BigInt']>;
  releasedAt_gte?: InputMaybe<Scalars['BigInt']>;
  releasedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  releasedAt_lt?: InputMaybe<Scalars['BigInt']>;
  releasedAt_lte?: InputMaybe<Scalars['BigInt']>;
  releasedAt_not?: InputMaybe<Scalars['BigInt']>;
  releasedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<Scalars['Int']>;
  status_gt?: InputMaybe<Scalars['Int']>;
  status_gte?: InputMaybe<Scalars['Int']>;
  status_in?: InputMaybe<Array<Scalars['Int']>>;
  status_lt?: InputMaybe<Scalars['Int']>;
  status_lte?: InputMaybe<Scalars['Int']>;
  status_not?: InputMaybe<Scalars['Int']>;
  status_not_in?: InputMaybe<Array<Scalars['Int']>>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_?: InputMaybe<Strategy_Filter>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  treeDistributions_?: InputMaybe<BadgerTreeDistribution_Filter>;
  version?: InputMaybe<Scalars['String']>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_contains_nocase?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Sett_OrderBy {
  Author = 'author',
  Available = 'available',
  Balance = 'balance',
  Behavior = 'behavior',
  Controller = 'controller',
  CreatedAt = 'createdAt',
  CreatedAtBlock = 'createdAtBlock',
  Decimals = 'decimals',
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossShareWithdraw = 'grossShareWithdraw',
  GrossWithdraw = 'grossWithdraw',
  Harvests = 'harvests',
  Id = 'id',
  IsProduction = 'isProduction',
  LastUpdatedAt = 'lastUpdatedAt',
  Name = 'name',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
  PricePerFullShare = 'pricePerFullShare',
  Protocol = 'protocol',
  ReleasedAt = 'releasedAt',
  Status = 'status',
  Strategy = 'strategy',
  Symbol = 'symbol',
  Token = 'token',
  TotalSupply = 'totalSupply',
  TreeDistributions = 'treeDistributions',
  Version = 'version',
}

export type Snapshot = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
};

export type Snapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Snapshot_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
}

export type Strategy = {
  __typename?: 'Strategy';
  balance: Scalars['BigInt'];
  controller?: Maybe<Controller>;
  harvests: Array<SettHarvest>;
  id: Scalars['ID'];
  sett?: Maybe<Sett>;
  treeDistributions: Array<BadgerTreeDistribution>;
};

export type StrategyHarvestsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SettHarvest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettHarvest_Filter>;
};

export type StrategyTreeDistributionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgerTreeDistribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BadgerTreeDistribution_Filter>;
};

export type Strategy_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  controller?: InputMaybe<Scalars['String']>;
  controller_?: InputMaybe<Controller_Filter>;
  controller_contains?: InputMaybe<Scalars['String']>;
  controller_contains_nocase?: InputMaybe<Scalars['String']>;
  controller_ends_with?: InputMaybe<Scalars['String']>;
  controller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  controller_gt?: InputMaybe<Scalars['String']>;
  controller_gte?: InputMaybe<Scalars['String']>;
  controller_in?: InputMaybe<Array<Scalars['String']>>;
  controller_lt?: InputMaybe<Scalars['String']>;
  controller_lte?: InputMaybe<Scalars['String']>;
  controller_not?: InputMaybe<Scalars['String']>;
  controller_not_contains?: InputMaybe<Scalars['String']>;
  controller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  controller_not_ends_with?: InputMaybe<Scalars['String']>;
  controller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  controller_not_in?: InputMaybe<Array<Scalars['String']>>;
  controller_not_starts_with?: InputMaybe<Scalars['String']>;
  controller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  controller_starts_with?: InputMaybe<Scalars['String']>;
  controller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  harvests_?: InputMaybe<SettHarvest_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sett?: InputMaybe<Scalars['String']>;
  sett_?: InputMaybe<Sett_Filter>;
  sett_contains?: InputMaybe<Scalars['String']>;
  sett_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_ends_with?: InputMaybe<Scalars['String']>;
  sett_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_gt?: InputMaybe<Scalars['String']>;
  sett_gte?: InputMaybe<Scalars['String']>;
  sett_in?: InputMaybe<Array<Scalars['String']>>;
  sett_lt?: InputMaybe<Scalars['String']>;
  sett_lte?: InputMaybe<Scalars['String']>;
  sett_not?: InputMaybe<Scalars['String']>;
  sett_not_contains?: InputMaybe<Scalars['String']>;
  sett_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_not_ends_with?: InputMaybe<Scalars['String']>;
  sett_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_not_in?: InputMaybe<Array<Scalars['String']>>;
  sett_not_starts_with?: InputMaybe<Scalars['String']>;
  sett_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sett_starts_with?: InputMaybe<Scalars['String']>;
  sett_starts_with_nocase?: InputMaybe<Scalars['String']>;
  treeDistributions_?: InputMaybe<BadgerTreeDistribution_Filter>;
};

export enum Strategy_OrderBy {
  Balance = 'balance',
  Controller = 'controller',
  Harvests = 'harvests',
  Id = 'id',
  Sett = 'sett',
  TreeDistributions = 'treeDistributions',
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  author?: Maybe<Author>;
  authors: Array<Author>;
  badgerTreeDistribution?: Maybe<BadgerTreeDistribution>;
  badgerTreeDistributions: Array<BadgerTreeDistribution>;
  controller?: Maybe<Controller>;
  controllers: Array<Controller>;
  erc20?: Maybe<Erc20>;
  erc20S: Array<Erc20>;
  registries: Array<Registry>;
  registry?: Maybe<Registry>;
  sett?: Maybe<Sett>;
  settHarvest?: Maybe<SettHarvest>;
  settHarvests: Array<SettHarvest>;
  settSnapshot?: Maybe<SettSnapshot>;
  settSnapshots: Array<SettSnapshot>;
  setts: Array<Sett>;
  snapshot?: Maybe<Snapshot>;
  snapshots: Array<Snapshot>;
  strategies: Array<Strategy>;
  strategy?: Maybe<Strategy>;
  token?: Maybe<Token>;
  tokenDistribution?: Maybe<TokenDistribution>;
  tokenDistributions: Array<TokenDistribution>;
  tokens: Array<Token>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  user?: Maybe<User>;
  userSettBalance?: Maybe<UserSettBalance>;
  userSettBalances: Array<UserSettBalance>;
  users: Array<User>;
  vault?: Maybe<Vault>;
  vaultBalance?: Maybe<VaultBalance>;
  vaultBalances: Array<VaultBalance>;
  vaults: Array<Vault>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionAuthorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAuthorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Author_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Author_Filter>;
};

export type SubscriptionBadgerTreeDistributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBadgerTreeDistributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgerTreeDistribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadgerTreeDistribution_Filter>;
};

export type SubscriptionControllerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionControllersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Controller_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Controller_Filter>;
};

export type SubscriptionErc20Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc20SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc20_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20_Filter>;
};

export type SubscriptionRegistriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Registry_Filter>;
};

export type SubscriptionRegistryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSettArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSettHarvestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSettHarvestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SettHarvest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SettHarvest_Filter>;
};

export type SubscriptionSettSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSettSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SettSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SettSnapshot_Filter>;
};

export type SubscriptionSettsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sett_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Sett_Filter>;
};

export type SubscriptionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Snapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Snapshot_Filter>;
};

export type SubscriptionStrategiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Strategy_Filter>;
};

export type SubscriptionStrategyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenDistributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenDistributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDistribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDistribution_Filter>;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type SubscriptionTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};

export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserSettBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserSettBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserSettBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserSettBalance_Filter>;
};

export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type SubscriptionVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVaultBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVaultBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VaultBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultBalance_Filter>;
};

export type SubscriptionVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
};

export type Token = Erc20 & {
  __typename?: 'Token';
  decimals: Scalars['BigInt'];
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  totalSupply: Scalars['BigInt'];
};

export type TokenDistribution = {
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  id: Scalars['ID'];
  sett?: Maybe<Sett>;
  strategy?: Maybe<Strategy>;
  timestamp: Scalars['Int'];
  token: Token;
};

export type TokenDistribution_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sett?: InputMaybe<Scalars['String']>;
  sett_?: InputMaybe<Sett_Filter>;
  sett_contains?: InputMaybe<Scalars['String']>;
  sett_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_ends_with?: InputMaybe<Scalars['String']>;
  sett_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_gt?: InputMaybe<Scalars['String']>;
  sett_gte?: InputMaybe<Scalars['String']>;
  sett_in?: InputMaybe<Array<Scalars['String']>>;
  sett_lt?: InputMaybe<Scalars['String']>;
  sett_lte?: InputMaybe<Scalars['String']>;
  sett_not?: InputMaybe<Scalars['String']>;
  sett_not_contains?: InputMaybe<Scalars['String']>;
  sett_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_not_ends_with?: InputMaybe<Scalars['String']>;
  sett_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_not_in?: InputMaybe<Array<Scalars['String']>>;
  sett_not_starts_with?: InputMaybe<Scalars['String']>;
  sett_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sett_starts_with?: InputMaybe<Scalars['String']>;
  sett_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_?: InputMaybe<Strategy_Filter>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum TokenDistribution_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Id = 'id',
  Sett = 'sett',
  Strategy = 'strategy',
  Timestamp = 'timestamp',
  Token = 'token',
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Token_OrderBy {
  Decimals = 'decimals',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  TotalSupply = 'totalSupply',
}

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  transfers: Array<Transfer>;
};

export type TransactionTransfersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Transfer_Filter>;
};

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transfers_?: InputMaybe<Transfer_Filter>;
};

export enum Transaction_OrderBy {
  Id = 'id',
  Transfers = 'transfers',
}

export type Transfer = Snapshot & {
  __typename?: 'Transfer';
  amount: Scalars['BigInt'];
  from: User;
  id: Scalars['ID'];
  sett: Sett;
  timestamp: Scalars['Int'];
  to: User;
  transaction: Transaction;
};

export type Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<User_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sett?: InputMaybe<Scalars['String']>;
  sett_?: InputMaybe<Sett_Filter>;
  sett_contains?: InputMaybe<Scalars['String']>;
  sett_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_ends_with?: InputMaybe<Scalars['String']>;
  sett_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_gt?: InputMaybe<Scalars['String']>;
  sett_gte?: InputMaybe<Scalars['String']>;
  sett_in?: InputMaybe<Array<Scalars['String']>>;
  sett_lt?: InputMaybe<Scalars['String']>;
  sett_lte?: InputMaybe<Scalars['String']>;
  sett_not?: InputMaybe<Scalars['String']>;
  sett_not_contains?: InputMaybe<Scalars['String']>;
  sett_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_not_ends_with?: InputMaybe<Scalars['String']>;
  sett_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_not_in?: InputMaybe<Array<Scalars['String']>>;
  sett_not_starts_with?: InputMaybe<Scalars['String']>;
  sett_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sett_starts_with?: InputMaybe<Scalars['String']>;
  sett_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<User_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Transfer_OrderBy {
  Amount = 'amount',
  From = 'from',
  Id = 'id',
  Sett = 'sett',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction',
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  settBalances: Array<UserSettBalance>;
};

export type UserSettBalancesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserSettBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserSettBalance_Filter>;
};

export type UserSettBalance = VaultBalance & {
  __typename?: 'UserSettBalance';
  grossDeposit: Scalars['BigInt'];
  grossShareDeposit: Scalars['BigInt'];
  grossShareWithdraw: Scalars['BigInt'];
  grossWithdraw: Scalars['BigInt'];
  id: Scalars['ID'];
  netDeposit: Scalars['BigInt'];
  netShareDeposit: Scalars['BigInt'];
  sett: Sett;
  user: User;
};

export type UserSettBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  grossDeposit?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_not?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareDeposit?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_not?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_gt?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_gte?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw_lt?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_lte?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_not?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossWithdraw?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_gt?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_gte?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossWithdraw_lt?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_lte?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_not?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  netDeposit?: InputMaybe<Scalars['BigInt']>;
  netDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  netDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  netDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  netDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  netDeposit_not?: InputMaybe<Scalars['BigInt']>;
  netDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netShareDeposit?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netShareDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_not?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sett?: InputMaybe<Scalars['String']>;
  sett_?: InputMaybe<Sett_Filter>;
  sett_contains?: InputMaybe<Scalars['String']>;
  sett_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_ends_with?: InputMaybe<Scalars['String']>;
  sett_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_gt?: InputMaybe<Scalars['String']>;
  sett_gte?: InputMaybe<Scalars['String']>;
  sett_in?: InputMaybe<Array<Scalars['String']>>;
  sett_lt?: InputMaybe<Scalars['String']>;
  sett_lte?: InputMaybe<Scalars['String']>;
  sett_not?: InputMaybe<Scalars['String']>;
  sett_not_contains?: InputMaybe<Scalars['String']>;
  sett_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sett_not_ends_with?: InputMaybe<Scalars['String']>;
  sett_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sett_not_in?: InputMaybe<Array<Scalars['String']>>;
  sett_not_starts_with?: InputMaybe<Scalars['String']>;
  sett_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sett_starts_with?: InputMaybe<Scalars['String']>;
  sett_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum UserSettBalance_OrderBy {
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossShareWithdraw = 'grossShareWithdraw',
  GrossWithdraw = 'grossWithdraw',
  Id = 'id',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
  Sett = 'sett',
  User = 'user',
}

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  settBalances_?: InputMaybe<UserSettBalance_Filter>;
};

export enum User_OrderBy {
  Id = 'id',
  SettBalances = 'settBalances',
}

export type Vault = {
  balance: Scalars['BigInt'];
  id: Scalars['ID'];
  pricePerFullShare: Scalars['BigInt'];
  token: Token;
};

export type VaultBalance = {
  grossDeposit: Scalars['BigInt'];
  grossShareDeposit: Scalars['BigInt'];
  grossShareWithdraw: Scalars['BigInt'];
  grossWithdraw: Scalars['BigInt'];
  id: Scalars['ID'];
  netDeposit: Scalars['BigInt'];
  netShareDeposit: Scalars['BigInt'];
};

export type VaultBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  grossDeposit?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_not?: InputMaybe<Scalars['BigInt']>;
  grossDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareDeposit?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_not?: InputMaybe<Scalars['BigInt']>;
  grossShareDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_gt?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_gte?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw_lt?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_lte?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_not?: InputMaybe<Scalars['BigInt']>;
  grossShareWithdraw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossWithdraw?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_gt?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_gte?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  grossWithdraw_lt?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_lte?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_not?: InputMaybe<Scalars['BigInt']>;
  grossWithdraw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  netDeposit?: InputMaybe<Scalars['BigInt']>;
  netDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  netDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  netDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  netDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  netDeposit_not?: InputMaybe<Scalars['BigInt']>;
  netDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netShareDeposit?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netShareDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_not?: InputMaybe<Scalars['BigInt']>;
  netShareDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum VaultBalance_OrderBy {
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossShareWithdraw = 'grossShareWithdraw',
  GrossWithdraw = 'grossWithdraw',
  Id = 'id',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
}

export type Vault_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pricePerFullShare?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_gt?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_gte?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pricePerFullShare_lt?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_lte?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_not?: InputMaybe<Scalars['BigInt']>;
  pricePerFullShare_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Vault_OrderBy {
  Balance = 'balance',
  Id = 'id',
  PricePerFullShare = 'pricePerFullShare',
  Token = 'token',
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars['String']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
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
    available
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
      balance
    }
    version
    status
    isProduction
    createdAt
    createdAtBlock
    lastUpdatedAt
    releasedAt
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
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
) => action();

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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
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
        'query',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type BadgerTreeDistributionFragment = {
  __typename?: 'BadgerTreeDistribution';
  id: string;
  timestamp: number;
  amount: any;
  blockNumber: any;
  token: {
    __typename?: 'Token';
    id: string;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
  };
  strategy?: { __typename?: 'Strategy'; id: string } | null;
  sett?: { __typename?: 'Sett'; id: string } | null;
};

export type SettHarvestFragment = {
  __typename?: 'SettHarvest';
  id: string;
  timestamp: number;
  amount: any;
  blockNumber: any;
  token: {
    __typename?: 'Token';
    id: string;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
  };
  strategy?: { __typename?: 'Strategy'; id: string } | null;
  sett?: { __typename?: 'Sett'; id: string } | null;
};

export type SettSnapshotFragment = {
  __typename?: 'SettSnapshot';
  id: string;
  timestamp: number;
  name: string;
  symbol: string;
  decimals: any;
  totalSupply: any;
  balance: any;
  pricePerFullShare: any;
  netDeposit: any;
  netShareDeposit: any;
  grossDeposit: any;
  grossShareDeposit: any;
  grossWithdraw: any;
  grossShareWithdraw: any;
  token: {
    __typename?: 'Token';
    id: string;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
  };
};

export type SettFragment = {
  __typename?: 'Sett';
  id: string;
  name: string;
  symbol: string;
  available: any;
  decimals: any;
  totalSupply: any;
  balance: any;
  pricePerFullShare: any;
  netDeposit: any;
  netShareDeposit: any;
  grossDeposit: any;
  grossShareDeposit: any;
  grossWithdraw: any;
  grossShareWithdraw: any;
  version: string;
  status: number;
  isProduction: boolean;
  createdAt: any;
  createdAtBlock: any;
  lastUpdatedAt: any;
  releasedAt: any;
  token: {
    __typename?: 'Token';
    id: string;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
  };
  controller?: { __typename?: 'Controller'; id: string } | null;
  strategy?: { __typename?: 'Strategy'; id: string; balance: any } | null;
};

export type StrategyFragment = {
  __typename?: 'Strategy';
  id: string;
  balance: any;
  controller?: { __typename?: 'Controller'; id: string } | null;
  sett?: { __typename?: 'Sett'; id: string } | null;
  treeDistributions: Array<{
    __typename?: 'BadgerTreeDistribution';
    id: string;
    timestamp: number;
    amount: any;
    blockNumber: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    strategy?: { __typename?: 'Strategy'; id: string } | null;
    sett?: { __typename?: 'Sett'; id: string } | null;
  }>;
  harvests: Array<{
    __typename?: 'SettHarvest';
    id: string;
    timestamp: number;
    amount: any;
    blockNumber: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    strategy?: { __typename?: 'Strategy'; id: string } | null;
    sett?: { __typename?: 'Sett'; id: string } | null;
  }>;
};

export type TokenFragment = {
  __typename?: 'Token';
  id: string;
  name: string;
  symbol: string;
  decimals: any;
  totalSupply: any;
};

export type TransferFragment = {
  __typename?: 'Transfer';
  id: string;
  timestamp: number;
  amount: any;
  sett: { __typename?: 'Sett'; id: string };
  from: { __typename?: 'User'; id: string };
  to: { __typename?: 'User'; id: string };
  transaction: { __typename?: 'Transaction'; id: string };
};

export type UserSettBalanceFragment = {
  __typename?: 'UserSettBalance';
  id: string;
  netDeposit: any;
  netShareDeposit: any;
  grossDeposit: any;
  grossShareDeposit: any;
  grossWithdraw: any;
  grossShareWithdraw: any;
  user: { __typename?: 'User'; id: string };
  sett: { __typename?: 'Sett'; id: string };
};

export type UserFragment = {
  __typename?: 'User';
  id: string;
  settBalances: Array<{
    __typename?: 'UserSettBalance';
    id: string;
    netDeposit: any;
    netShareDeposit: any;
    grossDeposit: any;
    grossShareDeposit: any;
    grossWithdraw: any;
    grossShareWithdraw: any;
    user: { __typename?: 'User'; id: string };
    sett: { __typename?: 'Sett'; id: string };
  }>;
};

export type BadgerTreeDistributionQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;

export type BadgerTreeDistributionQuery = {
  __typename?: 'Query';
  badgerTreeDistribution?: {
    __typename?: 'BadgerTreeDistribution';
    id: string;
    timestamp: number;
    amount: any;
    blockNumber: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    strategy?: { __typename?: 'Strategy'; id: string } | null;
    sett?: { __typename?: 'Sett'; id: string } | null;
  } | null;
};

export type BadgerTreeDistributionsQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgerTreeDistribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BadgerTreeDistribution_Filter>;
}>;

export type BadgerTreeDistributionsQuery = {
  __typename?: 'Query';
  badgerTreeDistributions: Array<{
    __typename?: 'BadgerTreeDistribution';
    id: string;
    timestamp: number;
    amount: any;
    blockNumber: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    strategy?: { __typename?: 'Strategy'; id: string } | null;
    sett?: { __typename?: 'Sett'; id: string } | null;
  }>;
};

export type ControllersQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Controller_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Controller_Filter>;
}>;

export type ControllersQuery = {
  __typename?: 'Query';
  controllers: Array<{ __typename?: 'Controller'; id: string }>;
};

export type SettHarvestQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;

export type SettHarvestQuery = {
  __typename?: 'Query';
  settHarvest?: {
    __typename?: 'SettHarvest';
    id: string;
    timestamp: number;
    amount: any;
    blockNumber: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    strategy?: { __typename?: 'Strategy'; id: string } | null;
    sett?: { __typename?: 'Sett'; id: string } | null;
  } | null;
};

export type SettHarvestsQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SettHarvest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SettHarvest_Filter>;
}>;

export type SettHarvestsQuery = {
  __typename?: 'Query';
  settHarvests: Array<{
    __typename?: 'SettHarvest';
    id: string;
    timestamp: number;
    amount: any;
    blockNumber: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    strategy?: { __typename?: 'Strategy'; id: string } | null;
    sett?: { __typename?: 'Sett'; id: string } | null;
  }>;
};

export type SettSnapshotQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;

export type SettSnapshotQuery = {
  __typename?: 'Query';
  settSnapshot?: {
    __typename?: 'SettSnapshot';
    id: string;
    timestamp: number;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
    balance: any;
    pricePerFullShare: any;
    netDeposit: any;
    netShareDeposit: any;
    grossDeposit: any;
    grossShareDeposit: any;
    grossWithdraw: any;
    grossShareWithdraw: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
  } | null;
};

export type SettSnapshotsQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SettSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SettSnapshot_Filter>;
}>;

export type SettSnapshotsQuery = {
  __typename?: 'Query';
  settSnapshots: Array<{
    __typename?: 'SettSnapshot';
    id: string;
    timestamp: number;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
    balance: any;
    pricePerFullShare: any;
    netDeposit: any;
    netShareDeposit: any;
    grossDeposit: any;
    grossShareDeposit: any;
    grossWithdraw: any;
    grossShareWithdraw: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
  }>;
};

export type SettQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;

export type SettQuery = {
  __typename?: 'Query';
  sett?: {
    __typename?: 'Sett';
    id: string;
    name: string;
    symbol: string;
    available: any;
    decimals: any;
    totalSupply: any;
    balance: any;
    pricePerFullShare: any;
    netDeposit: any;
    netShareDeposit: any;
    grossDeposit: any;
    grossShareDeposit: any;
    grossWithdraw: any;
    grossShareWithdraw: any;
    version: string;
    status: number;
    isProduction: boolean;
    createdAt: any;
    createdAtBlock: any;
    lastUpdatedAt: any;
    releasedAt: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    controller?: { __typename?: 'Controller'; id: string } | null;
    strategy?: { __typename?: 'Strategy'; id: string; balance: any } | null;
  } | null;
};

export type SettsQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sett_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sett_Filter>;
}>;

export type SettsQuery = {
  __typename?: 'Query';
  setts: Array<{
    __typename?: 'Sett';
    id: string;
    name: string;
    symbol: string;
    available: any;
    decimals: any;
    totalSupply: any;
    balance: any;
    pricePerFullShare: any;
    netDeposit: any;
    netShareDeposit: any;
    grossDeposit: any;
    grossShareDeposit: any;
    grossWithdraw: any;
    grossShareWithdraw: any;
    version: string;
    status: number;
    isProduction: boolean;
    createdAt: any;
    createdAtBlock: any;
    lastUpdatedAt: any;
    releasedAt: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    controller?: { __typename?: 'Controller'; id: string } | null;
    strategy?: { __typename?: 'Strategy'; id: string; balance: any } | null;
  }>;
};

export type StrategyQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;

export type StrategyQuery = {
  __typename?: 'Query';
  strategy?: {
    __typename?: 'Strategy';
    id: string;
    balance: any;
    controller?: { __typename?: 'Controller'; id: string } | null;
    sett?: { __typename?: 'Sett'; id: string } | null;
    treeDistributions: Array<{
      __typename?: 'BadgerTreeDistribution';
      id: string;
      timestamp: number;
      amount: any;
      blockNumber: any;
      token: {
        __typename?: 'Token';
        id: string;
        name: string;
        symbol: string;
        decimals: any;
        totalSupply: any;
      };
      strategy?: { __typename?: 'Strategy'; id: string } | null;
      sett?: { __typename?: 'Sett'; id: string } | null;
    }>;
    harvests: Array<{
      __typename?: 'SettHarvest';
      id: string;
      timestamp: number;
      amount: any;
      blockNumber: any;
      token: {
        __typename?: 'Token';
        id: string;
        name: string;
        symbol: string;
        decimals: any;
        totalSupply: any;
      };
      strategy?: { __typename?: 'Strategy'; id: string } | null;
      sett?: { __typename?: 'Sett'; id: string } | null;
    }>;
  } | null;
};

export type StrategiesQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Strategy_Filter>;
}>;

export type StrategiesQuery = {
  __typename?: 'Query';
  strategies: Array<{
    __typename?: 'Strategy';
    id: string;
    balance: any;
    controller?: { __typename?: 'Controller'; id: string } | null;
    sett?: { __typename?: 'Sett'; id: string } | null;
    treeDistributions: Array<{
      __typename?: 'BadgerTreeDistribution';
      id: string;
      timestamp: number;
      amount: any;
      blockNumber: any;
      token: {
        __typename?: 'Token';
        id: string;
        name: string;
        symbol: string;
        decimals: any;
        totalSupply: any;
      };
      strategy?: { __typename?: 'Strategy'; id: string } | null;
      sett?: { __typename?: 'Sett'; id: string } | null;
    }>;
    harvests: Array<{
      __typename?: 'SettHarvest';
      id: string;
      timestamp: number;
      amount: any;
      blockNumber: any;
      token: {
        __typename?: 'Token';
        id: string;
        name: string;
        symbol: string;
        decimals: any;
        totalSupply: any;
      };
      strategy?: { __typename?: 'Strategy'; id: string } | null;
      sett?: { __typename?: 'Sett'; id: string } | null;
    }>;
  }>;
};

export type TokenQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;

export type TokenQuery = {
  __typename?: 'Query';
  token?: {
    __typename?: 'Token';
    id: string;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
  } | null;
};

export type TokensQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_Filter>;
}>;

export type TokensQuery = {
  __typename?: 'Query';
  tokens: Array<{
    __typename?: 'Token';
    id: string;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
  }>;
};

export type TransferQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;

export type TransferQuery = {
  __typename?: 'Query';
  transfer?: {
    __typename?: 'Transfer';
    id: string;
    timestamp: number;
    amount: any;
    sett: { __typename?: 'Sett'; id: string };
    from: { __typename?: 'User'; id: string };
    to: { __typename?: 'User'; id: string };
    transaction: { __typename?: 'Transaction'; id: string };
  } | null;
};

export type TransfersQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_Filter>;
}>;

export type TransfersQuery = {
  __typename?: 'Query';
  transfers: Array<{
    __typename?: 'Transfer';
    id: string;
    timestamp: number;
    amount: any;
    sett: { __typename?: 'Sett'; id: string };
    from: { __typename?: 'User'; id: string };
    to: { __typename?: 'User'; id: string };
    transaction: { __typename?: 'Transaction'; id: string };
  }>;
};

export type UserSettBalanceQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;

export type UserSettBalanceQuery = {
  __typename?: 'Query';
  userSettBalance?: {
    __typename?: 'UserSettBalance';
    id: string;
    netDeposit: any;
    netShareDeposit: any;
    grossDeposit: any;
    grossShareDeposit: any;
    grossWithdraw: any;
    grossShareWithdraw: any;
    user: { __typename?: 'User'; id: string };
    sett: { __typename?: 'Sett'; id: string };
  } | null;
};

export type UserSettBalancesQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserSettBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserSettBalance_Filter>;
}>;

export type UserSettBalancesQuery = {
  __typename?: 'Query';
  userSettBalances: Array<{
    __typename?: 'UserSettBalance';
    id: string;
    netDeposit: any;
    netShareDeposit: any;
    grossDeposit: any;
    grossShareDeposit: any;
    grossWithdraw: any;
    grossShareWithdraw: any;
    user: { __typename?: 'User'; id: string };
    sett: { __typename?: 'Sett'; id: string };
  }>;
};

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;

export type UserQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    id: string;
    settBalances: Array<{
      __typename?: 'UserSettBalance';
      id: string;
      netDeposit: any;
      netShareDeposit: any;
      grossDeposit: any;
      grossShareDeposit: any;
      grossWithdraw: any;
      grossShareWithdraw: any;
      user: { __typename?: 'User'; id: string };
      sett: { __typename?: 'Sett'; id: string };
    }>;
  } | null;
};

export type UsersQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_Filter>;
}>;

export type UsersQuery = {
  __typename?: 'Query';
  users: Array<{
    __typename?: 'User';
    id: string;
    settBalances: Array<{
      __typename?: 'UserSettBalance';
      id: string;
      netDeposit: any;
      netShareDeposit: any;
      grossDeposit: any;
      grossShareDeposit: any;
      grossWithdraw: any;
      grossShareWithdraw: any;
      user: { __typename?: 'User'; id: string };
      sett: { __typename?: 'Sett'; id: string };
    }>;
  }>;
};
