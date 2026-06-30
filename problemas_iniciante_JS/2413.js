var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split('\n');

const thirdLinkClickedNumber = Number.parseInt(lines[0]);

const calculateA =  thirdLinkClickedNumber * 2 * 2
console.log(calculateA);