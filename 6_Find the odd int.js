function findOdd(A) {
  A.sort( (a,b) => a-b );
  let currElem = A[0];
  let currCount = 0;
  let result;
  A.forEach((elem, index) => {
    if (elem == currElem) {
      currCount += 1;
    } else {
      if (currCount % 2 !== 0) result = A[index-1];
      currElem = A[index];
      currCount = 1;
    }
  });
  if (currCount % 2 !== 0) result = A[A.length - 1];
  return result;
}

console.log('FINAL=', findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //5
console.log('FINAL=', findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); //10
console.log('FINAL=', findOdd([5])); //5

/*
SOLUTIONS
function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}
*/
