function toCamelCase(str){
  let index = 0;
  do {
	    var x = str.indexOf("-", index);
      if (x == -1) {
        x = str.indexOf("_", index);
        if (x != -1)
          str = str.substr(0, x) + "" + str[x+1].toUpperCase() + str.substr(x+2);
      }
      else {
        str = str.substr(0, x) + "" + str[x+1].toUpperCase() + str.substr(x+2);
      }
	    index = x + 1;
	} while (x != -1)
  return str;
}

console.log('the_stealth_warrior', toCamelCase('the_stealth_warrior'));
console.log('', toCamelCase(''));
console.log('The-Stealth-Warrior', toCamelCase('The-Stealth-Warrior'));
console.log('A-B-C', toCamelCase('A-B-C'));

/*
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
*/
