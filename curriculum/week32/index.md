---
title: Week 32 | Testing
---

<hr class="mb-0">

<h1 id="{{ Week 32-Testing | slugify }}">
  <span class="week-prefix">Week 32 |</span> Testing
</h1>

<img src="assets/pc.crash.test.jpeg" />

<div class="week-controls">

  {% assign week_num = 32 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 32 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 30/4/2026</span>

  <h2 class="week-controls__next_week">

    {% if week_num < 36 %}

      {% assign next_week_num = 32 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

<!-- VERSION -->
<hr style="margin-bottom:0" />
<div class="center opacity-50 opacity-100:hover">
  You are viewing v2.0 of this content. To go back to v1.0 click <a href="v1.0">this link</a>.
</div>
<!-- VERSION -->

---

<!-- Week 32 - Day 1 | Testing -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 32 - Day 1</span> | Testing</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - Testing & Testing React Apps

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week31/assets/day05/code){:target="_blank"} and the diagram [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week31/assets/day05/Testing.Pyramid.png){:target="_blank"}.

  **Lecture Notes & Questions:**

  **References & Resources:**

  - Colored console output?  
    - Check this SO thread: [https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color){:target="_blank"}  
  - **Testing pyramid** (Google for a couple of images and take a good look at a few of them)  
  - Unit Tests:  
    - Some things to consider:  
      - Always implement as many tests as you can after developing a specific function or feature (before moving on to the next part of your code).  
        - ALWAYS make sure to break your tests in order to test them (tests are code that should be tested)  
      - Try to have a high test coverage, meaning all parts of the code should be tested.   
      - Your functions must do one thing and one thing only  
      - 1) They adhere to the **Single Responsibility Principle**  
        - You can easily test if your functions follow this principle by picking a function and asking yourself to describe what this function is doing. If the description (your response) contains the word “and”, you should probably break this down into multiple functions. Example: “this function fetches the user data, calculates and displays the average rating.” You probably want to break this down into 3 functions: **fetchUserData(userId):userData => calculateAvgRating(userData):avgRating => renderData(avgRating):void => Expect to see the average rating in the screen**   
        - There might be the case where you want to combine these units into a function: **displayAvgUserData()**  
      - 2) Your functions should be pure, meaning they should have no side-effects (affecting parts of the code that is outside the function body).   
        - A pure function is a function that accepts an input, treats this input (argument(s) **as a read-only (immutable) value,** and produces and returns some kind of output value. A pure function should always give the same output given the same input. 40,2 in => 42 out (ALWAYS)  
        - A function that works with a global variable, or changes a variable that belongs to the outer scope is an impure function.  
  - [ts-node](https://www.npmjs.com/package/ts-node#installation){:target="_blank"}  
  - A real-life example from GitHub where application is complemented with thorough testing:  
    - [Source code (a class with various methods [units])](https://github.com/sedhossein/pregex/blob/master/src/Pregex.php){:target="_blank"}  
    - [Tests for each method [unit]](https://github.com/sedhossein/pregex/blob/master/tests/PregexTest.php){:target="_blank"}

<!-- Summary -->

### Exercises

  - **Challenge:** optimize and improve the UTILS.test.js so that there is an Error or Success message at the end. If all the tests pass, you should see the number of tests that succeeded along with a green output and some emoji. If some of the tests fail, you should see some relevant information displayed in red with a X emoji.  
    - Example: *`✅`* **All tests (5/5) completed successfully.**  
    - Example: **❌Tests failed. Passed 3/5.**  
  - **Challenge:** improve the test coverage of the UTILS.js by handling as many *edge cases* as you can (null, undefined, wrong types, large numbers, etc.).   
  - **Challenge:** How to use tsc (or npx tsc) to target specific files? (and avoid tsc scanning node_modules, etc.)?  
  - **Challenge:** How to run ts-node and have it execute .ts files without errors!  
    - [https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node](https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node){:target="_blank"}  
  - Study:  
    - [Basic Terminologies of Software Testing](https://web.archive.org/web/20241114033228/https://www.appsierra.com/blog/terminologies-of-software-testing){:target="_blank"}

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week32/progress/progress.draft.w32.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 32 - Day 2 | Testing -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 32 - Day 2</span> | Testing</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - TypeScript & Testing FTW

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week32/assets/day01/code){:target="_blank"}

  **Lecture Notes & Questions:**

  - **TypeScript + React:**  
    - **How to define types for hooks:**  
      - `const r = useState<POSSIBLE_TYPES_HERE>(INITIAL_VALUE)`  
      - `const r = useState<string|null|number>(null)`  
      - `const r = useRef<HTMLFormElement|null>(null)`  
  - `(method) ParentNode.querySelector<Element>(selectors: string): Element | null (+4 overloads)`  
    - This is the TypeScript *signature* for the `documentQuerySelector()`  
    - **ParentNode:** this is the TS type for the Object that contains this method  
      - `document` can be of `ParentNode`  
      - `document.querySelector(“.an-element”).querySelector()`  
    - `<Element>: ?`  
    - `Element|null` the return type  
  - **VSCode: Settings** => search for auto-save => `files.autoSaveWhenNoErrors`  
  - **VSCode:** [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors){:target="_blank"}  
  - Testing document/DOM-API in Vitest  
    - Initially when you use document.* in tests you’ll get “document is not defined” because vitest runs in Node.js environment where DOM is not a thing.  
    - One solution would be to:  
      - Install jsdom (or happy-dom): `npm install --save-dev jsdom`  
      - Put this comment in your tests:  

    ```js
    /**  
     * @vitest-environment jsdom  
     */  
    ```

    - Alternatives exist through the configuration files *(vite.config.json, vitest.config.json or vitest.config.ts???, ts.config.json, etc.)*  
      - Check the docs: [https://vitest.dev/config/\#environment](https://vitest.dev/config/#environment){:target="_blank"}  
  - Vitest: you can either skip certain tests or focus on individual tests by using the following methods on the it(), describe() and test() methods of vitest:  
    - `it.skip(...)`  
    - `it.only(...)`  
    - `describe.skip()` or `describe.only()`  
    - `test.skip()` or `test.only()`  
  - Be very careful with NaN checks, because **NaN === NaN will ALWAYS BE false**  
    - The safest way is through **Number.isNaN( value )**   
    - **CAUTION:** There is also a global **isNaN()**. **AVOID IT!**  
  - **utils.ts:10 Uncaught Error** means there’s an Error thrown somewhere and you are not explicitly handling it, e.g. try/catch, catch(), etc.  
  - For testing React Components we need to bring in **React Testing Library**  
    - [https://testing-library.com/docs/react-testing-library/intro](https://testing-library.com/docs/react-testing-library/intro){:target="_blank"}  
      - For TS: `npm install --save-dev @testing-library/react @types/react-dom @types/react`  
    - Great intro to RTL: [https://www.robinwieruch.de/vitest-react-testing-library/](https://www.robinwieruch.de/vitest-react-testing-library/){:target="_blank"}  
  - When installing npm packages (and if they do not already include TypeScript types) you can use the @types repo:  
    - `npm i sharp`  
    - `npm i -D @types/sharp`  
    - `npm install react`  
    - `npm install --save-dev @types/react`

<!-- Summary -->

### Exercises

  - **Do you know the [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture){:target="_blank"} elements?**  
    - Cropping or modifying images for different media (screen sizes) conditions  
    - Offering alternative image formats, for cases where certain formats are not supported.  
      - You can serve the highly compressed webp image type for browsers that support this format and provide an alternative fallback for older browsers that do no support webp  
  - Study open source projects (GitHub, GitLab, Bitbucket) and take a look at how they organize tests  
    - [**sharp**](https://github.com/lovell/sharp/tree/main/test/unit){:target="_blank"} *(a Node.js module for working with images on the server)*  
  - **Testing Library** (which includes React Testing Library): *“The @testing-library family of packages helps you **test UI components** in a user-centric way.”*  
  - Discover [**React Testing Library**](https://testing-library.com/){:target="_blank"}:  
    - The methods available for querying the DOM (grabbing HTML elements)  
    - The methods for testing whether these selected elements have a particular property, e.g. contain some text, etc.  
    - The methods for triggering actions, e.g. enter value in an input, click a button

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week32/progress/progress.draft.w32.d02.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 32 - Day 3 | Practice Day -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 32 - Day 3</span> | Practice Day</h2>
  </summary>

### Schedule

  ![](./assets/day02/woman.coder.png)

  - **Practice on the topics and share your questions**

### Study Plan

  Today is practice day. Practice on the topics covered yesterday
  and share your thoughts, questions and insights.

  Happy hacking!

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 32 - Day 4 | Async Mysteries -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 32 - Day 4</span> | Async Mysteries</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - Asynchronous code and the HTMLImageElement
  - Promises and more asynchronous mysteries

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week32/assets/day03/code){:target="_blank"} and the diagrams [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week32/assets/day03){:target="_blank"}.

  **Lecture Notes & Questions:**

  **References & Resources:**

  - **Events** are *things* that happen during the lifecycle of a web application and these are events triggered by the user or the system (either the browser or external actors, e.g. a server sending a message);  
  - [JS Modules are deferred by default](https://x.com/addyosmani/status/1233346105842122754){:target="_blank"}  
  - [Async vs Defer - Network Optimisation for Web Apps](https://preetiroshan.hashnode.dev/async-vs-defer-network-optimisation-for-web-apps){:target="_blank"}  
  - `new Image()` creates a new `HTMLImageElement` object (go check MDN on that)  
    - [HTMLImageElement: complete property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/complete){:target="_blank"}  
  - [**Progressive JPEG images**](https://www.hostinger.com/tutorials/website/improving-website-performance-using-progressive-jpeg-images){:target="_blank"}

<!-- Summary -->

### Exercises

  - **Challenge:** make sure to start the game or display a Start Game button or run any code when ALL the images have been loaded. (game.js)  
    - **Tricky part:** how to **deal with some errors** that might happen. Example: make sure that some image URLs are correct (and therefore loaded) and some URLs are misspelled, instead of image.jpg, write image.jpgZZZ or iiii.jpg   
      - In cases like these, we tend to inform the user and act accordingly: retry loading the images that were not loaded, or run the code without using them.   
  - **CHALLENGE:** How can you get access to all the loaded images (when they have loaded) in the callback function?  
  - **CHALLENGE:** Try displaying a percentage loader while the images are loading.  
    - When the first one has loaded, show: 33%  
    - When the 2nd, show: 66%  
    - When all of them show: 100%  
    - Or use a loading spinner so that the users know that something is loading.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week32/progress/progress.draft.w32.d04.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 32 - Day 5 | End-to-End Testing & TDD -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 32 - Day 5</span> | End-to-End Testing & TDD</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - End-to-End Testing and Test Driven Development (TDD)

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week32/assets/day05/code){:target="_blank"} and the diagrams [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week32/assets/day05){:target="_blank"}.

  **Lecture Notes & Questions:**

  **References & Resources:**

  - **Testing:**  
    - **AAA: Arrange, Act, Assert Pattern**  
    - **RTL: [getByTestId](https://testing-library.com/docs/queries/bytestid/){:target="_blank"}**  
    - **ALWAYS BREAK YOUR TESTS AND MAKE SURE THAT THEY FAIL**  
  - **GitHub: when you are viewing a repo, press the . to go into VSCode Dev mode**  
  - **Supabase tests:** [https://github.dev/supabase/supabase/tree/master/tests](https://github.dev/supabase/supabase/tree/master/tests){:target="_blank"}  
  - Screenshot regression testing  
  - [https://www.cypress.io/](https://www.cypress.io/){:target="_blank"} (Integration/Component/E2E)  
  - **Nightwatch**  
  - **Playwright**  
  - **RTL also supports: [Snapshot Testing](https://radixweb.com/blog/snapshot-testing-in-react-testing-library#What){:target="_blank"}**  
  - [**Test-Driven-Development (TDD)**](https://en.wikipedia.org/wiki/Test-driven_development){:target="_blank"}  
    - [**RedGreen Diagram**](https://www.icterra.com/wp-content/uploads/2020/01/Test_01-1.png){:target="_blank"}  
  - [**FizzBuzz**](https://en.wikipedia.org/wiki/Fizz_buzz){:target="_blank"}

<!-- Summary -->

### Exercises

  - **Research and study the AAA**  
  - **PRACTICE:**  
    - Study and practice based on this article: [**A really simple example of TDD in JavaScript**](https://learnitmyway.com/tdd-example/){:target="_blank"}  
    - **Try to find and practice on the “99 bottles of beer” song test**  
      - [**Sandi Metz**](https://sandimetz.com/99bottles-sample-js){:target="_blank"} has some great workshops

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week32/progress/progress.draft.w32.d05.csv**

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