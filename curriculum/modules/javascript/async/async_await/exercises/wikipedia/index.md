---
title: Wikipedia API Practice
---

# Let's experiment with the Wikipedia JSON API

  Follow the instructions found in the `index.js` file to solve this exercise:

  <details markdown="1">
  <summary><h2>HTML</h2></summary>

  Copy the code below in the `<body>` tag inside an HTML file called: `index.html`

  ```html
  <div class="js"></div>
  <!-- MAIN CONTENT -->
  ```
  </details>

  <details markdown="1">
  <summary><h2>CSS</h2></summary>

  Copy the code below in a file called: `styles.css`

  ```css
  .hidden {
    display: none;
  }
  body {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    background: #f0dc27;
    color: #323330;
  }
  button {
    padding: 10px 40px;
    font-size: 1em;
  }
  .js:before{
    z-index:-1;
    background: black;
    content: "";
    display: block;
    position: absolute;
    transform: rotate(45deg);
    top:0;
    left:0;
    width: 100%;
    height:100%;
  }
  .js {
    width:200px;
    height:200px;
    color: white;
    top:-100px;
    left:-100px;
    position: fixed;
    z-index:10;
    font-size:2em;
  }
  .js:after{
    content: "JS";
    position:absolute;
    bottom:45px;
    right:45px;
    font-weight:100;
  }

  ```
  </details>

  <details markdown="1">
  <summary><h2>JavaScript</h2></summary>

  Copy the code below in a file called: `index.js`

  ```js
  function fetchBookByAuthor(author){
    
    const URL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + encodeURIComponent( author ); 
    // READ MORE ABOUT "encodeURIComponent": https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp
    
    return fetch(URL)
    .then(function(res){ return res.json(); });
    
  };

  fetchBookByAuthor("Herman Melville")
  .then( data =>{
    // TODO: Display data in the page...
  })
  .catch( error =>{
    console.log(error);
  })

  // EXERCISE 1: Display the results in the page
  // EXERCISE 2: Refactor the fetchBookByAuthor function using async/await
  // EXERCISE 3: Create a fetchBookByTitle function using async/await and test it with fetchBookByTitle("Moby Dick");
  // EXERCISE 4: Display the Book contents in the page

  ```
  </details>