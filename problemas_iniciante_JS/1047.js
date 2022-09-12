var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input
  .split("\n")
  .shift()
  .split(" ")
  .map((item) => parseInt(item));

let horas, minutos;
let [initHora, initMin, fimHora, fimMin] = lines;

if (initHora >= fimHora && initMin >= fimMin) {
  horas = 24 - (initHora - fimHora);
} else {
  horas = fimHora - initHora;
}

if (initMin > fimMin) {
  horas -= 1;
  minutos = 60 - (initMin - fimMin);
} else {
  minutos = fimMin - initMin;
}

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
