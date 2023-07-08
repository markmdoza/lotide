const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {
  const result = eqArrays(actual, expected);
  if (result) {
  return 'Assertion Passed: Arrays are equal'; 
  } else {
  return 'Assertion Failed: Arrays are not equal';
  }
}

module.exports = assertArraysEqual;