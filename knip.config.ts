import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.js'],
  project: [
    'src/**/*.{mdx,js,jsx,ts,svelte}',
    'bin/**/*.{js,cjs}',
    '.storybook/**/*.{js,ts,svelte}',
  ],
  ignore: ['**/*.d.ts'],
  ignoreDependencies: [
    /@types\/.*/,
    /@storybook\/.*/,
    /@fortawesome\/.*/,
    'normalize.css',
    '@mdx-js/mdx',
  ],
};

export default config;
