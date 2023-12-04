---
title: Week 10 | Web APIs 1: DOM
---

<hr class="mb-0">

<h1 id="{{ Week 10-Web APIs 1: DOM | slugify }}">
  <span class="week-prefix">Week 10 |</span> Web APIs 1: DOM
</h1>

<div class="week-controls">

  {% assign week_num = 10 | to_integer %}

  <h2 class="week-controls__previous_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if week_num > 0 %}

      {% assign previous_week_num = 10 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="/WDX-180/curriculum/week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 4/12/2023</span>

  <h2 class="week-controls__next_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if false and week_num <= 36 %}

      {% assign next_week_num = 10 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="/WDX-180/curriculum/week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 10 - Day 1 | Introduction to the DOM API -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 10 - Day 1</span> | Introduction to the DOM API</h2>
  </summary>

### Schedule

  - [Study](#study-plan)
  - [Exercises](#exercises)
  - [Extra Resources](#extra-resources)

### Study Plan

  > "The making of good software takes time.
  > If you try to make it take less time, it will take more time."



  - [Watch: **HTML vs DOM? Let’s debug them**](https://www.youtube.com/watch?v=J-02VNxE7lE) to understand the basic difference between these two very crucial concepts in Web Development and start building an intuition around the Document Object Model (DOM).
    - **Duration:** 5min
    - **Level:** Beginner

  - **Practice time!** Now that you know the difference between HTML and the DOM, and got a first test of working with the DOM using the `DevTools`, it's time to practice those skills and become comfortable with DOM manipulation.
    - Go through this [**document**](https://developer.chrome.com/docs/devtools/dom/) and stop at each section to practice the command or tool described in your browser.

  <!-- TODO: Integrate into the curriculum (as a Module?): https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/devtools/dom/index.md -->



  <!-- TODO: Review + Add Practice -->


  - [Watch: **JavaScript DOM Manipulation Mastery: A Comprehensive Guide**](https://www.youtube.com/watch?v=BGkc6dKUZ84) up to the "DOM Event Basics" (01:04:46)
    - **Duration:** 85min
    - **Level:** Intermediate

  - Now Let's use the `study-lenses` tool to study "Just enough DOM":

    - Sync your forked WDX-180 repo
    - `git pull`
    - `???`
    - `lenses2 curriculum/modules/javascript/denepo/inside-js/02-just-enough-dom`

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 10 - Day 2 | DOM Manipulation - Part 01 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 10 - Day 2</span> | DOM Manipulation - Part 01</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  ## Document Object Model (DOM) Manipulation - Part 01



  HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript. Check the examples below. Selecting HTML element using JavaScript is similar to selecting using CSS. To select an HTML element, we use tag name, id, class name or other attributes.

### Summary

  With the examples above, you have a pretty good understanding of some basic methods that can help us manipulate HTML elements found in a webpage.

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: Document Object Model(DOM)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/21_Day_DOM/21_day_dom.md){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/21_Day_DOM/21_day_dom.md){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!
  
</details>

<hr class="mt-1">

<!-- Week 10 - Day 3 | DOM Manipulation - Part 02 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 10 - Day 3</span> | DOM Manipulation - Part 02</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  ## Document Object Model (DOM) Manipulation - Part 02



  Picking up where we left of in **Part 01**, below there are more ways on how you can manipulate an HTML document using JavaScript!

### Summary

  🌕 Now,  you are fully charged with a super power, you have completed the most important and challenging part of the challenge and in general JavaScript. You learned DOM and now you have the capability to build and develop applications. Now do some exercises for your brain and for your muscle.

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: Document Object Model(DOM)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/21_Day_DOM/21_day_dom.md){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/21_Day_DOM/21_day_dom.md){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!
  
</details>

<hr class="mt-1">

<!-- Week 10 - Day 4 | DOM Manipulation - Part 03 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 10 - Day 4</span> | DOM Manipulation - Part 03</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  ## Document Object Model (DOM) Manipulation - Part 03



### Summary

  Now, you know how to destroy a created DOM element when it is needed. You learned DOM and now you have the capability to build and develop applications. Now do some exercises for your brain and for your muscle.

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: Document Object Model(DOM)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!
  
</details>

<hr class="mt-1">



<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

## Week 10 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).