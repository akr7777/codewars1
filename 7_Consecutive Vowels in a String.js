//Var 1
function getTheVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = 0;
  let ind = 0;
  word.split('').map( letter => {
    if (letter === vowels[ind]) {
      result++;
      ind++;
      if (ind === vowels.length) {
        ind = 0;
      }
    }
  });

  return result;
}

//Var2
function getTheVowels2(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return word.split('').reduce((acc, char) => acc + (char === vowels[acc % vowels.length])).length;
}

console.log(getTheVowels2('agrtertyfikfmroyrntbvsukldkfa'));//6
console.log(getTheVowels2('erfaiekjudhyfimngukduo'));//4


/*
SOLUTINS
const getTheVowels = (word, vowels = 'aeiou') =>
  word
    .split('')
    .reduce((count, char) => count + (char === vowels[count % vowels.length]), 0)
*/
