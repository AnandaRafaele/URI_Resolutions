var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split('\n');

const tea = parseInt(lines[0])
const participants = lines[1].split(' ').map(Number)
let correctAnswers = 0

for(let i = 0; i < participants.length; i++) {
  if(participants[i] === tea) {
    correctAnswers++
  }
}

console.log(correctAnswers)