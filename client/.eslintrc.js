module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
    ],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
    'prefer-destructuring': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-components': 'off',
    'no-useless-return': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'consistent-return': 'off',
    },
  };