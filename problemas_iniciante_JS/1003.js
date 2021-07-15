var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var SOMA = A + B;

console.log("SOMA = "+SOMA);