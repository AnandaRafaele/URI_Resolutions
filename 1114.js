var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split(/\r\n/);

var testes = lines.length;

for (var i = 0; i < testes; i++) {
  if (parseInt(lines[i]) === 2002) {
    console.log("Acesso Permitido");
    break;
  }
  console.log("Senha Invalida");
}
