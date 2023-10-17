let rlSync = require('readline-sync');

let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');

console.log(`Hello, ${fullName(firstName, lastName)}!`);



function fullName (firstName1, lastName1) {
  return `${firstName1 + " " + lastName1}`;
}