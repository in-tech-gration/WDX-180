---
title: "Async/Await exercise: WaitForResult"
---

# Async/Await exercise: WaitForResult

  Here you can find a simple exercise in order to practice what you've learned about the keywords **async**, **await** and how to handle asynchronous behavior in JavaScript using them!

  Below you will find boilerplate code in HTML, CSS and JavaScript. Copy each one in different files and start working towards the solution according to the task found inside the JavaScript code comments!

  <details markdown="1">
  <summary><h2>HTML</h2></summary>

  Copy the code below in a file called: `index.html`

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>JS Async Exercise: Wait for Result</title>
      <link rel="stylesheet" type="text/css" href="styles.css" />
    </head>
    <body>
      <div class="js"></div>
      <h1>JS Async</h1>
      <p>Reference:</p>
      <pre>
        <code>
          async function name ( arguments ){ 

            const await = asyncCommand(); 

          }
        </code>
      </pre>
      <p>Hint: Open the index.js file</p>
    </body>
    <script src="index.js"></script>
  </html>
  ```
  </details>

  <details markdown="1">
  <summary><h2>CSS</h2></summary>

  Copy the code below in a file called: `styles.css`

  ```css
  * {
  font-family: "Roboto", sans-serif;
    transition: all 600ms ease;
  }
  body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #f0dc27;
    color: #323330;
  }
  .js:before {
    z-index: -1;
    background: black;
    content: "";
    display: block;
    position: absolute;
    transform: rotate(45deg);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .js {
    width: 200px;
    height: 200px;
    color: white;
    top: -100px;
    left: -100px;
    position: fixed;
    z-index: 10;
    font-size: 2em;
  }
  .js:after {
    content: "JS";
    position: absolute;
    bottom: 45px;
    right: 45px;
    font-weight: 300;
  }
  h1 {
    padding: 20px 20px 20px 40px;
    border-bottom-left-radius: 64px;
    border: 8px dashed white;
  }
  a {
    text-decoration: none;
    color: black;
    opacity: 0.5;
    transition: all 500ms ease;
  }
  a:hover {
    opacity: 1;
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
  function waitForResult(value, ms) {
    ms = ms || 1000;
    console.log("waiting for result...");
    return new Promise(function (resolve, reject) {
      function display() {
        resolve(value);
      }
      setTimeout(display, ms);
    });
  }

  /* waitForResult() is a promise-based asynchronous function
    which accepts one value as an argument and returns it after 1 second. 
  */

  waitForResult(1)
    .then(function (result) {
      console.log(result);
      return waitForResult(2);
    })
    .then(function (result) {
      console.log(result);
      return waitForResult(3);
    })
    .then(function (result) {
      console.log(result);
      return waitForResult(4);
    })
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });

  /* EXERCISE: Convert the above code to an async function which uses 
    the await keyword to wait for the result of each call to waitForResult().
    You should see the same result as the above code after calling the async function:
    1, 2, 3, 4
    Be sure to comment the above code before continuing. 
  */

  ```
  </details>