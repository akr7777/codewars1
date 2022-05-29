function sumOfDifferences(arr) {
  let sum = 0;

  return arr.length>1
    ? arr.sort((a,b) => b-a).reduce( (accumulator, currentElement, indexCurrent) => sum += arr[indexCurrent-1] - currentElement )
    : 0;
}

console.log(sumOfDifferences([5]));//[2, 1, 10]  -->  9
//10 -3 2 1 = -13 + 5 + -1 = -9

//return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
