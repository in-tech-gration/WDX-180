---
title: Week 31 | Advanced JavaScript
---

<hr class="mb-0">

<h1 id="{{ Week 31-Advanced JavaScript | slugify }}">
  <span class="week-prefix">Week 31 |</span> Advanced JavaScript
</h1>

<img src="assets/diorama.jpg" />

<div class="week-controls">

  {% assign week_num = 31 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 31 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 20/5/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 31 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 31 - Day 1 | Object Constructors & Object Instances -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 31 - Day 1</span> | Object Constructors & Object Instances</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** TypeScript, Objects Constructors & Instances
  - **Part 2:** TypeScript, Objects Constructors & Instances

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week31/assets/day01/code){:target="_blank"} and the diagram [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week31/assets/day01/20.05.2024-Object.Hierarchies.png){:target="_blank"}.

  **References & Resources:**

  - [Object.hasOwn()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn){:target="_blank"}  
    - Introduced in [ES2022](https://tc39.es/ecma262/2022/#sec-object.hasown){:target="_blank"}  
    - ...and not available [before that](https://tc39.es/ecma262/2021/#sec-properties-of-the-object-constructor){:target="_blank"}  
  - [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors){:target="_blank"}  
  - [Axel Rauschmayer: JavaScript inheritance: beyond the basics](https://www.youtube.com/watch?v=NyClWddeO_A){:target="_blank"}

  - For private methods/properties we can use:  
    - the *private* keyword in TypeScript  
    - the `#` hash character in JavaScript

  **Lecture Questions:**

  - Property `hasOwn` does not exist on type `ObjectConstructor`. Do you need to change your target library? Try changing the `lib` compiler option to `es2022` or later. `Object.hasOwn(pet,"run")` 😰   
  -   `pet.hasOwnProperty("run")`  
    - [SO: Property 'assign' does not exist on type 'ObjectConstructor'](https://stackoverflow.com/questions/35959372/property-assign-does-not-exist-on-type-objectconstructor){:target="_blank"}  
  - Are static methods/properties the same as private methods/properties?  
    - No   
  - What is an *instance*?  
    - Any object created using the new keyword. The object is always **an instance of** the Class or Function Constructor that created it.

<!-- Summary -->

### Exercises

  - **Study:** [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof){:target="_blank"}  
  - **Study:** [Sparse Arrays (vs Dense Arrays)](https://2ality.com/2012/06/dense-arrays.html)  
    - Also follow and read this blog and his books, articles and videos  
  - [Study private properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)  
  - Investigate (more) on the difference between: **if ( obj.prop ) and if ( “prop” in obj )**  
    - *“A property may be present in an object but have value undefined. Therefore, x in obj is not the same as obj.x \!== undefined.” \~ The in operator @ [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in#description)*  
  - Try the following:  
    - Create a class (e.g. Cat, Fish) and/or constructor and then create instances of Cat and Fish (e.g. siameseCat) and try using the **object instanceof Cat** check.  
  - **Study:** [Array Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)  

  - [**Start this TypeScript course**](https://www.totaltypescript.com/tutorials/beginners-typescript)

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week31/progress/progress.draft.w31.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 31 - Day 2 | Expenses Chart Challenge -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 31 - Day 2</span> | Expenses Chart Challenge</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Study the following TypeScript concepts and then scroll down
  to the `Exercises` section to start your Frontend coding challenge.

  - [TypeScript Generics explained with pets](https://maddev.netlify.app/development/typescript_generics/){:target="_blank"}

  - [Generic Types](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types){:target="_blank"}

  - Try TypeScript with [ts-node](https://www.npmjs.com/package/ts-node){:target="_blank"}, a TypeScript execution engine and REPL for Node.js.

<!-- Summary -->

### Exercises

  ![](./assets/expenses.chart.jpg)

  Time for a Frontend coding challenge!

  In this challenge, you'll create a bar chart component from scratch.

  Visit the [Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt){:target="_blank"} web page and start hacking!

  You can also download the exercise resources and instructions [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week31/assets/day02){:target="_blank"}.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week31/progress/progress.draft.w31.d02.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 31 - Day 3 | Object Wrappers, Falsy Values & Sets -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 31 - Day 3</span> | Object Wrappers, Falsy Values & Sets</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Primitive Objects
  - **Part 2:** Object Wrappers, Falsy Values & Sets

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week31/assets/day03/code/index.js){:target="_blank"} and the diagrams [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week31/assets/day03){:target="_blank"}.

  **References & Resources:**

  - **Bookmarks you MUST have as a JS developer:**  
    - [**Primitive Values in JS**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values){:target="_blank"}  
    - [**Operator Precedence Table**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table){:target="_blank"}  
    - [**Falsy values**](https://developer.mozilla.org/en-US/docs/Glossary/Falsy){:target="_blank"}  
  - typeof (unary) operator always returns a string   
  - If you need to go past the Number.MAX_SAFE_INTEGER, use the BigInt notation:  
    - Instead of: `(9007199254740991+1) === (9007199254740991+2) === true`???  
    - Do this: `(9007199254740991n+1n) === (9007199254740991n+2n)`  
      - turn Number(s) into BigInt(s) by placing the n at the end of the number  
  - With floating point numbers (aka decimals), be extra careful.  
    - Consider using a library like decimal.js or big.js  
  - Use the _ notation for large integers: 10_000_000  
  - 0/-0 are the only falsy number values (When coerced to a Boolean they produce false)  
  - “” empty string is the only falsy String value (when coerced to a Boolean it produces false)  
  - Value type conversion can happen in 2 ways:  
    - Explicitly: String(5);  
    - **Implicitly**: 5 + “”; => “5”  
      - Another example: if/while/switch/dowhile  
      - if ( 5 ){ ... } => if ( **5 => Boolean(5) => true** ){ ... }  
  - You will probably never have to deal (or find) Object Wrapped Primitives in any codebase.  
  - When ES6 came out (?) a bunch of new objects were introduced:  
    - Set  
    - WeakSet  
    - Map  
    - WeakMap  
    - Special kind of Arrays: [Indexed Collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#indexed_collections){:target="_blank"} (mainly for working with binary data)  
  - Some Constructor Functions can be used without the new keyword:  
    - Date(), new Date(), Error(), new Error()   
  - Others are pretty strict and will throw an Error  
    - Promise, Set, etc.  
  - Others are completely forbidden (illegal constructors)  
    - new HTMLElement() will throw an error

<!-- Summary -->

### Exercises

  **Study Guide**

  - **Discover Set(s) and its methods:**  
    - `values()` *(similar to Object.values())*  
    - `keys()` *(similar to Object.keys())*  
    - `entries()` *(similar to Object.entries())*  
    - `forEach()`   
    - Try using Sets with **Object references**  
    - Try and google for an introductory video on Math and Set Theory

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week31/progress/progress.draft.w31.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 31 - Day 4 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 31 - Day 4</span> | TBA</h2>
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

<!-- Week 31 - Day 5 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 31 - Day 5</span> | TBA</h2>
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