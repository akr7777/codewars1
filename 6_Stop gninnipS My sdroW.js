function spinWords(string){
  return string.split(' ').map( (item) => item.length > 4 ? item.split("").reverse().join("") : item ).join(" ");
}

console.log(spinWords("Welcome"));//, "emocleW"
console.log(spinWords("You are almost to the last test"));//"You are tsomla to the last test"

/*
SOLUTIONS
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

function spinWords(str){
  return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}

*/
