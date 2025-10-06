---
title: Week 22 | React JS
---

<hr class="mb-0">

<h1 id="{{ Week 22-React JS | slugify }}">
  <span class="week-prefix">Week 22 |</span> React JS
</h1>

<img src="assets/React.js.jpg" />

<div class="week-controls">

  {% assign week_num = 22 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 22 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 13/3/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 22 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 22 - Day 1 | React: PropTypes & Loops -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 22 - Day 1</span> | React: PropTypes & Loops</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Video highlights (thanks to Aris Giotis ❤️):
    - `npm install` and npm packages 03:03
    - Lazy loading for `imports` 05:17
    - Importing local files 08:26
    - Importing npm packages 09:21
    - The `package.json` file: 10:44
    - The `npm init -y` command: 12:15
    - The `node_modules` folder: 15:47
    - The `npm install -g` command: 17:57
    - About dependencies: 25:15
    - CSS import: 30:32
    - Question: .gitignore file: 35:11
    - `node_modules` is a local thing: 35:45
    - Inject 2 React apps to the same codebase: 37:25

  - **Part 2:** Video highlights (thanks to Aris Giotis ❤️):
    - 3rd party package: tailwind CSS: 00:11
    - Importing Tailwind via CDN: 06:11
    - Importing Tailwind via `npx tailwindcss init -p`: 17:54
    - Exercise: 56:33

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week22/assets/day01/code){:target="_blank"}

  **Lecture Notes & Questions:**

  - **Questions**  
    - What does the **-p** flag in **npx tailwindcss init --help** do?  
      - Instead of relying on ChatGPT, you can check the tool’s own documentation: running **npx tailwindcss init --help** produces the following help info: **-p, --postcss => Initialize a `postcss.config.js` file**  
    - `<span onClick={()=> activateVideo()}></span> vs <span onClick={activateVideo}></span>`  

  - **Resources**
    - [VSCode HTML to JSX Extension](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx){:target="_blank"}  
    - Try the [UUID package](https://www.npmjs.com/package/uuid){:target="_blank"} for creating unique IDs  
    - Popular CSS libraries:  
      - Bootstrap  
      - Tailwind  
        - Install Tailwind in a React Vite app: [https://tailwindcss.com/docs/guides/vite](https://tailwindcss.com/docs/guides/vite){:target="_blank"}  
    - [Convert JSX to JavaScript](https://infoheap.com/online-react-jsx-to-javascript/){:target="_blank"}  
    - **PropTypes**:   
      - [Example from the old docs](https://legacy.reactjs.org/docs/typechecking-with-proptypes.html){:target="_blank"} / [prop-types package](https://www.npmjs.com/package/prop-types){:target="_blank"}  
      - The new docs recommend that you prefer TypeScript instead of PropTypes for type checking, but sometimes you might not want to use TS, so PropTypes is a good alternative  
    - **SPA: Single Page Application**  
      - One HTML file (to rule them all), and a React app running on this HTML page, which can have thousands of virtual pages.  
    - **JS: Importing Modules** (JS files)  
      - **CommonJS** syntax: `module.exports = ...`, `require("./lib.js")`  
      - **JS Modules**: `export`, `import` (*lazy loading version of import)  
        - Lazy loading aka load-on-demand  
      - A) `import Component from "./path/subfolder/localfile.js"` (local imports)  
      - b) `import React from "react"` (npm package <= npm install)  
      - Creating a `package.json` (recipe), `dependencies` (ingredients)  
      - Quickly create a basic `package.json`, using the `npm init -y`  
        - Start installing module/packages  
        - `npm install colors` => downloads the package and stores it in the ingredients folder, aka `node_modules`  
      - `npm install -g colors` => download the package in the global `node_modules` => Downloaded to `node_modules/colors`  
      - **The `node_modules` is a local thing. You should NEVER upload it anywhere**, `GitHub`, `npmjs`, `server`. You share dependencies (node_modules) through the `package.json`. When `npm install` is run, it reads the `package.json` and downloads all the `dependencies` and `devDependencies`.  
    - 🤓[**Developer’s Lorem Ipsum generator**](https://developer-ipsum.netlify.app/){:target="_blank"}

  - **Study / Practice**

    - [Read all about rendering lists](https://react.dev/learn/rendering-lists#rules-of-keys){:target="_blank"} in React and **what to watch out** for  
    - When colors play an important part in your app, take into consideration color deficiencies (A11y 101)  
    - **Try installing Bootstrap on a Vite React project**  
    - **Why not supplying PropTypes for BlogPost?**

<!-- Summary -->

### Exercises

  - Complete the `Twitter React Coding Challenge`
    - **Convert this [HTML app](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week22/assets/day01/exercises/Twitter.Clone.html){:target="_blank"} into a React (Twitter clone)**  
      - **Extra step, loop over and display the ‘Who to follow’ and ‘trends’ section**

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week22/progress/progress.draft.w22.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 22 - Day 2 | React.JS Practice -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 22 - Day 2</span> | React.JS Practice</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Here's the recommended plan for today: move straight to the [Exercises](#exercises) section below and start practicing your React skills and earn some Reactive atom ⚛️ points!

<!-- Summary -->

### Exercises

  - **10 x ⚛️**: Start a React Vite project from scratch and connect it to a GitHub repository.
  - **10 x ⚛️**: Enable Tailwind by following the guide here: [https://tailwindcss.com/docs/guides/vite](https://tailwindcss.com/docs/guides/vite){:target="_blank"}
  - **5 x ⚛️**: Install the [handy VSCode extension](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx){:target="_blank"} that converts copy-pasted HTML to JSX
  - **5 x ⚛️**: Install [prop-types package](https://www.npmjs.com/package/prop-types){:target="_blank"}
  - **30 x ⚛️**: Start moving the code from the [Twitter HTML clone](https://raw.githubusercontent.com/in-tech-gration/WDX-180/refs/heads/main/curriculum/week22/assets/day01/exercises/Twitter.Clone.html){:target="_blank"} to your JSX app.

  - Bonus points: 
    - **10 x ⚛️**: Each Tweet should not be repeated. There should be a `<Tweet />` Component that you will loop over (create an Array of tweet objects and use that).
    - **10 x ⚛️**: Ideally, you should have a strict check on the PropTypes of the `<Tweet />` component
    - **10 x ⚛️**: Each Trend should ideally be a single Component (with its own `propTypes`) that repeats based on a loop
    - **10 x ⚛️**: Each Follower should ideally be a single Component (with its own `propTypes`) that repeats based on a loop

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week22/progress/progress.draft.w22.d02.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 22 - Day 3 | React State -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 22 - Day 3</span> | React State</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** DOM, VirtualDOM and State in React
  - **Part 2:** Rendering Components and useState

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week22/assets/day03/code){:target="_blank"}

  Lecture diagrams and animations are found [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week22/assets/day03/diagrams){:target="_blank"}

  **Lecture Notes & Questions:**

  - **Questions**  
    - Is the state setter async?  
      - Yes, it is, but in a React-async way. Not in a Promise way.  
        - Don’t do: **await setState().**

  **References & Resources:**

  - **Hooks:**  
    - A set of functions that have the “use” prefix  
    - Hooks are used with Functional Components  
      - Hooks should NOT be called outside of a functional Component  
  - **State:**  
    - Stateless apps/components (no state)  
    - Stateful apps/components (some sort of state)  
    -   How to define a state in a React Component:  
      - 1) Import and call `useState( “someOptionalInitialValue” );`  
      - 2) Destructure the result of useState into **getter** and **setter**: `const [ counter, setCounter ] = useState(0);`  
    - Whenever the state setter updates the state, React reacts and renders the Component (calls the Component function again with the new state value)  
    - **React state values RETAIN their values across re-renders**  
    - **Normal variables DO NOT RETAIN their values across re-renders**  
  - **Events in React:**  
    - Event are only available on HTML elements  
      - 1) We pick an HTML element  
      - 2) We add an attribute in the form of *onEventName: onClick, onSubmit, onBlur, onChange, onInput, etc.*  
        - Note: In native DOM we use all lowercase: onclick, onsubmit, onblur attributes.

<!-- Summary -->

### Exercises

  - **Implement a UK/Turkey traffic light:**  
    - Red => Orange => Green => Orange => Red  
  - Implement a Traffic Light state using an Array and the **Modulus % operator**  
    - [Study](https://www.youtube.com/watch?app=desktop&v=MrTtsX2Wg9Q){:target="_blank"}  
  - **Implement a Traffic Light that automatically changes** state after x amount of seconds

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week22/progress/progress.draft.w22.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 22 - Day 4 | React State -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 22 - Day 4</span> | React State</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Here's the recommended schedule for today:

  ```js
  const [ studyA, setStudyA ] = useState("https://react.dev/learn/state-a-components-memory");
  const [ studyB, setStudyB ] = useState("https://react.dev/reference/react/useState");

  const [ practiceA, setPracticeA ] = useState("Complete the Traffic Light exercise (manual state transition)");
  const [ practiceB, setPracticeB ] = useState("Complete the Traffic Light exercise (automatic (timer-based) state transition)");
  ```

  - Remember the (React) rule: **State updates ===> Component re-renders**  
    - State updates via the `useState` setter function: `const [ getter, setter ] = useState();`

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 22 - Day 5 | Closures & React Routing -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 22 - Day 5</span> | Closures & React Routing</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Video highlights (thanks to Aris Giotis ❤️):
    - Q&A: Dates, timezones, setTimeout & setInterval
    - Accessing previous and next State
    - Cycling through values and the Modulo % operator
    - Closures
    - Debugging
    - Tracking Component re-rendering

  - **Part 2:** Video highlights (thanks to Aris Giotis ❤️):
    - Closures and stale State
    - Routing, a high-level overview

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week22/assets/day05/code){:target="_blank"}

  **Lecture Notes & Questions:**

  - **Questions**  
    - **Is there a case where we need to clear an interval or timer?**  
      - Yes.(*we need to know about useEffect) When the Component that uses or displays the timer is removed from the page. Or when we want the interval to stop at some particular value.  
    - **How to (1) parse date (2) from an array with (3) objects in (4) React and use (5) Proptypes date requirement:**  
      - 1) Check the MDN docs for the `Date` object  
        - Converting a Date object to a string (toJSON())  
        - Converting a Date string back into an object  
        - How to work with Date objects and the `<input type=”date” value=”string”>`  
      - 2) Learn how to loop, iterate or access elements from an Array  
      - 3) Becoming familiar with manipulation objects  
      - 4) React is JS. Keep in mind the rules of React (render, re-render, state, normal variables vs state variables) and think how they interact with JS rules.  
      - 5) Check the prop-types docs for the proper type. Is there a Date type, PropTypes.date.required?  
    - How to use `setInterval` and `setTimeout` in React*  
      - Things to remember about `window.setInterval` and `window.setTimeout` are:  
        - Async (but **NOT promises**)  
          - `await setTimeout()` <= NO NO NO  
          - Idea: try to turn them into promise-based functions  
        - There are counterparts that clear both of them: *clearInterval* and *clearTimeout*  
        - React complicates matters through the re-rendering  
    - How to cycle through (roughly loop over, go through, iterate **again and again**) values without an use of an array  
      - **Learn more about the % modulo operator and how it can be used in “cycles”**  
      - A switch statement  
      - An object  
      - A single variable that conditionally gets assigned different values  
      - Iterables*  
    - [**React will put your updater function in a queue and re-render your component**](https://react.dev/reference/react/useState#setstate-parameters){:target="_blank"}  

  - **Tips**  
    - **If you want different instances of a Component to share the same state, you will have to move the state to a parent Component**

  **References & Resources:**

  > "You can pass the next state directly, or a function that calculates it from the previous state: setAge(a => a + 1);"



  ~ [Source](https://react.dev/reference/react/useState#setstate-caveats){:target="_blank"}

  - **State rule #1: (!!!)**  
    - **NEVER directly update or modify the state variables:**  
      - **const [ counter, setCounter ] = useState(0);**  
      - **NEVER EVER: counter = counter + 1, counter++**   
  - **Render:**  
    - **Rule:** When the state of a Component changes, React will trigger a re-render (executed the Component function again)  
    - **Subrule:** All the child Components of the parent Component will re-render also (by default)  
    - Note: rendering does NOT imply Real DOM repainting!  
  - **Closures**  
    - When you calculate 43*5, you store 43 and 5, process, respond (return) 215 and then your brain “garbage collects” aka discards the 43 and  5 values.  
  - [Let’s build a React from scratch](https://geekpaul.medium.com/lets-build-a-react-from-scratch-part-1-virtualdom-and-renderer-14f4f716de62){:target="_blank"}  
  - [Deconstructing React - Tejas Kumar](https://www.youtube.com/watch?v=eTcyOCd6v1c){:target="_blank"}  
  - [history.replaceState Browser API (vanilla JS)](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState){:target="_blank"}  
  - [**React Router DOM**](https://reactrouter.com/en/main){:target="_blank"} **(The most popular React library for your production routing needs)**

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