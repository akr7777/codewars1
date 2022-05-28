function cakes(recipe, available) {
  let arr = [];
  for (let key in recipe) arr.push( Math.floor(available[key] / recipe[key]) );
  let result = arr.sort(function(a,b) {return a-b;})[0];
  return result ? result : 0;
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); //2

/*
return Math.floor(Object.keys(recipe).reduce(function(min, key){
      return Math.min(available[key] / recipe[key] || 0, min);
   }, Infinity));
*/
