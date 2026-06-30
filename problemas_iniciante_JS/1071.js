var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split('\n');

const x = Number(lines[0]);
const y = Number(lines[1]);

let min = Math.min(x, y);
let max = Math.max(x, y);

let sum = 0;
for (let i = min + 1; i < max; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log(sum);