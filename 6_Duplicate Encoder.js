function duplicateEncode(word){
    return word.toLowerCase().split("").map((e, i, arr) => arr.lastIndexOf(e) == arr.indexOf(e) ? "(" : ")" ).join("");
}
console.log(duplicateEncode('Success'));
