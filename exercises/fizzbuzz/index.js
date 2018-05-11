// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  let arr = []
  for(let i = 1; i<=n; i++){
    arr.push(i)
  }
  for(let int of arr){
    if(int % 3 !== 0 && int %5 !== 0 ){
      console.log(int)
    }else if (int % 3 === 0 && int % 5 === 0 ){
      console.log('fizzbuzz')
    }else if (int % 3 === 0){
      console.log('fizz')
    }else if (int % 5 === 0){
      console.log('buzz')
    }
  }
}

module.exports = fizzBuzz;
