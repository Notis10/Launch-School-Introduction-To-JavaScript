let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {

  let lengths = arr.map((value) => value.length)

  return lengths.filter(function(odd) {
    if (odd % 2 !== 0) {
      return odd;
    }
  })
}

console.log(oddLengths(arr)); // => [1, 5, 3]