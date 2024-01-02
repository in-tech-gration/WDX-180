---
title: "ES6 Spread Syntax Practice"
---

# ES6 Spread Syntax Practice

  Here you can find a simple exercise in order to practice what you've learned about **ES6 Spread Syntax**!

  Below you will find boilerplate code in HTML, CSS and JavaScript. Copy each one in different files and start working towards the solution according to the task found inside the JavaScript code comments!

  <details markdown="1">
  <summary><h2>HTML</h2></summary>

  Copy the code below in a file called: `index.html`.

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>ES6 Spread Syntax Practice</title>
      <link rel="stylesheet" type="text/css" href="styles.css" />
    </head>
    <body>
      <div class="js"></div>
      <h1>Spread Syntax Practice</h1>
      <pre><code>Quick Reference:
      let a = [ 2, 3 ];
      let b = [ 1, ...a, 4]; // b === [ 1, 2, 3, 4 ]
      let clone = [ ...b ];
      </code></pre>
      <hr/>
      <a style="opacity:1;font-weight:600" href="https://codeburst.io/javascript-es6-the-spread-syntax-f5c35525f754" target="_blank">[ JavaScript ES6 — The Spread Syntax (…) ]</a>
      <br/>
      <div class="exercises"></div>
    </body>
    <script src="index.js"></script>
  </html>

  ```
  </details>

  <details markdown="1">
  <summary><h2>CSS</h2></summary>

  Copy the code below in a file called: `styles.css`.

  ```css
  body {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #f0dc27;
    color: #323330;
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
    font-weight:300;
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
    opacity:1;
  }
  code {
    font-size: 1.3rem;
    font-weight: 800;
    font-family: monospace;
  }
  .output {
    display: flex;
  }
  #demo, #firstname {
    background: #f0f0f0;
    padding: 10px 20px;
    border: 2px solid #666;
    cursor: pointer;
    margin-right: 10px;
  }
  .exercises {
    margin-top: 10px;
    display: flex;
  }
  .exercise {
    margin: 2px;
    padding: 10px 20px;
    background: white;
  }
  .exercise.success {
    background: limegreen;
    color: white;
  }

  ```
  </details>

  <details markdown="1">
  <summary><h2>JavaScript</h2></summary>

  Copy the code below in a file called: `index.js`.

  ```js
  //==============================//
  // DO NOT ALTER THIS CODE BELOW
  // MOVE TO THE EXERCISES DIRECTLY
  let exercises = {
    a: false,
    b: false,
    c: false,
  };

  Object.keys(exercises).map((num) => {
    let p = document.createElement("p");
    p.classList.add("exercise", "exercise_" + num);
    p.textContent = "Exercise " + num.toUpperCase();
    document.querySelector(".exercises").appendChild(p);
  });

  function check(expression, exercise) {
    if (expression) {
      document.querySelector(`.exercise_${exercise}`).classList.add("success");
      exercises[exercise] = true;
    }

    let total = Object.values(exercises).some((v) => !v);

    if (!total) {
      document.body.style.backgroundColor = "#46ac46";
    }
  }

  // Compare 2 Arrays
  function isIdentical(arr1, arr2) {
    // Is at least one element not the same as the
    // element of the other Array?
    let result = arr1.some((el, idx) => {
      return el !== arr2[idx];
    });
    return !result;
  }
  //==============================//
  // EXERCISE A: We want to 'spread' the `middle` Array elements
  // in the middle of `arr` Array:
  let final = [1, 2, 3, 4, 5, 6]; // <= This is what we want
  let middle = [3, 4];
  let arr = [1, 2, middle, 5, 6]; // <= We get: [1, 2, [3, 4], 5, 6] :(

  // We want: [1, 2, 3, 4, 5, 6]
  // arr = CODE HERE...
  check(isIdentical(arr, final), "a");

  //==============================//
  // EXERCISE B: Clone Array `abc` using the spread operator
  // and reverse the order of the elements making sure that the elements
  // of Array `abc` remain intact:
  let finalB = ["c", "b", "a"]; // <= This is what we want `clone` to be.

  let abc = ["a", "b", "c"];
  let clone = abc; // <= REPLACE THIS LINE
  clone.reverse(); // Now `abc` is [ 'c', 'b', 'a' ]. Not what we want!

  check(isIdentical(clone, finalB) && !isIdentical(clone, abc), "b");

  //==============================//
  // EXERCISE C: Math.max takes a number of comma separated arguments
  // and returns the biggest number. Use the spread syntax to get the
  // biggest number found in the values Array:
  let values = [2, 4, 8, 6, 0];
  // CHANGE THE FOLLOWING LINE:
  let max = Math.max(1, 2, 3, 4); // <= max is 4. It should be 8.

  check(max === 8, "c");

  ```
  </details>