---
title: "Promise Refactoring"
---

## JavaScript Challenge:
# Promise Refactoring

  ![](./assets/computer.construction.png)

  Let's refactor a `Promise` function into an `async/await` syntax:

  <details markdown="1">
  <summary><h2>HTML</h2></summary>

  Copy the code below inside the `<body>` element of an HTML page and save it in a file called: `index.html`

  ```html
  <link rel="stylesheet" src="https://in-tech-gration.github.io/WDX-180/curriculum/assets/css/exercise.pack.css">
  <h1>Async/Await Exercise #2</h1>
  <pre><code>async function name ( arguments ){ 

    const await = asyncCommand(); 

  }
  </code></pre>
  <!-- TODO: ADD: EXERCISE PACK -->
  <script src="index.js"></script>
  ```
  </details>

  <details markdown="1">
  <summary><h2>JavaScript</h2></summary>

  Copy the code below in a file called: `index.js`

  ```js
  const users = "https://jsonplaceholder.typicode.com/users";
    
  function init(){

    return fetch( users )               // <= Fetch URL
    .then( ( result )=> result.json() ) // <= Convert result to JSON object
    .then( ( result )=>{                // <= Work with JSON object

      console.log( "1) Result using Promises:", result[0].name, result[0].email );
      
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
      console.log( "2) Result using async/await:", result[0].name, result[0].email );
    
      //>> 4) EXTRA: Enclose the `await` commands in a try { } catch(e) { }
      //>> for additional error handling. To check whether you are handling the error
      //>> correctly, change the URL to: "https://jsonplaceholder.typicooode.com/users"
      //>> or "https://jsonplaceholder.typicode.com" and see what types of errors you get.

  }

  asyncInit();
  ```
  </details>

---

**Questions, comments, suggestions? Please leave them on the comment section below.**

<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>