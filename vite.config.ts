import { defineConfig, type UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const config: UserConfig = defineConfig({
  resolve: {
    alias: {
      '@reuters-graphics/graphics-components': path.resolve('./src'),
      $lib: path.resolve('./src'),
      $docs: path.resolve('./src/docs'),
    },
  },
  css: {
    preprocessorOptions: { scss: { quietDeps: true, api: 'modern-compiler' } },
  },
  plugins: [sveltekit()],
});

export default config;
