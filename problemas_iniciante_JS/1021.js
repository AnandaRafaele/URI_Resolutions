var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n")[0].replace(",", ".");

var notas = [100, 50, 20, 10, 5, 2];
var moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];
var centavos = lines.split(".")[1] / 100;
var reais = lines - centavos;

console.log("NOTAS:");

notas.map((nota) => {
  let qnt = parseInt(reais / nota);
  console.log(`${qnt} nota(s) de R$ ${nota.toFixed(2)}`);
  reais = reais % nota;
  if (reais === 1) {
    centavos += 1;
    reais = 0;
  }
});

console.log("MOEDAS:");

moedas.map((centavo) => {
  let qnt = parseInt(centavos / centavo);
  console.log(`${qnt} moeda(s) de R$ ${centavo.toFixed(2)}`);
  centavos = (centavos % centavo).toFixed(2);
});
