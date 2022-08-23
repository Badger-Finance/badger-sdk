import { MocksProcessor } from './processor';
import { cliArgs } from './types';

async function main() {
  const args: cliArgs = process.argv.slice(2);

  const action = args[0];
  const forced = args[1] === 'true';

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
