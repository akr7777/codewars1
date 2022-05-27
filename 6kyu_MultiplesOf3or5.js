function solution(number){
  const m1 = 3;
  const m2 = 5;
  let summa = 0;
  for (let i=m1; i<number; i++)
    if (i%3==0 || i%5==0) summa += i;
  return summa;
}

console.log(solution(10));
console.log(solution(1000));
