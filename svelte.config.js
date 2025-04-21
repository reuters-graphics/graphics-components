import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: '/graphics-components',
    },
    alias: {
      $lib: 'src',
      '$lib/*': 'src/*',
      $docs: 'src/docs',
      '$docs/*': 'src/docs/*',
    },
  },
  /** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig['onwarn']} */
  onwarn: (warning, handler) => {
    // Triggered by our use of SCSS mixins ...
    if (warning.code === 'vite-plugin-svelte-preprocess-many-dependencies')
      return;
    handler(warning);
  },
  preprocess: [vitePreprocess({})],
};

export default config;
