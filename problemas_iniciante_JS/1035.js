var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const valores = lines.shift().split(" ");
const [A, B, C, D] = valores;

var cases = B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0;

if (cases) return console.log("Valores aceitos");
return console.log("Valores nao aceitos");
