let a = 4936;
thousands = parseInt(a/1000);
a = a - thousands*1000;
hundreds = parseInt(a/100);
a = a - hundreds*100;
tens = parseInt(a/10);
a = a - tens*10;
ones = a;

console.log(thousands);
console.log(hundreds);
console.log(tens);
console.log(ones);