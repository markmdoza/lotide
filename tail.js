// Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.

const tail = function (arr) {
  return arr.slice(1)
}

module.exports = tail;