const numbers = process.argv.slice(2)
let sum = 0;
const output = numbers.reduce((sum, number) => {
  return sum += parseInt(number);
}, 0); 
console.log(output)