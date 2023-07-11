// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

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

module.exports = flatten;