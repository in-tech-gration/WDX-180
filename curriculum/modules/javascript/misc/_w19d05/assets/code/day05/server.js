const http = require('node:http'); // There's a built-in Nodejs module called 'http' which deals with HTTP protocol

// localhost or 127.0.0.1
const hostname = '127.0.0.1'; // An IP (Internet Protocol) address, think your mobile phone number 6988123456
// const hostname = 'localhost';
const port = 3000; // There's a limit around 65k

// node --watch file.js
function handleConnection(request,response){
  console.log("Just got a request!!!", request.url); // Explore request properties

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html'); // application/pdf, audio/mp3
  response.setHeader('Cool-Header-Key', 'Wow!');
  response.end(
    `<html>
      <head><title>JS</title></head>
      <body>
        <!-- <h1>${Math.random()}</h1> -->
        <p>Could not found ${request.url} file.</p>
        <p>did you mean contact.html?</p>
      </body>
      <script>console.log("Hey!")</script>
    </html>`
  );
}
// handleConnection({...},{...});
function serverListen(){
  console.log(`Server running at http://${hostname}:${port}/`);
}

// The createServer() chicken lays server eggs
// The server is ready, but turned off
const server = http.createServer(handleConnection); // arg typeof === "function"
// ...we turn the server on using the listen()
server.listen(port, hostname, serverListen);