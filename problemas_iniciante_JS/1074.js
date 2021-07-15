var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n").map((item) => parseInt(item));

var oddOrEven = "";
var posOrNeg = "";

for (var i = 1; i <= lines[0]; i++) {
  if (lines[i] === 0) {
    console.log("NULL");
  } else {
    if (lines[i] > 0) {
      posOrNeg = "POSITIVE";
    } else {
      posOrNeg = "NEGATIVE";
    }

    if (lines[i] % 2 === 0) {
      oddOrEven = "EVEN";
    } else {
      oddOrEven = "ODD";
    }
    console.log(`${oddOrEven} ${posOrNeg}`);
  }
}
