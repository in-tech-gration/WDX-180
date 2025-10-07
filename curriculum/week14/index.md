---
title: Week 14 | ECMAScript 6
---

<hr class="mb-0">

<h1 id="{{ Week 14-ECMAScript 6 | slugify }}">
  <span class="week-prefix">Week 14 |</span> ECMAScript 6
</h1>

<img src="assets/pexels-olia-danilevich-4974916.jpg" />

<div class="week-controls">

  {% assign week_num = 14 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 14 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 22/1/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 14 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 14 - Day 1 | ECMAScript 6 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 14 - Day 1</span> | ECMAScript 6</h2>
  </summary>

### Schedule

  - **Lecture: Features of (ECMAScript) ES6**
  - **Practice**
  - **Work on Project (Group/Personal)**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1**:
    - ES6: Function Hoisting & Destructuring Assignment
  - **Part 2**:
    - ES6: Spread Operator

  The code from the lectures can be found [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week14/assets/code){:target="_blank"}.

  Practice on the topics covered and explore the concepts by trying things out in your own code and further improve your understanding of the concepts by studying the following resources:

  - **(Object & Array) Destructuring Assignment**  

    - [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment){:target="_blank"}  
    - [ES6 In-Depth Destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/){:target="_blank"}  
    - [Destructuring Assignment @JavaScript.info](https://javascript.info/destructuring-assignment)  
    - [Assigning to new variable names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#assigning_to_new_variable_names){:target="_blank"}

  **Destructuring nested objects:**

  ```js
  const o = { a: { a1: 1, a2: 2 } }
  const { a } = o;
  console.log( a ); // => {a1: 1, a2: 2}
  const { a1 } = a;
  console.log( a1 ); // => 1
  const { a: { a2 } } = o;
  console.log( a2 ); // => 2
  ```

  - **Spread/Rest Operator**  

    - Spread Operator: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax){:target="_blank"}  
    - Rest Parameters: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters){:target="_blank"}   

  - [Number.isInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger){:target="_blank"}  

  - **Safer Array Methods:**
    - `Array.sort()` (❌ AVOID), Prefer: [Array.toSorted()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted){:target="_blank"}  
    - `Array.reverse()` (❌ AVOID), Prefer: [Array.toReversed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed){:target="_blank"}

  ---



  _Photo by [olia danilevich](https://www.pexels.com/photo/back-view-of-a-boy-sitting-on-grey-chair-while-using-his-laptop-computers-4974916/)_

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 14 - Day 2 | Data Transformations in JS -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 14 - Day 2</span> | Data Transformations in JS</h2>
  </summary>

### Schedule

  - **Practice on yesterday's topics and share your questions**
  - **Watch lecture on data transformations**

### Study Plan

  - Watch our recorded live session on [Handling Data Transformations in JavaScript apps (using Quokka)](https://www.youtube.com/watch?v=CAp3avcHYCM){:target="_blank"}

  [![](./assets/Data.Transformations.jpg)](https://www.youtube.com/watch?v=CAp3avcHYCM){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 14 - Day 3 | Script Loading -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 14 - Day 3</span> | Script Loading</h2>
  </summary>

### Schedule

  - **Watch lectures on script loading strategies**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Two more lectures coming your way. Today's recorded lectures are all about `<script>` types and loading strategies and several other things you need to know when loading JavaScript files with your HTML code (e.g. `Cache busting` and more).

  - Watch our recorded live sessions:
    - [Part 1](https://youtu.be/-8-0kUHpo34){:target="_blank"} 
    - Part 2: _(Your lecturer will share the link with you)_

  **Lecture Notes:**

  - If the type of a `<script>` is something other than `"text/javascript"` the code will not execute: `<script type="text/ops">`
  - `Cache Busting`: just add `?something=here` after the filepath, eg. `<script src="app.js?version=2.3">`

  > **Cache:** Oxford Languages and Google defines it as follows:
  >
  > (noun) "A collection of items of the same type stored in a hidden or inaccessible place."
  >
  > (noun: computing) "An auxiliary memory from which high-speed retrieval is possible."
  >
  > (verb) "Store away in hiding or for future use."
  >
  > (verb: computing) "Store (data) in a cache memory."



  - Ways to clean the cache manually:
    - (A) Through the Browser settings
    - (B) Through the `DevTools: Command Palette > Clear Site Data`
    - (C) Browser Feature: Hard Reload/Refresh, Right click on Reload > Empty Cache and Reload

  - Visited links can be styled with CSS [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited){:target="_blank"}

  - How to disable JavaScript in the Browser:
    - Open up [Command Palette](https://developer.chrome.com/docs/devtools/command-menu){:target="_blank"} => Disable JavaScript

  - Caution: The `<noscript>` tag can be abused by ad/tracking services!

  - [Browser Caching using Meta Tags](https://cristian.sulea.net/blog/disable-browser-caching-with-meta-html-tags/){:target="_blank"}

  **Study Material:**

  - [The `<script>` at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script){:target="_blank"}

  - [What is the difference between async and defer in script loading?](https://www.30secondsofcode.org/html/s/async-defer/){:target="_blank"}

  - [What's The Difference Between Async & Defer?](https://pagespeedchecklist.com/async-and-defer){:target="_blank"}

  - [JavaScript Loading Priorities in Chrome](https://addyosmani.com/blog/script-priorities/){:target="_blank"}

  **Resources & further reading:**

  - [MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types){:target="_blank"}

  - [Async vs Defer attributes in JavaScript](https://www.linkedin.com/pulse/async-vs-defer-attributes-javascript-diwaker-mishra/)  
  
  - [\<script\> async, defer, async defer, module, nomodule, src, inline \- the cheat sheet](https://gist.github.com/jakub-g/385ee6b41085303a53ad92c7c8afd7a6)

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 14 - Day 4 | Practice: Destructure & Iterate -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 14 - Day 4</span> | Practice: Destructure & Iterate</h2>
  </summary>

### Schedule

  - **Solve the coding challenges and share your questions**

<!-- ### Study Plan -->



<!-- ### Summary -->



<!-- Study Plan -->

<!-- Summary -->

### Exercises

**Here are today's activities from the `Turing School of Software Engineering`:**

## ES6 Destructuring



[“Destructuring”](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) allows you to pull out data from arrays and objects into distinct variables with concise syntax.

**Round 1:** Given an object, in one line, assign variables to the values of the object using different names than the keys already in the object.

```js
var object = {name: 'elvis', title: 'hip swinger'}

// YOUR CODE HERE...

// console.log(person) => 'elvis'
// console.log(job) => 'hip swinger'
```

**Round 2:** What if I want to grab the values of the first and second elements of a given array using variables, and then swap the values of those variables?

```js
var items = ['apple', 'banana', 'pear']

// Currently, I would get the following returns:
console.log(a) => 'apple'
console.log(b) => 'banana'

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a) => 'banana';
console.log(b) => 'apple';
```

**Round 3:** Given an object, write one line of code that assigns variables to the keys.

```js
var object = {
  user: 'brenna',
  id: 1,
  date: 'monday',
  module: 3
}

// console.log(user) => ‘brenna’
```

**Round 4:** Given an object with nested objects, write one line of code that assigns variables to the keys.

```js
var object1 = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
}
```

**Round 5:** Given an object, in one line of code pull out the individual keys to be accessible directly.

```js
var object = {name: 'elvis', title: 'hip swinger'}

// console.log(name) => 'elvis'
// console.log(title) => 'hip swinger'
```

**Round 6:** Given a crazy array of objects with nested objects, iterate over it and grab just the artist and the third album title.

```js
var singers = [
  {
    artist: 'Elvis',
    albums: {
      album1: 'this first title for Elvis',
      album2: 'another second title for Elvis',
      album3: 'third title for Elvis'
    }
  },
  {
    artist: 'Cher',
    albums: {
      album1: 'this first title for Cher',
      album2: 'another second title for Cher',
      album3: 'third title for Cher'
    }
  }
]

// 'Artist: Elvis, Third Album: third title for Elvis'
// 'Artist: Cher, Third Album: third title for Cher'
```

## Approaching Problems Many Ways



**Learning Goals**

- Develop a deeper understanding of iterator methods
- Reduce the risk of being too attached to one iterator method OR avoiding an iterator method
- Compare and contrast iterator methods by using different iterators to achieve the same output
- Practice using console logs effectively as part of your workflow
- Take note as scope issues arise

Given the following array, you will be solving the same challenge three times today. Each time, you will be told which iterator method(s) you’re allowed to use.

```js
const ninetiesToys = [
  {
      name: "Tamagotchi",
      releaseYear: 1996,
      price: 15.99
  },
  {
      name: "Furby",
      releaseYear: 1998,
      price: 29.99
  },
  {
      name: "Super Soaker",
      releaseYear: 1989,
      price: 19.99
  },
  {
      name: "Pogs",
      releaseYear: 1991,
      price: 5.99
  },
  {
      name: "Game Boy",
      releaseYear: 1989,
      price: 89.99
  }
];
```

**Round 1:** Write a function `findCheapToys` that uses `forEach` and returns an array of toy names that cost less than $20. You may not use any other iterator methods.

**Round 2:** Solve the prompt using a `filter` and `map`. You may not use any other iterator methods.

**Round 3:** Solve the prompt using a `reduce`. You may not use any other iterator methods.

**Plot Twist**

One by one, go back to each round’s solution and refactor it so that the `ninetiesToys` data set is passed as an argument when you invoke the function. This allows the same function to be used with multiple data sets.

Ensure it still works for your `ninetiesToys` data. Then, copy/paste the `eightiesToys` dataset below at the top of your file and invoke the refactored solution with the `eightiesToys` data passed as the argument. Ensure the function gives the correct result. Consider how this changed the steps of that solution.

```js
const eightiesToys = [
  {
    name: "Rubik's Cube",
    releaseYear: 1980,
    price: 9.99
  },
  {
    name: "Transformers",
    releaseYear: 1984,
    price: 19.99
  },
  {
    name: "My Little Pony",
    releaseYear: 1983,
    price: 12.99
  },
  {
    name: "Cabbage Patch Kids",
    releaseYear: 1982,
    price: 24.99
  },
  {
    name: "Nintendo Entertainment System",
    releaseYear: 1985,
    price: 89.99
  },
  {
    name: "He-Man and the Masters of the Universe",
    releaseYear: 1982,
    price: 14.99
  }
];
```


  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week14/progress/progress.draft.w14.d04.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 14 - Day 5 | Git & GitHub -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 14 - Day 5</span> | Git & GitHub</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - Part 1: Git, GitHub, Branches and Git Workflow.
  - Part 2: Resolving merge conflicts and Debugging CSS

  **Lecture Notes:**

  - Git & GitHub Best Practices & Tips  

    - Create a real copy of the project folder from time to time, to ensure that you have a working backup in case s**t happens

    - Run `git status` to check the current branch and the status of the branch

    - Run `git pull` to download changes from the remote repo

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