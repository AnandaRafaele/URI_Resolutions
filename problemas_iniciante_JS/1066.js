var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n").map((item) => parseInt(item));

//NÃO FOI ACEITA, NÃO SEI O PORQUÊ!

let contePar = 0,
  conteImpar = 0,
  contePositivo = 0,
  conteNegativo = 0;

lines.map((line) => {
  if (line % 2 === 0) contePar++;
  else conteImpar++;
  if (line > 0) contePositivo++;
  if (line < 0) conteNegativo++;
});

console.log(`${contePar} valor(es) par(es)`);
console.log(`${conteImpar} valor(es) impar(es)`);
console.log(`${contePositivo} valor(es) positivo(s)`);
console.log(`${conteNegativo} valor(es) negativo(s)`);
