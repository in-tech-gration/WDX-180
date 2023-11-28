---
title: DOM Manipulation - Part 01
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  ## Document Object Model (DOM) Manipulation - Part 01

  HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript. Check the examples below. Selecting HTML element using JavaScript is similar to selecting using CSS. To select an HTML element, we use tag name, id, class name or other attributes.

  ### Getting Element

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

  #### Getting elements by tag name

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

  #### Getting elements by class name

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

  #### Getting an element by id

  **_getElementsById()_** targets a single HTML element. We pass the id without # as an argument.

  ```js
  //syntax
  document.getElementById('id')
  ```

  ```js
  let firstTitle = document.getElementById('first-title')
  console.log(firstTitle) // <h1>First Title</h1>
  ```

  #### Getting elements by using querySelector methods

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

  ### Adding attribute

  An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.

  ```js
  const titles = document.querySelectorAll('h1')
  titles[3].className = 'title'
  titles[3].id = 'fourth-title'
  ```

  #### Adding attribute using setAttribute

  The **_setAttribute()_** method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute.
  Let's add class and id attribute for the fourth title.

  ```js
  const titles = document.querySelectorAll('h1')
  titles[3].setAttribute('class', 'title')
  titles[3].setAttribute('id', 'fourth-title')
  ```

  #### Adding attribute without setAttribute

  We can use normal object setting method to set an attribute but this can not work for all elements. Some attributes are DOM object property and they can be set directly. For instance id and class

  ```js
  //another way to setting an attribute
  titles[3].className = 'title'
  titles[3].id = 'fourth-title'
  ```

  #### Adding class using classList

  The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.

  ```js
  //another way to setting an attribute: append the class, doesn't over ride
  titles[3].classList.add('title', 'header-title')
  ```

  #### Removing class using remove

  Similar to adding we can also remove class from an element. We can remove a specific class from an element.

  ```js
  //another way to setting an attribute: append the class, doesn't over ride
  titles[3].classList.remove('title', 'header-title')
  ```

### Summary

  With the examples above, you have a pretty good understanding of some basic methods that can help us manipulate HTML elements found in a webpage.

### Exercises

  ### Simple Manipulation - Part 01
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