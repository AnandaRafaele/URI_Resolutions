var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines)
var notas = [100, 50, 20, 10, 5, 2, 1]

notas.map(nota => {
    let qnt = parseInt(valor / nota)
    console.log(`${qnt} nota(s) de R$ ${nota},00`)
    valor = valor % nota
})