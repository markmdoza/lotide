const assertArraysEqual = function (actual, expected) {
  const result = eqArrays(actual, expected);
  if (result) {
  console.log('Assertion Passed: Arrays are equal'); 
  } else {
  console.log('Assertion Failed: Arrays are not equal');
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

const flatten = function (array) {
  let newArray = []
  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);