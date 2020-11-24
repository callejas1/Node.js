/**
 ** Exercise 2: To the left, to the left...
 *
 * Copy and paste your code from the previous exercise.
 * Replace the function `padLeft` to use
 * this new NPM package called `left-pad` instead then
 * Pad the numbers to 8 characters to confirm that it works correctly
 *
 */

let numbers = ['12', '846', '2', '1236'];

// YOUR CODE GOES HERE
const leftPad = require('left-pad'); // import from npm

// Add space to pad numbers for a total of 8 characters
numbers.forEach((val) => {
  const paddedLeft = leftPad(val, 8, ' ');
  console.log(paddedLeft);
});
