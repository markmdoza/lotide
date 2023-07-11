// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

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

module.exports = countLetters;
