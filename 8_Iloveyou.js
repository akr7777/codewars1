function howMuchILoveYou(nbPetals) {
  const ARRAY = ['I love you','a little','a lot','passionately','madly','not at all'];
  return (nbPetals % 6 == 0) ? ARRAY[ARRAY.length - 1] : ARRAY[nbPetals%6 - 1];
}

console.log(howMuchILoveYou(1));
console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));
console.log(howMuchILoveYou(222));
