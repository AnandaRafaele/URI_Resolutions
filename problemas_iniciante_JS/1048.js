var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let salarioAtual = parseFloat(lines);

let salario = [400.0, 800.0, 1200.0, 2000.0, 2000.0];
let reajuste = [0.15, 0.12, 0.1, 0.07, 0.04];
let novoSalario = salarioAtual,
  valorReajuste,
  percetual;

if (salarioAtual <= salario[0]) {
  percetual = reajuste[0] * 100;
  valorReajuste = salarioAtual * reajuste[0];
  novoSalario += valorReajuste;
} else if (salarioAtual <= salario[1]) {
  percetual = reajuste[1] * 100;
  valorReajuste = salarioAtual * reajuste[1];
  novoSalario += valorReajuste;
} else if (salarioAtual <= salario[2]) {
  percetual = reajuste[2] * 100;
  valorReajuste = salarioAtual * reajuste[2];
  novoSalario += valorReajuste;
} else if (salarioAtual <= salario[3]) {
  percetual = reajuste[3] * 100;
  valorReajuste = salarioAtual * reajuste[3];
  novoSalario += valorReajuste;
} else {
  percetual = reajuste[4] * 100;
  valorReajuste = salarioAtual * reajuste[4];
  novoSalario += valorReajuste;
}

console.log("Novo salario: " + novoSalario.toFixed(2));
console.log("Reajuste ganho: " + valorReajuste.toFixed(2));
console.log("Em percentual: " + parseInt(percetual) + " %");
