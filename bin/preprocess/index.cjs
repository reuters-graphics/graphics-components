const autoprefixer = require('autoprefixer');
const preprocess = require('svelte-preprocess');

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

const sveltePreprocess = preprocess({
  preserve: ['ld+json'],
  typescript: true,
  scss,
  postcss: {
    plugins: [autoprefixer],
  },
});

module.exports = {
  scss,
  sveltePreprocess
}