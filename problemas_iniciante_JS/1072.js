var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n").map((item) => parseInt(item));

var ins = 0;
var outs = 0;

for (i = 1; i <= lines[0]; i++) {
  if (lines[i] >= 10 && lines[i] < 20) {
    ins++;
  } else {
    outs++;
  }
}

console.log(`${ins} in`);
console.log(`${outs} out`);
