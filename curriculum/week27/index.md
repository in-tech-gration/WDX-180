---
title: Week 27 | Advanced JavaScript
---

<hr class="mb-0">

<h1 id="{{ Week 27-Advanced JavaScript | slugify }}">
  <span class="week-prefix">Week 27 |</span> Advanced JavaScript
</h1>

<img src="assets/battleship.png" />

<div class="week-controls">

  {% assign week_num = 27 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 27 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 23/4/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 27 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 27 - Day 1 | Drag and Drop API -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 27 - Day 1</span> | Drag and Drop API</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Debugging Canvas API
  - **Part 2:** Drag and Drop API

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week27/assets/day01/drag-and-drop.html){:target="_blank"}

  **References & Resources:**

  - [**Slides**](https://kostasx.github.io/EventLoop/frontend/html5/apis.html#/3){:target="_blank"} *(contains code and resources at the end)*  
  - **Lesson of the day: RTFM!!! Read the full MDN!!!**  
    - [How to remove the clip of a region in html 5 canvas](https://stackoverflow.com/questions/25282793/how-to-remove-the-clip-of-a-region-in-html-5-canvas){:target="_blank"}  
    - Alternative: the [reset()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/reset){:target="_blank"} context 2D  
  - [**DataTransfer**](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer){:target="_blank"}  
  - [**HTMLImageElement**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement){:target="_blank"}  
    - [**HTMLImageElement.complete**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/complete){:target="_blank"} **property**  
  - [**Canvas revealing effect using requestAnimationFrame**](https://jsfiddle.net/Mekire/wq6ynruq/){:target="_blank"}  
    - This also includes a darker version of the revealing image beneath the clipping region

<!-- Summary -->

### Exercises

  - Use the **__proto__** object property to explore the Prototypal inheritance chain   
    - The **__proto__** should ONLY be used for debugging and educational purposes. You should **NEVER** use it in production.  
  - Make the draggable element paint the drop target with its background color  
  - Explore and recreate the [DnD List](https://kostasx.github.io/EventLoop/frontend/html5/webapis/drag-and-drop/resources/tasks-board.html){:target="_blank"}
    - [Source code](https://raw.githubusercontent.com/kostasx/EventLoop/master/frontend/html5/webapis/drag-and-drop/resources/tasks-board.html){:target="_blank"}  
  - Explore and recreate the [DnD Game](https://kostasx.github.io/EventLoop/frontend/html5/webapis/drag-and-drop/resources/shape-game.html){:target="_blank"}
    - [Source code](https://raw.githubusercontent.com/kostasx/EventLoop/master/frontend/html5/webapis/drag-and-drop/resources/shape-game.html){:target="_blank"}

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week27/progress/progress.draft.w27.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 27 - Day 2 | Drag and Drop A11y -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 27 - Day 2</span> | Drag and Drop A11y</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Today you should spend some time on ♿ accessibility, because Drag-n-Drop can become a problem, not a feature when `A11y` is not properly taken care of. Here are some recommended articles to read and some code to study and explore:

  - [Are Drag and Drop Functions Allowed by WCAG?](https://accessibleweb.com/question-answer/are-drag-and-drop-functions-allowed-by-wcag/){:target="_blank"}
  - [Accessible Drag and Drop](https://liferay.design/articles/2023/accessible-drag-drop/){:target="_blank"}
  - [W3C Best Practices: Drag and Drop](https://www.w3.org/wiki/PF/ARIA/BestPractices/DragDrop){:target="_blank"}
  - [4 Major Patterns for Accessible Drag and Drop](https://medium.com/salesforce-ux/4-major-patterns-for-accessible-drag-and-drop-1d43f64ebf09){:target="_blank"}
  - [Salesforce DnD A11y Patterns](https://salesforce-ux.github.io/dnd-a11y-patterns/#/){:target="_blank"}
    - [GitHub: Salesforce DnD A11y Patterns](https://github.com/salesforce-ux/dnd-a11y-patterns){:target="_blank"}
  - [CodePen Project: Accessible Drag and Drop by Drew Lee](https://codepen.io/drewlee/project/editor/XWNLeE){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 27 - Day 3 | FileReader API -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 27 - Day 3</span> | FileReader API</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** FileReader API
  - **Part 2:** FileReader API

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week27/assets/day03/FileReader.html){:target="_blank"}

  **References & Resources:**

  - **Drag-n-Drop in the real world**  
    - [**Outdoors fast food ordering system**](https://www.youtube.com/watch?v=ooH9LYAEGyY){:target="_blank"}  
  - **VSCode User Snippets**  
    - **Preferences > Configure User Snippets**  
  - [**FileReader**](https://developer.mozilla.org/en-US/docs/Web/API/FileReader){:target="_blank"}**:** *“The FileReader object lets web applications asynchronously read the contents of files from the users’ computer.”*  
    - [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList){:target="_blank"}: *“...used for a list of files”*  
      - *The prototype of FileList uncovers this property:* [**Symbol(Symbol.iterator)**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator){:target="_blank"}:ƒ values()  
        - This gives an object the ability to iterate (loop) over its values through **[...object]** or **for..of** loop.  
      - [File](https://developer.mozilla.org/en-US/docs/Web/API/File){:target="_blank"}: *“The File interface provides information about files and allows JavaScript in a web page to access their content.”*  
  - [`<input type=”file” />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file){:target="_blank"}  
    - Limit file types: accept="image/jpeg, image/png"  
  - [**DataTransfer**](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer){:target="_blank"}: *“The DataTransfer object is used to hold the data that is being dragged during a drag and drop operation.”*  
  - [ElectronJS](https://www.electronjs.org/){:target="_blank"}: Turn any website or web app into a cross-platform Desktop application  
  - Base64:   
    - `<img src="file.jpeg" \>`  
    - Base64/DataURL => file.jpeg => Read the contents => Convert them into a String  
    - `<img src="base64:AAAAAAAAAABBBBBBBBCCCCC" \>`
  - [Online Base64 Encoder/Decoder](https://www.base64encode.org/){:target="_blank"}
  - [FileReader](https://flaviocopes.com/filereader/){:target="_blank"} 
  - [https://javascript.info/file](https://javascript.info/file){:target="_blank"}
  - [File API](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications){:target="_blank"}

<!-- Summary -->

### Exercises

  Build on the examples we’ve worked on and share any questions or apps that you’ve built.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week27/progress/progress.draft.w27.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 27 - Day 4 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 27 - Day 4</span> | TBA</h2>
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

<!-- Week 27 - Day 5 | TBA -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 27 - Day 5</span> | TBA</h2>
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