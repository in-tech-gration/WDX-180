// Node.js program to demonstrate the
// request.path property
 
// Importing http module
const http = require('http');
 
// Setting up PORT
const PORT = process.env.PORT || 3000;
 
// Creating http Server
const httpServer = http.createServer(
    function (request, response) {
 
        // Getting request path
        // by using request.path
        const value = request.path;
        console.log("Request URL: ", request.url)
 
        // Display result
        response.end("request path : " + value, 'utf8', () => {
            console.log("displaying the result...");
 
            httpServer.close(() => {
                console.log("server is closed")
            })
        });
    });
 
// Listening to http Server
httpServer.listen(PORT, () => {
    console.log("Server is running at port 3000...");
});