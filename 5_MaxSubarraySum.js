var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

console.log( maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]) ); //
console.log( maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) ); //6


//const maxSequence = (a,sum=0) => a.reduce((max,v) => Math.max(sum = Math.max(sum + v, 0), max), 0);
