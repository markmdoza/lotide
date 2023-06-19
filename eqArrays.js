const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤩 Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🫠 Assertion Failed: ${actual} !== ${expected}`)
  }
}

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

// Takes two arrays
// Should return True or False based on perfect match

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false