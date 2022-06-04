var countBits = function(n) {
  return parseInt(  n.toString(2).split("").reduce( (acc, cur) => parseInt(cur)+parseInt(acc) )  );
};

console.log("WW", countBits(0), typeof(countBits(0)) );//10011010010 => 5
console.log(countBits(4));//1
console.log(countBits(7));//3

/*
SOLUTIONS

countBits = n => n.toString(2).split('0').join('').length;

return n.toString(2).replace(/0/g,'').length;

*/
