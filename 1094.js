var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

var casos = parseInt(lines[0]),
  totalCobaias = 0,
  totalRatos = 0,
  totalCoelhos = 0,
  totalSapos = 0;

for (var i = 1; i <= casos; i++) {
  var data = lines[i].split(" ");
  var quantidade = parseInt(data.shift());
  var animal = data.shift().replace("\r", "");

  totalCobaias += quantidade;

  switch (animal) {
    case "R":
      totalRatos += quantidade;
      break;
    case "C":
      totalCoelhos += quantidade;
      break;
    default:
      totalSapos += quantidade;
      break;
  }
}

console.log(`Total: ${totalCobaias} cobaias`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Total de sapos: ${totalSapos}`);
console.log(
  `Percentual de coelhos: ${((totalCoelhos * 100) / totalCobaias).toFixed(2)} %`
);
console.log(
  `Percentual de ratos: ${((totalRatos * 100) / totalCobaias).toFixed(2)} %`
);
console.log(
  `Percentual de sapos: ${((totalSapos * 100) / totalCobaias).toFixed(2)} %`
);
