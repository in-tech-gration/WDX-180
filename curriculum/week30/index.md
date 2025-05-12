---
title: Week 30 | TypeScript
---

<hr class="mb-0">

<h1 id="{{ Week 30-TypeScript | slugify }}">
  <span class="week-prefix">Week 30 |</span> TypeScript
</h1>

<img src="assets/TS01.jpg" />

<div class="week-controls">

  {% assign week_num = 30 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 30 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 13/5/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 30 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 30 - Day 1 | Strictly Typed JavaScript -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 30 - Day 1</span> | Strictly Typed JavaScript</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Intro to TypeScript: High level overview
  - **Part 2:** Intro to TypeScript: Type Checking in JavaScript using JSDoc

  You can find the lecture code [here](){:target="_blank"}

  **Lecture Questions:**

  - *What options are available for contact forms?*  
    - (Especially ones that do not require a server and are free)  
    - Netlify + Contact form  
    - Just include your email (but make sure to obfuscate it to avoid spammers)  
      - Google: how to protect my email +static web site  
      - `<a href=”notme@mail.com”>Contact me</a>`  
        - JS: dynamically create the correct email address and append it to the `<a>`  
      - You can also open the visitors’ email client, containing your email address and a subject. [Google for that...](https://stackoverflow.com/questions/13231125/automatically-open-default-email-client-and-pre-populate-content){:target="_blank"}

  **References & Resources:**

  - **TypeScript**  
    - [TS is JS + Types + Cool features](https://serokell.io/files/0u/0ufu1q21.js-ts.jpg){:target="_blank"}  
    - [Official Website](https://www.typescriptlang.org/){:target="_blank"}  
    - [TypeScript Error Codes](https://typescript.tv/errors/){:target="_blank"}  
    - Enable TS check on plain JS  
      - 1) `// @ts-check` (comment/directive at the top of the file)  
      - 2) VSCode => Settings => Search for “implicitProjectConfig check js”  
        - Setting Code ID: `js/ts.implicitProjectConfig.checkJs`   
    - Disable TS check on next line: `// @ts-ignore`  
    - Checking in 3 levels:  
      - Enabling ts-check (semantic check) in JS  
      - Enabling ts-check + use [JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html){:target="_blank"}  
  - [Emailjs](https://www.emailjs.com/){:target="_blank"}: Send Email Directly From Your Code. Free, no-server, 200 emails per-month limit

<!-- Summary -->

### Exercises

  - [**Explore JSDoc types**](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html){:target="_blank"} and use the [playground](https://www.typescriptlang.org/play/?filetype=js#code/PTAEAEBcGcFoGMAWBTeBrAUB4AqHFIBPAB2VAG9zQBDALlGkgCcBLAOwHMAaUAI3rYBXALa9kTUAF9JoHMAzwA9m0agAbtSYBOUAF4KNegBYATD36gARKctSsufFBJlKhhs3bc+AkWInTZeSUVSHVNAEYABj0DOisbc2MTKSA){:target="_blank"} to practice  
    - (Make sure that **Lang is set to JavaScript** in the TS Config)  
  - Code through: [Type safety in JavaScript with JSDoc and VSCode](https://github.com/in-tech-gration/type-safety-in-javascript){:target="_blank"}  
  - Read: [Type Safe JavaScript with JSDoc](https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76){:target="_blank"}  
    - [https://www.stefanjudis.com/today-i-learned/vs-code-supports-jsdoc-powered-type-checking/](https://www.stefanjudis.com/today-i-learned/vs-code-supports-jsdoc-powered-type-checking/){:target="_blank"}  
  - **JSDoc Cheatsheet**: [https://devhints.io/jsdoc](https://devhints.io/jsdoc){:target="_blank"}  
  - **Enforce JSDoc Typing in one of your projects**  
  - **Research:** does `ts-check` run on inline `<script>` inside HTML?

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week30/progress/progress.draft.w30.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 30 - Day 2 | Exploring the Visibility API -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 30 - Day 2</span> | Exploring the Visibility API</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  [Here's some code](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week30/assets/day02/code){:target="_blank"} to study and practice today.

  - Tasks:
    - Read and understand what the code does
    - Test the code (press the play button and switch to another Tab to see how the app behaves differently)
    - Does this remind you of chat applications (like Slack) that provide some notification when the chat Tab is out of focus?
    - Learn more about the Visibility Web API
    - Enforce `ts-check` and apply as many `JSDoc` types as you can
    - Improve the code and add comments
    - Share your version and questions!
    - **Have fun and enjoy!** :smiley:

  - Some [amazing tips](https://twitter.com/wesbos/status/1790072655913050579){:target="_blank"} from Wes Bos for `<textarea>`'s. Completely mind-blowing CSS like `ex units`, `lh units` and more. Check it out!

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 30 - Day 3 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 30 - Day 3</span> | TBA</h2>
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

<!-- Week 30 - Day 4 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 30 - Day 4</span> | TBA</h2>
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

<!-- Week 30 - Day 5 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 30 - Day 5</span> | TBA</h2>
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