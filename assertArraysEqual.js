const eqArrays = require('./eqArrays');

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function (actual, expected) {
  const result = eqArrays(actual, expected);
  if (result) {
  return 'Assertion Passed: Arrays are equal'; 
  } else {
  return 'Assertion Failed: Arrays are not equal';
  }
}

module.exports = assertArraysEqual;