const { addNumbers, subtractNumbers } = require('./main');
const { expect } = require('chai');

// Describe a test suite for main.js
describe('Main Module', () => {
  // Test the addNumbers function
  describe('addNumbers', () => {
    it('should add two numbers correctly', () => {
      const result = addNumbers(5, 3);
      expect(result).to.equal(8);
    });
  });

  // Test the subtractNumbers function
  describe('subtractNumbers', () => {
    it('should subtract two numbers correctly', () => {
      const result = subtractNumbers(10, 3);
      expect(result).to.equal(7);
    });
  });
});
