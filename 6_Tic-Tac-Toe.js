// returns index of move
function solveTTT(board) {
  let valid = [];
  let winning = [];
  const ways = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  //if we have a winning output, we have two X in the other words
  ways.forEach((way, i) => {
    let sit = [ board[way[0]], board[way[1]], board[way[2]] ];
      if ( ((sit[0]=='X' && sit[1]=='X') || (sit[1]=='X' && sit[2]=='X') || (sit[0]=='X' && sit[2]=='X')) && sit.includes('')) {
        winning.push( way[sit.findIndex( (elem) => elem=="")] );
        //console.log('otvet=', way[sit.findIndex( (elem) => elem=="")]);
        //return way[sit.findIndex( (elem) => elem=="")];
      }

  });

  //cheking the available outputs
  board.forEach( (elem, index) =>  {
    if (elem=="") {
      valid.push(index);
    }
  } );

  return winning.length > 0 ? winning[0] :
    valid.length > 0 ? valid.join(",") : "No available outputs";

}
//dsdfssdfd
var b = ['O', '', '', 'O', 'X', '', 'X', 'O', 'X'];
/*
O - -
O X -
X O X
*/
//console.log( solveTTT(b.slice()) );
b = ['', '', '', 'O', '', '', 'X', '', ''];
console.log( solveTTT(b.slice()) );

/*
SOLUTIONS:
function solveTTT(b) {
  var xwin=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];
  for (var i in xwin) if (xwin[i].map(x=>b[x]).join("")=="XX") return xwin[i].reduce((x,y)=>b[y]=="" ? x+y : x,0);
  for (var i in b) if (b[i]=="") return +i;
}
*/
