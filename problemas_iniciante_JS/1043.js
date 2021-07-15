var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let [A, B, C] = lines
  .shift()
  .split(" ")
  .map((item) => parseFloat(item));

function area(a, b, c) {
  return `Area = ${(((a + b) * c) / 2).toFixed(1)}`;
}

function perimeter(a, b, c) {
  return `Perimetro = ${(a + b + c).toFixed(1)}`;
}

if (A + B > C && A + C > B && B + C > A) {
  console.log(perimeter(A, B, C));
} else {
  console.log(area(A, B, C));
}
