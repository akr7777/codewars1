function createPhoneNumber(numbers){
  return `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6,numbers.length).join("")}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/*
SOLUTIONS
return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
return "(012) 345-6789".replace(/\d/g, d => n[d])
*/
