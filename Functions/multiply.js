let multiply = (a,b) => a*b;

let rlSync = require('readline-sync');

let firstNumber = rlSync.question('Enter the first number: ');
let secondNumber = rlSync.question('Enter the second number: ');

console.log(multiply(firstNumber, secondNumber));