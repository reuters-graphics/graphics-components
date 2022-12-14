const { mergeConfig } = require('vite');
const preprocess = require('../bin/preprocess/index.cjs');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.svelte"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": false,
    "previewMdx2": false, // Until this is fixed: https://github.com/storybookjs/storybook/issues/18556
  },
  typescript: {
    check: false,
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      base: configType === 'PRODUCTION' ? 'https://reuters-graphics.github.io/graphics-components/' : '/',
      css: {
        preprocessorOptions: { scss: preprocess.scss },
      },
      resolve: {
        alias: {
          '@reuters-graphics/graphics-components': './src',
          '$lib': './src',
          '$docs': './src/docs',
        },
      },
    });
  },
  svelteOptions: {
    preprocess: preprocess.sveltePreprocess,
  },
}