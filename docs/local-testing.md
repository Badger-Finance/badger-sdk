# Local Testing & Examples

Using the `@badger-dao/sdk` for locally testing implementations or writing examples can be done by linking a locally built version of the project.
This allows developers to test their code locally as well as provide examples for how to use new features.

Build the package:

```bash
yarn build
```

Run [yarn link](https://classic.yarnpkg.com/en/docs/cli/link) from `lib`:

```bash
cd lib && yarn link
```

Link the project to write examples

```bash
yarn link "@badger-dao/sdk"
```

If you wish to unlink the project

```bash
yarn unlink "@badger-dao/sdk"
```
