const express = require('express')
const app = express()
const port = 3000
const menu = require("./components/menu.js");
const home = require("./pages/home.js");

// Serve: http://localhost:3000/
// .get(PATH, (req,res)=>{}) => Handle an HTTP GET at URL Path / 
app.get('/', home);
// app.get('/gallery', gallery);
// app.get('/contact', contact);
// app.get('/about', about);

// HTTP GET /gallery
app.get("/gallery", (req, res) => {
  res.send(`
    ${menu}
    <h1>Gallery</h1>
    <h2>Browser through our photos</h2>
  `)
});

// HTTP GET /contact
app.get("/contact", (req, res) => {
  res.send(`
    ${menu}
    <h1>Contact</h1>
    <form action="/info">
      <label>
        <input name="comment" value="Nice website!" />
      </label>
      <label>
        <input name="country" value="Greece" />
      </label>
      <button>Send Comment</button>
    </form>
  `)
});

const countryDb = {
  greece: 9_875_512, // Greece, greece, GREECE
  ukraine: 39_600_000,
}

// HTTP GET /info
app.get("/info", (req, res) => {
  console.log(req.query);
  // Client: comment=Nice+website%21
  // Server => { comment: "Nice website!" } 
  // Client: comment=Nice+website%21&country=Greece
  // Server => { comment: "Nice website!", country: "Greece" }
  console.log(req.query.comment, req.query.country);
  const country = req.query.country.toLowerCase();
  const pop = countryDb[country];
  if ( typeof pop === "undefined" ){
    return res.send("Country not found in our DB");
  }
  res.send(`
    <style>html { color-scheme: dark; }</style>
    <h1>Country information for ${req.query.country}</h1>
    <p>The population is <strong>${pop}</strong></p>
    <p>The capital is <strong>...</strong></p>
    <p>The official language is <strong>...</strong></p>
  `);
})

// HTTP GET /about-us
app.get("/about-us", (req, res) => {
  res.send(`
    ${menu}
    <h1>About us</h1>
  `)
});

// HTTP POST /data (<form method="post" action="/data">)
app.post("/data", (req,res)=>{
  res.send("Submitted!");
})

// HTTP DELETE /data
app.delete("/data", (req,res)=>{})

// HTTP PUT /data
app.put("/data", (req,res)=>{})

// /photos/nature, /photos/animals/pets/
// Maybe pick the Router Express Module

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
