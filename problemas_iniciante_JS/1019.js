var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var seg = parseInt(lines.shift())

var segundos = seg % 60
var minutos = ((seg - segundos) / 60) % 60
var horas = ((seg - ( minutos * 60 + segundos)) / 60) / 60


console.log(horas + ":" + minutos + ":" + segundos)