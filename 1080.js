var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

var maior = 0,
  posicao;

for (var i = 0; i < lines.length; i++) {
  var num = parseInt(lines[i].replace("\r", ""));
  if (num > maior) {
    maior = num;
    posicao = i + 1;
  }
}

console.log(maior);
console.log(posicao);
