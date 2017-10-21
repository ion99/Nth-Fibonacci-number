//function that gets the nth Fibonacci number: nthfibonacci.js

const fibonacciRecursive = n => {
 return n < 2 ? n : fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
};

fibonacciRecursive(6);

const fibonacciLoop = n => {
  if (n < 2) return n; 
  let n0 = 0;
  let n1 = 1;
  let n2;
  for (let l = 2; l <= n; l++) {
    n2 = n0 + n1;
    n0 = n1;
    n1 = n2;
  }
  return n2;
}; 

fibonacciLoop(7);