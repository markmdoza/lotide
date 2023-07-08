const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {
  const result = eqArrays(actual, expected);
  if (result) {
  console.log('Assertion Passed: Arrays are equal'); 
  } else {
  console.log('Assertion Failed: Arrays are not equal');
  }
}

module.exports = assertArraysEqual;