function arraysSimilar(arr1, arr2) {
  return ( (arr1.length === arr2.length) && ( arr1.sort().every( (curr, ind) => curr === arr2.sort()[ind]) ) )
}

const arr1 = [1, 2, 2, 3, 4],
      arr2 = [2, 1, 2, 4, 3],
      arr3 = [1, 2, 3, 4],
      arr4 = [1, 2, 3, "4"]

console.log(arraysSimilar(arr1, arr2));
console.log(arraysSimilar(arr2, arr3));
console.log(arraysSimilar(arr3, arr4));
