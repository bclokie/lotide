const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1) 

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


const triples = [5, 4, 3, 2, 1];
const results2 = map(triples, triple => triple * 3);
assertArraysEqual(results2, [15, 12, 9, 6, 3])

const teams = ['Leafs', 'Sens', 'Habs'];
const results3 = map(teams, team => team.length);
assertArraysEqual(results3, [5, 4, 4])

const pigLatin = ['Leafs', 'Sens', 'Habs'];
const results4 = map(pigLatin, word => word.slice(1) + word[0] + 'ay');
assertArraysEqual(results4, ['eafsLay', 'ensSay', 'absHay'])