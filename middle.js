const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle