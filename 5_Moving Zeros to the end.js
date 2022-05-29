function moveZeros(arr) {
  return arr.sort( function(a,b) {if (b===0) return -1} );
}

console.log( moveZeros([1,2,0,1,0,1,0,3,0,1]) );//[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
