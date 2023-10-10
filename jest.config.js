// jest.config.js

module.exports = {
    testEnvironment: 'node',
    coverageProvider: 'v8', // Use Istanbul (nyc) for code coverage
    collectCoverage: true,
    collectCoverageFrom: ['**/*.js'],
  };
  