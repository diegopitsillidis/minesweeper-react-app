// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please see the guide for more information: https://stryker-mutator.io/docs/stryker-js/guides/react",
  packageManager: 'npm',
  reporters: ["progress", "clear-text", "html", "dashboard"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  thresholds: { high: 90, low: 85, break: 80},
  mutate: [
    './src/**/*.ts?(x)',
    '!./src/**/*@(.test|.spec|Spec|stories|styled).ts?(x)',
    '!src/**/__mocks__/**/*',
  ]
};
export default config;
