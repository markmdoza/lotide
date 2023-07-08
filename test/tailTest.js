const assertEqual = require("../assertEqual");
const tail = require('../tail');

const result = tail([1, 2, 3])
console.log(assertEqual(result.length, 2));
