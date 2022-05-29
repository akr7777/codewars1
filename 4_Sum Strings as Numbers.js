function sumStrings(a,b) {
  if (a.length == 0) a = '0';
  if (b.length == 0) b = '0';
  return (BigInt(a) + BigInt(b)).toString();
}
console.log(sumStrings('123','456'));//,'579'
