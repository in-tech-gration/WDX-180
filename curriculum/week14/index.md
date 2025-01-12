---
title: Week 14 | Intermediate JavaScript
---

<hr class="mb-0">

<h1 id="{{ Week 14-Intermediate JavaScript | slugify }}">
  <span class="week-prefix">Week 14 |</span> Intermediate JavaScript
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

  <span>Updated: 13/1/2025</span>

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

<!-- Week 14 - Day 3 | Intermediate JavaScript -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 14 - Day 3</span> | Intermediate JavaScript</h2>
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

<!-- Week 14 - Day 4 | Group Project -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 14 - Day 4</span> | Group Project</h2>
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

<!-- Week 14 - Day 5 | Intermediate JavaScript -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 14 - Day 5</span> | Intermediate JavaScript</h2>
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