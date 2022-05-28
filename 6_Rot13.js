function rot13(message){
  message = message.split('');
  let letters_original = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
  let letters_shifred = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split('');
  let result = "";
  for (let i in message){
    message[i].search(/[a-zA-Z]/gi) != -1 ? result += letters_shifred[letters_original.findIndex(elem => elem == message[i])] : result += message[i]
  }
  return result;
}

console.log(rot13('test'));//grfg
console.log(rot13('Test'));//Grfg

/*
var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
-----
var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
*/
