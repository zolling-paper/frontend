import svgr from 'vite-plugin-svgr';

import type {StorybookConfig} from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async config => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@components': '/src/components',
        '@utils': '/src/utils',
        '@token': '/src/token',
        '@theme': '/src/theme',
      };
    }
    if (config.plugins) {
      config.plugins.push(svgr());
    }

    if (!config.esbuild) {
      config.esbuild = {};
    }
    config.esbuild.jsxImportSource = '@emotion/react';

    return config;
  },
};
export default config;
