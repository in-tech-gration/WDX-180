---
title: Week 11 | Web APIs 2: Asynchronous Programming - Promises - JSON - Fetch API
---

<hr class="mb-0">

<h1 id="{{ Week 11-Web APIs 2: Asynchronous Programming - Promises - JSON - Fetch API | slugify }}">
  <span class="week-prefix">Week 11 |</span> Web APIs 2: Asynchronous Programming - Promises - JSON - Fetch API
</h1>

<img src="assets/pexels-roman-odintsov-12725452.jpg" />

<div class="week-controls">

  {% assign week_num = 11 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 11 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 9/6/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 11 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 11 - Day 1 | Introduction to JSON -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 11 - Day 1</span> | Introduction to JSON</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  > How to become a better programmer? 
  > _"**Fail as fast as you can and as often as you can.**"_ ~ [Scott Hanselman](https://www.hanselman.com/){:target="_blank"}



  ---



  ![](./assets/douglas.crockford.discoverer.of.JSON.png)

  - Read [**Introduction to JSON**](../modules/javascript/core/json/intro/content/index.md){:target="_blank"} to learn about the world's most popular data format. JSON, which stands for `JavaScript Object Notation`, is a plain text, lightweight data format that can be used across different systems and programming languages.

### Summary

  🌕 You are extraordinary. You now know about this light-weight data format which you can use to store data or send it to an HTTP server. Now, let's do some exercises for your brain and your muscle.

  ![](./assets/the_history_of_json_at_silicon_valley_code_camp.jpg)

### Exercises

  **JSON Basics**

  Copy the folder `curriculum/week11/exercises/json_basics/` inside folder `user/week11/exercises/day01/` and compete all the challenges found inside the JavaScript file.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week11/progress/progress.draft.w11.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: JSON](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/16_Day_JSON/16_day_json.md){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/16_Day_JSON/16_day_json.md){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!

  ---



_Photo by [ROMAN ODINTSOV](https://www.pexels.com/photo/a-a-customer-receiving-a-food-delivery-12725452/){:target="_blank"} on [Pexels](https://www.pexels.com/photo/a-a-customer-receiving-a-food-delivery-12725452/){:target="_blank"}_
  
</details>

<hr class="mt-1">

<!-- Week 11 - Day 2 | Introduction to Promises -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 11 - Day 2</span> | Introduction to Promises</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  [**Promises, Promises!**](https://www.youtube.com/watch?v=DpKAnp5Klzw){:target="_blank"}

  ![](./assets/Promises.png)

  - [Read: **Promises and Callbacks**](../modules/javascript/async/promises/intro/content/index.md){:target="_blank"}

  Promises are a tough subject in JavaScript, and a lot of developers, even very experienced ones, have issues with them. So you do not have to worry is this concept feel unclear to you.

  Below you can find 2 great videos that explain both the Asynchronous topic and Promises

  - [Watch: **Async JavaScript & Callback Functions**](https://www.youtube.com/watch?v=QSqc6MMS6Fk){:target="_blank"}
    - Level: Beginner
    - Duration: 24mins
    - Captions: Yes

  ![](./assets/Promise.States.jpg)

  - [Watch: **JavaScript Promises**](https://www.youtube.com/watch?v=TnhCX0KkPqs){:target="_blank"}
    - Level: Beginner
    - Duration: 37mins
    - Captions: Yes

<!-- Summary -->

### Exercises

  Try to complete as many exercises as you can from the [30 Days Of JavaScript: Promises](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/18_Day_Promises/18_day_promises.md#exercises){:target="_blank"} repository, and don't forget to star the [original repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"} if you enjoyed them and found them helpful.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week11/progress/progress.draft.w11.d02.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: Promises](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/18_Day_Promises/18_day_promises.md){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/18_Day_Promises/18_day_promises.md){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!
  
</details>

<hr class="mt-1">

<!-- Week 11 - Day 3 | Introduction to Fetch API -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 11 - Day 3</span> | Introduction to Fetch API</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  ![Fetch Better Have My Money](./assets/Fetch.Better.Have.My.Money.jpg)

  - [Watch: **JavaScript Fetch API 👨🏻‍💻 in 1 Minute**](https://www.youtube.com/watch?v=3ySZQXVjCoM){:target="_blank"}
    - Level: Beginner
    - Duration: 1min
    - Captions: Yes

  - [Read: **Fetch API**](../modules/javascript/web_apis/fetch/intro/content/index.md){:target="_blank"}

  - [Watch **Fetch API**](https://www.youtube.com/watch?v=ubw2hdQIl4E){:target="_blank"}
    - Level: Beginner
    - Duration: 30min
    - Caption: Yes

<!-- Summary -->

### Exercises

  **Fetch Basics**

  Copy the folder `curriculum/week11/exercises/fetch_basics/` inside folder `user/week11/exercises/day03/` and compete all the challenges found inside the JavaScript file.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week11/progress/progress.draft.w11.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: Promises](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/18_Day_Promises/18_day_promises.md#fetch-api){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/18_Day_Promises/18_day_promises.md#fetch-api){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!
  
</details>

<hr class="mt-1">

<!-- Week 11 - Day 4 | Introduction to Async/Await -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 11 - Day 4</span> | Introduction to Async/Await</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  **Let's learn about `async/await`!**

  ![](./assets/kahoot-bean.jpg)

  - [Watch: **JavaScript Async Await 👨🏻‍💻 Tutorial in 1 Minute**](https://www.youtube.com/watch?v=TtnodUZ7xnQ){:target="_blank"}
    - Level: Beginner
    - Duration: 1min
    - Captions: Yes

  - [Read: **Introduction to Async/Await**](../modules/javascript/async/async_await/intro/content/index.md){:target="_blank"}

  - [Watch: **Async Await vs. Promises**](https://www.youtube.com/watch?v=spvYqO_Kp9Q){:target="_blank"}
    - Level: Beginner
    - Duration: 24mins
    - Captions: Yes

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: Promises](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/18_Day_Promises/18_day_promises.md#async-and-await){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/18_Day_Promises/18_day_promises.md#async-and-await){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!
  
</details>

<hr class="mt-1">

<!-- Week 11 - Day 5 | Async Recap & Practice -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 11 - Day 5</span> | Async Recap & Practice</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  **Welcome to Asynchronous programming!**

  ![](./assets/HUMOUR.Race.Condition.jpg){:style="width:100%"}

  **Programming Training Wheels**: Here are two suggestions that can help you work better with Promises and asynchronous functions:

  **Suggestion #1:**

  **Remember to handle errors first:** 
  
  When working with a Promise-based function, using either the `await` or `.then()` syntax, **always** start with the error handling structure before moving on to do something with the rest of the code. In the case of the `then()` syntax, **always** start by typing in the `catch()` handler, then move on to type the `then()` handler:
  
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
  
  **Don't stop at console.log:**
  
  The second important rule to remember, is not to rely on a simple `console.log` for the error cases. Make sure to handle them appropriately. For example, always send some informative response back to the user. 
  
  ```js
  fetch( URL )
  .then( data => outputEl.innerHTML = `Stock price: ${data}` );
  .catch( error => outputEl.innerHTML = `Ops! Something went wrong: ${error.message}` );
  ```
  

  **Suggestion #2:**

  **Naming helps: Name all your async Promise-based functions using the `Async` suffix:**
  
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
  

  **What's the purpose of this?**
  
  Just like training wheels on a bicycle, `programming training wheels` act as our support and reminders in our first rides with JavaScript. Their role is to instill some core concepts, avoid bugs and common beginner mistakes and also get us accustomed with some of the good practices.
  
  > "The functionality of training wheels is based on the premise that a learner rider can gradually develop their balance and coordination skills by relying on the support of the extra wheels. As the rider gains confidence and proficiency, the training wheels are gradually raised or removed, theoretically allowing the rider to transition to riding without additional support." ~ Wikipedia
  

  ---



  Now, let's practice what we've learned so far with a few exercises:

  - [**Async/Await exercise: WaitForResult**](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/async/async_await/exercises/wait_for_result/){:target="_blank"}

  - [**Promise Refactoring**](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/async/async_await/exercises/promise_refactoring/){:target="_blank"}

  - [**Wikipedia JSON API**](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/async/async_await/exercises/wikipedia/){:target="_blank"}

  - [**Bitcoin Wallet**](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/web_apis/fetch/exercises/bitcoin-wallet/){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

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