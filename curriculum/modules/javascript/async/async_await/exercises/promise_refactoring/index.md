---
title: "Promise Refactoring"
---

# Promise Refactoring

  Let's refactor a `Promise` function into an `async/await` syntax:

  <details markdown="1">
  <summary><h2>HTML</h2></summary>

  Copy the code below inside the `<body>` element of an HTML page and save it in a file called: `index.html`

  ```html
  <div class="js"></div>
  <h1>Async/Await Exercise #2</h1>
  <pre><code>async function name ( arguments ){ 

    const await = asyncCommand(); 

  }
  </code></pre>
  ```
  </details>

  <details markdown="1">
  <summary><h2>CSS</h2></summary>

  Copy the code below in a file called: `styles.css`

  ```css
  body {
    width: 100%;
    height: 100vh;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0dc27;
    color: #323330;
    transition: all 6000ms ease;
  }
  h1 {
    padding: 20px 20px 20px 40px;
    border-bottom-left-radius: 64px;
    border: 8px dashed white;
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
  code {
    font-size: 1.3rem;
    font-weight: 800;
    font-family: monospace;
  }
  ```
  </details>

  <details markdown="1">
  <summary><h2>JavaScript</h2></summary>

  Copy the code below in a file called: `index.js`

  ```js
  const facebookURL = "https://api.github.com/users/facebook/repos?page=1&per_page=1";
    
  function init(){

    return fetch( facebookURL )         // <= Fetch URL
    .then( ( result )=> result.json() ) // <= Convert result to JSON object
    .then( ( result )=>{                // <= Work with JSON object

      console.log( result[0].description, result[0].full_name );
      
    }).catch(console.log);

  }

  init();

  /* EXERCISE: REFACTOR THE init FUNCTION TO USE async/await: */
  async function asyncInit(){

      //>> 1) The `result` variable should `await` for the fetch()
      let result = ______;  

      //>> 2) The `result` variable should now `await` for the result of the json() 
      //>> method of previously executed `result`
      result = ______;

      //>> 3) You should see the same result as the first console.log from `init()`
      console.log( result[0].description, result[0].full_name );
    
      //>> 4) EXTRA: Enclose the `await` commands in a try { } catch(e) { }
      //>> for additional error handling. To check whether you are handling the error
      //>> correctly, change the URL to: "https://api.githoob.com/users/facebook/repos?page=1&per_page=1"
      //>> or "https://github.com" and see what types of errors you get.

  }

  asyncInit();
  ```
  </details>