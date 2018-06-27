// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  let aObj = {}
  let bObj = {}


  let aArr = stringA.replace(/[^\w]/g,"").toLowerCase().split('')
  let bArr = stringB.replace(/[^\w]/g,"").toLowerCase().split('')

  function genObj(str,obj){
    for (let char of str){
      if(!obj[char] && char !== ' '){
        obj[char] = 1
      }else{
        obj[char]++
      }
    }
  }

  function getCount(keys,obj){
    let returnArr = []
    for(let char of keys){
      returnArr.push(obj[char])
    }
    return returnArr
  }

  genObj(aArr,aObj)
  genObj(bArr,bObj)

  let aKeys = Object.keys(aObj).sort()
  let bKeys = Object.keys(bObj).sort()

  let aCount = getCount(aKeys,aObj)
  let bCount = getCount(bKeys,bObj)

  if(aKeys.join() === bKeys.join() && aCount.join() == bCount.join()){
    return true
  }else{
    return false
  }

}
// Preferred solution:
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }
//
// function cleanString(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }

// First official solution:
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }

module.exports = anagrams;
