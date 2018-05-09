// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let strArr = str.split('')
  let returnObj = {}
  for (let char of str){
    if(!returnObj[char]){
      returnObj[char] = 1
    }else{
      returnObj[char] +=1
    }
    // this can be simplified as: returnObj[char] = returnObj[char] + 1 || 1
  }
  return Object.keys(returnObj).reduce((a,b) => returnObj[a] > returnObj[b] ? a : b);
}

//  official solution:
//function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';
//
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//
//   return maxChar;
// }

module.exports = maxChar;
