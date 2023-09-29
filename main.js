// This is the main JavaScript file of your sample project.

// Import the utility functions from util.js
const { add, subtract } = require('./util');

// Function to add two numbers
function addNumbers(a, b) {
  return add(a, b);
}

// Function to subtract two numbers
function subtractNumbers(a, b) {
  return subtract(a, b);
}

// Error: Unused variable 'unusedVariable'
const unusedVariable = 'This variable is not used';

// Error: Missing semicolon at the end of the line
const missingSemicolon = 'This line is missing a semicolon';

// Error: Using an undefined variable
console.log(undefinedVariable);

// Error: Trying to reassign a constant
const constantValue = 42;
constantValue = 43;

// Error: Missing function argument
function missingArgument(arg1, arg2) {
  return arg1 + arg2;
}

module.exports = {
  addNumbers,
  subtractNumbers,
};
