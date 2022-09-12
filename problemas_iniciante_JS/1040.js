var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

//.shift() gets the first row of lines
//.split(" ") splits the string of grades into substrings using the space separator
//.map(() => {}) gets each strings and turn them into a float
const grades = lines
  .shift()
  .split(" ")
  .map((grade) => parseFloat(grade));
//destructuing of the grades array by unpacking each grade and storing the result in each variable
const [n1, n2, n3, n4] = grades;
//.shift() gets the second row of lines
const finalTest = parseFloat(lines);
//defining pondered average weights
const WEIGHTS = [2, 3, 4, 1];
//stores the sum of the weights
const weightsSum = WEIGHTS.reduce((prev, cur) => prev + cur, 0);
//stores the sum of all grades multiplied for their weights
const sum = grades.reduce(
  (prev, cur, _index) => prev + cur * WEIGHTS[_index],
  0
);
//calcs pondered average
const average = sum / weightsSum;

console.log(`Media: ${average.toFixed(1)}`);

if (average >= 7) {
  console.log("Aluno aprovado.");
} else if (average >= 5 && average < 7) {
  const newAverage = (average + finalTest) / 2;
  console.log("Aluno em exame.");
  console.log(`Nota do exame: ${finalTest.toFixed(1)}`);

  if (newAverage >= 5) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }

  console.log(`Media final: ${newAverage.toFixed(1)}`);
} else {
  console.log("Aluno reprovado.");
}
