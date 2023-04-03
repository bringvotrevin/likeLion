const x = 0;
const y = 1;

console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));

