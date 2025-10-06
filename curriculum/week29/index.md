---
title: Week 29 | Battleship Game - Round 2
---

<hr class="mb-0">

<h1 id="{{ Week 29-Battleship Game - Round 2 | slugify }}">
  <span class="week-prefix">Week 29 |</span> Battleship Game - Round 2
</h1>

{{ SGEN:HEADER_IMAGE }}

<div class="week-controls">

  {% assign week_num = 29 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 29 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 9/5/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 29 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 29 - Day 1 | Battleship Game -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 29 - Day 1</span> | Battleship Game</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - Building a Battleship game with JavaScript - Part 5 
  - Building a Battleship game with JavaScript - Part 6

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week29/assets/day01/code){:target="_blank"}

  **Study & Practice**

  - Think about a way to display the columns and rows (A, B, C... 1, 2, 3)  
    - Start by hardcoding the cols/rows, then implement a dynamic way that scales  
    - Consider both HTML and Canvas solutions and think about the pros and cons of each solution  
    - Try to leave the player canvas functionality and code out of it. The decorative code that displays the cols and rows should not affect the **main game** functionality.

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 29 - Day 2 | Data Structures & Algorithms - Part 1 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 29 - Day 2</span> | Data Structures & Algorithms - Part 1</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Whether you're building games or developing web applications,
  creating an API service or an AI-enabled mobile application,
  data structures and algorithms are a crucial ingredient for 
  all sorts of software challenges.

  Data structures give us the ability to take our raw data 
  and organize them in a way that makes it easy and efficient
  to store, search, traverse and manipulate. 

  Algorithms are the magic recipes that help us break down 
  problems into small steps that can be fed into any programming
  language.

  FreeCodeCamp has a great video tutorial on some of the most
  popular and useful algorithms and data structures.

  We highly recommend that you spend the next 3 days, studying 
  and replicating each of the chapters of this great video.

  Let's start with the first 3 data structures:

  ![](./assets/Stack_data_structure.gif)

  - [**Stacks**](https://www.youtube.com/watch?v=t2CEgPsws3U&t=20s){:target="_blank"}

  - [**Sets**](https://www.youtube.com/watch?v=t2CEgPsws3U&t=544s){:target="_blank"}

  ![](./assets/Queue_(Computer_Science).svg.png)

  - [**Queues**](https://www.youtube.com/watch?v=t2CEgPsws3U&t=1164s){:target="_blank"}

<!-- Summary -->

### Exercises

  Make sure to implement and test every single data structure and algorithm
  on your local environment, either in the Browser or through Node.js.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week29/progress/progress.draft.w29.d02.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 29 - Day 3 | Data Structures & Algorithms - Part 2 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 29 - Day 3</span> | Data Structures & Algorithms - Part 2</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  This is part 2 of watching the Data Structures and Algorithms
  course from FreeCodeCamp and coding along.

  Let's see the next 3 data structures and algorithms:

  ![](./assets/Binary_Search_Tree_with_Leaves.svg.png)

  - [**Binary Search Tree**](https://www.youtube.com/watch?v=t2CEgPsws3U&t=1563s){:target="_blank"}

  ![](./assets/Hash_table_5_0_1_1_1_1_0_LL.svg.png)

  - [**Hash Table**](https://www.youtube.com/watch?v=t2CEgPsws3U&t=3200s){:target="_blank"}

  ![](./assets/C_language_linked_list_adding_a_link_step_3.png)

  - [**Linked List**](https://www.youtube.com/watch?v=t2CEgPsws3U&t=3785s){:target="_blank"}

<!-- Summary -->

### Exercises

  Make sure to implement and test every single data structure and algorithm
  on your local environment, either in the Browser or through Node.js.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week29/progress/progress.draft.w29.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 29 - Day 4 | Data Structures & Algorithms - Part 3 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 29 - Day 4</span> | Data Structures & Algorithms - Part 3</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  This is part 3 of watching the Data Structures and Algorithms
  course from FreeCodeCamp and coding along.

  Let's see the last 3 data structures and algorithms mentioned:

  ![](./assets/Trie.svg.png)

  - [**Trie**](https://www.youtube.com/watch?v=t2CEgPsws3U&t=4500s){:target="_blank"}

  - [**Heap**](https://www.youtube.com/watch?v=t2CEgPsws3U&t=5249s){:target="_blank"}

  ![](./assets/CPT-Graphs-directed-weighted-ex1.svg.png)

  - [**Graph**](https://www.youtube.com/watch?v=t2CEgPsws3U&t=6128s){:target="_blank"}

<!-- Summary -->

### Exercises

  Make sure to implement and test every single data structure and algorithm
  on your local environment, either in the Browser or through Node.js.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week29/progress/progress.draft.w29.d04.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 29 - Day 5 | Battleship Game: Final Remarks -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 29 - Day 5</span> | Battleship Game: Final Remarks</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Battleship Game - Part 7** 
  - **Battleship Game - Part 8**

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week29/assets/day05/code){:target="_blank"}

  **Lecture Notes:**

  **Lecture Questions:**

  - Should I combine Tailwind and Bootstrap?  
    - **Be very careful** and use it only as a **last resort** (my take: avoid)  
    - Try UI Kits like [Shadcn/ui](https://ui.shadcn.com/){:target="_blank"}, Material UI, etc.  
      - Search for CSS UI Kits or Tailwind UI Kits or Bootstrap UI Kits  
    - Search for Tailwind-based Components (or sets of Components), or Tailwind-based Templates, etc.  
    - If you are using React, you can try CSS Modules or other CSS utilities.  
    - You can try and find how you can confine some CSS (e.g. a framework like Bootstrap) under a specific class.  
    - Do a research on native CSS “scoping”:  
      - [https://developer.mozilla.org/en-US/docs/Web/CSS/:scope](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope){:target="_blank"}  
      - [https://developer.mozilla.org/en-US/docs/Web/CSS/@scope#browser_compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope#browser_compatibility){:target="_blank"}

  **References & Resources:**

  - **Ways to avoid API keys and other sensitive information leaking to a public/private repo**  
    - Use a script or a library that checks for sensitive information before pushing  
    - Check your Version Control provider (BitBucket, GitLab, GitHub) for an option:  
      - [GitHub: About secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning){:target="_blank"}  
    - Use [environmental variables](https://kinsta.com/knowledgebase/what-is-an-environment-variable/){:target="_blank"} but be careful as there are types of env variables that have some code pushed  
    - Use **.gitignore** for preventing certain files or folders getting pushed  
    - Whenever you detect a leakage or a breach you should always revoke/cancel your keys and update your passwords.  
  - [https://haveibeenpwned.com/](https://haveibeenpwned.com/){:target="_blank"}  
  - Ways to work with immutable data (and avoid object reference bugs and errors, e.g. “shallow copy”)  
    - Use a library ([https://immerjs.github.io/immer/](https://immerjs.github.io/immer/)){:target="_blank"}  
    - **Object.freeze()** (make sure to check the deep vs shallow freeze sections)  
    - Use [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone){:target="_blank"}  
  - [Nice selection of free graphics](https://www.freepik.com/search?format=search&last_filter=selection&last_value=1&query=ship&selection=1&type=vector){:target="_blank"}

<!-- Summary -->

### Exercises

  - Finish up the game!  
    - Complete the mini version (2x2, with 2 ship types)  
    - Move on to a 4x4 version, then test and continue to the 10x10 final version

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week29/progress/progress.draft.w29.d05.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


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