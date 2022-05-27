function getCount(str) {
  //console.log(str.replace(/[aeiou]/gi, ""));
  //console.log(str.replace(/[aeiou]/gi, "").length);
  return str.length - str.replace(/[aeiou]/gi, "").length;
}

console.log(5 == getCount('abracadabra'));
