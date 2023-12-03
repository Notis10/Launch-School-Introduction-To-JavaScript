function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries;

for (tries = 1; tries > 0;) {
  console.log(result = randomNumberBetween(1, 39));
  if (result > 32) {
    break;
  } else {
    tries += 1;
  }
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');