function isValidIP(str) {
  return str.split('.').length === 4
    && str.split('.').every( (el) => {
          if (el[0]==0 && el.length>1) return false
          return /^-?\d+$/.test(el) && Number(el)>=0 && Number(el)<=255
        });
}

console.log(isValidIP("137.255.156.100"));


/*

SOLUTION

function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}
*/
