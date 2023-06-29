const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤩 Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🫠 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x])
    return false; {
      if (array1[x] === array2[x])
      return true;
    }
  }
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


// const results1 = map(words, word => word[0]);
// console.log(results1);

// TEST CASE 1
const words = ['apple', 'banana', 'cherry'];
const results1 = map(words, word => word[0]);
// Expected output: ['a', 'b', 'c']
assertEqual(JSON.stringify(results1), JSON.stringify(['a', 'b', 'c']));

// TEST CASE 2
const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, num => num * 2);
// Expected output: [2, 4, 6, 8, 10]
assertEqual(JSON.stringify(results2), JSON.stringify([2, 4, 6, 8, 10]));

// TEST CASE 3
const emptyArray = [];
const results3 = map(emptyArray, item => item);
// Expected output: []
assertEqual(JSON.stringify(results3), JSON.stringify([]));

// TEST CASE 4
const animals = ['cat', 'dog', 'elephant', 'giraffe'];
const results4 = map(animals, animal => animal.length);
// Expected output: [3, 3, 8, 7]
assertEqual(JSON.stringify(results4), JSON.stringify([3, 3, 8, 7]));
