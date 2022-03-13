var input = require("fs").readFileSync("./stdin", "utf8");
var valor = parseInt(input.split("\n"));

var notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);
notas.map((nota) => {
  let qnt = ~~(valor / nota);
  console.log(`${qnt} nota(s) de R$ ${nota},00`);
  valor = valor % nota;
});
