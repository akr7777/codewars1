var distanceFromLine = function(a, b, c) {
  let h = 0;
  if (a[0] === b[0] && a[1] === b[1]) {
    h = Math.sqrt( Math.pow(c[0]-a[0], 2) + Math.pow(c[1]-a[1], 2) );
  } else {
    const ab = Math.sqrt( Math.pow(b[0]-a[0], 2) + Math.pow(b[1]-a[1], 2) );
    const bc = Math.sqrt( Math.pow(c[0]-b[0], 2) + Math.pow(c[1]-b[1], 2) );
    const ac = Math.sqrt( Math.pow(c[0]-a[0], 2) + Math.pow(c[1]-a[1], 2) );

    const p = (ab + bc + ac)/2;
    const ex = p*(p-ab)*(p-bc)*(p-ac);
    h = 2*Math.sqrt(ex)/ab;
  }
  return h;
}
var a,b,c
a = [10,10];
c = [20, 25];
b = [30,10];
console.log(distanceFromLine(a,b,c));//15


/*
SOLUTION
function distanceFromLine([ax, ay], [bx, by], [cx, cy]) {
  return ax != bx || ay != by
    ? Math.abs((bx - ax) * (ay - cy) - (ax - cx) * (by - ay)) / Math.hypot(bx - ax, by - ay)
    : Math.hypot(cx - ax, cy - ay);
}
*/
