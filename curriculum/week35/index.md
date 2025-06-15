---
title: Week 35 | Advanced JavaScript
---

<hr class="mb-0">

<h1 id="{{ Week 35-Advanced JavaScript | slugify }}">
  <span class="week-prefix">Week 35 |</span> Advanced JavaScript
</h1>

{{ SGEN:HEADER_IMAGE }}

<div class="week-controls">

  {% assign week_num = 35 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 35 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 16/6/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 35 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 35 - Day 1 | Mini CMS Project -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 35 - Day 1</span> | Mini CMS Project</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Decompose our main app into a web server and a database file. Talk about asynchronous code.
  - **Part 2:** Continue our talk on asynchronous code and async/await. Database PRIMARY and FOREIGN keys.

  You can find the lecture code [here](https://github.com/in-tech-gration/build-a-cms-2024/tree/595a9d765bccd8418c7d20926f7730d4b70e7b64){:target="_blank"}

<!-- Summary -->

### Exercises

  - Study: how **import** (ESM) vs **require** (CommonJS) behave in Node (20+)  
    - [Nodejs Docs](https://nodejs.org/api/esm.html#import-statements){:target="_blank"}  
    - `await` is ONLY awaiting for Promises:  
      - `await setTimeout()` `❌`  
      - Convert the async function into a Promise using the `new Promise()` and then await: **await promisifiedSetTimeout()**  
    - Make HTTP requests from the CLI: `cURL` and `wget`  
      - cURL: curl [http://oxylabs.io](http://oxylabs.io){:target="_blank"}  
    - [https://nodejs.org/en/learn/modules/anatomy-of-an-http-transaction](https://nodejs.org/en/learn/modules/anatomy-of-an-http-transaction){:target="_blank"}

  - Tasks/Challenges:  
    - Find out a better way to create and format the output HTML. For example, create a template function: `show_template(page_type,vars)`  
    - Create and return a Login page  
    - Make sure to handle the `req.url` splitting appropriately. Now, if there is no `?user_id=100`, the code breaks  
    - Make sure that if the user is not found in the DB, you get some response  
    - See if you can serve a favicon and some CSS along with the pages  
    - Create a 404 page

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week35/progress/progress.draft.w35.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 35 - Day 2 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 35 - Day 2</span> | TBA</h2>
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

<!-- Week 35 - Day 3 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 35 - Day 3</span> | TBA</h2>
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

<!-- Week 35 - Day 4 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 35 - Day 4</span> | TBA</h2>
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

<!-- Week 35 - Day 5 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 35 - Day 5</span> | TBA</h2>
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