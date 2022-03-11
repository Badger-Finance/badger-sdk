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

const provider = new ethers.providers.JsonRpcProvider('https://myrpc.io/');

const sdk = new BadgerSDK({
  network: Network.Ethereum,
  provider
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

const subgraph = BadgerGraph({ network: Network.Ethereum });

await subgraph.loadSetts({
  orderBy: 'id',
  orderDirection: 'asc',
});
```

## Locally linking the package

In order to link the package first you need to build it:

```bash
yarn build
```

then go to the lib folder and create a symlink with [yarn link](https://classic.yarnpkg.com/en/docs/cli/link):

```bash
cd lib && yarn link
```

after that, go to the project you want to link the package to and use the symlink you just created:

```bash
yarn link "@badger-dao/sdk"
```

If you want to unlink you need to:

```bash
yarn unlink "@badger-dao/sdk"
```

## Releasing new version

Releases are determined by the commit messages. 
Commits beginning with `fix:` will release a new patch version, commits beginning with 
`feat:` will release a new minor version, 
and commits beginning with `BREAKING CHANGE:` will release a new major version. 
The action will run on a push to main.