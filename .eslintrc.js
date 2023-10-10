module.exports = {
    env: {
      node: true,
      es6: true,
      jest: true,
    },
    extends: ['eslint:recommended'],
    plugins: ['jest'],
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/valid-expect': 'error',
    },
  };