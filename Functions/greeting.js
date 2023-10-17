function greetPeople() {
  let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}
console.log(greetingMessage); // raises ReferenceError
greetPeople();