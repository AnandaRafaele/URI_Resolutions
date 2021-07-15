var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const original = lines
  .shift()
  .split(" ")
  .map((item) => parseInt(item));
const valores = [...original];

valores.sort((a, b) => a - b);
valores.forEach((valor) => console.log(valor));

console.log("");

original.forEach((valor) => console.log(valor));
