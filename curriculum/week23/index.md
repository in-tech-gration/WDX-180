---
title: Week 23 | React JS
---

<hr class="mb-0">

<h1 id="{{ Week 23-React JS | slugify }}">
  <span class="week-prefix">Week 23 |</span> React JS
</h1>

<img src="assets/React.js.jpg" />

<div class="week-controls">

  {% assign week_num = 23 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 23 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 19/3/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 23 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 23 - Day 1 | React Hooks: useState, useRef & useEffect -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 23 - Day 1</span> | React Hooks: useState, useRef & useEffect</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** useState Hook
  - **Part 2:** useRef & useEffect Hooks

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week23/assets/day01/code){:target="_blank"}

  Remember, the code is a React app created using [vite](https://vite.dev/guide/#scaffolding-your-first-vite-project){:target="_blank"}.

  **Tips:**  
    - Temporarily disable ESLint: just at a comment at the top of the file: `/* eslint-disable */`  

  **References & Resources:**

  - **Hooks**  
    - [**React Hooks Lifecycle**](https://wavez.github.io/react-hooks-lifecycle/){:target="_blank"}  
      - [**Another view of the Component lifecycle**](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week23/assets/day01/diagrams/ReactHooksLifecycle.png){:target="_blank"}  
    - **A family of built-in functions in React that:**  
      - **are prefixed with “use”: useState, useRef, useEffect**  
      - **should ONLY be used inside Component functions**  
      - **should NOT be conditionally executed**  
  - **JavaScript:**  
    - **Highly recommended: [https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md){:target="_blank"}**  
      - I don’t believe *“Async and Performance”* and *“ES6 and Beyond”* are relevant today as they are a bit outdated these days, so you can skip them.  
      - You can read the 2nd edition of “[Scopes & Closures](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md){:target="_blank"}” since it’s ready and wait for the 2nd edition of *“Sync & Async”* and *“ES.Next & Beyond”*  
    - In order to master JS you should definitely master the following concepts:  
      - `this`  
      - anything asynchronous  
      - The object prototype  
    - Check out: [https://learn.js.org/](https://learn.js.org/){:target="_blank"}  
      - Feel free to comment and open a PR or suggest:  
        - [https://github.com/in-tech-gration/LearnJavascript](https://github.com/in-tech-gration/LearnJavascript){:target="_blank"}  
  - [**ReacTree**](https://marketplace.visualstudio.com/items?itemName=ReacTreeDev.reactree){:target="_blank"}  
  - [**Error Lens VSCode Extension**](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens){:target="_blank"}  
  - React Rule: useState creates a unique state value for each Component instance  
  - React Rule: Try to avoid mixing native DOM API and React  
    - We reach out to the Refs when there’s no other way of doing something with the DOM.  
    - We use useRef to make use of a vanilla JS library that needs direct access to the DOM (e.g. D3, Google Maps, etc.)  
  - State  
    - If you need a value that depends or is “derived” from a state variable, you probably don’t need another state variable for that. Just try with a simple local variable.

<!-- Summary -->

### Exercises

  - **Try to turn the App.jsx into a shopping cart**  
    - Idea: update shopping cart with number of items added   
    - Idea: Update the total price of the shopping cart  
  - **Study: [useEffect](https://react.dev/reference/react/useEffect){:target="_blank"}**  
  - **Study:** Render & Commit: [https://react.dev/learn/render-and-commit](https://react.dev/learn/render-and-commit){:target="_blank"}
  - **Ideas:** refactor TrafficLight app using `useRef` and `useEffect`

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week23/progress/progress.draft.w23.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 23 - Day 2 | More about useState & useEffect -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 23 - Day 2</span> | More about useState & useEffect</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  In the last lecture, you were introduced to the `useState`, `useRef` and `useEffect` hooks.

  Today, we recommend that you study the following material to understand more about
  how these hooks work and how to avoid common beginner mistakes as well as taking
  a peek behind the algorithm that checks whether the `state` has changed in order 
  to re-render a Component.

  Grab a hot cup of coffee ☕️ (or tea), remove all distractions, and dive into the following
  resources:

  - [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state){:target="_blank"}   
  - [All useEffect Mistakes Every Junior React Developer Makes](https://www.youtube.com/watch?v=QQYeipc_cik){:target="_blank"}   
  - [Demystifying Object.is and prevState in React useState](https://www.valentinog.com/blog/react-object-is/){:target="_blank"}

  Enjoy and don't forget to share your questions and comments.

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 23 - Day 3 | useEffect, Fetch API & Context API -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 23 - Day 3</span> | useEffect, Fetch API & Context API</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** useEffect & Fetch API
  - **Part 2:** Context API

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week23/assets/day03/code){:target="_blank"}

  **Lecture Notes:**

  - `Context API` can wrap any kind of JSX content, …but, can **only be used** by Components (via the `useContext` hook).  

  - **Tips**  
    - Try to limit the scope of your Context Provider to avoid unnecessary re-renders.

  - **Questions**  
    - _Why instead of using useRef to hold the value of a variable during re-renders, not declaring a variable outside of the Component?_  
      - The best thing you can do is try things out!  
      - Make sure to try the experiment with multiple instances of the same Component: `<Button /><Button />...`  
    - _Why instead of Global state, e.g. useContext or Redux not use localStorage?_  
      - Same as above: try it! You'll learn a lot from this experiments.

  **References & Resources:**

  - [**REST Countries JSON API**](https://restcountries.com/v3.1/name/japan){:target="_blank"}  
  - **Fetching Libraries**  
    - [**https://swr.vercel.app/**](https://swr.vercel.app/){:target="_blank"}  
    - [**https://tanstack.com/query/latest**](https://tanstack.com/query/latest){:target="_blank"}  
    - [**RTK Query**](https://redux-toolkit.js.org/rtk-query/overview){:target="_blank"}  
  - **State Rule: NEVER update the state value directly.**  
    - **Use the state setter and ALWAYS return a NEW value**  
      - **DON’T: prevState.push(42)**   
      - **DO: [...prevState, 42] or prevState.concat(42)**  
  - [**React DevTools Extension**](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi){:target="_blank"}  
  - [**CodeGrepper Extension for the Browser**](https://www.grepper.com/){:target="_blank"}  
  - [**FakeStore API**](https://fakestoreapi.com/docs){:target="_blank"}  
  - [**JSON Formatter Extension**](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa){:target="_blank"}  
  - **Get GitHub profile through JSON API:**  
    - [**https://api.github.com/users/**](https://api.github.com/users/){:target="_blank"}**`<GitHub Username>`**  
  - **useEffect callback rules:**  
    - **These useEffect callbacks are sensitive to their own Component’s re-renders (DOM Update means the Component that contains the useEffect)**  
    - `useEffect( function runsAfterEveryDOMUpdate(){} )`  
    - `useEffect( function runsOnceAfterFirstDOMUpdate(){},[] )`  
    - `useEffect( function runsAfterInitialDOMUpdateAndWhenDependenciesChange(){},[stateA, propCounterB, stateB] )`

<!-- Summary -->

### Exercises

  - Clean up the demo `App.jsx` files and split your Components and Context into different files.  
  - Add the functionality to remove a product as well  
  - **Advanced**: try to update a product

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week23/progress/progress.draft.w23.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 23 - Day 4 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 23 - Day 4</span> | TBA</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

<!-- Study Plan -->

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 23 - Day 5 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 23 - Day 5</span> | TBA</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** 
  - **Part 2:**

  You can find the lecture code [here](){:target="_blank"}

  **Lecture Notes & Questions:**

  **References & Resources:**

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  ---



  _Photo by []()_


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