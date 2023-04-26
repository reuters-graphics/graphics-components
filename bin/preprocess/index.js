import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';

export const scss = {
  includePaths: ['src/', 'node_modules/bootstrap/scss/'],
  importer: [
    (url) => {
      if (/^\$lib/.test(url)) { return { file: `src/${url.replace('$lib', '')}` }; }
      // Redirect tilde-prefixed imports to node_modules
      if (/^~/.test(url)) { return { file: `node_modules/${url.replace('~', '')}` }; }
      return null;
    },
  ],
  quietDeps: true,
};

export const sveltePreprocess = preprocess({
  preserve: ['ld+json'],
  typescript: true,
  scss,
  postcss: {
    plugins: [autoprefixer],
  },
});
