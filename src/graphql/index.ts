import { Networkish } from '@ethersproject/networks';
import { GraphQLClient } from 'graphql-request';

import { GraphOptions } from '../api/interfaces/graph-options.interface';
import { Network } from '../config/enums/network.enum';
import { getSdk, Sdk as BadgerGraphQLSDK } from './generated/badger';
import * as gqlGenT from './generated/badger';

const DEFAULT_API_URL =
  'https://api.thegraph.com/subgraphs/name/badger-finance/badger-dao-setts';

export class BadgerGraph {
  network: Networkish;
  graphUrl: string;

  // let users make custom queries
  graphClient: GraphQLClient;

  private graphSDK: BadgerGraphQLSDK;

  constructor({
    network = Network.Ethereum,
    baseURL = DEFAULT_API_URL,
  }: GraphOptions) {
    this.network = network;
    this.graphUrl =
      baseURL === DEFAULT_API_URL ? this.#resolveClientUrl(baseURL) : baseURL;

    this.graphClient = new GraphQLClient(this.graphUrl);
    this.graphSDK = getSdk(this.graphClient);
  }

  loadSett(options: gqlGenT.SettQueryVariables): Promise<gqlGenT.SettQuery> {
    options.id = options.id.toLowerCase();
    return this.graphSDK.Sett(options);
  }

  loadSetts(options: gqlGenT.SettsQueryVariables): Promise<gqlGenT.SettsQuery> {
    return this.graphSDK.Setts(options);
  }

  loadSettSnapshot(
    options: gqlGenT.SettSnapshotQueryVariables,
  ): Promise<gqlGenT.SettSnapshotQuery> {
    return this.graphSDK.SettSnapshot(options);
  }

  loadSettSnapshots(
    options: gqlGenT.SettSnapshotsQueryVariables,
  ): Promise<gqlGenT.SettSnapshotsQuery> {
    return this.graphSDK.SettSnapshots(options);
  }

  loadUserSettBalance(
    options: gqlGenT.UserSettBalanceQueryVariables,
  ): Promise<gqlGenT.UserSettBalanceQuery> {
    return this.graphSDK.UserSettBalance(options);
  }

  loadUserSettBalances(
    options: gqlGenT.UserSettBalancesQueryVariables,
  ): Promise<gqlGenT.UserSettBalancesQuery> {
    return this.graphSDK.UserSettBalances(options);
  }

  loadSettHarvest(
    options: gqlGenT.SettHarvestQueryVariables,
  ): Promise<gqlGenT.SettHarvestQuery> {
    return this.graphSDK.SettHarvest(options);
  }

  loadSettHarvests(
    options: gqlGenT.SettHarvestsQueryVariables,
  ): Promise<gqlGenT.SettHarvestsQuery> {
    return this.graphSDK.SettHarvests(options);
  }

  loadTransfer(
    options: gqlGenT.TransferQueryVariables,
  ): Promise<gqlGenT.TransferQuery> {
    return this.graphSDK.Transfer(options);
  }

  loadTransfers(
    options: gqlGenT.TransfersQueryVariables,
  ): Promise<gqlGenT.TransfersQuery> {
    return this.graphSDK.Transfers(options);
  }

  loadUser(options: gqlGenT.UserQueryVariables): Promise<gqlGenT.UserQuery> {
    return this.graphSDK.User(options);
  }

  loadUsers(options: gqlGenT.UsersQueryVariables): Promise<gqlGenT.UsersQuery> {
    return this.graphSDK.Users(options);
  }

  loadToken(options: gqlGenT.TokenQueryVariables): Promise<gqlGenT.TokenQuery> {
    return this.graphSDK.Token(options);
  }

  loadTokens(
    options: gqlGenT.TokensQueryVariables,
  ): Promise<gqlGenT.TokensQuery> {
    return this.graphSDK.Tokens(options);
  }

  loadBadgerTreeDistribution(
    options: gqlGenT.BadgerTreeDistributionQueryVariables,
  ): Promise<gqlGenT.BadgerTreeDistributionQuery> {
    return this.graphSDK.BadgerTreeDistribution(options);
  }

  loadBadgerTreeDistributions(
    options: gqlGenT.BadgerTreeDistributionsQueryVariables,
  ): Promise<gqlGenT.BadgerTreeDistributionsQuery> {
    return this.graphSDK.BadgerTreeDistributions(options);
  }

  loadStrategy(
    options: gqlGenT.StrategyQueryVariables,
  ): Promise<gqlGenT.StrategyQuery> {
    return this.graphSDK.Strategy(options);
  }

  loadStrategies(
    options: gqlGenT.StrategiesQueryVariables,
  ): Promise<gqlGenT.StrategiesQuery> {
    return this.graphSDK.Strategies(options);
  }

  loadControllers(
    options: gqlGenT.ControllersQueryVariables,
  ): Promise<gqlGenT.ControllersQuery> {
    return this.graphSDK.Controllers(options);
  }

  #resolveClientUrl(baseURL: string) {
    let networkSuffix: string;
    switch (this.network) {
      case Network.Ethereum:
        networkSuffix = '';
        break;
      case Network.BinanceSmartChain:
        networkSuffix = '-bsc';
        break;
      default:
        networkSuffix = `-${this.network}`;
    }
    return `${baseURL}${networkSuffix}`;
  }
}

// for types reuse perpuse and proxy this in entry point
export { gqlGenT };
