import { defineConfig, type UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
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
  plugins: [sveltekit()],
});

export default config;
