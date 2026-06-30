var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.trim().split("\n");

lines.forEach((line) => {
  const [a, b] = line.trim().split(/\s+/).map(Number);
  console.log((a ^ b) >>> 0);
});
