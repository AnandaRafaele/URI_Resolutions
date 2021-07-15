var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n").map((item) => parseFloat(item));

let count = 0;
let soma = 0;
let media = 0;
let positivos = [];

lines.map((line) => {
  if (line > 0) {
    positivos.push(line);
    count++;
  }
});

for (let i = 0; i < positivos.length; i++) {
  soma += positivos[i];
}

media = parseFloat(soma / positivos.length);

console.log(count + " valores positivos");
console.log(media.toFixed(1));
