module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules', 'docs/**'],
  extends: ['standard'],
  plugins: ['svelte3', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2022: true,
  },
  settings: {
    'svelte3/ignore-styles': () => true,
    'svelte3/typescript': require('typescript'),
  },
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'operator-linebreak': ['error', 'after'],
    'space-before-function-paren': ['error', 'never'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2 }],
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
        indent: ['error', 2],
      },
    },
  ],
};
