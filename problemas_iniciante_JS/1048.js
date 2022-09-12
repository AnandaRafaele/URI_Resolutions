var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let salarioAtual = parseFloat(lines);

let salario = [400.0, 800.0, 1200.0, 2000.0, 2000.0];
let reajuste = [0.15, 0.12, 0.1, 0.07, 0.04];
let novoSalario = salarioAtual,
  valorReajuste,
  percetual;

const calcPercent = (reajuste) => reajuste * 100;
const calcSalario = (reajuste) => salarioAtual * reajuste;

if (salarioAtual <= salario[0]) {
  percetual = calcPercent(reajuste[0]);
  valorReajuste = calcSalario(reajuste[0]);
  novoSalario += valorReajuste;
} else if (salarioAtual <= salario[1]) {
  percetual = calcPercent(reajuste[1]);
  valorReajuste = calcSalario(reajuste[1]);
  novoSalario += valorReajuste;
} else if (salarioAtual <= salario[2]) {
  percetual = calcPercent(reajuste[2]);
  valorReajuste = calcSalario(reajuste[2]);
  novoSalario += valorReajuste;
} else if (salarioAtual <= salario[3]) {
  percetual = calcPercent(reajuste[3]);
  valorReajuste = calcSalario(reajuste[3]);
  novoSalario += valorReajuste;
} else {
  percetual = calcPercent(reajuste[4]);
  valorReajuste = calcSalario(reajuste[4]);
  novoSalario += valorReajuste;
}

console.log("Novo salario: " + novoSalario.toFixed(2));
console.log("Reajuste ganho: " + valorReajuste.toFixed(2));
console.log("Em percentual: " + parseInt(percetual) + " %");
