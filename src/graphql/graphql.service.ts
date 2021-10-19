import { GraphQLClient } from 'graphql-request';
import { Network } from '../config/enums/network.enum';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import {
  Sdk as BadgerGraphQLSDK,
  getSdk,
  SettQuery,
  SettQueryVariables,
} from './generated/badger';

export class GraphQLService extends Service {
  private graphSDK: BadgerGraphQLSDK;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    const client = new GraphQLClient(this.resolveClientUrl());
    this.graphSDK = getSdk(client);
  }

  async loadSett(options: SettQueryVariables): Promise<SettQuery> {
    options.id = options.id.toLowerCase();
    return this.graphSDK.Sett(options);
  }

  private resolveClientUrl() {
    const { network } = this.config;
    return `https://api.thegraph.com/subgraphs/name/badger-finance/badger-dao-setts${
      network !== Network.Ethereum ? `-${network}` : ''
    }`;
  }
}
