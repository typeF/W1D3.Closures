// EXERCISE 1 - Loaded Die
// function makeLoadedDie() {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   index = -1;
//   return function() {
//     index += 1;
//     return list[index];
//   }
// }

// var rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6

// EXERCISE 2 - Countdown

var message = function (count){
  if (count > 0){
    console.log("T-minus " + count + "...");
  }
  if (count === 0){
    console.log("Blast off!");
  }
  if (count < 0){
  console.log("Rockets already gone, bub!");
  }
};

var countdownGenerator = function (x) {
  var count = x + 1;

  return function(){
    count -= 1;

    return message(count);
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!