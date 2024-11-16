import { svelte } from '@reuters-graphics/yaks-eslint';
import reactPlugin from 'eslint-plugin-react';
import * as mdx from 'eslint-plugin-mdx';

export default [
  {
    files: ['src/**/*.{js,ts,svelte,jsx,tsx,mdx}', '.storybook/**/*'],
  },
  {
    ignores: [
      'node_modules/',
      'docs/',
      'dist/',
      '.storybook/svelte-highlighting.js',
      'bin/css-to-js/',
      'bin/newComponent/',
      '.svelte-kit/',
    ],
  },
  ...svelte,
  reactPlugin.configs.flat.recommended,
  {
    settings: { react: { version: '18.2' } },
    rules: {
      'react/prop-types': [
        'error',
        {
          skipUndeclared: true,
        },
      ],
    },
  },
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
