module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-parm-reassingn': 'off',
    calmecase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
