---
title: Functions Part 1
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  Another essential concept in coding is functions, which allow you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times. In this module we'll explore fundamental concepts behind functions such as basic syntax, how to invoke and define them, scope, and parameters.

  In JavaScript, you'll find functions everywhere. In fact, we've been using functions all the way through the course so far; we've just not been talking about them very much. Now is the time, however, for us to start talking about functions explicitly, and really exploring their syntax.

  Pretty much anytime you make use of a JavaScript structure that features a pair of parentheses — () — and you're not using a common built-in language structure like a for loop, while or do...while loop, or if...else statement, you are making use of a function.

  ---
  {{SGEN:MODULE:javascript/misc/quokka-extension.md}}
  ---

  > The examples and exercises in this repository all use () => {} (arrow functions), while many resources online cover function functions. Why? Because arrow functions are simpler to study in the debugger. That's all you need to know for now!

  <!-- SGEN:META:PROGRESS:task=Watch the 'JavaScript Functions In 90 Seconds' video -->
  - [Watch: **JavaScript Functions In 90 Seconds**](https://www.youtube.com/watch?v=UY182o4J5_Y){:target="_blank"}
    - **Duration:** 2min
    - **Level:** Beginner

  <!-- TODO: INTEGRATE  -->
  <!-- SGEN:META:PROGRESS:task=Watch the 'Function Basics' video -->
  - [Study: **Function Basics** @javascript.info](https://javascript.info/function-basics){:target="_blank"}
    - **Level:** Beginner

  Make sure to follow the guides on **Setting up Study Lenses (v2) on your System**. Once `lenses2` is properly installed on your system, you can go to your `WDX-180` folder and run `lenses2` with the material for this Module:

  - `cd WDX-180/`
  - `lenses2 curriculum/modules/javascript/denepo/_inside-js/3-functions/`

  You should focus and study the following modules (included within `3-functions/`):

  - **1-functions**
  - **2-documenting-functions**
  - **3-the-callstack**
  - **4-local-param-parent**

  ---

  **Programming Training Wheels**: Getting familiar with the return statement

  Every single function call in JavaScript will **always** return a value after its execution. 
  This is a very important concept that one must learn when starting to work with (and make sense) of functions.
  In order to get familiar with the return statement, we propose the following rule when defining a function:

  **Always include the `return undefined` statement as the first step.**
  
  For example:

  ```js
  function displayTable(){ 

    // Rest of the code will go here

    return undefined; // <= Get used to adding this statement right away, when defining a function

  }
  ```

  {{ SGEN:MODULE:curriculum/training-wheels/why-training-wheels.md }}

  As you move on to work on the rest of the function body, the return statement will act as a reminder that some kind of value (most probably, some value other than `undefined`) should be returned.

  There are a couple of reasons that you should start defining a function by placing a `return undefined` statement at the last line of the function body:

  - It will become a reminder that a function's main purpose is to run some code and return a value back to the line that `called` the function.

  ```js
  const randomNumber = Math.random(); // <= The function call will trigger the execution of some code, produce a random number and return that random number back to this line. After Math.random() has been replaced by a random number (during runtime), JavaScript will proceed to assign that value to the left hand side of the assignment operator and store the value to the `randomNumber` variable.
  ```

  - It will help you memorize the fact that even when a `return` statement has not been explicitly defined inside a function's body, JavaScript will always include an implicit `return undefined` statement, thereby returning the special `undefined` value in those cases. In other words, there's always a `return` statement and a returned value in a function, whether we can see that statement or not.

  - It will get you into the good habit of returning some kind of value from your functions. We start by returning the default `undefined` value at first, then consider a better option as we think carefully about the purpose of our function.

  - It will help you avoid bugs, such as forgetting to use a `return statement`, resulting in the default `undefined` popping up as an unintended value.

  - It will help you better understand and distinguish between `pure` and `impure` functions as you move on to study `functional programming` concepts.

  ![](./assets/KevlinHenneyUndefined.jpeg)

### Summary

### Exercises

  <!-- SGEN:META:PROGRESS:task=Complete the exercises found inside the '1-functions' module -->

  <!-- SGEN:META:PROGRESS:task=Complete the exercises found inside the '2-documenting-functions' module -->

  <!-- SGEN:META:PROGRESS:task=Complete the exercises found inside the '4-local-param-parent' module -->

### Extra Resources

  - [Function Basics @ The Coding Train](https://www.youtube.com/watch?v=wRHAitGzBrg){:target="_blank"}
  - [5.2: Function Parameters and Arguments @ The Coding Train](https://www.youtube.com/watch?v=zkc417YapfE){:target="_blank"}
  - [5.3: Functions and Return @ The Coding Train](https://www.youtube.com/watch?v=qRnUBiTJ66Y){:target="_blank"}

### Sources and Attributions