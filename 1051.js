var input = require("fs").readFileSync("./stdin", "utf8");
var lines = parseFloat(input.split("\n")[0]);

var resto, imposto;

if (lines <= 2000.0) {
  imposto = "Isento";
} else {
  resto = lines - 2000.0;

  if (resto > 1000.0) {
    resto = resto - 1000;
    imposto = 1000 * 0.08;
  } else {
    imposto = resto * 0.08;
    resto = 0;
  }

  if (resto > 1500) {
    resto = resto - 1500;
    imposto += 1500 * 0.18;
  } else {
    imposto += resto * 0.18;
    resto = 0;
  }

  if (resto > 0) {
    imposto += resto * 0.28;
  }
}

console.log(imposto === "Isento" ? imposto : `R$ ${imposto.toFixed(2)}`);
