// Middle should take an array and return an array of the middle most elements.

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

module.exports = middle;