const countArray = []

function rangeOfNumbers(s,e) {
  if (s > e) {
    return [];
  } else {
    console.log('s=',s);
    countArray.push(s);
    rangeOfNumbers(s + 1, e);
    return countArray;
  }
}
console.log(rangeOfNumbers(5,10));
