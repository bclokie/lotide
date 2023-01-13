const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
}

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } else {
      return true;
  }
};
}

const assertArraysEqual = function(actual, expected) {
  let assertion_result = eqArrays(actual, expected)
  if (assertion_result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expectedOutput = [1, 2, 5, 7, 2];
assertArraysEqual(takeUntil(data1, x => x < 0), expectedOutput1);
