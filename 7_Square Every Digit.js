function squareDigits(num){
  let numArr = num.toString().split("");
  numArr = numArr.map( (n, i) => (n*n).toString() );
  console.log(numArr, typeof(parseInt(numArr.join(""))) );
  return parseInt(numArr.join(""));
}

console.log(squareDigits(3212));//, 9414
