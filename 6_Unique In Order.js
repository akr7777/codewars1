var uniqueInOrder=function(iterable){
  switch ( typeof(iterable) ) {
    case 'object':
      return iterable.filter( (e,i,arr) => e !== arr[i-1] );
    case 'number':
      return iterable.toString().split("").filter( (e,i,arr) => e !== arr[i-1] );
    case 'string':
      return iterable.split("").filter( (e,i,arr) => e !== arr[i-1] );
  }
}

console.log(uniqueInOrder([1,2,3,3,3])); //['A','B','C','D','A','B']
