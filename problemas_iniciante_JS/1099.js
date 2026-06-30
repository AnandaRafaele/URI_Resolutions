var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const testCasesAmount = parseInt(lines[0]);

for (let i = 1; i <= testCasesAmount; i++) {
  let sum = 0;
  const [n1, n2] = lines[i].split(" ").map(Number);

  const biggerNumber = Math.max(n1, n2);
  const smallerNumber = Math.min(n1, n2);
  
  for (let j = smallerNumber + 1; j < biggerNumber; j++) {
    if (j % 2 !== 0 && j !== biggerNumber) {
      sum += j;
    }
  }

  console.log(sum);
}

