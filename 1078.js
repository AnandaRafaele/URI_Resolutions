var input = require("fs").readFileSync("./stdin", "utf8");
var lines = parseInt(input.split("\n"));

for (var i = 1; i <= 10; i++) {
  console.log(`${i} x ${lines} = ${i * lines}`);
}
