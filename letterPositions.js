// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

const letterPositions = function(string) {
  const results = {};

  for (let i = 0; i < string.length; i++){
    const letter = string[i];

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

module.exports = letterPositions;
