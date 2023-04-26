import { defineConfig } from 'vite';
import { scss } from './bin/preprocess/index.js';
import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfig} */
const config = defineConfig({
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
    svelte({}),
  ],
});

export default config;
