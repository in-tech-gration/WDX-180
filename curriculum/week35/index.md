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

  <span>Updated: 20/6/2025</span>

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

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 35 - Day 2 | Mini CMS Project -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 35 - Day 2</span> | Mini CMS Project</h2>
  </summary>

### Schedule

  - **Practice on the topics and share your questions**

<!-- Study Plan -->

<!-- Summary -->

### Exercises

  Yesterday, we returned some HTML from the web server (web.ts). This was just a simple template String literal. We can abstract this in a function for better re-usability.

  The web server checks the pathname using a basic if conditional and returns a custom HTML. By adding more paths, this code will become complicated and bloated. Maybe you can think of an abstraction so that the request pathname => appropriate HTML works better than the current implementation.

  Starting from [this code](https://github.com/in-tech-gration/build-a-cms-2024/tree/595a9d765bccd8418c7d20926f7730d4b70e7b64){:target="_blank"} on the CMS repository, (1) create a function that returns the HTML content based on the pathname and some dynamic values. (2) Create an abstraction over the server router: `pathname => load data => render HTML`

  **Important:** The code link above, points to a particular commit in the repository. Click the `Code` => `Download Zip` button on GitHub, to download the code as it was in that exact commit.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week35/progress/progress.draft.w35.d02.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 35 - Day 3 | Promises -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 35 - Day 3</span> | Promises</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** More about Promises & the Promise Constructor
  - **Part 2:** Chaining Promises

  You can find the lecture code [here](https://github.com/in-tech-gration/build-a-cms-2024/blob/1be5da1820e55ec486aa9d7adfb60a3d53ed57bc/learn/promises.js){:target="_blank"} and [here](https://github.com/in-tech-gration/build-a-cms-2024/blob/1be5da1820e55ec486aa9d7adfb60a3d53ed57bc/learn/promised.to.answer.questions.js){:target="_blank"}

<!-- Summary -->

### Exercises

  - **Study:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise){:target="_blank"}  
    - It’s important that you go through the whole document and probably more than once to fully understand the Promise concept.  
      - Equally important to run all the examples mentioned there and tweak them to experiment with variations to get an even better and deeper understanding.  
    - Explore number `#11` from the promises.js reference  
      - Ref: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Promise/catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch){:target="_blank"}  
      - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Promise/all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all){:target="_blank"}  
      - Check all the static `Promise.*` methods

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week35/progress/progress.draft.w35.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 35 - Day 4 | Practice Day -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 35 - Day 4</span> | Practice Day</h2>
  </summary>

### Schedule

  - **Practice on the topics and share your questions**

### Study Plan

  Today is practice day. Practice on the topics covered so far
  and share your thoughts, questions and insights.

  Happy hacking!

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 35 - Day 5 | Q&A and Mini CMS Project -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 35 - Day 5</span> | Q&A and Mini CMS Project</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Logical AND and OR operators. How do we connect a domain to our hosted app? Website analytics.
  - **Part 2:** SQL Injection. Mini CMS project: Creating a form for creating content.

  You can find the lecture code [here](https://github.com/in-tech-gration/build-a-cms-2024/tree/4f942b64b86ff5164e8aa5d2bb516676134a8ca6){:target="_blank"} and the logical operator code [here](https://github.com/in-tech-gration/build-a-cms-2024/blob/4f942b64b86ff5164e8aa5d2bb516676134a8ca6/learn/logical.operators.js){:target="_blank"}.

  **Important:** The code link above, points to a particular commit in the repository. Click the `Code` => `Download Zip` button on GitHub, to download the code as it was in that exact commit.  

  **References & Resources:**

  - [SQLite Injection Attacks](https://www.tutlane.com/tutorial/sqlite/sqlite-injection-attacks){:target="_blank"}  
  - [process.cwd()](https://nodejs.org/api/process.html#processcwd){:target="_blank"}, [__dirname](https://nodejs.org/docs/latest/api/modules.html#__dirname){:target="_blank"}, [__filename](https://nodejs.org/docs/latest/api/modules.html#__filename){:target="_blank"}  
  - [https://stackoverflow.com/a/9874415/4861760](https://stackoverflow.com/a/9874415/4861760){:target="_blank"} `process.cwd()` vs `__dirname`  
  - [https://nodejs.org/api/path.html#pathsep](https://nodejs.org/api/path.html#pathsep){:target="_blank"}  
  - [https://nodejs.org/api/path.html#pathnormalizepath](https://nodejs.org/api/path.html#pathnormalizepath){:target="_blank"}  
  - [https://nodejs.org/api/path.html#pathbasenamepath-suffix](https://nodejs.org/api/path.html#pathbasenamepath-suffix){:target="_blank"}

<!-- Summary -->

### Exercises

  - Highly recommended challenges:  
    - Turn callback-based async functions into Promise-based functions  
      - Work with both **.then().catch().finally()** and **async/await/try/catch/finally** syntax  
        - Try to *promisify:*  
          - Node.js fs methods, e.g. turn these `fs.writeFile(cb)`, `fs.readFile(cb)` into something like await `writeFileP()`, `await readFileP(filename)`  
          - The navigator.geolocation methods: [getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition){:target="_blank"}  
          - The `new Image()` load/error callbacks  
          - The [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest){:target="_blank"} object

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week35/progress/progress.draft.w35.d05.csv**

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