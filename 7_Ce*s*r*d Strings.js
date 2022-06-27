function uncensor(infected, discovered) {
  discovered = discovered.split('');
  return infected.split('').map((item, i) => {
    return item==='*' ? item = discovered.shift() : item;
    /*
    if (item === '*') {
      item = discovered.shift();
    }
    return item;
    */
  }).join('');

}

console.log(uncensor('*h*s *s v*ry *tr*ng*', 'Tiiesae'));//'This is very strange'
console.log(uncensor('A**Z*N*', 'MAIG'));//, 'AMAZING'
