var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const valores = lines.map((item) => parseInt(item));
let count = 0;

valores.map((line) => {
  if (line > 0) {
    count++;
  }
});

console.log(count + " valores positivos");
