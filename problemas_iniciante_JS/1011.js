const { parse } = require('path');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var PI = 3.14159
var raio = parseFloat(lines.shift());

var VOLUME = (4/3.0) * PI * Math.pow(raio, 3)

console.log("VOLUME = " + VOLUME.toFixed(3));