var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

function getTotalSeconds(dayLine, timeLine) {
    const day = Number(dayLine.match(/\d+/)[0]);
    const [h, m, s] = timeLine.split(' : ').map(Number);
    return (day * 86400) + (h * 3600) + (m * 60) + s;
}

const start = getTotalSeconds(lines[0], lines[1]);
const end = getTotalSeconds(lines[2], lines[3]);

let diff = end - start;

const days = Math.floor(diff / 86400);
diff %= 86400;
const hours = Math.floor(diff / 3600);
diff %= 3600;
const minutes = Math.floor(diff / 60);
const seconds = diff % 60;

console.log(`${days} dia(s)`);
console.log(`${hours} hora(s)`);
console.log(`${minutes} minuto(s)`);
console.log(`${seconds} segundo(s)`);