const eqObjects = function(object1, object2) {
  // get the keys of both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // if the number of keys is not the same, return false
  if (keys1.length !== keys2.length) {
    return false;
  }
  // loop through the keys of one object
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) {
      return false;
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // if the loop completes without finding any mismatches, return true
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
const obj3 = { a: 3, b: 4 };

assertObjectsEqual(obj1, obj2); // should print "Assertion Passed"
assertObjectsEqual(obj1, obj3); // should print "Assertion Failed"
