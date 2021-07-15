var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const DDD = parseInt(lines.shift());

const TABLE = [
  { code: 11, cidade: "Sao Paulo" },
  { code: 19, cidade: "Campinas" },
  { code: 21, cidade: "Rio de Janeiro" },
  { code: 27, cidade: "Vitoria" },
  { code: 31, cidade: "Belo Horizonte" },
  { code: 32, cidade: "Juiz de Fora" },
  { code: 61, cidade: "Brasilia" },
  { code: 71, cidade: "Salvador" },
];

let cidade = TABLE.find((item) => item.code === DDD);

console.log(cidade ? cidade.cidade : "DDD nao cadastrado");
