const assertArraysEqual= require('../assertArraysEqual');

// Test Case 1
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(assertArraysEqual(arr1, arr2));  // Assertion Passed: Arrays are equal

// Test Case 2
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 4];
console.log(assertArraysEqual(arr3, arr4));  // Assertion Failed: Arrays are not equal

// Test Case 3
const arr5 = [1, 2, 3];
const arr6 = [1, 2, 3, 4];
console.log(assertArraysEqual(arr5, arr6));  // Assertion Failed: Arrays are not equal

// Test Case 4
const arr7 = [];
const arr8 = [];
console.log(assertArraysEqual(arr7, arr8));  // Assertion Passed: Arrays are equal

// Test Case 5
const arr9 = [1, [2, 3], 4];
const arr10 = [1, [2, 3], 4];
console.log(assertArraysEqual(arr9, arr10));  // Assertion Passed: Arrays are equal

// Test Case 6
const arr11 = [1, [2, 3], 4];
const arr12 = [1, [2, 3, 4], 4];
console.log(assertArraysEqual(arr11, arr12));  // Assertion Failed: Arrays are not equal