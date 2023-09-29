// __tests__/main.test.js

const main = require('../main');

test('addNumbers function adds two numbers correctly', () => {
  expect(main.addNumbers(2, 3)).toBe(5);
});

test('subtractNumbers function subtracts two numbers correctly', () => {
  expect(main.subtractNumbers(5, 2)).toBe(3);
});

// Add more tests for other functions if needed
