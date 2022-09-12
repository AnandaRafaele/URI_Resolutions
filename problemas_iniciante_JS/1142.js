var input = require("fs").readFileSync("./stdin", "utf8");
var lines = parseInt(input.split("\n"));

let text = "";
let sequel = 0;

for (let i = 0; i < lines * 4; i += 4) {
  text = "";
  for (let j = 1; j <= 4; j++) {
    sequel++;
    if (j % 4 === 0) {
      text = text.concat("PUM");
    } else {
      text = text.concat(`${sequel} `);
    }
  }
  console.log(text);
}
