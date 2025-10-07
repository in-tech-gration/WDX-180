const http = require('node:http');
const fs = require("node:fs");
const url = require('node:url');
const querystring = require('node:querystring');
const hostname = '127.0.0.1';
const port = 3000;

// TASK: Explore
function convertURLtoFilename( URL ){
  // Be careful: extremely messy code
  const splitURL = URL.split("/show?"); 
  const keyValues = splitURL[1].split("&")
  const firstKV = keyValues[0].split("=");
  const fileName = firstKV[1].replace("%20","_") + ".json"; 
  const fileContents = fs.readFileSync(fileName, "utf-8");
  return fileContents;
}

function handleRequest(request, response){

  console.log(request.url);
  // Parse the request URL
  const parsedUrl = url.parse(request.url, true);
  // Get the query string
  const queryString = parsedUrl.query;
  // console.log(queryString.q, queryString.lang);

  // Accessing the 'q' parameter
  // const searchTerm = queryString.q;

  // TASK #X: get this object from the query string
  // { q: "breaking%20bad", lang: "en "}

  // console.log(request.url); // /dog.jpg, /index.html, /cat.jpg
  // breaking%20bad => breaking_bad => breaking_bad.json => fs.readFileSync("breaking_bad.json");
  // /show?q=got&key=value&another=22&lang=en
  // const json = convertURLtoFilename(request.url);
  // console.log(json);

  // const q = querystring.parse(request.url);
  // console.log(q);

  // ROUTES:

  // Serve a single image file: cat.jpg
  if ( request.url === "/cat.jpg" ){

    response.statusCode = 200;
    response.setHeader('Content-Type', 'image/jpeg');
    // Load the image file
    const img = fs.readFileSync("./cat.jpg");
    // Send it to the client:
    response.end(img);
    return undefined;
  } 

  // Server a TV Show info JSON: breaking+bad, got
  // /show?q=breaking%20bad
  if ( request.url === "/show?q=breaking%20bad" ){
    const bbInfo = {
      premiered: 2008,
      img: "https://static.tvmaze.com/uploads/images/original_untouched/501/1253519.jpg"
    }
    // Serve a BB JSON
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    // Close the response
    // console.log( typeof bbInfo );
    return response.end(JSON.stringify(bbInfo));
  }
  // TASK #1: Make this work also:
  // TASK #2: Combine all JSON requests in a single if?
  if ( request.url === "/show?q=game%20of%20thrones" ){
    const gotInfo = {}
    // TASK #3: Instead of hardcoding a show JSON, create a .json
    // file (e.g. breaking_bad.json), load (fs) and serve that file.

    // Serve a GOT JSON
    // Close the response
  }

  // Route for /contact.html or / or ""
  if ( request.url === "/contact.html" || request.url === "/" ){
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    // TASK #Y: Remove the name="email" attribute and check what happens in the request?
    // TASK: Add more data to the form that gets sent to the server, e.g. password
    // TASK: Build a basic login form (email+password), check against a list of valid emails and passwords, and display different user pages.
    response.end(`
      <html>
        <head><title>Contact</title></head>
        <body>
          <h1>Contact Form</h1>
          <form action="process_form">
            <label for="email">Email</label>
            <input id="email" name="email" placeholder="Enter your email here..." />
            <button>Login</button>
          </form>
        </body>
      </html>
    `);
    // Browser submits: /process_form?email=kostas%40gmail.com
    return;
  }

  // Route for processing form data:
  if ( request.url.startsWith("/process_form") ){

    console.log("We are processing a form...", queryString.email);

    if ( queryString.email === "admin@gmail.com" ){
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      return response.end("Welcome " + queryString.email + "!");
    } 
    response.statusCode = 401;
    response.setHeader("Content-Type", "text/html");
    return response.end("<h1>Get lost!</h1>");

  }

  // Server a 404 on all other cases:
  response.statusCode = 404;
  response.setHeader('Content-Type', 'text/html');
  response.end(`<div>404: File not found</div>`);

}

const server = http.createServer(handleRequest);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});