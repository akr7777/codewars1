function pigIt(str){
  return str.split(" ").map( (e,i,arr) => {
    e = e.split("");

    if ('?!.,:'.includes(e) && e.length==1) return e;

    if ('?!.,:'.includes(e[e.length-1])) {
      let z = e[e.length-1];
      e[e.length-1] = "";
      e.push(e.shift(),"ay",z);
    } else {
      e.push(e.shift(),"ay");
    }
    return e.join("");
  } ).join(" ");

}

console.log(pigIt('Pig latin is cool !'));//,'igPay atinlay siay oolcay!'

/*
SOLUTIONS
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}
----
return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
*/
