---
title: Week 19 | Introduction to Node.js
---

<hr class="mb-0">

<h1 id="{{ Week 19-Introduction to Node.js | slugify }}">
  <span class="week-prefix">Week 19 |</span> Introduction to Node.js
</h1>

<img src="assets/Intro.to.Node.jpg" />

<div class="week-controls">

  {% assign week_num = 19 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 19 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 24/2/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 19 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 19 - Day 1 | Introduction to Node.js -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 19 - Day 1</span> | Introduction to Node.js</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. 

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week19/assets/code/day01){:target="_blank"}

  You can find the slides [here](https://learn.js.org/learn/nodejs/introduction.html#/){:target="_blank"}

  **Lecture Notes**

  - **Node.js vs Browser Environment**: The lecture highlights the differences between running JavaScript code in Node.js and a browser environment.
  
  - **Window and Global Objects**: The instructor explains how to use the `window` and `global` objects to distinguish between Node.js and browser environments.
  
  - **Type of Operator**: The lecture covers how the `type of` operator returns a string, and it's always lowercase, so you should compare with a lowercase string.
  
  - **Runkit Environment**: The instructor shows how to use the Runkit environment to test JavaScript code online and see the output in a nice HTML format.
  
  - **npm Packages**: The lecture touches on npm packages and how some can be run on both Node.js and browser environments, while others are specific to one or the other.

  - Use `window` to check if you're in a browser environment

  - Use `global` to check if you're in a Node.js environment

  - Be careful when comparing strings with the `type of` operator, as it always returns a lowercase string.

  - Some npm packages can be run on both Node.js and browser environments.

  - **window.document === document**  

  - **Ctrl+L** => Clear the console (both Node+Browser)  

  - When converting bytes to megabytes or gigabytes, use 1024 instead of 1000 to avoid incorrect conversions.
  
  - Use the `process.argv` array to access command-line arguments in Node.js.
  
  - Be careful when using the `fs` module, as it can delete files on your system.

  **Code Snippets:**

  - **Checking the runtime environment:**

  ```js
  if ( typeof window === "undefined" ){ // switch to global  
    console.log("Should be run in the Browser");  
  }  
  ```

  ```js
  // Only runs in Node:  
  try {  
    global; // switch to windows for code that runs in the browser  
    console.log("Hello World!", 5 * 2 );  
  } catch(error){  
    console.log( "Sorry, only runs in Node");  
  }
  ```

  **References & Resources:**

  - [**Introduction to Node.js with Ryan Dahl**](https://www.youtube.com/watch?v=jo_B4LTHi3I){:target="_blank"}  
  - [**Node.js at PayPal**](https://medium.com/paypal-tech/node-js-at-paypal-4e2d1d08ce4f){:target="_blank"}  
  - [**https://www.npmjs.com**](https://www.npmjs.com/){:target="_blank"}

  - Run Node.js as a Service  
    - [Runkit](https://runkit.com/home){:target="_blank"}  
    - [Replit](https://replit.com/templates){:target="_blank"}  

  - *“Node. js versions get an even number, like 16.14. 0, while Current releases have an odd version number, like 17.5. 0”*  
  - [Node.js endoflife timeline](https://endoflife.date/nodejs){:target="_blank"}  

  - [**globalThis**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis){:target="_blank"} **& [Global Object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object){:target="_blank"}**  
  
  - [**What is a REPL?**](https://www.digitalocean.com/community/tutorials/what-is-repl){:target="_blank"}  
  
  - [**Node.js Docs**](https://nodejs.org/api/documentation.html){:target="_blank"}  
  
  - [**MDN: Introduction to the server side**](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction){:target="_blank"}

  - Free `Nodejs` hosting  
    - [https://fly.io/](https://fly.io/){:target="_blank"}  
    - [https://render.com/](https://render.com/){:target="_blank"}  
    - [https://azure.microsoft.com/en-us/free/nodejs](https://azure.microsoft.com/en-us/){:target="_blank"}  
    - [https://aws.amazon.com/getting-started/projects/deploy-nodejs-web-app/services-costs/](https://aws.amazon.com/getting-started/projects/deploy-nodejs-web-app/services-costs/){:target="_blank"}  

  - [Nodejs Builtin Modules](https://www.w3schools.com/nodejs/ref_modules.asp){:target="_blank"}  
    - [os](https://www.w3schools.com/nodejs/ref_os.asp){:target="_blank"}

### Summary

  The first part of the lecture discusses the differences between running JavaScript code in a Node.js environment versus a browser environment. The instructor explains how to distinguish between these two environments using the `window` and `global` objects, and how to write code that is compatible with both.

  The second part of the lecture covers various aspects of Node.js programming, including system interactions using the `os` module, process management, and file operations:

  - **Using the `os` module**: The lecturer demonstrates how to use the `os` module to get information about the system, such as total and free memory. They also show how to convert bytes to megabytes or gigabytes.
  
  - **Process management**: The lecturer introduces the concept of process management in Node.js, showing how to access command-line arguments through the `process.argv` array.

  - **System interactions**: Using the `os` module to get information about the system, such as memory usage.

  - **Process management**: Accessing command-line arguments and managing processes in Node.js.

  - **File operations**: (Not covered in detail) Using the `fs` module for file system interactions.

### Exercises

  - Explore the features of Nodejs (modules, REPL, etc.)  

  - Complete the tasks found in the comments of the lecture code (search for the `TODO` keyword).

  - Install [https://github.com/workshopper/learnyounode](https://github.com/workshopper/learnyounode){:target="_blank"} and complete the first 2 exercises (HELLO WORLD, BABY STEPS)  
    - [**Guide**](https://www.youtube.com/watch?v=z_HHcw85Nhs){:target="_blank"}  

  - Other tasks that you should practice on:  
    - Create an app that shows your systems total and free memory  
    - Create an app that accepts 2 numbers and adds them together  
    - Create an app that accepts 2 numbers and a command (add/sub/mul/div) and accordingly adds, subtracts, multiplies or divides those numbers. Make sure to move all the math operations in a separate module.  
    - Create an app that shows the time, e.g. node time.js

  **Note:** Prefer GitBash in Windows for running node and other CLI tools

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week19/progress/progress.draft.w19.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 19 - Day 2 | Node.JS Practice -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 19 - Day 2</span> | Node.JS Practice</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  - Watch (or re-watch) yesterday's lecture 
  - Complete all the coding challenges and exercises from Day 01

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 19 - Day 3 | The FileSystem (fs) Module -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 19 - Day 3</span> | The FileSystem (fs) Module</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  1. **Continue studying** the Node.js introductory presentation from where we left off during our last lecture: The `fs` module: [https://learn.js.org/learn/nodejs/introduction.html#/15](https://learn.js.org/learn/nodejs/introduction.html#/15){:target="_blank"}

  2. Make sure to read and practice **building a basic web server** using Node.js according to the [official document](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs#an-example-nodejs-application)_blank.

  3. **Install [https://github.com/workshopper/learnyounode](https://github.com/workshopper/learnyounode)** *(if you haven’t done it already)* **and complete exercises 3, 4 and 5 (MY FIRST I/O, MY FIRST ASYNC I/O, FILTERED LS)**

<!-- Summary -->

### Exercises

  - **Create a Nodejs app that displays a list of programming languages along with information about them (creator(s), date of birth, etc.)**  
    - `node lang.js` => be creative with the output 🙂

  - **Create a Todo App using Nodejs:**  
    - You should be able to run the app from the command line:  
      - *node todo.js “Buy milk”*  
      - *node todo.js “Go to the gym”*  
    - The app should then store the Task (“Buy milk”) along with the date in a JSON file (todo.json)  
    - When you run *node todo.js* (without any arguments) you should get a list of the todo tasks that are stored in the JSON file

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week19/progress/progress.draft.w19.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 19 - Day 4 | Node.JS Practice -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 19 - Day 4</span> | Node.JS Practice</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  [![](./assets/learnyounode.png)](){:target="_blank"}

  It's time to continue practicing your `Node.js` skills using `learnyounode`.

  Make sure that you have the package installed, up and running via `learnyounode` in the terminal. We suggest that you complete the following 4 steps:

  - My first I/O
  - My first async I/O
  - Filtered LS
  - Make it Modular

  ![](./assets/learnyounode.exercises.jpg)

  Today, we also suggest to focus on the `fs` module and practice what you've learned yesterday.

  Questions? Cool things that you've learned? Post them on Slack or in the comments section below.

  Above all, enjoy!

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  Have some extra time and energy to devote on JavaScript?

  You can try completing a challenge from here: [https://javascript30.com/](https://javascript30.com/){:target="_blank"}

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 19 - Day 5 | The HTTP Module -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 19 - Day 5</span> | The HTTP Module</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Node.js Modules, exploring the `fs` module and the MAKE IT MODULE exercise from [learnyounode](https://github.com/workshopper/learnyounode){:target="_blank"} (90min)

  - **Part 2:** Node.js, the HTTP module, `localhost` and creating a web server (120min)

  You can find the lecture diagrams and code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week19/assets/day05){:target="_blank"}

  **Study and practice:**

  - [**Basic NodeJS web server**](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs){:target="_blank"}  
  - **Solve the rest of the learnyounode exercises**  
    - [**Node.js fs.readdir() Method**](https://www.geeksforgeeks.org/node-js-fs-readdir-method/){:target="_blank"}  
  - **Web server:**  
    - **Check what the request.path is all about?**  
    - **require the path module and try again?**  
  - **Exercise:**  
    - Require the os module  
    - Or (simpler) get the total and free memory   
    - run the cpus() method to get info about your computer’s CPUs  
    - Create an HTML page that displays the memory/CPU info and response.end()  
    - inspiration: [CPU info page](https://codepen.io/leonalkalai/pen/bGZyzZe?editors=0010){:target="_blank"}

  **References & Resources:**

  - **I/O => Input/Output**  
  - [**typeof Operator**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof){:target="_blank"} **(unary)**  
  - **Operators: unary, binary, ternary**  
    - **unary: OPERATOR operates on a single value (OPERAND) typeof VALUE**  
    - **binary: OPERATOR operates on two values (OPERANDS) value + value**  
    - **ternary: OPERATOR operates on three values (OPERANDS) value ? value1 : value2**  
  - **VSCode:** *(for Mac, Ctrl => Cmd)*  
    - **CTRL + SHIFT + L # to select all at once**  
    - **CTRL + D			   # to select one by one**  
  - **2 ways of importing and exporting Modules in Nodejs**  
    - module.exports + required() (CommonJS => NodeJS)  
    - export + import (ES Modules, ESM => Browser)  
    - These days, both the Browser and Nodejs decided to use the ESM  
  - **Error-first Callback (the idiomatic convention)**  
    - [**Error-First Callback in Node.js**](https://www.geeksforgeeks.org/error-first-callback-in-node-js/){:target="_blank"}  
    - [***Why does node prefer error-first callback?***](https://stackoverflow.com/questions/40511513/why-does-node-prefer-error-first-callback){:target="_blank"}  
  - **Node.js HTTP server:**  
    - The **request** object (1st parameter) is all about the information coming from the Browser (web client) (request.url, etc.)  
    - The **response** object (2nd parameter) is all about the response the server is about to send back to the client (FE)  
  - [HTTP Status Codes](https://www.webfx.com/web-development/glossary/http-status-codes/){:target="_blank"}  
  - The technical term for **'text/html'** is MIME type  
  - **Treat the request object as a READ-ONLY value**

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!



---

<!-- COMMENTS: -->
<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>