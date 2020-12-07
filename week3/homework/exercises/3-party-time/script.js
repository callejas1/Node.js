/**
 * 3: Party time
 *
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

const fetch = require('node-fetch');

async function makeReservation() {
  // YOUR CODE GOES IN HERE
  try {
    // Send info to make reservation
    const body = { name: 'Yoselyn Callejas', numberOfPeople: 2 };

    const sendReservation = await fetch(
      'https://reservation100-sandbox.mxapps.io/api/reservations',
      {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    const response = await sendReservation.json();
    console.log(response); // message: 'Dear Yoselyn Callejas Your reservation for 2 has been registered. We look forward to seeing you at the party!'
  } catch (e) {
    console.error(e.message);
  }
}

makeReservation();
