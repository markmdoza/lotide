const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }

  return true;
}


const assertArraysEqual = function (actual, expected) {
  const result = eqArrays(actual, expected);
  if (result) {
  console.log('Assertion Passed: Arrays are equal'); 
  } else {
  console.log('Assertion Failed: Arrays are not equal');
  }
}

const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    const middleIndex = Math.floor(array.length / 2);
    return [array[middleIndex]];
  } else if (array.length % 2 === 0) {
    const middleIndex1 = array.length / 2 - 1;
    const middleIndex2 = array.length / 2;
    return [array[middleIndex1], array[middleIndex2]];
  }
}

// assertArraysEqual(middle([1, 2, 3]), [2]); // Correct usage
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]);
  // assertArraysEqual(middle([1, 2, 3, 4, 5, 6]));