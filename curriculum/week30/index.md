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

  <span>Updated: 16/5/2025</span>

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

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


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

<!-- Week 30 - Day 3 | TypeScript: A Language is born -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 30 - Day 3</span> | TypeScript: A Language is born</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** How transpiled languages like TypeScript work. Building a mock language: SillyScript.
  - **Part 2:** TypeScript.

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week30/assets/day03/code){:target="_blank"} and the diagrams [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week30/assets/day03/diagrams){:target="_blank"}.

  **Lecture Notes & Questions:**

  - How to transpile TypeScript  
    - On-the-fly in-the-browser transpilation via Babel ([ts-in-the-browser.html](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week30/assets/day03/code/ts-in-the-browser){:target="_blank"})  
    - Install TypeScript compiler globally: **npm install -g tsc**  
      - Search: for global tsc install  
    - Install TypeScript compiler locally: npm install tsc (in a project folder)  
    - Use another compiler (babel, SWC, etc.)  
  - Use TS in a project (manual)  
    - 1) initialize the project as an npm project (create a basic package.json)  
    - 1.1) `npm init` (and follow the instructions)  
    - 1.2) `npm init -y` (quickly run the command with the default options)  
    - Ready to run `npm install` in your project  
    - 2) `npm install typescript`  
    - 3) Use npx tsc to compile: \`npx tsc file.ts\`  
    - 3.1) `npx tsc filea.ts fileb.ts`  
    - 3.2) `npx tsc *.ts` (transpile all .ts files)  
  - Use TS in a project (auto)  
    - Using Vite:  
      - [Pick your template of choice](https://vitejs.dev/guide/#trying-vite-online) (e.g. React, Vue, React TypeScript, etc.)  
      - `npm create vite@latest <PROJECT_NAME> -- --template <TEMPLATE_NAME>`  
      - Example: `npm create vite@latest **basics** -- --template **vanilla-ts**`

<!-- Summary -->

### Exercises

  - **Explore TypeScript:** [https://www.typescriptlang.org/](https://www.typescriptlang.org/){:target="_blank"}  

  - **Create and work on a vite TypeScript project**  

  - Experiment with TypeScript in the [TS playground](https://www.typescriptlang.org/play/){:target="_blank"}  

  - Study: [Learn X in Y minutes](https://learnxinyminutes.com/docs/typescript/){:target="_blank"}

  - Study: [Learn TypeScript in 30 Minutes](https://tutorialzine.com/2016/07/learn-typescript-in-30-minutes){:target="_blank"}

  - Work through the **exercises** found in this [**WDX module**](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/typescript/exercises/){:target="_blank"}

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week30/progress/progress.draft.w30.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 30 - Day 4 | TypeScript: Theory & Practice -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 30 - Day 4</span> | TypeScript: Theory & Practice</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Go through the [Learn Typescript (with Ania Kubow)](https://scrimba.com/learn/typescript){:target="_blank"} interactive Scrimba course and then work on as many exercises as you can on [https://typescript-exercises.github.io/](https://typescript-exercises.github.io/){:target="_blank"}. Make use of the hints and links provided.

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 30 - Day 5 | TypeScript & React -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 30 - Day 5</span> | TypeScript & React</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** More TypeScript
  - **Part 2:** TypeScript & React

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week30/assets/day05/code){:target="_blank"} and the diagram over [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week30/assets/day05/JSX.and.TS.bring.TSX.png){:target="_blank"}

  **Questions:**

  - Does the union order matter? `number | string`   
    - No  
  - What about PropTypes with TSX  
    - When you are using TSX, just prefer the TS types and forget the PropTypes.

  **Tips**

  - **Treat ALL warnings as errors!**  
    - You can set this on TypeScript and ESLint  
    - In general, as you are coding, when you see the “yellow-ish” warnings in the console, stop and fix them (treat them as errors)  
  - `getMonth()` returns 0-11 or NaN (all these are of type “number”)  
    - new Date("XXX").[getMonth](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)() => NaN

  **References & Resources:**

  - **Turn all Warnings to Errors:**  
    - **Settings > Search for** `typescript.reportStyleChecksAsWarnings` > turn this to true  
    - Turn unreachable code (e.g. infinite loops) into errors:  
      - `tsconfig.json` => `"allowUnreachableCode": false`  
  - Working with decimals  
    - [https://mikemcl.github.io/decimal.js/](https://mikemcl.github.io/decimal.js/){:target="_blank"}  
    - [https://mikemcl.github.io/big.js/](https://mikemcl.github.io/big.js/){:target="_blank"}  
  - [TypeScript: Ranges](https://catchts.com/range-numbers){:target="_blank"}  
  - Great point of resource for TypeScript (+React) related issues and tips:  
    - [https://bobbyhadz.com/](https://bobbyhadz.com/){:target="_blank"}  
    - Google focus on a domain: `<KEYWORDS>` `site:bobbyhadz.com`  
  - React TypeScript types:  
    - Elements (`<div>...</div>`) => JSX.Element  
  - [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/){:target="_blank"} (reference of types)

  - **React (JSX) to TypeScript (TSX)**
    - [Props](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example){:target="_blank"}
    - [Components](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components){:target="_blank"}
    - [Hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks){:target="_blank"}
    - [Forms and Events](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events){:target="_blank"}

<!-- Summary -->

### Exercises

  Study and practice the following:

  - [**TypeScript: never**](https://www.typescriptlang.org/docs/handbook/2/functions.html#never){:target="_blank"}  
    - Can you come up (or find) some more examples?   
  - [**TypeScript: Union Types (\|)**](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types){:target="_blank"}**:** *“A union type is a type formed from two or more other types, representing values that may be any one of those types.”*  
  - [**TypeScript: Type Assertions**](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions){:target="_blank"} (as Type)  
  - [**TypeScript: Literal Types**](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types){:target="_blank"}  
  - **Try out TSX with PropTypes:** what happens if we combine TS types AND PropTypes for the Props checking  
  - **TypeScript:React** [**Props**](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example){:target="_blank"}  
  - **Try out TS, React and TSX [online with Babel](https://babeljs.io/repl){:target="_blank"}**

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week30/progress/progress.draft.w30.d05.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


### Extra Resources

  - [TypeScript Origins: The Documentary](https://www.youtube.com/watch?v=U6s2pdxebSo){:target="_blank"}

  - [Let's Learn TypeScript! (with Orta Therox) — Learn With Jason](https://www.youtube.com/watch?v=BHYgpbPC4wM){:target="_blank"}

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