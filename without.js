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

const without = function (source, itemsToRemove) {
  const newArray = [];
for (i = 0; i < source.length; i++) {
  let foundMatch = false;
  for (j = 0; j < itemsToRemove.length; j++) {
  if (source[i] === itemsToRemove[j]) {
    foundMatch = true;
    break;
  }
}
  if(!foundMatch) {
    newArray.push(source[i]);
    }
  }
return newArray;
};
