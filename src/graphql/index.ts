import { GraphQLClient } from 'graphql-request';
import { Networkish } from "@ethersproject/networks";

import { Network } from '../config/enums/network.enum';

import {
  Sdk as BadgerGraphQLSDK,
  getSdk
} from './generated/badger';

import * as gqlGenT from './generated/badger';

const DEFAULT_API_URL = 'https://api.thegraph.com/subgraphs/name/badger-finance/badger-dao-setts'

export class BadgerGraph {
  network: Networkish
  graphUrl: string

  // let users make custom queries
  graphClient: GraphQLClient;

  private graphSDK: BadgerGraphQLSDK;

  constructor(
    network: Networkish = Network.Ethereum,
    baseURL = DEFAULT_API_URL,
  ) {
    this.network = network;
    this.graphUrl = this.resolveClientUrl(baseURL)

    this.graphClient = new GraphQLClient(this.resolveClientUrl(this.graphUrl));
    this.graphSDK = getSdk(this.graphClient);
  }

  loadSett(
    options: gqlGenT.SettQueryVariables
  ): Promise<gqlGenT.SettQuery> {
    options.id = options.id.toLowerCase();
    return this.graphSDK.Sett(options);
  }

  loadSetts(
    opstions: gqlGenT.SettsQueryVariables
  ): Promise<gqlGenT.SettsQuery> {
    return this.graphSDK.Setts(opstions);
  }

  loadToken(
    options: gqlGenT.TokenQueryVariables
  ): Promise<gqlGenT.TokenQuery> {
    return this.graphSDK.Token(options);
  }

  loadTokens(
    options: gqlGenT.TokensQueryVariables
  ): Promise<gqlGenT.TokensQuery> {
    return this.graphSDK.Tokens(options);
  }

  private resolveClientUrl(baseURL: string) {
    const networkSufix = this.network !== Network.Ethereum ? (
      `-${this.network}`
    ) : '';

    return `${baseURL}${networkSufix}`;
  }
}

// for types reuse perpuse and proxy this in entry point
export { gqlGenT };
