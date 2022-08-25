import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  resetMocks: true,
  coveragePathIgnorePatterns: ['index.ts', '/node_modules/', '/interfaces/', '/enums/', 'test'],
  coverageThreshold: {
    global: {
      branches: 35,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'node'],
  moduleNameMapper: {
    '^uuid$': '<rootDir>/node_modules/uuid/dist/index.js',
    'package.json': '<rootDir>/src/processor/mocks/package.mock.json',
  },
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  transform: {
    '\\.(ts)$': 'ts-jest',
  },
};

export default config;
