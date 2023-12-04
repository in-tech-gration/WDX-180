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



  ![](./assets/HTML-to-DOM-Building.gif)

  - [Watch: **HTML vs DOM? Let’s debug them**](https://www.youtube.com/watch?v=J-02VNxE7lE){:target="_blank"} to understand the basic difference between these two very crucial concepts in Web Development and start building an intuition around the Document Object Model (DOM).
    - **Duration:** 5min
    - **Level:** Beginner

  - **Practice time!** Now that you know the difference between HTML and the DOM, and got a first test of working with the DOM using the `DevTools`, it's time to practice those skills and become comfortable with DOM manipulation.
    - Go through this [**document**](https://developer.chrome.com/docs/devtools/dom/){:target="_blank"} and stop at each section to practice the command or tool described in your browser.

  <!-- TODO: Integrate into the curriculum (as a Module?): https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/devtools/dom/index.md -->



  <!-- TODO: Review + Add Practice -->


  - Watch lessons 1-7* from [**JavaScript DOM Manipulation Mastery: A Comprehensive Guide**](https://www.youtube.com/watch?v=BGkc6dKUZ84){:target="_blank"} and try to replicate as much as you can in your local environment.
    - **Duration:** 65min
    - **Level:** Intermediate

  _*up to `LESSON 8: DOM EVENT BASICS` section, around 01:04:46_

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

  **Document Object Model (DOM) Manipulation - Part 01**

  HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript. Check the examples below. Selecting HTML element using JavaScript is similar to selecting using CSS. To select an HTML element, we use tag name, id, class name or other attributes.

  **Getting Element**

  We can access already created element or elements using JavaScript. To access or get elements we use different methods. The code below has four _h1_ elements. Let us see the different methods to access the _h1_ elements.

  ```html
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Document Object Model</title>
      </head>
      <body>

      <h1 class='title' id='first-title'>First Title</h1>
      <h1 class='title' id='second-title'>Second Title</h1>
      <h1 class='title' id='third-title'>Third Title</h1>
      <h1></h1>

      </body>
    </html>
  ```

  **Getting elements by tag name**

  **_getElementsByTagName()_**:takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.

  ```js
  // syntax
  document.getElementsByTagName('tagname')
  ```

  ```js
  const allTitles = document.getElementsByTagName('h1')

  console.log(allTitles) //HTMLCollections
  console.log(allTitles.length) // 4

  for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]) // prints each elements in the HTMLCollection
  }
  ```

 **Getting elements by class name**

  **_getElementsByClassName()_** method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. See the example below

  ```js
  //syntax
  document.getElementsByClassName('classname')
  ```

  ```js
  const allTitles = document.getElementsByClassName('title')

  console.log(allTitles) //HTMLCollections
  console.log(allTitles.length) // 4

  for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]) // prints each elements in the HTMLCollection
  }
  ```

  **Getting an element by id**

  **_getElementsById()_** targets a single HTML element. We pass the id without # as an argument.

  ```js
  //syntax
  document.getElementById('id')
  ```

  ```js
  let firstTitle = document.getElementById('first-title')
  console.log(firstTitle) // <h1>First Title</h1>
  ```

  **Getting elements by using querySelector methods**

  The _document.querySelector_ method can select an HTML or HTML elements by tag name, by id or by class name.

  **_querySelector_**: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

  ```js
  let firstTitle = document.querySelector('h1') // select the first available h1 element
  let firstTitle = document.querySelector('#first-title') // select id with first-title
  let firstTitle = document.querySelector('.title') // select the first available element with class title
  ```

  **_querySelectorAll_**: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use **_for loop_** or **_forEach_** to loop through each nodeList elements.

  ```js
  const allTitles = document.querySelectorAll('h1') # selects all the available h1 elements in the page

  console.log(allTitles.length) // 4
  for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i])
  }

  allTitles.forEach(title => console.log(title))
  const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class
  ```

  **Adding attribute**

  An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.

  ```js
  const titles = document.querySelectorAll('h1')
  titles[3].className = 'title'
  titles[3].id = 'fourth-title'
  ```

  **Adding attribute using setAttribute**

  The **_setAttribute()_** method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute.
  Let's add class and id attribute for the fourth title.

  ```js
  const titles = document.querySelectorAll('h1')
  titles[3].setAttribute('class', 'title')
  titles[3].setAttribute('id', 'fourth-title')
  ```

  **Adding attribute without setAttribute**

  We can use normal object setting method to set an attribute but this can not work for all elements. Some attributes are DOM object property and they can be set directly. For instance id and class

  ```js
  //another way to setting an attribute
  titles[3].className = 'title'
  titles[3].id = 'fourth-title'
  ```

  **Adding class using classList**

  The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.

  ```js
  //another way to setting an attribute: append the class, doesn't over ride
  titles[3].classList.add('title', 'header-title')
  ```

  **Removing class using remove**

  Similar to adding we can also remove class from an element. We can remove a specific class from an element.

  ```js
  //another way to setting an attribute: append the class, doesn't over ride
  titles[3].classList.remove('title', 'header-title')
  ```

### Summary

  With the examples above, you have a pretty good understanding of some basic methods that can help us manipulate HTML elements found in a webpage.

### Exercises

  **Simple Manipulation - Part 01**

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

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week10/progress/progress.draft.w10.d02.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


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

  **Document Object Model (DOM) Manipulation - Part 02**

  Picking up where we left of in **Part 01**, below there are more ways on how you can manipulate an HTML document using JavaScript!

  **Adding Text to HTML element**

  An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property _textContent_ or \*innerHTML.

  **Adding Text content using textContent**

  The _textContent_ property is used to add text to an HTML element.

  ```js
  const titles = document.querySelectorAll('h1')
  titles[3].textContent = 'Fourth Title'
  ```

  **Adding Text Content using innerHTML**

  Most people get confused between _textContent_ and _innerHTML_. _textContent_ is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.

  **Text Content**

  We assign *textContent* HTML object property to a text

  ```js
  const titles = document.querySelectorAll('h1')
  titles[3].textContent = 'Fourth Title'
  ```

  **Inner HTML**

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

  **Adding style**

  **Color**

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

  **Background Color**

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

  **Font Size**

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

  **Simple Manipulation - Part 02**

  In this exercise, we want you to copy the files you've submitted for the exercise from Part 01, and complete the task found below:

  > _(if you have not done the previous exercise, now is a good time to do so!)_



  1. Loop through the nodeList and get the text content of each paragraph
  2. Set a text content to paragraph the fourth paragraph,**_Fourth Paragraph_**
  3. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
  4. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
  5. Set text content, id and class to each paragraph

  **DOM Mini Project**

  In this exercise, we want you to copy [script.js](./exercises/dom_mini_project/script.js) and [index.html](./exercises/dom_mini_project/index.html) and complete the tasks found below. Apply all the styles and functionality using JavaScript only.

  1. The year color is changing every 1 second
  2. The date and time background color is changing every on seconds
  3. Completed challenge has background green
  4. Ongoing challenge has background yellow
  5. Coming challenges have background red

  The result should be as 

  ![Project 1](./assets/dom_mini_project_challenge.gif)

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week10/progress/progress.draft.w10.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


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

  **Document Object Model (DOM) Manipulation - Part 03**

  **Creating an Element**

  To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. We use the method _document.createElement()_. The method takes an HTML element tag name as a string parameter.

  ```js
  // syntax
  document.createElement('tagname')
  ```

  ```html
  <!DOCTYPE html>
  <html>

  <head>
      <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>

      <script>
          let title = document.createElement('h1')
          title.className = 'title'
          title.style.fontSize = '24px'
          title.textContent = 'Creating HTML element DOM Day 2'

          console.log(title)
      </script>
  </body>

  </html>
  ```

  **Creating elements**

  To create multiple elements we should use loop. Using loop we can create as many HTML elements as we want.
  After we create the element we can assign value to the different properties of the HTML object.

  ```html
  <!DOCTYPE html>
  <html>

  <head>
      <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>

      <script>
          let title
          for (let i = 0; i < 3; i++) {
              title = document.createElement('h1')
              title.className = 'title'
              title.style.fontSize = '24px'
              title.textContent = i
              console.log(title)
          }
      </script>
  </body>

  </html>
  ```

  **Appending child to a parent element**

  To see a created element on the HTML document we should append it to the parent as a child element. We can access the HTML document body using *document.body*. The *document.body* support the *appendChild()* method. See the example below.

  ```html
  <!DOCTYPE html>
  <html>

  <head>
      <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>

      <script>
          // creating multiple elements and appending to parent element
          let title
          for (let i = 0; i < 3; i++) {
              title = document.createElement('h1')
              title.className = 'title'
              title.style.fontSize = '24px'
              title.textContent = i
              document.body.appendChild(title)
          }
      </script>
  </body>
  </html>
  ```

  **Removing a child element from a parent node**

  After creating an HTML, we may want to remove element or elements and we can use the *removeChild()* method.

  **Example:**

  ```html
  <!DOCTYPE html>
  <html>

  <head>
      <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
      <h1>Removing child Node</h1>
      <h2>Asabeneh Yetayeh challenges in 2020</h1>
      <ul>
          <li>30DaysOfPython Challenge Done</li>
          <li>30DaysOfJavaScript Challenge Done</li>
          <li>30DaysOfReact Challenge Coming</li>
          <li>30DaysOfFullStack Challenge Coming</li>
          <li>30DaysOfDataAnalysis Challenge Coming</li>
          <li>30DaysOfReactNative Challenge Coming</li>
          <li>30DaysOfMachineLearning Challenge Coming</li>
      </ul>

      <script>
          const ul = document.querySelector('ul')
          const lists = document.querySelectorAll('li')
          for (const list of lists) {
              ul.removeChild(list)

          }
      </script>
  </body>

  </html>
  ```

  As we have see in the previous section there is a better way to eliminate all the inner HTML elements or the children of a parent element using the method *innerHTML* properties.

  ```html
  <!DOCTYPE html>
  <html>

  <head>
      <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
      <h1>Removing child Node</h1>
      <h2>Asabeneh Yetayeh challenges in 2020</h1>
      <ul>
          <li>30DaysOfPython Challenge Done</li>
          <li>30DaysOfJavaScript Challenge Done</li>
          <li>30DaysOfReact Challenge Coming</li>
          <li>30DaysOfFullStack Challenge Coming</li>
          <li>30DaysOfDataAnalysis Challenge Coming</li>
          <li>30DaysOfReactNative Challenge Coming</li>
          <li>30DaysOfMachineLearning Challenge Coming</li>
      </ul>

      <script>
          const ul = document.querySelector('ul')
          ul.innerHTML = ''
      </script>
  </body>

  </html>
  ```

  The above snippet of code cleared all the child elements.  

### Summary

  Now, you know how to destroy a created DOM element when it is needed. You learned DOM and now you have the capability to build and develop applications. Now do some exercises for your brain and for your muscle.

### Exercises

  **Number Generator**

  In this exercise, we want you to copy [index.html](./exercises/number_generator/index.html) and [script.js](./exercises/number_generator/script.js) and complete the tasks found below:

  1. Inside the div container with class name `wrapper` on the HTML document, create **dynamically** 102 `div` container, each one containing a number from 0 to 101.
  2. Append style to each number as described below:
    - Even numbers background is green
    - Odd numbers background is yellow
    - Prime numbers background is red

  The expected output should be as shown in the image below. 

  ![Number Generator](./assets/number_generators.png)

  **Countries List**

  In this exercise, we want you to copy [countries.js](./exercises/countries_list/countries.js) and [index.html](./exercises/countries_list/index.html) and use the countries array provided to display **dynamically** all countries as shown in the image below:

  ![World Countries List](./assets/countries_list.png)

  **Asabeneh's Challenge**

  In this exercise, we want you to copy [script.js](./exercises/asabeneh_challenge/script.js) and [index.html](./exercises/asabeneh_challenge/index.html) and use the asabenehChallenges2020 array provided to display **dynamically** its content as show in the image below: 

  ![Challenge Information](./assets/dom_mini_project_challenge_info_day_2.3.gif)

  > Note: The drop down button has been created using [*details*](https://www.w3schools.com/tags/tag_details.asp){:target="_blank"} HTML element.



  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week10/progress/progress.draft.w10.d04.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: Document Object Model(DOM)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!
  
</details>

<hr class="mt-1">

<!-- Week 10 - Day 5 | Introduction to Events -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 10 - Day 5</span> | Introduction to Events</h2>
  </summary>

### Schedule

  - [Study](#study-plan)
  - [Exercises](#exercises)
  - [Extra Resources](#extra-resources)

### Study Plan

  <!-- TODO: Review + Add Practice -->


  - Watch lessons 8-9* from [**JavaScript DOM Manipulation Mastery: A Comprehensive Guide**](https://youtu.be/BGkc6dKUZ84?t=3887){:target="_blank"} and try to replicate as much as you can in your local environment.
    - **Duration:** 20min
    - **Level:** Intermediate

  _*Starting from `LESSON 8: DOM EVENT BASICS` around 01:04:46 up to the end of the video_

  ---



  - Now Let's use the `study-lenses` tool to study "Just enough DOM":

    - Sync your forked WDX-180 repo with the original repo
    - Download the changes locally by running: `git pull`
    - Run `npm run update:submodules`
    - `lenses2 curriculum/modules/javascript/denepo/inside-javascript/02-just-enough-dom`

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

## Week 10 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).