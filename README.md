# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @markmdoza/lotide`

**Require it:**

`const _ = require('@markmdoza/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Checks and logs a message if arr1 equals arr2. 
* `assertEqual(actual, expected)`: Checks and logs a message if actual is equivalent to expected. Should be stacked onto other functions that include 'assert'.
* `assertObjectsEqual(actual, expected)`: Checks and logs a message if actual is equivalent to expected.
* `countLetters(string)`: Returns an object with each letter in the string provided, and how many times each letter is within the string.
* `countOnly(allItems, itemsToCount)`: Returns an object of each name in itemsToCount as well as the amount of the times it appears in allItems.
* `eqArrays(array1, array2)`: Checks and returns a boolean if array1 is equal to array2.
* `eqObjects(object1, object2)`: Checks and returns a boolean if object1 is equal to object2
* `findKey(object, callback)`: Loops through keys in an object and returns a truthy value set by the callback function. If no key is found, then undefined will be returned instead.
* `findKeyByValue(obj, value)`: Loops through object keys and returns the value that was passed through.
* `flatten(array)`: If a nested array is passed through, it will return a new array without any nests.
* `head(array)`: Returns the first element in an array.
* `letterPositions(string)`: Returns all indices in a string, where each character is found.
* `map(array, callback)`: Returns a new array based on the condition of the callback function.
* `middle(array)`: Returns the middle most value(s) in an array.
* `tail(arr)`: Returns all elements in an array after index[0].
* `takeUntil(array, callback)`: The function will return a slice of the array with elements taken from the beginning. It will keep going until the callback condition is met.
* `without(source, itemsToRemove)`: Returns elements in source, excluding elements in itemsToRemove.