---
title: Week 17 | Objects
---

<hr class="mb-0">

<h1 id="{{ Week 17-Objects | slugify }}">
  <span class="week-prefix">Week 17 |</span> Objects
</h1>

<img src="assets/pexels-thisisengineering-3861972.jpg" />

<div class="week-controls">

  {% assign week_num = 17 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 17 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 1/2/2026</span>

  <h2 class="week-controls__next_week">

    {% if week_num < 36 %}

      {% assign next_week_num = 17 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

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

<!-- Week 17 - Day 1 | Object Creators -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 17 - Day 1</span> | Object Creators</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered: Object creators (constructors), globalThis, understanding `[object Object]` and more. 

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week17/assets/code/day01){:target="_blank"}

  **Lecture Notes & Questions:**

  - ***What is globalThis?***  
    - *globalThis === window (in the browser)*  
    - *globalThis === global (in Node.js)*  
    - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis){:target="_blank"}   

  - ***What is [object Object]?***  
    - if you see '[object Object]', you are probably forcing JS to convert an object to a string (implicitly/automatically).  

  - ***What is Type casting?***  
    - *“**Explicit (manual) type conversion**, also called **type casting**, is a type conversion which is explicitly defined within a program (instead of being done **implicitly/automatically** according to the rules of the language for implicit type conversion).”*  
      - Implicit/Automatic type conversion:  
        - document.body.innerHTML = { a: 1 } => ‘[object Object]’  
      - Explicit/Manual type conversion (aka Type Casting):  
        - document.body.innerHTML = JSON.stringify({ a: 1 })

  - The strange case of `null`  
    - Remember that `null` is **NOT AN OBJECT**, yet **typeof null === ‘object’**  

  - When you see an object method/function call, e.g. `person.getName()` and you want to find out what *this* refers to inside the `getName` function, take a look on the left hand side of the function call: **person.getName(), this === person**  

  - For *this* we learned about the eventHandler rule (`this === event.currentTarget`), we learned the **object**.methodCall() (this === object on the left of the call === **object**), and when we see a function call that is neither an event handler nor an object method (plain function call), we get: 1) this === Window global object or 2) if we have used “use strict”, this === undefined.  

  - **IMPORTANT**: *this* is one of the hardest parts in JS.   
    - Advice: (1) always try to stop and think about the values of *this* whenever you encounter it in your code (knowledge check). (2) console.log’s everywhere!  

  - **Strive for consistency in your code**: A variable’s value or a property’s value should always be the same type. Don’t assign a number and then update the property’s or variable’s value to a string.

  **Suggested material for study & practice:**

  - Come up with as many examples as you can, of objects that have similar structure, e.g. Song Objects, Song Playlist Objects, Books, Facebook/Twitter posts, etc.  
  - Create Function Constructors to easily create multiple instances of these objects  
  - Create Shared functions that you can attach to each object instance through the ...spread operator  
  - Try to visit websites or think of applications that might be using the same pattern (e.g. Google Spreadsheet, YouTube or Google results, etc.)

  **References & Resources:**

  - Use [https://pythontutor.com/](https://pythontutor.com/){:target="_blank"} to visualize JS execution and understand about references.  

  - [Our nested object example](https://pythontutor.com/render.html#code=let%20str%20%3D%20%22String%22%3B%0Alet%20num%20%3D%2042%3B%0Alet%20obj1%20%3D%20%7B%0A%20%20%20%20a%3A1,%20%0A%20%20%20%20getA%3A%20function%28%29%7B%20%20%20%20%20%0A%20%20%20%20%20%20%20%20console.log%28this%29%0A%20%20%20%20%7D,%0A%20%20%20%20b%3A%20%7B%0A%20%20%20%20%20%20%20%20bVal%3A%202,%0A%20%20%20%20%20%20%20%20getB%3A%20function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log%28this%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20To%20access%20'a'%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log%28obj1.a%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0Alet%20objNew%20%3D%20obj1%3B%0Aobj1%20%3D%20null%3B%0AobjNew.b.getB%28%29%3B&cumulative=false&curInstr=5&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false){:target="_blank"}  

  - [Creating objects with **copies of functions**](https://pythontutor.com/render.html#code=function%20CreatePlayer%28name%29%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20name,%0A%20%20%20%20%20%20bagOfThings%3A%20%5B%5D,%0A%20%20%20%20%20%20lives%3A%205,%0A%20%20%20%20%20%20addThingToBag%3A%20function%28thing%29%20%7B%0A%20%20%20%20%20%20%20%20//%20Check%20the%20length%20of%20the%20bag%20and%20display%20something%0A%20%20%20%20%20%20%20%20this.bagOfThings.push%28thing%29%3B%0A%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20removeLife%3A%20function%28%29%20%7B%0A%20%20%20%20%20%20%20%20this.lives%20%3D%20this.lives%20-%201%3B%0A%20%20%20%20%20%20%7D,%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20const%20p1%20%3D%20CreatePlayer%28%22Madmall1966%22%29%3B%0A%20%20const%20p2%20%3D%20CreatePlayer%28%22CaptainHenry2%22%29%3B&cumulative=false&curInstr=6&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false){:target="_blank"} 

  - [Creating object with **references of (reusable)** functions](https://pythontutor.com/render.html#code=const%20PlayerStaff%20%3D%20%7B%0A%20%20%20%20addThingToBag%3A%20function%28thing%29%20%7B%0A%20%20%20%20%20%20//%20Check%20the%20length%20of%20the%20bag%20and%20display%20something%0A%20%20%20%20%20%20this.bagOfThings.push%28thing%29%3B%0A%20%20%20%20%7D,%0A%20%20%20%20removeLife%3A%20function%28%29%20%7B%0A%20%20%20%20%20%20this.lives%20%3D%20this.lives%20-%201%3B%0A%20%20%20%20%7D,%0A%20%20%20%20type%3A%20%22Game%20Character%22%0A%20%20%7D%0A%20%20function%20CreatePlayer%28name%29%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20name,%0A%20%20%20%20%20%20bagOfThings%3A%20%5B%5D,%0A%20%20%20%20%20%20lives%3A%205,%0A%20%20%20%20%20%20removeLife%3A%20PlayerStaff.removeLife,%0A%20%20%20%20%20%20addThingToBag%3A%20PlayerStaff.addThingToBag,%0A%20%20%20%20%20%20type%3A%20PlayerStaff.type%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20const%20p1%20%3D%20CreatePlayer%28%22Madball1966%22%29%3B%0A%20%20const%20p2%20%3D%20CreatePlayer%28%22CaptainHenry2%22%29%3B&cumulative=false&curInstr=7&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  ---



  _Photo by [ThisIsEngineering](https://www.pexels.com/photo/female-software-engineer-coding-on-computer-3861972/)_

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 17 - Day 2 | The Tweeter Coding Challenge -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 17 - Day 2</span> | The Tweeter Coding Challenge</h2>
  </summary>

### Schedule

  - **Complete the Coding Challenge**

### Study Plan

  Here's today's [coding challenge](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/misc/tweeter_practice/). 

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 17 - Day 3 | The Real Constructors & Prototype -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 17 - Day 3</span> | The Real Constructors & Prototype</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Q&A
  - **Part 2:** The Real Function Constructors and prototype

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week17/assets/code/day03){:target="_blank"}

  **Lecture Notes:**

  - In HTML, placing a `<button>` element inside a `<form>` element, (automatically) makes the button a submit mechanism. When you click it, the form gets submitted to the server and the page reloads. That’s the *default Behaviour*.   
    - Ways to prevent a button inside a form submitting the form:  
      - 1) (HTML) Add a `type=”button”` to the `<button>`  
      - 2) (JS) Add an `event.preventDefault()` to the click handler of the `<button>`  
      - 3) (JS) Add an event handler on the form “submit” event and use the `event.preventDefault()` ( form => event listener on “submit”)   
  - The new keyword (always before a function call) turns the function call into a constructor call. The function that was called starts behaving differently (from an ordinary function call): **someFn() vs new someFn()**  
    - What changes with the new keyword?  
      - 1) We get a new object returned from the call (no need for return statement). Most of the times, we don’t want a return statement. The constructor always returns the object.  
  - Functions that are intended to be used as constructors (called with the new keyword) **should ALWAYS START WITH A CAPITAL LETTER**.

  **Suggested material for study & practice:**

  - Study the MDN article on [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#form){:target="_blank"} and learn more about it.  
    - What is the [form attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#form){:target="_blank"} all about?  
  - [Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators){:target="_blank"}  
  - Study the [Operators’ Precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table){:target="_blank"}  
    - define **precedence**: *“the condition of being considered more important than someone or something else; **priority** in **importance**, order, or rank.”*  
  - Study about the [hidden attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden){:target="_blank"}  
  - Manipulate HTML attributes via JS: setAttribute( key, value ), removeAttribute( key ), [toggleAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute){:target="_blank"} ( key ), getAttribute( key )  
  - [Off-by-one Error (Obi-wan)](https://www.wikiwand.com/en/Off-by-one_error){:target="_blank"}  
  - **Practice**: think of 3 different types of objects  
    - Declare a single object  
    - Separate unique and shared properties  
    - Define the constructor  
    - Define the prototype  
    - Just start simple and go more advanced with the 2nd and 3rd object

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 17 - Day 4 | The Murdle Table Coding Challenge -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 17 - Day 4</span> | The Murdle Table Coding Challenge</h2>
  </summary>

### Schedule

  - **Complete the Coding Challenge**

### Study Plan

  ![](./assets/detective.logico.2.png)

  Here's today's [coding challenge](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/misc/murdle_table/). 

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 17 - Day 5 | Constructors & Prototype -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 17 - Day 5</span> | Constructors & Prototype</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - Static Object Methods  
  - Built-in constructed objects  
  - Object.*  
  - Function chaining

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week17/assets/code/day05){:target="_blank"}

  **Lecture Notes:**

  - *Can we update the prototype of built-in objects?*  
    - ***Yes, but you SHOULD NEVER DO IT!***

  **Suggested material for study & practice:**

  - **Read:** [https://exercism.org/tracks/javascript/concepts/classes](https://exercism.org/tracks/javascript/concepts/classes){:target="_blank"} (**don’t read about Classes today**)  
  - **Complete the exercises** here: [https://basescripts.com/mastering-javascript-prototype-and-inheritance-coding-exercises-test-your-skills](https://basescripts.com/mastering-javascript-prototype-and-inheritance-coding-exercises-test-your-skills){:target="_blank"}

  **References & Resources:**

  - **CSS:** user-select: none will disable the automatic selection on click/double click  
  - CSS: Don’t use the tag name in your class names, e.g. don’t do .divTableCell, just use .tableCell. Also, don’t use property values in your class names, e.g. .redHeader {} because the values might change in the future.   
  - [DOMContentLoaded event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event){:target="_blank"}  
  - the [.constructor property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor){:target="_blank"} of objects is a reference to the constructor Function  
  - [**The dunder proto**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto){:target="_blank"}: \_ \_ proto \_ \_  
  - NEVER EVER update the \_ \_ proto \_\_  
  - NEVER EVER use the \_ \_ proto \_ \_ in production (it’s just an educational feature)  
  - The [Function.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype){:target="_blank"} property  
  - Every single built-in object has its own constructor: new Array(), new Object(), new Date(), new Promise(), etc. and of course their own prototype: Array.prototype, Object.prototype, Date.prototype, etc.  
  <!-- - [Prototype diagram](https://i.imgur.com/2rP4eLG_d.webp?maxwidth=1520&fidelity=grand){:target="_blank"}   -->
  - [Prototype diagram from PyTutor](https://pythontutor.com/render.html#code=function%20Like%28%20numOfLikes%20%29%7B%0A%20%20this.numberOfLikes%20%3D%20numOfLikes%3B%0A%7D%0ALike.prototype.getLikes%20%3D%20function%28%29%7B%0A%20%20return%20this.numberOfLikes%3B%0A%7D%0ALike.prototype.version%20%3D%2042%3B%0Aconst%20l1%20%3D%20new%20Like%28100%29%3B%0Aconst%20l2%20%3D%20new%20Like%28200%29%3B&cumulative=false&curInstr=8&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false){:target="_blank"}  
    - Diagram: [JS checking at different levels for a property](https://pythontutor.com/render.html#code=function%20ArrayV2%28array%29%20%7B%0A%20%20this.array%20%3D%20array%3B%0A%7D%0AArrayV2.prototype.getArray%20%3D%20function%28%29%20%7B%0A%20%20return%20this.array%3B%0A%7D%0Aconst%20a1%20%3D%20new%20ArrayV2%28%5B10,%2020,%2030,%205%5D%29%3B%0Aconst%20a2%20%3D%20new%20ArrayV2%28%5B9,8,7%5D%29%3B%0Aa1.getArray%20%3D%20function%28%29%20%7B%0A%20%20return%20%22Custom!%22%3B%0A%7D&cumulative=false&curInstr=8&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

## Week 17 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).

---

<!-- COMMENTS: -->
<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>