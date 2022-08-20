import { scss, sveltePreprocess } from './bin/preprocess/index.cjs';

import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfig} */
const config = {
  base: 'https://reuters-graphics.github.io/graphics-components/',
  css: {
    preprocessorOptions: { scss },
  },
  resolve: {
    alias: {
      '@reuters-graphics/graphics-components': './src',
      $lib: './src',
      $docs: './src/docs',
    },
  },
  plugins: [
    svelte({
      configFile: false,
      preprocess: sveltePreprocess,
    }),
  ],
};

export default config;
