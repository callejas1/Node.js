/**
 * 1. Chuck Norris programs do not accept input
 *
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console.
 * Make use of `async/await` and `try/catch`
 *
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */
'use strict';
// node-fetch npm
const fetch = require('node-fetch');

async function printChuckNorrisJoke() {
  // YOUR CODE GOES IN HERE
  try {
    // added ?escape=javascript to escape the special chars in JS
    const fetchJoke = await fetch(
      'http://api.icndb.com/jokes/random?escape=javascript',
      {
        method: 'GET',
      },
    );
    const response = await fetchJoke.json();
    const joke = response.value.joke;
    console.log(joke);
  } catch (e) {
    console.error(e.message);
  }
}

printChuckNorrisJoke();
