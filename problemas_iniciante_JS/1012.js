var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var PI = 3.14159;
var valores = lines.shift().split(" ");
var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

var TRIANGULO = A * C / 2;
var CIRCULO = PI * Math.pow(C, 2);
var TRAPEZIO = (A + B) /2 * C;
var QUADRADO = Math.pow(B, 2);
var RETANGULO = A * B

console.log("TRIANGULO: " + TRIANGULO.toFixed(3));
console.log("CIRCULO: " + CIRCULO.toFixed(3));
console.log("TRAPEZIO: " + TRAPEZIO.toFixed(3));
console.log("QUADRADO: " + QUADRADO.toFixed(3));
console.log("RETANGULO: " + RETANGULO.toFixed(3));