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

// Removed the unused variable
// const unusedVariable = 'This variable is not used';

// Removed the missing semicolon
const missingSemicolon = 'This line is missing a semicolon';

// Removed the undefined variable usage
// console.log(undefinedVariable);

// Removed the attempt to reassign a constant
// const constantValue = 42;
// constantValue = 43;

// Removed the missing function argument
// function missingArgument(arg1, arg2) {
//   return arg1 + arg2;
// }

module.exports = {
  addNumbers,
  subtractNumbers,
};
