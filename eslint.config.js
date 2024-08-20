import { svelte } from '@reuters-graphics/yaks-eslint';
import reactPlugin from 'eslint-plugin-react';

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    files: ['src/**/*.{js,ts,svelte,jsx,tsx}', '.storybook/**/*'],
    ignores: ['node_modules', 'docs/**/*'],
  },
  ...svelte,
  reactPlugin.configs.flat.recommended,
  {
    rules: {
      'react/prop-types': [
        'error',
        {
          skipUndeclared: true,
        },
      ],
    },
  },
];
