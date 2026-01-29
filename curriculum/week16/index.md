---
title: Week 16 | Intermediate JavaScript
---

<hr class="mb-0">

<h1 id="{{ Week 16-Intermediate JavaScript | slugify }}">
  <span class="week-prefix">Week 16 |</span> Intermediate JavaScript
</h1>

<img src="assets/pexels-cottonbro-5474294.jpg" />

<div class="week-controls">

  {% assign week_num = 16 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 16 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 29/1/2026</span>

  <h2 class="week-controls__next_week">

    {% if week_num < 36 %}

      {% assign next_week_num = 16 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

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

<!-- Week 16 - Day 1 | Event Handling & Propagation -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 16 - Day 1</span> | Event Handling & Propagation</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Event Handling and managing multiple listeners
  - **Part 2:** Understanding `stopPropagation()`, `preventDefault()` and the difference between `event.target` and `event.currentTarget`

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week16/assets/code/day01/index.html){:target="_blank"}

  **Lecture Notes:**

  - The **2nd argument** to addEventListener( type, **FUNCTION** ) is often referred to as a **callback function** and/or an **event handler**.  
    - 1) Keep a note of these terms. 
    - 2) Explain or describe what these terms mean in your own words. 
    - 3) You should be able to answer the question “What is a callback function?” and/or “What is an event handler?” in a technical interview.  
  - Real-life use case of `useCapture`?  
    - [GitHub search](https://github.com/HumanSignal/label-studio/blob/fb8eddd5a9f6d92b68a74f44bda61207b574291d/web/libs/editor/src/tools/MagicWand.js#L262){:target="_blank"} (real-life example search with great comments)

  **Suggested material for study & practice:**

  - [mouseenter/leave + mouseover/out](https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave){:target="_blank"}   
  - Discover events: `touchstartstart`, `touchend`, `touchmove` and other.  
  - Learn how to use the VSCode *Rename Symbol* feature.  
  - Understand the difference between [stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation){:target="_blank"} and [stopImmediatePropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation){:target="_blank"}

  **References & Resources:**

  - **Best Practices**: **prefer const** with object values  
  - **Best Practices**: XRAY Rule. Don’t pass expressions as arguments to functions, e.g. `someFunction( 5 * 45 / 4 );` Store the argument value in a variable, display (xray) the variable and pass the variable to the function: `const val = 5 * 45 / 4; console.log(val); someFunction(val);`  
  - [Events Reference (MDN)](https://developer.mozilla.org/en-US/docs/Web/Events){:target="_blank"}  
  - `event.preventDefault()`: in the case of an `<a\>` tag, it prevents the redirection.  
    - The default behaviour that will be prevented differs from element to element and from event to event.  
  - If you have the same event listener on the same element (yes, you can do that), the order is based on the actual source code declaration of the listeners.   
  - [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#return_value){:target="_blank"} **always** returns undefined

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  ---



  _Photo by [cottonbro studio](https://www.pexels.com/photo/hands-typing-on-a-laptop-keyboard-5474294/)_

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 16 - Day 2 | Events: Study & Practice -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 16 - Day 2</span> | Events: Study & Practice</h2>
  </summary>

### Schedule

  - **Finish watching (or watch again) yesterday's lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Today's topic is about the three different ways of adding event handlers to HTML elements: using the `onevent` HTML attribute, using the `onevent` Element property and using the `addEventListener` method. It might be a bit confusing at first, but let's dive in and see how the three of them behave.

  **What is the difference between onevent handlers and addEventListener?**

  > Demystifying Event Handlers: onevent vs addEventListener



  As you may already know, HTML elements are not just static, lifeless building blocks of web pages. They are their living parts waiting for the users' interaction, upon which they react in various ways and at the same time emit various events.

  When you move your cursor over an element, that element becomes aware of your mouse cursor entering its area and subsequently emits a 'mouseenter' event. Move your cursor away from that element and a 'mouseleave' event is immediately triggered.

  When you place your mouse cursor in an input field and start typing your email, that element emits a single 'focus' event, signaling to the browser that it has the user's attention, along with multiple 'input' events as you change the value of this field. Move your cursor out of this input field, and that same element emits a 'blur' event to signal the lose of focus. 

  A 'click' event is fired every time you click on an element and a 'submit' event when you submit a form. A 'resize' event is emitted when you resize the browser window and a 'scroll' event when you're scrolling through an element's content. Keyboard clicks produce 'keydown' events and a keyboard button release triggers a 'keyup' event. The list of events goes on and on...

  As these events happen on the HTML elements, a JavaScript program can react to these events by carefully listening on them and executing specified code when they are emitted. This is where various mechanisms of listening and reacting to these element events are introduced in JavaScript, and the fall into the following categories:

  ---



  **The `onevent` family of HTML attributes**

  This approach uses an inline HTML attribute, named after the event type, e.g. click, submit, mouseenter, focus, etc. and prefixed with the 'on' keyword, e.g. onclick, onsubmit, onmouseenter, onfocus, etc. The value of the attribute corresponds to the JavaScript code to be executed when this event will be emitted by the element. Let's see some examples:

  This button's click will trigger an `alert` popup with a random number:

  ```html
  <button onclick="alert(Math.random())">Just alert a random number!</button>
  ```

  This oninput event handlers will replace the characters typed in the input field with their uppercase counterparts. The `this` reserved keyword in this place, is a reference to the element itself. 

  ```html
  <input oninput="this.value = this.value.toUpperCase()"/>
  ```

  This next div will change its color every time the mouse cursor hovers over it. (Random hex color code snippet was found here: https://stackoverflow.com/questions/1484506/random-color-generator){:target="_blank"}

  ```html
  <div onmouseenter="this.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);">Random Color</div>
  ```

  We can even define a function somewhere inside our scripts and call this function through an onevent HTML handler. In this imaginary scenario, a function called `rollTheDice()` would come up with a random number from 1 to 6 every time the button is double-clicked:

  ```html
  <button ondblclick="rollTheDice()">Roll!</button>
  ```

  **Pros: When to use this method of event handling:**

  Since this method has a lot of serious disadvantages (see below) and much better alternatives exist, its use is highly discouraged.

  The only case where you would probably use it is when you have just a few (one or two, no more) very simple and short JavaScript code snippets that you want to execute on a couple of HTML elements, and most importantly, on web pages that only you maintain. If the code is short and simple enough to fit in an attribute value, you can probably get away with this `dirty` approach. If on the other hand you work with a team, you better stick with the recommended approach mentioned below since your JavaScript developers scorn this sloppy and lazy approach.

  **Cons: When not to use this method of event handling:**

  You should probably never use this approach as there as some serious drawbacks:

  - You are `polluting` your HTML code (which as you remember is used for creating and structuring the content of web pages) with JavaScript code which has completely different responsibilities. Keep your code separated into HTML, CSS and JavaScript files or their respective tags (style, script). One of the mantras of computer programming is about [**Separation of Concerns**](https://en.wikipedia.org/wiki/Separation_of_concerns){:target="_blank"}.
  - Your HTML code will become unreadable with all these odd-looking `onevent` attributes scattered all around the markup. Frontend developers that work mainly with HTML and CSS or even content editors that are not familiar with JavaScript, will have a hard time looking through the code and updating the content.
  - JavaScript Syntax highlighting will probably not work on your favorite code editor when trying to make sense of the code assigned as a value to an `onevent` attribute.
  - It is much harder to search through hundreds or thousand of lines of HTML code to find the event handler you'll looking for, rather that on a well-structured and organized JavaScript file (you do keep your JavaScript files organized according to best practices, aren't you?).
  - Putting JavaScript or CSS code in your HTML, has some serious maintainability drawbacks (on top of all the other drawbacks mentioned already). What if you decide to change a function name or refactor a function call at some point in time? You'll have to search all through your HTML code, find and update the functions names and then switch back to JavaScript and continue refactoring. This constant switching between different languages is a source of confusion, errors and fatigue. That's why we keep each language in its own separate area.

  ---



  **The onevent HTMLElement property**

  Switching from HTML to JavaScript, we find the `HTMLElements'` `onevent` property which is a much cleaner approach to its HTML counterpart (attribute syntax). It works as follows:

  The property will still use the `on` + `event type` convention (onclick, onsubmit, onscroll, etc.) and a function must be assigned as a value to this property in order for some code to be executed when the respective event is triggered in a selected element. 

  ```html
  <button id="clapsBtn">Clap</button>
  <div>Claps: <span id="claps">0</span></div>
  ```

  ```js
  function updateClaps(){
      const clapsEl = document.querySelector("#claps");
      clapsEl.textContent = parseInt( clapsEl.textContent ) + 1; // textContent is always String so we need to turn it into a Number integer for addition
  }
  const clapsBtn = document.querySelector("#clapsBtn");

  clapsBtn.onclick = updateClaps; // We are NOT executing, just passing a function reference here.
  ```

  You can even pass a function directly as a value to an onevent property of an element as well as use multiple properties on that same element:

  ```html
  <div id="magic">Hover or double click me to see the magic!</div>
  ```

  ```js
  const magicEl = document.querySelector("#magic");

  magicEl.ondblclick = function doubleClickHandler(){
      // In the context of an onevent handler, the `this` keywords refers to the element
      this.textContent = "Magic happening!";
  }

  magicEl.onmouseenter = function(){
      // We can pass an anonymous function as a value this way
      this.style.color = "hotpink";
  }
  magicEl.onmouseleave = function(){
      this.style.color = "black";
  }
  ```

  **Pros: When to use this method of event handling:**

  The advantage of using this method, is that you keep your JavaScript code out of HTML and you get a quick and easy way to declare event handlers for HTML elements, as opposed to the `addEventListener` syntax that you'll see next. Due to some limitations of this method (see next section), it is advised to use the `addEventListener` method (up next).

  **Cons: When not to use this method of event handling:**

  Since we are passing the event handling function as a value to a property, it means that we are restricted to just one function per event per element. Study the code below to get a good understanding of this concept:

  ```html
  <button>Clap and log!</button>
  <div id="claps">0</div>
  ```

  ```js
  const btn = document.querySelector("button");
  btn.onclick = function updateClaps(){
      const clapsEl = document.querySelector("#claps");
      clapsEl.textContent = parseInt( clapsEl.textContent ) + 1;
  }
  btn.onclick = function logClapping(){
      console.log("Someone just clapped!");
  }
  ```

  What you think will happen if we run the code above? Copy the code in an HTML page, run it and check to see what happens. Now change the order of the event handlers and try again:

  ```js
  const btn = document.querySelector("button");
  btn.onclick = function logClapping(){
      console.log("Someone just clapped!");
  }
  btn.onclick = function updateClaps(){
      const clapsEl = document.querySelector("#claps");
      clapsEl.textContent = parseInt( clapsEl.textContent ) + 1;
  }
  ```

  As you can see, we have a serious limitation when using the onevent property method to handle events. Every time we assign a new value (function) to a specific event more than once, the old function gets discarded and only the last assigned function will execute during the event.

  You might be thinking about the `+=` operator here, but unfortunately this will not work.

  ```js
  btn.onclick = function logClapping(){
      console.log("Someone just clapped!");
  }
  // Nope! This will not work as expected. The += operator will turn these functions into a String and concatenate them.
  // Javascript will immediately discard the String value and nothing will happen when the click event gets triggered.
  btn.onclick += function updateClaps(){
      const clapsEl = document.querySelector("#claps");
      clapsEl.textContent = parseInt( clapsEl.textContent ) + 1;
  }
  ```

  ---



  **The addEventListener HTMLElement method (Recommended)**

  This is `one method to rule them all`! Although the `addEventListener` syntax shown below is a little bit verbose, it is the recommended way of adding event handlers in JavaScript for quite some time now. You can use it to assign as many event handlers as you want on a single event and you can also omit the `on` prefix when defining the event type. Here's a pseudo syntax:

  ```js
  HTMLElement.addEventListener( EVENT_TYPE, EVENT_HANDLER_FUNCTION );
  ```

  And here are some examples:

  ```html
  <button>Clap and log!</button>
  <div id="claps">0</div>
  <div id="color">Color changing trick</div>
  ```

  ```js
  const btn = document.querySelector("button");
  const colorEl = document.querySelector("#color");

  function updateClaps(){
      const clapsEl = document.querySelector("#claps");
      clapsEl.textContent = parseInt( clapsEl.textContent ) + 1;
  }

  function logClapping(){
      console.log("Someone just clapped!");
  }

  btn.addEventListener("click", updateClaps); // (1) We can pass a function reference (we are NOT calling it here)
  btn.addEventListener("click", logClapping);

  // (2) We can pass a function declaration directly as the 2nd argument:
  colorEl.addEventListener("mouseenter", function updateColor(){
      this.style.color = "hotpink";
  });

  // (2.1) We can pass an anonymous function declaration as the 2nd argument:
  colorEl.addEventListener("mouseleave", function(){
      this.style.color = "black";
  });
  ```

  The advantage of passing a named function as the 2nd argument to the `addEventListener` is that we can access that function from within itself:

  ```js
  colorEl.addEventListener("mouseenter", function updateColor(){
      colorEl.style.color = "hotpink"; // We need to switch from `this` to `colorEl` here, as the reference won't work when the updateColor function gets called by setTimeout due to a different execution context
      setTimeout( updateColor, 5000 ); // run the updateColor function 5 seconds after it has been triggered by a click
  });
  ```

  **Pros: When to use this method of event handling:**

  As you see, the `addEventListener` method is the one which provides the most benefits to us and it's the preferred way of handling events in JavaScript. Just stick to it, and you'll be safe and sound. :)

  **Cons: When not to use this method of event handling:**

  It's just a little bit more verbose than the `onevent` method.

  **References**

  - [DOM onevent handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers){:target="_blank"}
  - [GlobalEventHandlers](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers){:target="_blank"}
  - [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener){:target="_blank"}
  - [The this context in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 16 - Day 3 | Object Creators -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 16 - Day 3</span> | Object Creators</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - Objects, Object.freeze, Object Creators

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week16/assets/code/day03){:target="_blank"}

  **Takeaways:** 

  - Treat all function parameters as read-only values.
  - Understand the difference between `copied values` and `references`.

  **Suggested material for study & practice:**

  - Check the [Event Listeners on the DevTools](https://umaar.com/dev-tips/24-view-event-listeners/){:target="_blank"}  
  - Check the [getEventListeners()](https://developer.chrome.com/docs/devtools/console/utilities#getEventListeners-function){:target="_blank"}  
  - Why does the **performance.eventCounts.get("click")** show 0 at the first click?

  **References & Resources:**

  - [**Primitives**](https://developer.mozilla.org/en-US/docs/Glossary/Primitive){:target="_blank"}  
  - [**auto-boxing behavior**](https://developer.mozilla.org/en-US/docs/Glossary/Primitive){:target="_blank"}**:** *“Primitives have no methods but still behave as if they do. When properties are accessed on primitives, JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead.”*  
  - [**console.dir**](https://developer.mozilla.org/en-US/docs/Web/API/console/dir_static){:target="_blank"}  
  - [**delete**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete){:target="_blank"}  
  - [**Object.freeze()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze){:target="_blank"}

### Summary

Here's a brief summary of the main points covered:

- **Discussion on Reference vs Copy**: the difference between reference and copy when assigning values to variables in JavaScript.

<!-- - **Use of `const` keyword**: using the `const` keyword to declare variables that should not be reassigned, and how it can help avoid unexpected changes to variable values. -->



- **Example with objects and primitives**: examples with objects and primitives (like numbers) to illustrate the difference between reference and copy.

<!-- - **Understanding function calls**: understanding what value a function call returns. -->



- **Creating objects**: in JavaScript, objects can be created using the `new` keyword followed by a function name.

- **Constructor functions**: introducing the concept of constructor functions, which are special types of functions that return an object when called with the `new` keyword.

- **Using constructor functions to create objects**: The lecturer demonstrates how to use a constructor function to create multiple objects with similar properties and methods.

Some key takeaways from this lecture include:

* Using a constructor function can simplify the process of creating multiple objects with shared properties and methods.
* Constructor functions are useful when you need to create objects that have a specific structure or behavior.
* Experimenting with code examples is an important part of learning programming concepts, as it helps solidify understanding and builds familiarity.

If you're new to JavaScript or programming in general, this lecture might be helpful for getting started with the basics of object-oriented programming (OOP) concepts.

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 16 - Day 4 | Objects: Study & Practice -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 16 - Day 4</span> | Objects: Study & Practice</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Today we'll start with some exercises and then move on to practice what we've covered yesterday (feel free to experiment with the concepts and write code to get familiar with those concepts, e.g. `Object.freeze`, `Object creators`, etc.)

  Here are the 2 exercises you must complete and submit today:


  - [Exercise 1](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week16/assets/code/day04/exercise1-higher-order-function){:target="_blank"}
  - [Exercise 2](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week16/assets/code/day04/exercise2-tictactoe){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 16 - Day 5 | Object Creators and their Toolset -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 16 - Day 5</span> | Object Creators and their Toolset</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  First, go through the [Murdle tutorial](https://murdle.com/?mode=tutorial){:target="_blank"}. It's really fun and will help you understand the JavaScript tasks mentioned in the lecture.

  Your instructor will share the video lectures with you. Here are the topics covered:

  - Solving Click Event Mysteries (JavaScript) based on the [Murdle Mystery](https://murdle.com/){:target="_blank"} game.
  - Object Creators and their Toolset (and `this`)

  You can find the lecture code [here for part 1](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week16/assets/code/day05/part1-murlde-mystery/){:target="_blank"} and [here for part 2](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week16/assets/code/day05/part2-objects/){:target="_blank"}

  **Suggested material for study and practice:**

  - **Solve the Murdle Board challenge** (check code of part 1 of the lecture)
  - **Practice on the Object Creator function and its Toolset** (check code from part 2 of the lecture)

  **References & Resources:**

  - [**pointer-events**](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events){:target="_blank"} **(CSS): disable click-type events**  
  - [**HTMLElement.classList**](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList){:target="_blank"}**:** contains()  
  - **document.querySelector()**: returns a single element (the first one it finds)  
  - [**document.querySelectorAll()**](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll){:target="_blank"}: returns a list of elements  
  - **Problem Solving Rule(s):**  
    - Break down the problem into many simple ones  
    - Work on a simplified version of the problem

<!-- Summary -->

<!-- Exercises -->

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