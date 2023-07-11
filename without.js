// Implement without which will return a subset of a given array, removing unwanted elements. This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array

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

module.exports = without;