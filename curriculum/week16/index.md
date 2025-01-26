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

  <span>Updated: 26/1/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 16 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

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

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 16 - Day 2 | ? -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 16 - Day 2</span> | ?</h2>
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

  **Suggested material for study:**

  **References & Resources:**

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 16 - Day 3 | ? -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 16 - Day 3</span> | ?</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** 
  - **Part 2:**

  **Takeaways:** 

    - Treat all function parameters as read-only values.
    - Understand the difference between `copied values` and `references`.



  You can find the lecture code [here](){:target="_blank"}

  **Suggested material for study & practice:**

  - Check the [Event Listeners on the DevTools](https://umaar.com/dev-tips/24-view-event-listeners/)  
  - Check the [getEventListeners()](https://developer.chrome.com/docs/devtools/console/utilities#getEventListeners-function)  
  - Why does the **performance.eventCounts.get("click")** show 0 at the first click?

  **References & Resources:**

  - [**Primitives**](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)  
  - [**auto-boxing behavior**](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)**:** *“Primitives have no methods but still behave as if they do. When properties are accessed on primitives, JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead.”*  
  - [**console.dir**](https://developer.mozilla.org/en-US/docs/Web/API/console/dir_static)  
  - [**delete**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)  
  - [**Object.freeze()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 16 - Day 4 | ? -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 16 - Day 4</span> | ?</h2>
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

  **Suggested material for study:**

  **References & Resources:**

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 16 - Day 5 | ? -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 16 - Day 5</span> | ?</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Solving a Murdle Mystery / Solving Click Event Mysteries 
  - **Part 2:** Object Creators and their Toolset (and `this`)

  You can find the lecture code [here](){:target="_blank"}

  - Object Creators and Object Toolkits  
    - [Codepen](https://codepen.io/kostasx/pen/eYXMqXW?editors=0012)

  **Suggested material for study and practice:**

  - **Practice on the [Object Creator function](https://codepen.io/kostasx/pen/eYXMqXW?editors=0012) (and its Toolset)**  
  - **Solve the [Murdle Board challenge](https://replit.com/@kostasx1/02022024#script.js)**

  **References & Resources:**

  - [**pointer-events**](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) **(CSS): disable click-type events**  
  - [**HTMLElement.classList**](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)**:** contains()  
  - **document.querySelector()**: returns a single element (the first one it finds)  
  - [**document.querySelectorAll()**](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll): returns a list of elements  
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