/*
console.log(`You are ${age} years old.`);
console.log(`In ${10} years, you will be ${age + 10} years old.`);
console.log(`In ${20} years, you will be ${age + 20} years old.`);
console.log(`In ${30} years, you will be ${age + 30} years old.`);
console.log(`In ${40} years, you will be ${age + 40} years old.`);
*/

let age = 30;

for (let i = 0; i <= 4; i += 1) {
  if (i === 0) {
    console.log(`You are ${age} years old.`);
  } else {
    console.log(`In ${i*10} years, you will be ${age + i*10} years old.`);
  }
}