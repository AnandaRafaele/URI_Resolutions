var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split('\n');

const number = Number.parseInt(lines[0]);
let currentNumber = number;
let count = 0;

while (count < 6 ) {
    if (currentNumber % 2 !== 0) {
        console.log(currentNumber);
        count++;
    }
    currentNumber++;
}