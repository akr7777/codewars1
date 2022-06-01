const lettersStr = "/A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z";
const lettersCode = "/.-/-.../-.-./-.././..-./--./..../../.---/-.-/.-../--/-./---/.--./--.-/.-./.../-/..-/...-/.--/-..-/-.--/--..";

const decodeMorse = function(morseCode){
  const letterOrig = lettersStr.split("/");
  const letterMorse = lettersCode.split("/");
  let morseCodeArray = morseCode.split(" ");

  let result = morseCodeArray.map( (currentLetter) => {
    if (currentLetter=="") return " ";
    else return letterOrig[letterMorse.findIndex( (morseElem) => morseElem==currentLetter)];
  });

  return result.map( (letter, index) => {
    if (letter==" " && result[index+1] == " ") {
      return "";
    } else {
      return letter;
    }
  } ).join('');

}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));//, 'HEY JUDE'
