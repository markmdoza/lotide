// Make the function compare the two values it takes in and print out a message telling us if they match or not.

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `🤩 Assertion Passed: ${actual} === ${expected}`
  } else {
    return `🫠 Assertion Failed: ${actual} !== ${expected}`
  }
};

module.exports = assertEqual;