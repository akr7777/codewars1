var fibonacci = function(n) {
    let arr = [0, 1];
    if (n > 2) {
      for (let i=2; i<=n; i++){
        arr.push(arr[i-1] + arr[i-2])
      }
    }
    return arr[n-1];

    //if(n==0 || n == 1) return n;
    //return fibonacci(n-1) + fibonacci(n-2);
}
let n = 60;
console.log('n =',n,'fib =',fibonacci(n));//,70 190392490709135
