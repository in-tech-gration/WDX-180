---
title: Week 18 | Intermediate JavaScript
---

<hr class="mb-0">

<h1 id="{{ Week 18-Intermediate JavaScript | slugify }}">
  <span class="week-prefix">Week 18 |</span> Intermediate JavaScript
</h1>

<img src="assets/pexels-gabby-k-7412035.jpg" />

<div class="week-controls">

  {% assign week_num = 18 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 18 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 14/2/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 18 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 18 - Day 1 | Recreate Countries of the World Quiz Game -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 18 - Day 1</span> | Recreate Countries of the World Quiz Game</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  ![](./assets/countries-of-the-world.jpg)

  In these lectures, we are going to try and recreate an online quiz game entitled **Countries of the World Quiz**.

  You can find the online quiz game on [this link](https://www.jetpunk.com/quizzes/how-many-countries-can-you-name)_blank.

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Q&A. Recreating `Countries of the World Quiz` game (Part 1)
  - **Part 2:** Recreating `Countries of the World Quiz` game (Part 2)

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week18/assets/code/country-quiz){:target="_blank"}

  **Lecture Notes & Questions:**

  - **Reminder:** [...document.querySelectorAll("td")] => `document.querySelectorAll("td")`  
    - There is a difference between [**NodeList**](https://developer.mozilla.org/en-US/docs/Web/API/NodeList){:target="_blank"} and [**HTMLCollection**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection){:target="_blank"}  
      - `NodeList` => `@@iterator` => `for..of`
  - **console.dir**( HTMLElement objects ) for a different view on the console  
  - [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement){:target="_blank"} <= [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement){:target="_blank"}  
  - [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection){:target="_blank"} does not support `forEach` (you’ll need to convert to array)  
  - Convert array-like objects *(HTMLCollection, NodeList, arguments,etc.)* to Arrays:  
    - **Array.from** (check the MD)  
    - **[...someArrayLikeObjectHere]**  
  - [**NodeList**](https://developer.mozilla.org/en-US/docs/Web/API/NodeList){:target="_blank"} supports forEach  
  - **DOM API**:  
    - `document.getElementById // A single HTMLElement`  
    - `document.querySelector  // A single HTMLElement` 
    - `document.getElementsByClassName // HTMLCollection`  
    - `document.getElementsByTagName // HTMLCollection`  
    - `document.querySelectorAll // NodeList`  
  <!-- - The different objects that are returned by the DOM API: [codepen](https://codepen.io/kostasx/pen/yLwRdee?editors=1011)   -->
  - 2 big categories of graphics in computers: Bitmaps (or Raster) vs Vectors  
  - Include a folder in VSCode workspace: `code -a .`  
  - Search for “json countries github” to find resources for use in JS  
  - [**Array some()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some){:target="_blank"}

  **References & Resources:**

  - [Free SVG World Map](https://simplemaps.com/resources/svg-world){:target="_blank"}

  - [Color this sofa! – SVG + Blend Mode trick](https://codepen.io/kostasx/pen/abbZyzj){:target="_blank"}
  - [Undraw (free vector illustrations)](https://undraw.co/illustrations){:target="_blank"}

  - SVG Editors:
    - [https://boxy-svg.com/app](https://boxy-svg.com/app){:target="_blank"}
    - [https://www.vectorpea.com](https://www.vectorpea.com){:target="_blank"}

  - Free Vectors:
    - [SVGP*rn](https://svgporn.com/){:target="_blank"}
    - [SVG and PNG tech icons](https://techicons.dev/){:target="_blank"}
    - [https://www.vecteezy.com/](https://www.vecteezy.com/){:target="_blank"}

<!-- Summary -->

### Exercises

  Complete the quiz game and make sure to implement the following requirements:

  - Enable case-insensitive input
  - Clear input value once we have the correct input
  - Update count of found countries
  - Add some styling to the game so that it looks like the original game
  - Find out how to properly center and display an SVG  
    - Learn about the `width`, `height` and `viewbox` attributes  
  - Deal with cases/values like *Curaçao*  
  - Deal with cases like "St. Eustatius (Netherlands)"  
  - Question/Study: What are some use cases for `submit` vs `change` vs `input` events?  
    - For example, Google search input uses the “input” event

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week18/progress/progress.draft.w18.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


### Extra Resources

  ---



  _Photo by [Monstera Production](https://www.pexels.com/photo/a-world-map-on-the-wall-7412035/)_

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 18 - Day 2 | The Observer Pattern -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 18 - Day 2</span> | The Observer Pattern</h2>
  </summary>

### Schedule

  - **Watch the lecture**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  [![](./assets/PubSubNoTime.jpg)](https://youtu.be/fRpYNR_vM5A){:target="_blank"}

  Watch our lecture on: [Intro to Design Patterns: A Simple Implementation of the Observer Pattern in JavaScript](https://youtu.be/fRpYNR_vM5A){:target="_blank"}

  The lecture code can be found [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/computer_science/design_patterns/observer_pattern/source_code){:target="_blank"}.

  **References and resources for further study:**

  - [On Complex Systems](https://en.wikipedia.org/wiki/Complex_system){:target="_blank"}
  - [The Publish/Subscribe pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern){:target="_blank"}
  - [Implementing the PubSub pattern in JS](https://medium.com/@ignatovich.dm/implementing-the-pub-sub-pattern-in-javascript-a-guide-for-beginners-44714a76d8c7){:target="_blank"}
  - [The Observer pattern at patterns.dev](https://www.patterns.dev/vanilla/observer-pattern){:target="_blank"}
  - [The Observer Pattern](https://refactoring.guru/design-patterns/observer){:target="_blank"}
  - [CRUD explained in 1 minute](https://www.youtube.com/shorts/AkDe3weBBsY){:target="_blank"}
  - [Private Properties in ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties){:target="_blank"}
  - [What is a Complex System?](https://www.youtube.com/watch?v=vp8v2Udd_PM){:target="_blank"} 
  - [Water CSS](https://watercss.kognise.dev){:target="_blank"}

  ![](https://github.com/addyosmani/essential-js-design-patterns/blob/master/diagrams/observer.png)

<!-- Summary -->

### Exercises

  Your task for today is to try and complete all the challenges in the email app that we started developing during the lecture and implement all the required features (delete messages, display messages, star messages, mark messages as unread/read, etc.)

  It would be even better to try and work with one of these really cool email client clones:

  - [https://codepen.io/triss90/pen/WwvyRa](https://codepen.io/triss90/pen/WwvyRa){:target="_blank"}
  - [https://codepen.io/jonvadillo/pen/zzKawv](https://codepen.io/jonvadillo/pen/zzKawv){:target="_blank"}
  - [https://codepen.io/kostasx/pen/mybZpMR](https://codepen.io/kostasx/pen/mybZpMR){:target="_blank"}
  - [](){:target="_blank"}

  ---



  If you have some time left, you can take a look at the next challenge for this week, which is to try and replicate all the features of the Countries Quiz game that we've covered on [Week 18, Day 01](https://in-tech-gration.github.io/WDX-180/curriculum/week18/){:target="_blank"}:

  - Star quiz button
  - Timer
  - List of Continents and countries found (and not found)
  - Pause timer button
  - Disable timer button
  - Help box
  - Give up button
  - Guesses counter
  - Advanced: show missing countries 
  - Your extra features!?

  ![](./assets/Countries.Quiz.Features/help.jpg)

  ![](./assets/Countries.Quiz.Features/pause.and.resume.quiz.jpg)

  ![](./assets/Countries.Quiz.Features/scoring.and.points.jpg)

  ![](./assets/Countries.Quiz.Features/take.quiz.without.timer.jpg)

  ![](./assets/Countries.Quiz.Features/timer.and.giveup.jpg)

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week18/assets/code/country-quiz){:target="_blank"}

  Perhaps you can try using the Observer pattern on the quiz game? That would definitely be a great challenge. Give it a try!

  The original game can be found [here](https://www.jetpunk.com/quizzes/how-many-countries-can-you-name){:target="_blank"}.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week18/progress/progress.draft.w18.d02.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 18 - Day 3 | Intermediate JavaScript -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 18 - Day 3</span> | Intermediate JavaScript</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Q&A on several topics such how `JSON.stringify` deals with functions, what are `Circular References`, the difference between `null` and `undefined`, CSS pseudo-elements and the `attr()` rule, debugging a search box algorithm and more!
  - **Part 2:** We continue debugging and improving the search algorithm, learn about `Number.isInteger` method and `isNaN`, and also learn some cool advanced DOM manipulation methods and properties.

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week18/assets/code/day03){:target="_blank"}

  **Lecture Notes & Questions:**

  Example of a *Circular reference*:

  ```js
  const obj = {  
    name: "Dillion",  
    isDev: true,  
    hobbies: ["singing", "writing"],  
    age: 100,  
  }  
  obj.prop = obj; 
  // (Cannot be stringified due to the infinite reference to itself)    
  ```

  - `JSON.stringify`: *“Arrays are serialized as arrays (enclosed by square brackets). Only array indices between 0 and length - 1 (inclusive) are serialized; **other properties are ignored**.”*  

  - **Best Practices:**  
    - Object rule: dynamic property names ALWAYS inside `[ brackets ]`. Don’t use the . notation. Tip: name your objects like, studentsObj, productsObject, etc.  
    - **Prefer isSomething conditionals than !isSomething (is NOT something)**  
    - **ALWAYS handle error cases** in development  
      - **BREAK THE CODE intentionally,** handle it and **ALWAYS give some user-friendly feedback** to the users  
  - `JSON.stringify` will discard functions  
    - In the case of an Array containing functions, they are converted to null to avoid breaking the Array length and indices.  

  - Study and understand the following code:

  ```js
  const list = [ 10, 20, 30 ];  
  function reducer(accumulator, arrayValue, arrayIndex){  
      console.log(accumulator, arrayValue, arrayIndex);  
        // Try: debugger;  
      // Change the accumulator:  
      accumulator.count = arrayIndex;  
      return accumulator;  
  }   
  const initialAcc = {}  
  list.reduce( reducer, initialAcc );  
  ```

  **References & Resources:**

  - [Study the calc()](https://css-tricks.com/a-couple-of-use-cases-for-calc/){:target="_blank"}  
 
   - Check for compatibility on [caniuse.com](https://caniuse.com/?search=attr()){:target="_blank"}  
    - the [attr()](https://developer.mozilla.org/en-US/docs/Web/CSS/attr#browser_compatibility){:target="_blank"}  
 
  - Try: `for..of` with `index`:  
    - [Adding an Index to the for...of Loop](https://medium.com/@_DandyLyons/how-to-use-a-js-for-of-loop-with-an-index-a4675ed22351#42db){:target="_blank"}  

  - [Circular Reference Error in JavaScript – Meaning and How to Fix It](https://www.freecodecamp.org/news/circular-reference-in-javascript-explained/){:target="_blank"}

  - [Function Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function){:target="_blank"} 

  - [Number.isInteger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger){:target="_blank"}  

  - [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify){:target="_blank"}  

  - [attr()](https://developer.mozilla.org/en-US/docs/Web/CSS/attr){:target="_blank"}

  - [https://www.fruityvice.com/](https://www.fruityvice.com/){:target="_blank"}

<!-- Summary -->

### Exercises

  - Solve the [TextNode Challenge](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week18/assets/exercises/day03/textnode-challenge){:target="_blank"}
    - `ELEMENT.querySelector` targets HTML `<elements>`  
    - We need something different for targeting the text inside those elements

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week18/progress/progress.draft.w18.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 18 - Day 4 | Deconstructing Array reduce -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 18 - Day 4</span> | Deconstructing Array reduce</h2>
  </summary>

### Schedule

  - **Watch the lecture**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  [![](./assets/deconstructing.jpg)](https://www.youtube.com/watch?v=s02LsdIKhVY){:target="_blank"}

  It's time to take a deep dive and deconstruct the notorious `reduce` Array function in JavaScript. It's probably one of the most difficult array methods to grasp and at the same time one of the most powerful and flexible ones. You can replace and recreate almost all other array methods with `Array.prototype.reduce` so pay close attention!

  - Watch the [video](https://www.youtube.com/watch?v=s02LsdIKhVY){:target="_blank"} (74min)

  Here's a [link](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/core/arrays/deconstructing_array_reduce/reduce-visualization/){:target="_blank"} to a nice, animated visualization of `Array.prototype.reduce` by the amazing `Joshua Comeau`. Please give [his GitHub repo](https://github.com/joshwcomeau/reduce-visualization/tree/master){:target="_blank"} a star!

  **References and resources for further study:**

  - [Array.prototype.reduce() at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce){:target="_blank"}
  - [Functional JavaScript: How to use array reduce for more than just numbers](https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 18 - Day 5 | ES6 Classes & Web Components  -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 18 - Day 5</span> | ES6 Classes & Web Components </h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - Function constructors and Prototype
  - ES6 Classes and extending them via the `extends` keyword
  - Native Web Components

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week18/assets/code/day05){:target="_blank"}

  **Lecture Notes & Questions:**

  - What is a function constructor:  
    - 1) Defining and calling a function with the new keyword, e.g. new MyFunction(). Any function called with the new keyword will create **custom** new objects.  
    - 2) new Function(), new Object(), new Promise(), new Array(), new String(), new Number() => they create new objects of a **specific** type.
  - Remember: Don’t put a return statement inside a Function constructor  
  - Classes: just a new syntax for the Function constructor and the prototype mechanism for creating multiple objects  
    - class keyword is lowercase, the class Name is always in PascalCase:   
      - `class MyCoolClass {}`  
      - `class Car{}`   
  - All HTML element objects (in JS) extend the `HTMLElement` class:  
    - `class HTMLDivElement extends HTMLElement {}`  
    - `class HTMLParagraphElement extends HTMLElement {}`  
    - `class HTMLHeadingElement extends HTMLElement {}`

  **References & Resources:**

  - [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes){:target="_blank"}   

  - [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement){:target="_blank"}  

  - [Custom HTML Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements){:target="_blank"}

<!-- Summary -->

### Exercises

  - Practice by building Classes and your own custom Web Components.

  - Find an extensive article about function constructor and learn about the **return statement**.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week18/progress/progress.draft.w18.d05.csv**

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