function duplicateCount(text){
  
  let total = [];
  let uniqueText = text.toLowerCase().split("").forEach(function (e, i, arr) {
    if (arr.lastIndexOf(e) !== i){
      if (!total.includes(e)) {
        total.push(e)
      }
    }
  });
  return total.length;

  //console.log(text.toLowerCase().split("").filter( (e,i,arr) => arr.lastIndexOf(e) === i ));
  //return text.toLowerCase().split("").filter( (e,i,arr) => arr.lastIndexOf(e) === i ).length;
}

console.log( duplicateCount('aabbcdef') );
console.log( duplicateCount('Indivisibility') );

/*
SOLUTIONS
return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
*/
