/**
 ** Exercise 1: Pad numbers
 *
 * In this file use the padLeft function from padLeft.js to
 * pad the numbers to exactly 4 spaces and log them to the console
 *
 * Expected output (replace the underscore with spaces):
 *
 *  ___12;
 *  __846;
 *  ____2;
 *  _1236;
 *
 * Tips:
 *   where to use `exports` and where `require`?
 */

let numbers = ['12', '846', '2', '1236'];

// YOUR CODE GOES HERE
const padLeft = require('./padLeft'); // import function from padLeft.js

// Add space before each value until a total of 4 spaces are taken
numbers.forEach((value) => {
  const padded = padLeft(value, 4, ' ');
  console.log(padded);
});
