function isValidWalk(walk) {
  const d = {'n': 0,'s': 0,'w': 0,'e': 0};
  walk.forEach((w, i, arr) => d[w]++ );
  return ( d['n']==d['s'] && d['w']==d['e'] && walk.length==10 ) ? true : false

}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));//true
