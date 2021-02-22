var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [A, B, C] = lines
  .shift()
  .split(" ")
  .sort((a, b) => a - b)
  .reverse()
  .map((item) => parseFloat(item));

let A2 = Math.pow(A, 2);
let B2 = Math.pow(B, 2);
let C2 = Math.pow(C, 2);

if (A >= B + C) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (A2 === B2 + C2) {
    console.log("TRIANGULO RETANGULO");
  }
  if (A2 > B2 + C2) {
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (A2 < B2 + C2) {
    console.log("TRIANGULO ACUTANGULO");
  }
  if (A === B || B === C || A === C) {
    if (A === B && B === C && C === A) {
      console.log("TRIANGULO EQUILATERO");
    } else {
      console.log("TRIANGULO ISOSCELES");
    }
  }
}
