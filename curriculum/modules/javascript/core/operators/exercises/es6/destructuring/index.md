---
title: "ES6 Destructuring Practice"
---

# ES6 Destructuring Practice

  Here you can find a simple exercise in order to practice what you've learned about **destructuring with ES6**!

  Below you will find boilerplate code in HTML, CSS and JavaScript. Copy each one in different files and start working towards the solution according to the task found inside the JavaScript code comments!

  <details markdown="1">
  <summary><h2>HTML</h2></summary>

  Copy the code below in a file called: `index.html`.

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>ES6 Destructuring Practice</title>
      <link rel="stylesheet" type="text/css" href="styles.css" />
    </head>
    <body>
      <div class="js"></div>
      <h1>ES6 Destructuring Practice</h1>
      <pre><code>Quick Reference:

  let obj = { a: 1, b: 2 };
  let { a, b } = obj; // a === 1, b === 2
  let { a:one, b:two } = obj; // one === 1, two === 2

  let arr = [ 1, 2 ];
  let [ first, last ] = arr; // first === 1, last === 2
  </code></pre>
      <hr />

      <a
        style="opacity: 1; font-weight: 600"
        href="https://rangle-io.gitbooks.io/react-training/content/book/es6_constructs/destructuring.html"
        target="_blank"
        >[ Destructuring Reference ]</a
      >
      <br />
      <a
        style="opacity: 1; font-weight: 600"
        href="https://wesbos.com/destructuring-objects/"
        target="_blank"
        >[ A Dead Simple intro to Destructuring JavaScript Objects ]</a
      >
      <br />
      <div class="exercises"></div>
      <br />
      <a
        target="_blank"
        href="http://frontend.turing.io/lessons/module-3/es6-destructuring.html"
        >[ Exercises by Turing School of Software and Design ]</a
      >
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
  .output {
    display: flex;
  }
  #demo,
  #firstname {
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
  //==============================//
  // EXERCISE A: Variable Swapping
  // Given two variables, swap their values in one line of code.

  let thing1 = "apple";
  let thing2 = "banana";

  check(thing1 === "banana" && thing2 === "apple", "a");

  //==============================//
  // EXERCISE B: Assigning New Variable Names to Object Keys
  // Given an object, in one line, assign variables to the values
  // of the object using different names than the keys already in the object.
  let object = { name: "elvis", title: "hip swinger" };

  check(person === "elvis" && job === "hip swinger", "b");

  //==============================//
  // EXERCISE C: Object Matching
  // Given an object, write one line of code that assigns variables to the keys.

  let object2 = { user: "brenna", id: 1, date: "monday", module: 3 };

  check(user === "brenna" && id === 1 && date === "monday" && module === 3, "c");

  ```
  </details>