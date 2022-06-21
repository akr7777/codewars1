/*
Task
Given an array of numbers and an index,
return either the index of the smallest number that is larger than the element at the given index,
or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

*/

function leastLarger(a,i) {
  console.log('a=', a, 'i=',i, 'a[i]=', a[i]);
  let resultIndex = -1;
  let v = a.forEach((item, index) => {
    if (item > a[i]) {
      if (resultIndex === -1) {
        resultIndex = index;
      } else {
        if (item < a[resultIndex]) {
          resultIndex = index;
        }
      }
    }
  });

  return resultIndex;
}

console.log(leastLarger( [4, 1, 3, 5, 6], 0 ))//  =>  3
console.log(leastLarger( [4, 1, 3, 5, 6], 4 ))//  => -1

/*
SOLUTION
const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))

*/
