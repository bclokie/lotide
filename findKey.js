const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 4 },
  "Akelarre": { stars: 3 }
};

const hotels = {
  "Hilton": { stars: 4 },
  "Marriott": { stars: 5 },
  "Best Western": { stars: 3 },
  "Holiday Inn": { stars: 4 }
};

assertEqual(findKey(restaurants, x => x.stars === 2), "noma");
assertEqual(findKey(hotels, x => x.stars === 5), "Marriott");
assertEqual(findKey(hotels, x => x.location === "beach"), undefined);

