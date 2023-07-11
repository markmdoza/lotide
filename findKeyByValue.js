// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

function findKeyByValue(obj, value){
  for (const key of Object.keys(obj)){
    if (obj[key] === value){
      return key;
    } else {
    }
  }
      return undefined;
};

module.exports = findKeyByValue;
