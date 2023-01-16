const assert = require('chai').assert;
const middle = require('../middle');

describe("#tail", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });
  it("returns [3, 5] for ['1, 3, 5, 7']", () => {
    assert.deepEqual(middle([1, 3, 5, 7]), [3, 5]); 
  });
});