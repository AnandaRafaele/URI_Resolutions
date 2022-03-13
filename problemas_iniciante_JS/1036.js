var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const valores = lines
  .shift()
  .split(" ")
  .map((item) => parseFloat(item));

const [a, b, c] = valores;
const delta = Math.pow(b, 2) - 4 * a * c;
if (delta < 0 || a === 0) return console.log("Impossivel calcular");
const R1 = (-b + Math.sqrt(delta)) / (2 * a);
const R2 = (-b - Math.sqrt(delta)) / (2 * a);
console.log("R1 = " + R1.toFixed(5));
console.log("R2 = " + R2.toFixed(5));
