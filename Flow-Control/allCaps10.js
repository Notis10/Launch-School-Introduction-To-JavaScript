function allCaps(str) {
  if (str.length <= 10) {
    return str;
  } else {
    return str.toUpperCase();
  }
}

console.log(allCaps('hello world'));