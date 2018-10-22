// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function fib(n) {

  let results = []
  let counter = 0

  for(let i = 0; i <= n; i++){
    if (results.length < 2){
      results.push(counter)
      counter++
    }
    else{
      results.push(results[i-1]+results[i-2])
    }
  }
  return results[n]
}

// Recursive solution:
function fibRecursive(n){
  if (n < 2) {
    return n;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}


module.exports = fib;
