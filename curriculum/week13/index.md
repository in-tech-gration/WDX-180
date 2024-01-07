---
title: Week 13 | Intermediate JavaScript
---

<hr class="mb-0">

<h1 id="{{ Week 13-Intermediate JavaScript | slugify }}">
  <span class="week-prefix">Week 13 |</span> Intermediate JavaScript
</h1>

<img src="assets/colorful.03.png" />

<div class="week-controls">

  {% assign week_num = 13 | to_integer %}

  <h2 class="week-controls__previous_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if false and week_num > 0 %}

      {% assign previous_week_num = 13 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 8/1/2024</span>

  <h2 class="week-controls__next_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if false and week_num <= 36 %}

      {% assign next_week_num = 13 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 13 - Day 1 | Intermediate JavaScript -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 13 - Day 1</span> | Intermediate JavaScript</h2>
  </summary>

### Schedule

  - **Lecture: Intermediate JavaScript**
  - **Practice**
  - **Work on Project (Group/Personal)**

<!-- Study Plan -->

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 13 - Day 2 | CSS Object Model -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 13 - Day 2</span> | CSS Object Model</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  Let's learn the **CSS Object Model**

  > "The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. 
  >
  > It is much like the DOM, but for the CSS rather than the HTML. 
  >
  > It allows users to read and modify CSS style dynamically."



  - Slowly go through this lengthy article: [**A Beginner’s Guide To CSS Object Model (CSSOM)**](https://www.lambdatest.com/blog/css-object-model/){:target="_blank"}

  ![](assets/DOM.CSSOM.png)

  In this article you'll find the word `Interface` mentioned quite a lot, so let's ask `ChatGPT` to explain this to us:

  **What is an Interface?**

  > "In the world of programming and computer science, an "interface" refers to a set of rules or specifications that define how different software components can interact with each other. It's like a contract that outlines what methods or functions an object or component should have and how they should behave.
  >
  > Think of it as a way for different parts of a program to communicate with each other without needing to know all the nitty-gritty details of how each part is implemented. **It's a bit like using a remote control to interact with your TV. You don't need to know exactly how the TV works internally; you just need to know the buttons on the remote control and what they do (that's the interface).**
  >
  > In the context of MDN documentation, when you see terms like "CSSStyleSheet", "Event interface", "FocusEvent interface," "UIEvent interface," etc., they are referring to specific sets of rules that describe what properties and methods an object (e.g. an Event object) should have. These interfaces tell developers what they can expect from these objects and how they can work with them."



  **CAUTION:** The ChatGPT response was reviewed and curated by our staff of professional developers. Never trust AI-generated responses 100%.

  Here is a list of the main concepts that you will learn in this article:

  - The `HTMLElement.style.*` set of properties
  - The `window.getComputedStyle(Element)` method
  - The `CSSStyleDeclaration Interface` and its properties:
    - `getPropertyValue()`
    - `getPropertyPriority()`
    - `setProperty(propertyName, value, priority)`
    - `removeProperty(property)`
    - `item()`
    - `length`
  - The `StyleSheet & StyleSheetList Interfaces` and their properties:
    - `disabled`
    - `href`
    - `media`
    - `ownerNode`
    - `parentStyleSheet`
    - `title`
    - `type`
    - `document.styleSheets.length`
  - The `CSSStyleSheet & CSSRule Interfaces`
    - `cssRules`
    - `deleteRule()`
    - `insertRule()`
    - `cssText`
    - `parentRule`
    - `parentStyleSheet`
  - The `CSSMediaRule & CSSKeyframeRule Interfaces`
    - `media`
    - `keyText`

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  <!-- TODO: INTEGRATE: https://github.com/in-tech-gration/web.dev/blob/main/src/site/content/en/blog/critical-rendering-path-constructing-the-object-model/index.md -->


  - [Constructing the Object Model](https://web.dev/articles/critical-rendering-path/constructing-the-object-model){:target="_blank"}

### Sources and Attributions

  - [CSS Object Model (CSSOM) @MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model){:target="_blank"}
  
</details>

<hr class="mt-1">

<!-- Week 13 - Day 3 | Intermediate JavaScript -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 13 - Day 3</span> | Intermediate JavaScript</h2>
  </summary>

### Schedule

  - **Lecture: Intermediate JavaScript**
  - **Practice**
  - **Work on Project (Group/Personal)**

<!-- Study Plan -->

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 13 - Day 4 | Advanced CSS -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 13 - Day 4</span> | Advanced CSS</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

<!-- Study Plan -->

### Summary

  ![](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/misc/post_mortem/assets/post_mortem.png)

  Let's begin by reading about [What is a Software Post-Mortem and How Do You Write One?](https://www.freecodecamp.org/news/what-is-a-software-post-mortem/){:target="_blank"}

  After having read the article, open up the code [found here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/javascript/misc/post_mortem){:target="_blank"} debug the program and write a short post mortem.

  ---



  Next, we are going to explore some pretty useful and cool CSS features (that you probably didn't know exist). Let's go!

  - Go through [**this article**](https://www.lambdatest.com/blog/advanced-css-tricks-and-techniques/){:target="_blank"} that covers quite a lot of features. For each one, you should check the appropriate MDN article for more details and play around with the feature in your local development environment. Perhaps it's a good idea at this point to create a file named `advanced-css-tricks.html` and work on it.

  The point of this module is to become aware and familiar with these really handy CSS tools. Unless you practice, of course, there's no point in moving forward, so let's use these tricks to build a web page that includes every single feature in the list.

  - **Responsive CSS Grids**
  - **Vertically Align with Flexbox**
  - **SVG for Icons and Logos**
  - **Masking**
  - **Shape Outside**
  - **Zoom on Hover**
  - **Scroll Snapping**
  - **Variable Fonts**
  - **Generate Text Animation**
  - **Initial Letter**
  - **Logical Properties and Values**
  - **CSS Subgrids**
  - **Smart Quotes in HTML/CSS**
  - **Comma-Separated Lists**
  - **Feature Query**
  - **Background Repeat**
  - **CSS Gradients**
  - **Truncate Strings**

  On top of that, you want to create a page that includes every single feature with a small description taken from the MDN docs and a small example (containing both the code used and the actual displayed output).

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  - [18 Advanced CSS Tricks And Tips [2023]](https://www.lambdatest.com/blog/advanced-css-tricks-and-techniques/){:target="_blank"}
  
</details>

<hr class="mt-1">

<!-- Week 13 - Day 5 | Intermediate JavaScript -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 13 - Day 5</span> | Intermediate JavaScript</h2>
  </summary>

### Schedule

  - **Lecture: Intermediate JavaScript**
  - **Practice**
  - **Work on Project (Group/Personal)**

<!-- Study Plan -->

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

