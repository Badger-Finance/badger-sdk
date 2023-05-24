<div> 
  <img align="right" src="docs/images/badger.png" height="150" />
</div>

# Badger SDK

BadgerDAO is a decentralized autonomous organization focused on bringing Bitcoin to DeFi.
The Badger SDK provides easy access to the Badger Protocol on any chain, as well as fast access to the Badger API for JavaScript applcations.

![Version](https://img.shields.io/npm/v/@badger-dao/sdk)
[![License](https://img.shields.io/npm/l/@badger-dao/sdk)](https://opensource.org/licenses/MIT)
[![Service Tests](https://github.com/Badger-Finance/badger-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/Badger-Finance/badger-sdk/actions/workflows/test.yml)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## Documentation

- [Badger API Documentation](https://api.badger.com/docs/)
- [Badger Subgraph](https://thegraph.com/hosted-service/subgraph/badger-finance/badger-dao-setts)

## Installation

Install the package:

```bash
yarn add @badger-dao/sdk
```

## Getting Started

Utilizing the SDK requires an RPC provider:

```js
import BadgerSDK, { Network } from '@badger-dao/sdk';

const sdk = new BadgerSDK({
  network: Network.Ethereum,
  provider: 'https://eth-archival.gateway.pokt.network/v1/lb/<APP_ID>',
  graphURL: '<Graph API URl>', // optional
});
```

Or, utilizing the API requires only a network input:

```js
import { BadgerAPI, Network } from '@badger-dao/sdk';

const api = new BadgerAPI({ network: Network.Ethereum });

await api.loadPrices();
```

Badger subgraph is also available for use:

```js
import { BadgerGraph, Network } from '@badger-dao/sdk';

const subgraph = new BadgerGraph({
  network: Network.Ethereum,
  baseURL: '<Graph API URl>', // optional
});

await subgraph.loadSetts({
  orderBy: 'id',
  orderDirection: 'asc',
});
```

## Development

Consider to use package lock file, while installing node dependencies:

```sh
yarn install --frozen-lockfile
# This will auto-generete contracts and the graph code
# for further development
yarn init:sdk
```

General knowledge for contributing to the repository is kept in [Documentation](./docs).

Some topics covered include:

- [Local Testing and Examples](./docs/local-testing.md)

## Releasing new version

Releases are determined by the commit messages.
Commits beginning with `fix:` will release a new patch version, commits beginning with
`feat:` will release a new minor version,
and commits beginning with `BREAKING CHANGE:` will release a new major version.
The action will run on a push to main.
