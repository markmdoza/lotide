const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤩 Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🫠 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const head = function (arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};


// assertEqual(head([5, 6, 7]));
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
// assertEqual(head([1]), 1);
// assertEqual(head([]), undefined);

