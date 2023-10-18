---
  title: Week 4 | JavaScript Core 1
---

# Week 4 | JavaScript Core 1

_(Updated: 12/10/2023)_

<!-- Week 4 - Day 1 | Scopes, Arrays & Objects -->
<details>
  <summary><h2>Week 4 - Day 1 | Scopes, Arrays & Objects</h2></summary>
  
### Schedule

  - [Study](#study-plan)
  - [Exercises](#exercises)
  - [Extra Resources](#exercises)

### Study Plan

  **What you'll learn:**

  - Javascript Scopes
  - Javascript Arrays
  - Javascript Objects

  **What are the Javascript Scopes?**

  JavaScript scopes refer to the rules that dictate where and how variables and functions are accessible in your code. Understanding scopes is crucial for writing clean and bug-free JavaScript programs. There are three main types of scopes in Javascript: **Global Scope**, **Function Scope** and **Block Scope**.

  Watch the video below to learn more about Javascript Scopes!

  - [Watch: **var let const in Javascript Scope | Understanding Global Local Function Block Scope**](https://www.youtube.com/watch?v=_E96W6ivHng){:target="_blank"}
    - Duration: 18min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
        <ul>
          <li>What makes var different</li>
          <li>What makes let different</li>
          <li>What makes const different</li>
          <li>A discussion of scope</li>
          <li>Global Scope</li>
          <li>Local Scope</li>
          <li>Block Scope</li>
          <li>Function Scope</li>
          <li>Local Scope variables declared with let or const are not available in global scope</li>
          <li>Nested block scope inside of a function</li>
          <li>Global scope variables are available in local scopes</li>
          <li>Global scope is available to all scopes</li>
          <li>If statements have block scopes </li>
          <li>for loops have block scopes</li>
          <li>switch statements have block scopes</li>
          <li>Note: var is function scoped; const & let are block scoped</li>
        </ul>
      </details>

  **What is an array?**

  Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value. Maybe we've got a series of product items and their prices stored in an array, and we want to loop through them all and print them out on an invoice, while totaling all the prices together and printing out the total price at the bottom.

  Watch the video below to get a better grasp of what an array is and what you can do with it!

  - [Watch: **Arrays in Javascript | Arrays Tutorial for Beginners**](https://www.youtube.com/watch?v=0SyTDl4pb4w){:target="_blank"}
    - Duration: 29min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
        <ul>
          <li>Arrays are Data Structures</li>
          <li>How to create an array</li>
          <li>How to add elements to an array</li>
          <li>Reference an array and view it in the console</li>
          <li>Length property of an array</li>
          <li>Reference the last element in an array</li>
          <li>Reference any item in an array by position</li>
          <li>Using the push() method to add elements to an array</li>
          <li>Using the pop() method to remove elements from an array</li>
          <li>Using the unshift() method to add elements to an array</li>
          <li>Using the shift() method to remove elements from an array</li>
          <li>Do the element positions change in the array?</li>
          <li>Referencing an element that does not exist</li>
          <li>How to remove an element from the middle of an array</li>
          <li>What happens when you delete an element from an array</li>
          <li>The slice() method</li>
          <li>The reverse() method</li>
          <li>The join() method</li>
          <li>The split() method</li>
          <li>The concat() method</li>
          <li>Using the spread operator to combine arrays</li>
          <li>Multidimensional arrays / Nested arrays: Sports Store example</li>
          <li>Referencing an element in a single dimension array</li>
          <li>Referencing an element in a two dimensional array</li>
          <li>Referencing an element in a three dimensional array</li>
        </ul>
      </details>

  **What are Javascript Objects**

  In JavaScript, most things are objects, from core JavaScript features like arrays to the browser APIs built on top of JavaScript. You can even create your own objects to encapsulate related functions and variables into efficient packages and act as handy data containers. The object-based nature of JavaScript is important to understand if you want to go further with your knowledge of the language.

  That's what the next video is for!

  - [Watch: **Javascript Objects Explained | Javascript Objects Tutorial**](https://www.youtube.com/watch?v=rLPwCAqyCAE){:target="_blank"}
    - Duration: 24min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
        <ul>
          <li>Objects have key-value pairs</li>
          <li>How to create an object</li>
          <li>How to access a property of an object</li>
          <li>What data goes inside of an object?</li>
          <li>How to create object properties</li>
          <li>How to access the different properties of an object</li>
          <li>Objects allow dot notation and bracket notation</li>
          <li>How to create object methods</li>
          <li>How to call an object method</li>
          <li>The keyword this inside of a method</li>
          <li>Object.create()</li>
          <li>Using an object as a constructor for another object</li>
          <li>Object Inheritance and examples of inheritance</li>
          <li>Object.keys()</li>
          <li>Object.values()</li>
          <li>Using a for in loop to loop through an object</li>
          <li>Deleting a property or method</li>
          <li>hasOwnProperty() method</li>
          <li>Destructuring Objects as variables</li>
          <li>Simplify destructuring by naming variables the same as object keys</li>
          <li>Destructuring Objects as parameters</li>
        </ul>
      </details>

  **Notes:**

  - You can use the `["bracket"]` property notation, whenever your keys include spaces or special characters, e.g. dots or question marks:

  ```js
  const object = {
    "key with spaces" : true,
    "really?" : 42,
    "Wow! That's crazy!" : "Yes, indeed"
  }

  console.log(object["key with spaces"]);
  console.log(object["really?"]);
  console.log(object["Wow! That's crazy!"]);
  ```

  Also, make sure that you understand the difference between `obj[key]` and `obj["key"]` before moving on.

  - Even though you can use the variable name to access the object from within the object (see example below) it is preferred to use the `this` keyword in case the variable name gets changed:

  ```js
  let obj = { 
    answer: 42,
    meaning: function(){
      console.log( obj.answer );
    }
  }

  obj.meaning();

  // However...
  let ref = obj;
  obj = null;

  ref.meaning(); // Uncaught TypeError: Cannot read properties of null (reading 'answer')
  ```

  So, the right way to do this is by using the `this` keyword to refer to the object itself:

  ```js
  let obj = { 
    answer: 42,
    meaning: function(){
      console.log( this.answer );
    }
  }

  obj.meaning();

  let ref = obj;
  obj = null;

  ref.meaning(); // 42
  ```

  
### Summary
### Exercises

- Scopes
  - PUT EXERCISE HERE
- [JavaScript Arrays](exercises/arrays/index.md)
- Objects
  - PUT EXERCISE HERE

### Extra Resources
### Sources and Attributions


**Content is based on the following sources:**

  - **MDN:**
    - [Interactivity with Javascript](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer#interactivity_with_javascript){:target="_blank"}

</details>

<!-- Week 4 - Day 2 -->
<details>
  <summary><h2>Week 4 - Day 2</h2></summary>
  
### Schedule
### Study Plan
### Summary
### Exercises
### Extra Resources
### Sources and Attributions

### Study Plan
</details>

<!-- Week 4 - Day 3 -->
<details>
  <summary><h2>Week 4 - Day 3</h2></summary>
  
### Schedule
### Study Plan
### Summary
### Exercises
### Extra Resources
### Sources and Attributions

### Study Plan
</details>

<!-- Week 4 - Day 4 -->
<details>
  <summary><h2>Week 4 - Day 4</h2></summary>
  
### Schedule
### Study Plan
### Summary
### Exercises
### Extra Resources
### Sources and Attributions

### Study Plan
</details>

<!-- Week 4 - Day 5 -->
<details>
  <summary><h2>Week 4 - Day 5</h2></summary>
  
### Schedule
### Study Plan
### Summary
### Exercises
### Extra Resources
### Sources and Attributions

### Study Plan
</details>

<!-- Week 4 - Weekend Suggestions -->
<details>
  <summary><h2>Week 4 - Weekend Suggestions</h2></summary>
</details>

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).