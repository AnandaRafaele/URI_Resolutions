var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseFloat(lines.shift());

var consumo = A / B

console.log(consumo.toFixed(3) +" km/l");