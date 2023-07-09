const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});