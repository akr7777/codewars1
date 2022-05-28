function solution(str){
  if (str.length % 2 == 1) str += "_";
  return str.length > 0 ? str.match(/.{1,2}/g) : [];

}

console.log(solution("abcdefg"));// ["ab", "cd", "ef", "g_"]
console.log(solution("abcdef"));//, ["ab", "cd", "ef"]
console.log(solution(""));//, []
