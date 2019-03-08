module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/essential', '@vue/prettier']
};
