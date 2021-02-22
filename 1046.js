var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [init, end] = lines
  .shift()
  .split(" ")
  .map((item) => parseInt(item));
let time;

if (init > end) {
  time = 24 - init + end;
} else if (init < end) {
  time = end - init;
} else {
  time = 24;
}

console.log(`O JOGO DUROU ${time} HORA(S)`);
