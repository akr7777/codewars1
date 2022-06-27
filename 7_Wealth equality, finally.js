function redistributeWealth(wealth) {
  const sum = wealth.reduce( (acc, cur) => acc+cur );
  for (i=0; i<wealth.length; i++) {
    wealth[i] = sum/wealth.length;
  }
}

console.log(redistributeWealth([0,10]));
