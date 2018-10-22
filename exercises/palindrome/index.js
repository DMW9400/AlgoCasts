// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

  let lastInt = str.length - 1
  let boolArr = []

  for(let char of str){
    boolArr.push(char === str[lastInt])
    lastInt--
  }
  
  return boolArr.includes(false) ? false : true
}

// first official solution:
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
// this converts str to an array so it can be reversed, rejoins it, then evaluates to see if the two equal each other
//
//   return str === reversed;
// }

// Second, less preferable solution - #every will iterate through the entire string, though only the first half must be done

// function palindrome(str) {
    // every takes an arrow function whose arguments are the present item in the array and its index number
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

module.exports = palindrome;
