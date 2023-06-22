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



const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++){
    const letter = sentence[i];

    if (letter === ' '){
      continue;
    }

    if (results[letter]){
      results[letter].push[i];
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions('lighthouse in the house').e, [9]);