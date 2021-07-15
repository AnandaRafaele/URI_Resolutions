var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n").shift().split(" ");

let initHora = parseInt(lines[0]);
let initMin = parseInt(lines[1]);
let fimHora = parseInt(lines[2]);
let fimMin = parseInt(lines[3]);
let horas, minutos;

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
