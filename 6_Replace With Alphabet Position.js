function alphabetPosition(text) {
  let alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".toLowerCase().split(" ");
  text = text.toLowerCase().split("");
  return text.map( (e,i) => alphabet.indexOf(e)+1 ).filter( (num) => num !== 0 ).join(" ");
}

let tf;
let otv = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
alphabetPosition("The sunset sets at twelve o' clock.") == otv ? tf=true : tf=false;
console.log(tf);//

/*
SOLUTIONS
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
*/
