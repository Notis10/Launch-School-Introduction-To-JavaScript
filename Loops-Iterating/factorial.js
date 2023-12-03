let number = Number(prompt('Which number do you want to calculate its factorial?'));
let factorial = number;

for (let i = 1; i < number; i += 1) {
  factorial = factorial * (number - i);
}

console.log(factorial);