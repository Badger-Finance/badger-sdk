import { cliArgs } from './types';
import { MocksProcessor } from './processor';

async function main() {
  const args: cliArgs = process.argv.slice(2);

  const action = args[0];
  const forced = Boolean(args[1]);

  const processor = new MocksProcessor({ action, forced });

  try {
    await processor.run();
  } catch (e) {
    console.error(e);
    // make sure to exit with fail code, coz gonna use this in CI
    process.exit(1);
  }
}

main();
