import { defineConfig, type UserConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const config: UserConfig = defineConfig({
  base: 'https://reuters-graphics.github.io/graphics-components/',
  resolve: {
    alias: {
      '@reuters-graphics/graphics-components': path.resolve('./src'),
      $lib: path.resolve('./src'),
      $docs: path.resolve('./src/docs'),
    },
  },
  plugins: [svelte()],
});

export default config;
