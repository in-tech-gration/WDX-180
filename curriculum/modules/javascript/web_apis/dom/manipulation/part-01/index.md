---
title: DOM Manipulation - Part 01
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  <!-- SGEN:META:PROGRESS:task=Read 'Document Object Model (DOM) Manipulation - Part 01' -->
  [Read: **Document Object Model (DOM) Manipulation - Part 01**](../modules/javascript/web_apis/dom/manipulation/part-01/content/index.md){:target="_blank"}

### Summary

  With the examples above, you have a pretty good understanding of some basic methods that can help us manipulate HTML elements found in a webpage.

### Exercises

  **Simple Manipulation - Part 01**
  
  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'Simple Manipulation - Part 01'|user_folder=dom_manipulation_part_01 -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'Simple Manipulation - Part 01'|type=exist|user_folder=dom_manipulation_part_01|files=simple-manipulation.html,script.js -->
  In this exercise, we want you to copy and paste the following code in an HTML file named `simple-manipulation.html` and complete the tasks listed below to a JavaScript file called `script.js`:

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Paragraphs with IDs</title>
  </head>
  <body>

      <p id="paragraph1">This is the first paragraph.</p>
      <p id="paragraph2">Here is the second paragraph.</p>
      <p id="paragraph3">The third paragraph is right here.</p>
      <p id="paragraph4">Finally, the fourth paragraph.</p>

      <script src="./script.js"></script>
  </body>
  </html>
  ```

  1. Get the first paragraph by using **_document.querySelector(tagname)_** and tag name
  2. Get each of the the paragraph using **_document.querySelector('#id')_** and by their id
  3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_** and by their tag name
  4. Set id and class attribute for all the paragraphs using different attribute setting methods

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: Document Object Model(DOM)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/21_Day_DOM/21_day_dom.md){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/21_Day_DOM/21_day_dom.md){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!