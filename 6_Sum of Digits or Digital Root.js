function digital_root(n) {
  let sum = n.toString().split("").reduce( (acc, cur) =>  parseInt(acc) + parseInt(cur));
  return parseInt(sum) < 10 ? parseInt(sum) : digital_root(parseInt(sum));
}

console.log(digital_root(0));

/*
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

SOLUTIONS
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

while (n > 9) { n = (''+n).split('').reduce(function(s,d) {return +s + +d;}); }
  return n;
*/
