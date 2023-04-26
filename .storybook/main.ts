import type { StorybookConfig } from '@storybook/svelte-vite';
import { mergeConfig } from 'vite';
import { scss } from '../bin/preprocess/index.js';

const config: StorybookConfig = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.svelte"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm", '@storybook/addon-svelte-csf'],
  "framework": '@storybook/svelte-vite',
  typescript: {
    check: false
  },
  async viteFinal(config, {
    configType
  }) {
    return mergeConfig(config, {
      base: configType === 'PRODUCTION' ? 'https://reuters-graphics.github.io/graphics-components/' : '/',
      css: {
        preprocessorOptions: {
          scss
        }
      },
      resolve: {
        alias: {
          '@reuters-graphics/graphics-components': './src',
          '$lib': './src',
          '$docs': './src/docs'
        }
      },
    });
  },
  docs: {
    autodocs: true
  }
};
export default config;