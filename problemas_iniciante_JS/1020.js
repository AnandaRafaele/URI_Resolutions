var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var dias = parseInt(lines.shift())

var ano = parseInt(dias / 365)
var mes = parseInt((dias - ano * 365) / 30)
var dia = dias - (ano * 365 + mes * 30)

console.log(`${ano} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${dia} dia(s)`)