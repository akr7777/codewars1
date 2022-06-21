function zero(...args) {
  if (args) {
    return eval("0"+args);
  } else {
  return 0;
  }
}
function one(...args) {
  if (args) {
    return eval("1"+args);
  } else {
  return 1;
  }
}
function two(args) {
  if (args) return eval("2"+args);
  else return 2;
}
function three(...args) {
  if (args) return eval("3"+args);
  else return 3;
}
function four(...args) {
  if (args) return eval("4"+args);
  else return 4;
}
function five(...args) {
  if (args) {
    return eval("5"+args);
  } else {
  return 5;
  }
}
function six(args) {
  if (args) return eval("6"+args);
  else return 6;
}
function seven(...args) {
  if (args) {
    return eval("7"+args);
  } else return 7;
}
function eight(...args) {
  if (args) return eval("8"+args);
  else return 8;
}
function nine(...args) {
  if (args) return eval("9"+args);
  else return 9;
}

function plus(arg) {return "+"+arg;}
function minus(arg) {return "-"+arg;}
function times(arg) {return "*"+arg;}
function dividedBy(arg) {return "/"+arg;}

console.log(eight(dividedBy(five())) );
