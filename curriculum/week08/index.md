---
title: Week 08 | JavaScript Core 2
---

<hr class="mb-0">

<h1 id="{{ Week 08-JavaScript Core 2 | slugify }}">
  <span class="week-prefix">Week 08 |</span> JavaScript Core 2
</h1>

<div class="week-controls">

  {% assign week_num = 08 | to_integer %}

  <h2 class="week-controls__previous_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if week_num > 0 %}

      {% assign previous_week_num = 08 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="/WDX-180/curriculum/week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 20/11/2023</span>

  <h2 class="week-controls__next_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if false and week_num <= 36 %}

      {% assign next_week_num = 08 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="/WDX-180/curriculum/week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 08 - Day 1 | Understanding Programs - Part 1 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 08 - Day 1</span> | Understanding Programs - Part 1</h2>
  </summary>

### Schedule

  - [Study](#study-plan)
  - [Exercises](#exercises)
  - [Extra Resources](#extra-resources)

### Study Plan

  This Module is about "Understanding Programs". It's not enough just to know the language features in JS. Before you can write good programs you need to learn how to understand code that you did not write. The following module contains a handful of sections that provide you a good amount of JavaScript programs and a lot of tools,methods and good practices on how to properly understand programs written by others!

  In order to follow the material, you will need to install and use the `study-lenses` tool. Here are the instructions:

  
  **Setting up Study Lenses (v2) on your System**
  
  1. Clone the `study-lenses` repository from this link: [ https://github.com/in-tech-gration/study-lenses/](https://github.com/in-tech-gration/study-lenses/){:target="_blank"}.
      - `git clone git@github.com:in-tech-gration/study-lenses.git`
  
  2. Change to the `study-lenses` directory and install all dependencies:
  
      - Run: `cd study-lenses`
      - Then: `npm install` (or `npm i` for short)
  
  3. Checkout to the `lenses2` branch and run the `npm link` command to make this available globally:
  
      - `git checkout lenses2`
      - `npm link` 
      - (or if you're on a Mac/Linux, you'll perhaps need `sudo npm link`)
  
  4. Check that `study-lenses` have been successfully installed on your system by running the following command:
  
      - `lenses2 --version` or `lenses2 -v`

  **Launching Study Lenses and following the material**

  Once `lenses2` is properly installed on your system, you can go to your `WDX-180` folder and run `lenses2` with the material for this Module:

  - `cd WDX-180/`
  - `lenses2 curriculum/modules/javascript/denepo/_just-enough-javascript/`

  or just:

  - `cd WDX-180/curriculum/modules/javascript/denepo/_just-enough-javascript/`
  - `lenses2`

  Now it's time to go through the material. For this Module you will only need to go through the following sections:

  - **0-let-vs-const**
  - **1-predicting-execution**
  - **2-reading-programs**

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 08 - Day 2 | Understanding Programs - Part 2 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 08 - Day 2</span> | Understanding Programs - Part 2</h2>
  </summary>

### Schedule

  - [Study](#study-plan-1)
  - [Exercises](#exercises-1)
  - [Extra Resources](#extra-resources-1)

### Study Plan

  In this Module, we are continuing our journey into "Understanding Programs"

  Make sure to follow the guides on **Setting up Study Lenses (v2) on your System** and **Launching Study Lenses and following the material** from Day 01 and then go through the following sections:

  - **3-plain-text-programs**
  - **4-describing-programs**

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 08 - Day 3 | Understanding Programs - Part 3 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 08 - Day 3</span> | Understanding Programs - Part 3</h2>
  </summary>

### Schedule

  - [Study](#study-plan-2)
  - [Exercises](#exercises-2)
  - [Extra Resources](#extra-resources-2)

### Study Plan

  In this Module, we are continuing our journey into "Understanding Programs"

  Make sure to follow the guides on **Setting up Study Lenses (v2) on your System** and **Launching Study Lenses and following the material** from Day 01 and then go through the following sections:

  - **5-logging-state**
  - **6-tracing-backwards**

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 08 - Day 4 | Understanding Programs - Part 4 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 08 - Day 4</span> | Understanding Programs - Part 4</h2>
  </summary>

### Schedule

  - [Study](#study-plan-3)
  - [Exercises](#exercises-3)
  - [Extra Resources](#extra-resources-3)

### Study Plan

  In this Module, we are continuing our journey into "Understanding Programs"

  Make sure to follow the guides on **Setting up Study Lenses (v2) on your System** and **Launching Study Lenses and following the material** from Day 01 and then go through the following sections:

  - **7-naming-variables**
  - **8-code-review**

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 08 - Day 5 | Understanding Programs - Part 5 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 08 - Day 5</span> | Understanding Programs - Part 5</h2>
  </summary>

### Schedule

  - [Study](#study-plan-4)
  - [Exercises](#exercises-4)
  - [Extra Resources](#extra-resources-4)

### Study Plan

  In this Module, we are continuing our journey into "Understanding Programs"

  Make sure to follow the guides on **Setting up Study Lenses (v2) on your System** and **Launching Study Lenses and following the material** from Day 01 and then go through the following sections:

  - **z-challenge**

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

<!-- Sources and Attributions -->
  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

## Week 08 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).