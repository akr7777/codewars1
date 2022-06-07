
const decodeMorse = function(morseCode){
  const lettersStr = "./,/!/A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z/SOS";
  const lettersCode = ".-.-.-/--..--/-.-.--/.-/-.../-.-./-.././..-./--./..../../.---/-.-/.-../--/-./---/.--./--.-/.-./.../-/..-/...-/.--/-..-/-.--/--../...---...";

  const letterOrig = lettersStr.split("/");
  const letterMorse = lettersCode.split("/");
  let morseCodeArray = morseCode.split(" ");

  let result = morseCodeArray.map( (currentLetter) => {
    if (currentLetter=="") return " ";
    else return letterOrig[letterMorse.findIndex( (morseElem) => morseElem==currentLetter)];
  });

  let mainResult = result.map( (letter, index) => {
    if (letter==" " && result[index+1] == " ") {
      return "";
    } else {
      return letter;
    }
  } ).join('').trim();

  if (mainResult == "") console.log('morseCode=', morseCode, 'mainResult=', mainResult);

  return mainResult;

}

console.log(decodeMorse('.... . -.--     .--- ..- -.. .'));//, 'HEY JUDE'
console.log(decodeMorse(' ... --- ... -.-.--'));//, 'HEY JUDE'
console.log(decodeMorse('.'));//, 'HEY JUDE'

/*
SOLUTIONS

decodeMorse = function(morseCode){
  return morseCode.trim().split('   ').map(function(word) {
    return word.split(' ').map(function(letter) {
      return MORSE_CODE[letter];
    }).join('');
  }).join(' ');
}
*/
