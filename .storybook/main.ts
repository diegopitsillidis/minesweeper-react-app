import type { StorybookConfig } from "@storybook/react-webpack5";

import custom from '../webpack.config.js';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["..\\public"],
  core:{builder: "webpack5"},
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: { 
        ...config.resolve?.alias, 
        ...custom.resolve.alias 
      }
    }
  }),
};
export default config;
