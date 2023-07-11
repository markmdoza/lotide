

const takeUntil = function(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      break;
    }
    result.push(array[i]);
  }
  return result;
};
;

module.exports = takeUntil;