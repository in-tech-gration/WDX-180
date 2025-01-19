---
title: Week 15 | Intermediate JavaScript
---

<hr class="mb-0">

<h1 id="{{ Week 15-Intermediate JavaScript | slugify }}">
  <span class="week-prefix">Week 15 |</span> Intermediate JavaScript
</h1>

<img src="assets/pexels-goumbik-574073.jpg" />

<div class="week-controls">

  {% assign week_num = 15 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 15 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 20/1/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 15 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 15 - Day 1 | ES6 Modules & The Arguments Object -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 15 - Day 1</span> | ES6 Modules & The Arguments Object</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Check your Frontend knowledge / Learn about the `arguments` object
  - **Part 2:** ECMAScript 6 Modules (`import/export`)

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week15/assets/code){:target="_blank"}

  **Suggested material for study:**

  - The Function [Arguments Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments){:target="_blank"}
  - [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters){:target="_blank"}
  -[Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters){:target="_blank"}

  - Modules  
    - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules){:target="_blank"}  
    - [export statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export){:target="_blank"}  
    - [import statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import){:target="_blank"}

  **References & Resources:**

  - [Prefetching resources in the browser](https://www.30secondsofcode.org/html/s/prefetching-resources/){:target="_blank"}  
  - [https://v8.dev/features/modules](https://v8.dev/features/modules){:target="_blank"}

### Summary

  In the first lecture, we try to answer some of the following questions and check whether we are up-to-date with some important Frontend concepts:

  - What is Browser-Caching?
  - What is Cache Busting?  
  - What is Server-Caching?
  - What is rendering?
  - What are Backend languages?
  - What is dynamic content?
  - What are the steps of `<script>` parsing in the Browser?
  - What is defer/async?

  Next, the first lecture explores the `arguments` object that is used inside function definitions to access all the arguments passed to the function, even if they are not declared as parameters.

  In the second lecture we explore JavaScript modules and imports:

  1. Basic import and export statements
  2. Using the `import` statement with curly braces (`{}`)
  3. Dynamic imports using the `import()` function
  4. Using `async/await` with dynamic imports
  5. Handling errors and rejections when importing modules

  The lecture also covers examples of how to use dynamic imports to preload modules, such as importing a module when the mouse cursor is close 
  to an element on the screen.

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 15 - Day 2 | iframe, eval & syntax highlighting -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 15 - Day 2</span> | iframe, eval & syntax highlighting</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  First of all, some theory. Start by reading about `iframe` and `eval` (or as some people call it, `evil()`):

  - [eval @ W3Schools (gear 1 :car:)](https://www.w3schools.com/jsref/jsref_eval.asp){:target="_blank"}
  - [eval @ MDN (gear 5 :racing_car:)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval){:target="_blank"}

  - [iframe @ W3Schools (gear 1 :car:)](https://www.w3schools.com/tags/tag_iframe.ASP){:target="_blank"}
  - [iframe @ MDN (gear 5 :racing_car:)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 15 - Day 3 | Intermediate JavaScript -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 15 - Day 3</span> | Intermediate JavaScript</h2>
  </summary>

### Schedule

  - **Lecture: Intermediate JavaScript**
  - **Practice**
  - **Work on Project (Group/Personal)**

<!-- Study Plan -->

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 15 - Day 4 | Group Project -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 15 - Day 4</span> | Group Project</h2>
  </summary>

### Schedule

  - **Work on Project (Group/Personal)**

<!-- Study Plan -->

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 15 - Day 5 | Intermediate JavaScript -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 15 - Day 5</span> | Intermediate JavaScript</h2>
  </summary>

### Schedule

  - **Lecture: Intermediate JavaScript**
  - **Practice**
  - **Work on Project (Group/Personal)**

<!-- Study Plan -->

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