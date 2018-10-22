// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    return n.toString()[0] === '-' ? parseInt(`-${n.toString().substr(1,n.length).split('').reverse().join('')}`) :     parseInt(n.toString().split('').reverse().join(''))
    
}


// Official solution - keep in mind Math.sign returns 1 for positive numbers, -1 for negative numbers
// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//
//   return parseInt(reversed) * Math.sign(n);
// }



module.exports = reverseInt;
