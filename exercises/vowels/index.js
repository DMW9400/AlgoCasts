// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vArr = str.toLowerCase().split('')
  let vCount = 0
  vArr.map(char => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o'|| char === 'u' ){
      vCount ++
    }
  })
  return vCount
}

// First Official Solution:
// // function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//
//   return count;
// }

// Preferred Solution:
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

module.exports = vowels;
