const raisinAlarm = (cookie) => {
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};



console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
//console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
//console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookie) {
  let array = []
  for (let i = 0; i < cookie.length; i++)
  array.push(raisinAlarm(cookie[i]))
  return array
};


console.log(
  raisinAlarmArray([
    ["", "", "", ""],
    ["", "", "", "", ""],
    ["", "", ""],
  ])
);