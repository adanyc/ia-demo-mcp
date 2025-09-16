// export default {
//   roots: ['./src'],
//   transform: {
//     '^.+\\.ts?$': 'ts-jest'
//   },
//   testEnvironment: 'jsdom',
//   coverageThreshold: {
//     global: {
//       branches: 70,
//       functions: 70,
//       lines: 70,
//       statements: 70
//     }
//   },
//   coverageReporters: ['json', 'text', 'clover', 'lcov']
// };

export default {
  "preset": "ts-jest/presets/default-esm",
  "testEnvironment": "node",
  "extensionsToTreatAsEsm": [".ts"],
  "moduleNameMapping": {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
}
