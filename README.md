<div> 
  <img align="right" src="docs/images/badger.png" height="150" />
</div>

# Badger SDK

BadgerDAO is a decentralized autonomous organization focused on bringing Bitcoin to DeFi.
The Badger SDK provides easy access to the Badger Protocol on any chain, as well as fast access to the Badger API for JavaScript applcations.

![Version](https://img.shields.io/npm/v/@badger-dao/sdk)
[![License](https://img.shields.io/npm/l/@badger-dao/sdk)](https://opensource.org/licenses/MIT)
[![Service Tests](https://github.com/Badger-Finance/badger-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/Badger-Finance/badger-sdk/actions/workflows/test.yml)

## Documentation

- [Badger API Documentation](https://api.badger.com/docs/)

## Installation

Install the package:

```bash
yarn add @badger-dao/sdk
```

## Getting Started

Utilizing the SDK requires an RPC provider:

```js
import BadgerSDK from '@badger-dao/sdk';

const provider = new ethers.providers.JsonRpcProvider('https://myrpc.io/');
const sdk = new BadgerSDK(1, provider);
// or new BadgerSDK('ethereum', provider);
// or new BadgerSDK('mainnet', provider);
```

or, utilizing the API requires only a network input:

```js
import BadgerAPI from '@badger-dao/sdk';

const api = new BadgerAPI(1);
// or new BadgerAPI('ethereum');
// or new BadgerAPI('mainnet');
```
