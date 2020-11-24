/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
//create a server
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, '', 'index.html'), (err, data) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' }); // Sends index.html as a response back to the client
        res.end(data); // Ends the response
      }
    });
  } else if (req.url === '/index.js') {
    fs.readFile(path.join(__dirname, '', 'index.js'), (error, content) => {
      if (error) {
        throw error;
      } else {
        res.setHeader('Content-Type', 'text/javascript'); // Send js file
        res.end(content); // Ends the response
      }
    });
  } else if (req.url === '/style.css') {
    fs.readFile(path.join(__dirname, '', 'style.css'), (e, style) => {
      if (e) {
        throw e;
      } else {
        res.setHeader('Content-Type', 'text/css'); // Send style.css
        res.end(style); // Ends the response
      }
    });
  }
});

const PORT = process.env.PORT || 3000; // will look for environment, if not it'll be 3000

server.listen(PORT, () => console.log(`Server running. Port: ${PORT}`)); // The server starts to listen on port 3000
