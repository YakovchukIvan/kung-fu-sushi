module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier',
    'eslint-plugin-prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'func-style': ['error', 'expression'],
    'prefer-arrow-callback': 'error',
    complexity: ['error', 6],
    curly: ['error', 'multi-line'],
    'max-lines': ['error', 255],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
