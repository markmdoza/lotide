const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤩 Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🫠 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const countLetters = function(string){
  const results = {};
    string = string.split(' ').join('');

  for (const value of string) {
    if (results[value]) {
      results[value] += 1;
    } else {
      results[value] = 1;
    }
  }
  return results;
}


const letterCounts = countLetters('this is a string for lighthouse labs challenge counting letters');
console.log(letterCounts);