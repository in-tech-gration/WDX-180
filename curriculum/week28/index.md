---
title: Week 28 | Battleship Game
---

<hr class="mb-0">

<h1 id="{{ Week 28-Battleship Game | slugify }}">
  <span class="week-prefix">Week 28 |</span> Battleship Game
</h1>

<img src="assets/battleship-game.png" />

<div class="week-controls">

  {% assign week_num = 28 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 28 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 27/4/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 28 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 28 - Day 1 | Battleship Game - Part 2 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 28 - Day 1</span> | Battleship Game - Part 2</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** We continue on our Battleship game by coming up with more requirements and game rules and ways and ideas to implement them. We also take a look at error handling and creating custom errors by extending the native `Error` constructor in JavaScript. Last, but not least, we explore the IIFE pattern: Immediately Invoked Function Expression, which is one of the most powerful and widely used JS patterns.

  - **Part 2:** We continue our discussion on the IIFE pattern, debug some Battleship algorithm implementation that deals with the game board and try to come up with some abstractions that will help us deal with the complexity of the game requirements.

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week28/assets/day01/code){:target="_blank"}

  **Lecture Notes:**

  **Questions**

  - How can we limit the number of exposed global variables?  
    - Use Modules (import/export)  
  - How can we protect our code from global variable conflicts?  
    - Avoid common names (e.g. user, password, secret, initGame, initApp, init)  
    - Prefix your global variables with something very specific, e.g. bgameUser, bgameApp, etc.

  **References & Resources:**

  - Creating custom Errors  
    - [Custom errors, extending Error](https://javascript.info/custom-errors){:target="_blank"}  
  - [IIFE: Immediately Invoked Function Expression](https://developer.mozilla.org/en-US/docs/Glossary/IIFE){:target="_blank"}  
  - **getBoundingClientRect()**: “An object providing information about the size of an element and its position relative to the viewport” [(MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect){:target="_blank"}  
    - returns [DOMRect](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect){:target="_blank"}  
  - Debugging techniques:  
    - Comment/Uncomment lines and check and compare behavior (before/after)   
    - Change the order of lines and see what happens  
    - `console.log` everything!  
    - Manually trace the code

  **Tips for production apps:**  
    - Handle errors  
    - Minimize the code required to run the app  

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  ---



  _Photo by []()_


<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 28 - Day 2 |  -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 28 - Day 2</span> | </h2>
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

<!-- Week 28 - Day 3 |  -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 28 - Day 3</span> | </h2>
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

<!-- Week 28 - Day 4 |  -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 28 - Day 4</span> | </h2>
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

<!-- Week 28 - Day 5 |  -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 28 - Day 5</span> | </h2>
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