var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

var valor = parseFloat(lines.shift());

if (valor >= 0 && valor <= 25) return console.log("Intervalo [0,25]");
else if (valor > 25 && valor <= 50) return console.log("Intervalo (25,50]");
else if (valor > 50 && valor <= 75) return console.log("Intervalo (50, 75]");
else if (valor > 75 && valor <= 100) return console.log("Intervalo (75,100]");
else return console.log("Fora de Intervalo")

