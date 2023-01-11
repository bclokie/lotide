const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }
  const midArr = arr.length / 2;
  if (Number.isInteger(midArr)) {
    return [arr[midArr - 1], arr[midArr]]
  } else {
    return [arr[Math.floor(midArr)]]
  }
}

console.log(middle([2, 3, 4, 5]))
console.log(middle([ 2, 3, 4, 5, 6]))
console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3]))


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);