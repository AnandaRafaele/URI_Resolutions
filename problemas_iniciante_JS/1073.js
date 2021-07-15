var input = require("fs").readFileSync("./stdin", "utf8");
var lines = parseInt(input.split("\n"));

for (var i = 2; i <= lines; i++) {
  if (i % 2 === 0) {
    console.log(`${i}^2 = ${Math.pow(i, 2)}`);
  }
}
