const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]){
    return false
    }
  }
  return true
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length){
    return false;
  }
  for (const key of keys1){
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if (!eqArrays(object1[key], object2[key])){
          return false;
        }
      }
        if (object1[key] !== object2[key]){
        return false;
        }
      }
    return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const areEqual = eqObjects(actual, expected);

  if (areEqual){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test cases
const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
const obj3 = { a: '1', b: 3 };

assertObjectsEqual(obj1, obj2); // Should pass
assertObjectsEqual(obj1, obj3); // Should fail