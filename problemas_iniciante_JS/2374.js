var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split('\n');

const currentLevel = Number.parseInt(lines[0]);
const desiredLevel = Number.parseInt(lines[1]);

console.log(currentLevel - desiredLevel);