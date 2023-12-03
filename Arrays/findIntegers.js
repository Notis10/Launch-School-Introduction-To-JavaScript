let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];


function findIntegers(array) {
  return array.filter(function(num) {
    return Number.isInteger(num);
  });
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]