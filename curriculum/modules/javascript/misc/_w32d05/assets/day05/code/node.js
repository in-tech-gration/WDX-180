const http = require('node:http');
const fs = require('node:fs');
const PORT = 3000;
// Use the import to get closer to the browser

// On every request, we run this function
function processRequest( req, res ){
  // req contains: HTTP query, headers, (POST) body
  // Incoming data => req(uest)
  // Outgoing data => res(ponse)

  // CHUNKS in 1KB
  // 1) email="kostas@gmail.com" => trigger a 'data' event => callback()
  // 2) ... Kostas => trigger a 'data' event => callback()
  // 3) ...Minaidis => trigger a 'data' event => callback()
  if ( req.method === "GET" ){
    // Serve an HTML page with a simple form
  }

  if (req.method === 'POST') {
    // Handle streaming data here
    let data = '';

    // Beginning: data === ''
    // Chunk 1 processed through the callback:
    // data === 'kostas@gmail.com'
    // Chunk 2
    // data === 'kostas@gmail.com Kostas'
    // Chunk 3
    // data === 'kostas@gmail.com Kostas Minaidis'

    function handleChunkOfData( chunkOfData ){
      // do something with this chunkOfData
      // if ( chunkOfData is type video ){ blur chunkOfData }
      data += chunkOfData;
      console.log('Received chunk:', chunkOfData.toString());
    }

    // req.addEventListener("data", callback) // PSEUDO
    req.on('data', handleChunkOfData);
    // req.on('end', handleEndOfIncomingData);
    // req.on('error', handleReqError);
  
    // req.addEventListener("end", callback) // PSEUDO
    req.on('end', () => {
      console.log('Data received completely.', data); 
      // data === 'kostas@gmail.com Kostas Minaidis'
      // Process the complete data
      // Save data to a database
      // Parse the data as JSON
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end("Data received and saved to the database");
    });

    // req.addEventListener("error", callback) // PSEUDO
    req.on('error', (err) => {
      console.error('Request error', err);
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Bad Request');
    });
  
  } else {
  
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  
  }

}

// server.addEventListener("incoming-request", processRequest); // PSEUDO CODE just to make a point
const server = http.createServer(processRequest);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
