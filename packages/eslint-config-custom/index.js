module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['turbo', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};