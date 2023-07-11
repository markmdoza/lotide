// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console. 

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const areEqual = eqObjects(actual, expected);

  if (areEqual){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;