var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ");
var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
var C = parseInt(valores.shift());

var maiorAB = (A + B + Math.abs(A - B)) / 2;
var maior = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(maior +" eh o maior");