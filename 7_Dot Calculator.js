function dotCalculator (equation) {
  /*
  let index = 0;
  let char1;
  equation = equation.trim();
  for (let i=0; i<equation.length; i++) {
    if (equation.charAt(i) !== '.' && equation.charAt(i) !== ' ') {
      index = i;
      char1 = equation.charAt(index);
    }
  }
  const op1 = equation.substr(0,index).trim().length;
  const op2 = equation.substr(index+1, equation.length).trim().length;
  let len = eval(op1+char1+op2);
  let res = '';
  for (let i=0; i<len; i++) {
    res += '.';
  }
  console.log('len=', len, 'res=', res);
  return res;
  */

  //console.log(eval(op1, equation.charAt(index), op2));

  let result;
  if ( equation.indexOf('+') !== -1) {
    let [op1, op2] = equation.split('+');
    result = op1.trim().length + op2.trim().length;
  } else if ( equation.indexOf('-') !== -1) {
    let [op1, op2] = equation.split('-');
    result = op1.trim().length - op2.trim().length;
  } else if ( equation.indexOf('*') !== -1) {
    let [op1, op2] = equation.split('*');
    result = op1.trim().length * op2.trim().length;
  } else if ( equation.indexOf('/') !== -1) {
    let [op1, op2] = equation.split('//');
    result = Math.floor(op1.trim().length / op2.trim().length);
  }
  let return_result = []
  for (let i=1;i<=result;i++) {
    return_result.push('.');
  }
  return return_result.join('');

}

///console.log("..... + ...............");// "...................."
console.log(dotCalculator("..+.")); //...
console.log(dotCalculator(".... // ..")); //...
console.log(dotCalculator("..*...")); //...
console.log(dotCalculator("..... - .."));
