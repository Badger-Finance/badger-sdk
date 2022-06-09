const nodeEnv = process.env.NODE_ENV || 'test';
process.env.NODE_ENV = nodeEnv;

if (nodeEnv !== 'test' && nodeEnv !== 'ci') {
  throw new Error(
    `Wrong environment for running tests, should be 'test' or 'ci'. NODE_ENV=${nodeEnv}`,
  );
}

module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  resetMocks: true,
  restoreMocks: true,
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  testTimeout: 10000,
  transform: { '^.+\\.ts$': 'ts-jest' },
  coveragePathIgnorePatterns: ['contracts', 'generated', 'tests'],
};
