import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.js', 'src/**/*.stories.{svelte,mdx}', 'src/docs/**'],
  project: [
    'src/**/*.{mdx,js,jsx,ts,svelte}',
    'bin/**/*.{js,cjs}',
    '.storybook/**/*.{js,ts,svelte}',
  ],
  ignore: ['**/*.d.ts'],
  ignoreDependencies: [
    /@types\/.*/,
    /@storybook\/.*/,
    'chromatic',
    'prop-types',
    'postcss',
  ],
};

export default config;
