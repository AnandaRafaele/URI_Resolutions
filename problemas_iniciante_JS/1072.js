var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let numbers = lines.map((item) => Number.parseInt(item));

let ins = 0;
let outs = 0;

for (let i = 1; i <= numbers[0]; i++) {
  if (numbers[i] >= 10 && numbers[i] < 20) {
    ins++;
  } else {
    outs++;
  }
}

console.log(`${ins} in`);
console.log(`${outs} out`);
