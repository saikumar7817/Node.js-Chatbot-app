// Import the built-in 'http' module
const http = require('http');

// Define the port the server will listen on
const port = 7000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a status code of 200 (OK)
  // and a content type of plain text
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body "Hello World!"
  res.end('Hello World! im tap\n');
});

// Make the server listen on the specified port and all interfaces
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
