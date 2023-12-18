---
title: Async Recap & Practice  
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  **Welcome to Asynchronous programming!**

  ![](./assets/HUMOUR.Race.Condition.jpg){:style="width:100%"}

  **Programming Training Wheels**: Here are two suggestions that can help you work better with Promises and asynchronous functions:

  - 1) 👍 Remember to handle errors first: When working with a Promise-based function, using either the `await` or `.then()` syntax, **always** start with the error handling structure before moving on to do something with the rest of the code. In the case of the `then()` syntax, **always** start by typing in the `catch()` handler, then move on to type the `then()` handler:

  **Step 1**

  ```js
  fetch( URL )
  .catch( error => console.log(error) ); // <= ALWAYS start this way
  ```

  **Step 2**

  ```js
  fetch( URL )
  .then( response => /* Now we can start writing the code inside the then() */ )
  .catch( error => console.log(error) );
  ```

  In the case of the `await` syntax, you simple start by enclosing the code inside a `try/catch`:

  ```js
  try {
    const response = await fetch( URL );
  } catch( error ){ //<= ALWAYS start this way
    console.log( error );
  }
  ```

  - 2) 👍 Naming helps: Name all your async Promise-based functions using the `Async` suffix:

  ```js
  async function getDataFromFacebookAsync(){
    // ...
  }
  function collectUserDataAsync(){
    return new Promise(/* callback function here... */);
  }
  ```

  Having the `Async` suffix in your async function will help you remember to handle these functions using `await` or the `.then().catch()` syntax. Once you get familiar with asynchronous and Promise-based functions, you can get rid of this training wheels even though they will hurt nobody and can probably be of help to some beginner coders that will work on your code.

  This will help you avoid common beginners' errors such as trying to get the result of an async function without `await` or `then()`:

  ❌ Wrong:

  ```js
  const response = getDataFromFacebook( URL );
  ```

  ✅ Correct:

  ```js
  const response = await getDataFromFacebookAsync( URL );
  ```

  {{ SGEN:MODULE:curriculum/training-wheels/why-training-wheels.md }}

  ---

  Now, let's practice what we've learned so far with a few exercises:

  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'WaitForResult'|user_folder=wait_for_result -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'Async/Await: WaitForResult'|type=exist|user_folder=wait_for_result|files=index.html,styles.css,index.js -->
  - [**Async/Await exercise: WaitForResult**](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/async/async_await/exercises/wait_for_result/){:target="_blank"}

  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'Promise Refactoring'|user_folder=promise_refactoring -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'Promise Refactoring'|type=exist|user_folder=promise_refactoring|files=index.html,styles.css,index.js -->
  - [**Promise Refactoring**](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/async/async_await/exercises/promise_refactoring/){:target="_blank"}

  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'Wikipedia API'|user_folder=wikipedia_api -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'Wikipedia API'|type=exist|user_folder=wikipedia_api|files=index.html,styles.css,index.js -->
  - [**Wikipedia JSON API**](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/async/async_await/exercises/wikipedia/){:target="_blank"}

  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'Bitcoin Wallet API'|user_folder=bitcoin_wallet -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'Bitcoin Wallet API'|type=exist|user_folder=bitcoin_wallet|files=index.html,styles.css,index.js -->
  - [**Bitcoin Wallet**](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/web_apis/fetch/exercises/bitcoin-wallet/){:target="_blank"}


### Summary

### Exercises

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions