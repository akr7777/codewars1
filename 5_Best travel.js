function chooseBestSum(t, k, ls) {
//t - max route, k - count of the cities; ls - distances

  /*
    if (k > ls.length) return null;

    ls.sort( (a,b) => a-b ).reverse();
    console.log('t=',t,'ls=',ls);

    let maxSum = ls[0]+ls[1]+ls[2];
    console.log('maxSum=', maxSum);

    if (maxSum<=t) return maxSum;
    else
      while (ls.length > k) {
        ls.shift();
        console.log('ls=', ls);
        maxSum = ls[0]+ls[1]+ls[2];
        if (maxSum<=t) return maxSum;
      }
      */
    //console.log(t, typeof(t), k, typeof(k), ls);
    let way = [];
    let sum = 0;
    for (let x=0; x<ls.length; x++){
      for (let y=0;y<ls.length;y++){
        if (k>2){
          for (let z=0;z<ls.length;z++){

            if (x!==y && x!==z && y!==z) {
              let s = ls[x]+ls[y]+ls[z];
              if ( s > sum && s <= t ) {
                way = [];
                way.push(ls[x], ls[y], ls[z]);
                sum = s;
              }
            }
          }
        } else {
          if (x!==y) {
            let s = ls[x]+ls[y];
            if ( s > sum && s <= t ) {
              //way.push(ls[x], ls[y]);
              sum = s;
            }
          }
        }
      }
    }
    if (sum == 0) {
      sum = null;
    }
    return sum;
}


var ts = [50, 55, 56, 57, 58];
//console.log(chooseBestSum(163, 3, ts));// 163
ts = [91, 74, 73, 85, 73, 81, 87];
//console.log(chooseBestSum(230, 3, ts));//, 228)
console.log(chooseBestSum(331, 2, ts));//, 178)

/*
ts = [50]
console.log(chooseBestSum(163, 3, ts));//, null)
ts = [91, 74, 73, 85, 73, 81, 87]
console.log(chooseBestSum(230, 3, ts));// 228
*/

/*
SOLUTIONS

function chooseBestSum(t, k, ls) {
  let arr = [];

  function rec(sum, ar, n) {
    if (n == 0) {
      arr.push(sum);
    } else {
      for (let i = 0; i < ar.length; i++) {
        rec(sum+ar[i], ar.slice(i+1), n-1);
      }
    }
  }

  rec(0, ls, k);

  var sol = arr.sort( (a, b) => b - a).find( a => a <= t);
  return typeof sol === 'undefined' ? null : sol;
}
-----------
const chooseBestSum = (t, k, ls) =>
  ls.reduce((pre, val) => [...pre, ...pre.filter(val => val.length < k).map(v => [...v, val])], [[]])
    .filter(val => val.length === k)
    .map(val => val.reduce((pre, val) => pre + val))
    .filter(val => val <= t)
    .sort((a, b) => a - b).pop() || null;
*/
