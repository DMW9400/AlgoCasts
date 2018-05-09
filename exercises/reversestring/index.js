// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let returnStr = ""
  for (let i = 0; i < str.length; i++){
      returnStr += str[(str.length-1)-i]
  }
  return returnStr
}

// First official solution:
// function reverse(str){
  // const arr = str.split('')
  // arr.reverse()
  // arr.join()
  // return arr
  // OR, simpler:
  // return str.split('').reverse().join()
// }

// Second official solution:
// function reverse(str) {
//   let reversed = ''
//    for(let character of str){
//      reversed = character + reversed
//    }
//   return reversed
// }

// Third official solution:
// function reverse(str){
  // return str.split('').reduce((reversed,char)=> character + reversed, '')
// }


module.exports = reverse;
