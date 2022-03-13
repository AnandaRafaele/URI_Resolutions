var input = require("fs").readFileSync("./stdin", "utf8");
var lines = parseInt(input.split("\n"));

const segundos = lines % 60;
const minutos = Math.floor((lines / 60) % 60);
const horas = Math.floor(lines / 60 / 60);

console.log(horas + ":" + minutos + ":" + segundos);
