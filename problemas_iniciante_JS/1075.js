var input = require("fs").readFileSync("./stdin", "utf8");
var lines = parseInt(input.split("\n"));

for (var i = 1; i <= 10000; i++) {
  if (i % lines === 2) {
    console.log(i);
  }
}
