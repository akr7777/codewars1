function arrayDiff(a, b) {
  b.forEach(item => a=a.filter(elem => elem!=item));
  return a;
}

console.log('[1,2,2], [1] =', arrayDiff([1,2,2], [1]));
console.log('[1,2,2], [] =', arrayDiff([1,2,2], []));
console.log('[], [1,2] =', arrayDiff([], [1,2]));
console.log('[1,2,3], [1,2] =', arrayDiff([1,2,3], [1,2]));

/*
return a.filter(e => !b.includes(e));
*/
