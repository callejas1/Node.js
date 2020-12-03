/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
//create a server
const server = http.createServer((req, res) => {
  // YOUR CODE GOES IN HERE
  const route = req.url; // get requested url

  // file & contentType are retrieved depending on each case from req.url
  const readFiles = (file, contentType) => {
    fs.readFile(path.join(__dirname, '', file), (e, data) => {
      if (e) {
        throw e;
      } else {
        res.setHeader('Content-Type', contentType); // Send file header
        res.end(data);
      }
    });
  };
  // Change header and file to read depending on route
  switch (route) {
    case '/':
      readFiles('/index.html', 'text/html');
      break;
    case '/index.js':
      readFiles('index.js', 'text/javascript');
      break;
    case '/style.css':
      readFiles('style.css', 'text/css');
      break;
  }
});

const PORT = process.env.PORT || 3000; // will look for environment, if not it'll be 3000

server.listen(PORT, () => console.log(`Server running. Port: ${PORT}`)); // The server starts to listen on port 3000
