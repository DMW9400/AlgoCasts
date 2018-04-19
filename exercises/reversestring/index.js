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

module.exports = reverse;
