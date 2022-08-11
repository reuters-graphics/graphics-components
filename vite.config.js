import preprocess from './bin/preprocess/index.cjs';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const scss = {
  includePaths: ['src/', 'node_modules/bootstrap/scss/'],
  importer: [
    (url) => {
      if (/^\$lib/.test(url)){ return { file: `src/${url.replace('$lib', '')}` }; }
      // Redirect tilde-prefixed imports to node_modules
      if (/^~/.test(url)) { return { file: `node_modules/${url.replace('~', '')}` }; }
      return null;
    },
  ],
  quietDeps: true,
};

/** @type {import('vite').UserConfig} */
const config = {
  base: 'https://reuters-graphics.github.io/graphics-svelte-components/',
  css: {
    preprocessorOptions: { scss: preprocess.scss },
  },
  resolve: {
    alias: {
      '@reuters-graphics/graphics-svelte-components': './src',
      $lib: './src',
      $docs: './src/docs',
    },
  },
  plugins: [
    svelte({
      configFile: false,
      preprocess: preprocess.sveltePreprocess,
    }),
  ],
};

export default config;
