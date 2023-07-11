const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// Test Case 1
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
assertEqual(eqArrays(arr1, arr2), true);  // true

// Test Case 2
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 4];
assertEqual(eqArrays(arr3, arr4), false);  // false

// Test Case 3
const arr5 = [1, 2, 3];
const arr6 = [1, 2, 3, 4];
assertEqual(eqArrays(arr5, arr6), false);  // false

// Test Case 4
const arr7 = [];
const arr8 = [];
assertEqual(eqArrays(arr7, arr8), true);  // true

// Test Case 5
const arr9 = [1, [2, 3], 4];
const arr10 = [1, [2, 3], 4];
assertEqual(eqArrays(arr9, arr10), true);  // true

// Test Case 6
const arr11 = [1, [2, 3], 4];
const arr12 = [1, [2, 3, 4], 4];
assertEqual(eqArrays(arr11, arr12), false);  // false