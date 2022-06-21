//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

function digPow(n, p){
  let result = n.toString().split("").reduce( (acc,cur) => {
    //console.log('acc=', acc, 'cur=', cur, "p=", p, 'Math.pow( parseInt(cur), p)=', Math.pow( parseInt(cur), p));
    acc += Math.pow( parseInt(cur), p);
    p++;
    return acc;
  }, 0);
  return result % n == 0 ? result/n : -1
}

console.log(digPow(89, 1));
console.log(digPow(46288, 3)); //51

/*
SOLUTION
function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}
*/
