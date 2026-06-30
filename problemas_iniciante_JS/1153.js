var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split('\n');

const number = parseInt(lines[0]);

function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}

console.log(fatorial(number));