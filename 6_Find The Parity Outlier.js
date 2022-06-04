function findOutlier(integers){
  let marking;
  let a0 = Math.abs(integers[0]);
  let a2 = Math.abs(integers[2]);
  let a1 = Math.abs(integers[1]);

  (a0%2==0 && a1%2==0) ? marking = 0 :
    (a0%2!==0 && a1%2!==0) ? marking = 1 : a2%2==0 ? marking = 0 : marking = 1;

  return marking==0 ? integers.find( (elem)=> Math.abs(elem)%2==1 ) : integers.find( (elem)=> Math.abs(elem)%2==0);
}

console.log(findOutlier([2,6,8,10,6,-7]));

/*
SOLUTIONS
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
*/
