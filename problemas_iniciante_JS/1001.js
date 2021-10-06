var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var valorUm = parseInt(valores.shift());
var valorDois = parseInt(valores.shift());

var soma = valorUm + valorDois;

console.log("X = " + soma);
