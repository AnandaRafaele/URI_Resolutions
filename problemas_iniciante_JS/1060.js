var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n").map((item) => parseInt(item));

let count = 0;
lines.map((line) => line > 0 && count++);
console.log(count + " valores positivos");
