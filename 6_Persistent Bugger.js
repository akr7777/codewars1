function persistence(num) {
   let count = 0;
   while (num > 9) {
     count++;
     num = num.toString().split('').reduce( (acc, cur) => cur*acc, 1 );
   }
   return count;
}

console.log(persistence(999));
