var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines.shift())
var velocidade = parseInt(lines.shift())

var distancia = velocidade * tempo
var consumo = distancia / 12

console.log(consumo.toFixed(3))