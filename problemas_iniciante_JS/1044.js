var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [n1, n2] = lines
  .shift()
  .split(" ")
  .map((item) => parseInt(item));

if (n1 % n2 === 0 || n2 % n1 === 0) {
  return console.log("Sao Multiplos");
}
return console.log("Nao sao Multiplos");
