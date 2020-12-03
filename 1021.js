var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var valor = parseFloat(lines)
var notas = [100, 50, 20, 10, 5, 2]
var moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

// notas.map(nota => {
//     let qnt = parseInt(valor / nota)
//     console.log(`${qnt} nota(s) de R$ ${nota},00`)
//     valor = valor % nota
// })

moedas.map(moeda => {
    let qnt = parseInt(valor - valor.toFixed(2) / moeda)
    console.log(`${qnt.toFixed(2)} nota(s) de R$ ${moeda}`)
})