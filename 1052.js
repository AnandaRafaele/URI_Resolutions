var input = require("fs").readFileSync("./stdin", "utf8");
var lines = parseInt(input.split("\n"));

const MONTHS = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(MONTHS[lines]);
