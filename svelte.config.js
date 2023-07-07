import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess({
    preserve: ['ld+json'],
    scss: { quietDeps: true },
    postcss: {
      plugins: [autoprefixer],
    },
  }),
};

export default config;
