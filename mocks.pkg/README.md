<div> 
  <img align="right" src="docs/images/badger.png" height="150" />
</div>

# Badger SDK Mocks

Collection of mocks for all responses made by [@badger-dao/sdk](https://www.npmjs.com/package/@badger-dao/sdk).
Made to improve test coverage experience working with sdk.

![Version](https://img.shields.io/npm/v/@badger-dao/sdk-mocks)
[![License](https://img.shields.io/npm/l/@badger-dao/sdk-mocks)](https://opensource.org/licenses/MIT)
[![Service Tests](https://github.com/Badger-Finance/badger-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/Badger-Finance/badger-sdk/actions/workflows/test.yml)
[![semantic-release](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## Mock Files

All resp packed into `.json` files, with such pattern:

`@badger-dao/sdk-mocks/generated/<network>/<service>/<method>.json`

For example: `@badger-dao/sdk-mocks/generated/ethereum/graph/loadSett.json`

## Development

This package would launch and refetch methods resp only in case theire content was changed.
Also, pre-commit hook will remind u, if u forget to provide method's args to chain cfg.

### How to add Service?

Services are listed in enum. Just drop it there

```sh
./mocks.pkg/src/enums/sdk.services.enum.ts
```

### How to add method?

All method and args with which they will be called are kept in configs

```sh
./mocks.pkg/src/config/<chain>.config.ts
```

### Ignoring methods global or chain specific

To exlude service method from querying and parsing globaly add it's name to the list `methodsToSkip`.

```shell
./mocks.pkg/src/constants.ts
```

To ignore a method on a specific chain, provide `ignore: true` as value of methods object in chain methods args cfg.
