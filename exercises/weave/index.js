// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alternating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {

  let weaveQueue = new Queue ()

  while (sourceOne.peek() || sourceTwo.peek()){
    sourceOne.peek() ? weaveQueue.add(sourceOne.remove()
    sourceTwo.peek() ? weaveQueue.add(sourceTwo.remove()
  }

  return weaveQueue
}
//
// function weave(sourceOne, sourceTwo) {
//
//   let weaveQueue = new Queue ()
//
//   let counter = 0
//
//   while (sourceOne.peek() || sourceTwo.peek()){
//     if (counter % 2 === 0 && sourceOne.peek()){
//       weaveQueue.add(sourceOne.remove())
//     } else if (counter % 2 !== 0 && sourceTwo.peek()){
//       weaveQueue.add(sourceTwo.remove())
//     }
//     counter++
//   }
//
//   return weaveQueue
// }

// This counter was NOT NECESSARY - because arrays in JS are FIFO (first in, first out) and the code runs from
// top to bottom, I could have just written:



module.exports = weave;
