let count = 0;
function persistence(num) {
  console.log('n=', num, 'c=', count);
   if (num > 9) {
     count++;
     persistence(num.toString().split('').reduce( (acc, cur) => cur*acc, 1 ));
   }
   console.log('count=',count);
   return count;
}

console.log(persistence(999));
