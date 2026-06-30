var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let alcohol = 0;
let gasoline = 0;
let diesel = 0;

for(const line of lines) { 
  const operation = Number(line);
  
  if(operation === 4) {
    break;
  } else if(operation === 1) {
    alcohol++;
  } else if(operation === 2) {
    gasoline++;
  } else if(operation === 3) {
    diesel++;
  }
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${alcohol}`);
console.log(`Gasolina: ${gasoline}`);
console.log(`Diesel: ${diesel}`);