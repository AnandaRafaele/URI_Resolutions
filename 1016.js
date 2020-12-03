var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var km = parseInt(lines.shift());

var minutos = km * 2;

console.log(`${minutos} minutos`);