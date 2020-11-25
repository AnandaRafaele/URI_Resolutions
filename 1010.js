const { parse } = require('path');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift().split(" ");
var B = lines.shift().split(" ");

var totalA = parseFloat(A.pop()) * parseFloat(A.pop())
var totalB = parseFloat(B.pop()) * parseFloat(B.pop())

var TOTAL = totalA + totalB;

console.log("VALOR A PAGAR: R$ " + TOTAL.toFixed(2));