// returns index of move
function solveTTT(board) {
  console.log('board=', board);
  result = [];
  const ways = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  ways.every();
  return Math.min(result.length)

}

var b = ['O', '', '', 'O', 'X', '', 'X', 'O', 'X'];
/*
O - -
O X -
X O X
*/
console.log( solveTTT(b.slice()) );
