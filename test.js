let count = 0;

function cc(card) {
  // Only change code below this line
  console.log('count=', count);
  if (card < 7){
    console.log("card=", card)
    count++;
    //return  count+" Bet";
  }
  else if (card >= 7 && card <=9){
    console.log("card=", card)
    //return  count+" Hold";
  }
  else {
    console.log("card=", card)
    count--;
    //return count + " Hold";
  }

  let countstr = count.toString()
  console.log("finish: countstr=", countstr, typeof(countstr), countstr+" Hold");
  if (count <= 0) return (countstr+" Hold");
  else return (countstr+" Bet");
  // Only change code above this line
}

cc(2); cc(3); cc(5); cc('K'); cc('A');
console.log(cc('A'));
