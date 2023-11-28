---
title: DOM Manipulation - Part 02
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  ## Document Object Model (DOM) Manipulation - Part 02

  Picking up where we left of in **Part 01**, below there are more ways on how you can manipulate an HTML document using JavaScript!

  ### Adding Text to HTML element

  An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property _textContent_ or \*innerHTML.

  #### Adding Text content using textContent

  The _textContent_ property is used to add text to an HTML element.

  ```js
  const titles = document.querySelectorAll('h1')
  titles[3].textContent = 'Fourth Title'
  ```

  #### Adding Text Content using innerHTML

  Most people get confused between _textContent_ and _innerHTML_. _textContent_ is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.

  ##### Text Content

  We assign *textContent* HTML object property to a text

  ```js
  const titles = document.querySelectorAll('h1')
  titles[3].textContent = 'Fourth Title'
  ```

  ##### Inner HTML

  We use innerHTML property when we like to replace or a completely new children content to a parent element.
  It value we assign is going to be a string of HTML elements.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>JavaScript for Everyone:DOM</title>
    </head>
    <body>
      <div class="wrapper">
          <h1>Asabeneh Yetayeh challenges in 2020</h1>
          <h2>30DaysOfJavaScript Challenge</h2>
          <ul></ul>
      </div>
      <script>
      const lists = `
      <li>30DaysOfPython Challenge Done</li>
              <li>30DaysOfJavaScript Challenge Ongoing</li>
              <li>30DaysOfReact Challenge Coming</li>
              <li>30DaysOfFullStack Challenge Coming</li>
              <li>30DaysOfDataAnalysis Challenge Coming</li>
              <li>30DaysOfReactNative Challenge Coming</li>
              <li>30DaysOfMachineLearning Challenge Coming</li>`
    const ul = document.querySelector('ul')
    ul.innerHTML = lists
      </script>
    </body>
  </html>
  ```

  The innerHTML property can allow us also to remove all the children of a parent element. Instead of using removeChild() I would recommend the following method.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>JavaScript for Everyone:DOM</title>
    </head>
    <body>
      <div class="wrapper">
          <h1>Asabeneh Yetayeh challenges in 2020</h1>
          <h2>30DaysOfJavaScript Challenge</h2>
          <ul>
              <li>30DaysOfPython Challenge Done</li>
              <li>30DaysOfJavaScript Challenge Ongoing</li>
              <li>30DaysOfReact Challenge Coming</li>
              <li>30DaysOfFullStack Challenge Coming</li>
              <li>30DaysOfDataAnalysis Challenge Coming</li>
              <li>30DaysOfReactNative Challenge Coming</li>
              <li>30DaysOfMachineLearning Challenge Coming</li>
          </ul>
      </div>
      <script>
    const ul = document.querySelector('ul')
    ul.innerHTML = ''
      </script>
    </body>
  </html>
  ```

  ### Adding style

  #### Adding Style Color

  Let us add some style to our titles. If the element has even index we give it green color else red.

  ```js
  const titles = document.querySelectorAll('h1')
  titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
      title.style.color = 'green'
    } else {
      title.style.color = 'red'
    }
  })
  ```

  #### Adding Style Background Color

  Let us add some style to our titles. If the element has even index we give it green color else red.

  ```js
  const titles = document.querySelectorAll('h1')
  titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
      title.style.backgroundColor = 'green'
    } else {
      title.style.backgroundColor = 'red'
    }
  })
  ```

  #### Adding Style Font Size

  Let us add some style to our titles. If the element has even index we give it 20px else 30px

  ```js
  const titles = document.querySelectorAll('h1')
  titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
      title.style.fontSize = '20px'
    } else {
      title.style.fontSize = '30px'
    }
  })
  ```

  As you have notice, the properties of css when we use it in JavaScript is going to be a camelCase. The  following CSS properties change from background-color to backgroundColor, font-size to fontSize, font-family to fontFamily, margin-bottom to marginBottom.  

### Summary

  🌕 Now,  you are fully charged with a super power, you have completed the most important and challenging part of the challenge and in general JavaScript. You learned DOM and now you have the capability to build and develop applications. Now do some exercises for your brain and for your muscle.

### Exercises

  ### Simple Manipulation - Part 02
  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'Simple Manipulation - Part 02'|user_folder=dom_manipulation_part_02 -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'Simple Manipulation - Part 02'|type=exist|user_folder=dom_manipulation_part_02|files=simple-manipulation.html,script.js -->
  In this exercise, we want you to copy the files you've submitted for the exercise from Part 01, and complete the task found below:

  > _(if you have not done the previous exercise, now is a good time to do so!)_

  1. Loop through the nodeList and get the text content of each paragraph
  2. Set a text content to paragraph the fourth paragraph,**_Fourth Paragraph_**
  3. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
  4. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
  5. Set text content, id and class to each paragraph

  ### DOM Mini Project
  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'DOM Mini Project'|user_folder=dom_mini_project -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'DOM Mini Project'|type=exist|user_folder=dom_mini_project|files=index.html,script.js -->
  In this exercise, we want you to copy [script.js](./exercises/script.js) and [index.html](./exercises/index.html) and complete the tasks found below. Apply all the styles and functionality using JavaScript only.

  1. The year color is changing every 1 second
  2. The date and time background color is changing every on seconds
  3. Completed challenge has background green
  4. Ongoing challenge has background yellow
  5. Coming challenges have background red

  The result should be as 

  ![Project 1](./assets/dom_mini_project_challenge.gif)


### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: Document Object Model(DOM)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/21_Day_DOM/21_day_dom.md){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/21_Day_DOM/21_day_dom.md){:target="_blank"}