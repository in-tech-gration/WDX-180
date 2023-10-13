# Week 4 | JavaScript Core 1

## Week 4 - Day 1 | Scope & Arrays

  STUDY: https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer#interactivity_with_javascript
  - First steps: ...
  - ...

  ??? node validate

  ??? - [Watch: **var let const in Javascript Scope | Understanding Global Local Function Block Scope**](https://www.youtube.com/watch?v=_E96W6ivHng&list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT&index=15)
  - Duration: min
  - Level: Beginner
  - <details>
      <summary></summary>
        <ul>
        </ul>
    </details>

  ??? - [Watch: **Arrays in Javascript | Arrays Tutorial for Beginners**](https://www.youtube.com/watch?v=0SyTDl4pb4w&list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT&index=16)
  - Duration: 29min
  - Level: Beginner
  - <details>
      <summary>What you'll learn</summary>
        <ul>
          <li>(00:00) Intro</li>
          <li>(0:14) Arrays are Data Structures</li>
          <li>(0:20) How to create an array</li>
          <li>(1:00) How to add elements to an array</li>
          <li>(2:00) Reference an array and view it in the console</li>
          <li>(2:35) Length property of an array</li>
          <li>(2:55) Reference the last element in an array</li>
          <li>(3:55) Reference any item in an array by position</li>
          <li>(4:20) Using the push() method to add elements to an array</li>
          <li>(5:00) Using the pop() method to remove elements from an array</li>
          <li>(6:00) Using the unshift() method to add elements to an array</li>
          <li>(7:15) Using the shift() method to remove elements from an array</li>
          <li>(8:15) Do the element positions change in the array?</li>
          <li>(9:15) Referencing an element that does not exist</li>
          <li>(9:35) How to remove an element from the middle of an array</li>
          <li>(9:50) What happens when you delete an element from an array</li>
          <li>(10:55) Using the splice() method to remove, replace, and insert elements</li>
          <li>(13:45) The slice() method</li>
          <li>(15:00) The reverse() method</li>
          <li>(15:30) The join() method</li>
          <li>(16:15) The split() method is a string method that creates a new array</li>
          <li>(18:00) The concat() method</li>
          <li>(18:55) Using the spread operator to combine arrays</li>
          <li>(20:55) Multidimensional arrays / Nested arrays: Sports Store example</li>
          <li>(21:45) Referencing an element in a single dimension array</li>
          <li>(22:50) Referencing an element in a two dimensional array</li>
          <li>(25:25) Referencing an element in a three dimensional array</li>
        </ul>
    </details>

  - [Watch: **Javascript Objects Explained | Javascript Objects Tutorial**](https://www.youtube.com/watch?v=rLPwCAqyCAE&list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT&index=18)
  - Duration: 24min
  - Level: Beginner
  - <details>
      <summary>What you'll learn</summary>
        <ul>
          <li>(00:00) Intro</li>
          <li>(0:10) Objects have key-value pairs</li>
          <li>(0:20) How to create an object</li>
          <li>(1:00) How to access a property of an object</li>
          <li>(1:15) What data goes inside of an object?</li>
          <li>(1:20) How to create object properties</li>
          <li>(2:30) How to access the different properties of an object</li>
          <li>(3:20) Objects allow dot notation and bracket notation</li>
          <li>(4:35) How to create object methods</li>
          <li>(5:40) How to call an object method</li>
          <li>(5:50) The keyword this inside of a method</li>
          <li>(7:30) Object.create()</li>
          <li>(7:45) Using an object as a constructor for another object</li>
          <li>(8:30) Object Inheritance and examples of inheritance</li>
          <li>(13:00) Object.keys()</li>
          <li>(13:30) Object.values()</li>
          <li>(13:45) Using a for in loop to loop through an object</li>
          <li>(17:00) Deleting a property or method</li>
          <li>(17:15) hasOwnProperty() method</li>
          <li>(18:00) Destructuring Objects as variables</li>
          <li>(19:45) Simplify destructuring by naming variables the same as object keys</li>
          <li>(20:50) Destructuring Objects as parameters</li>
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

## Week 4 - Day 2

## Week 4 - Day 3

## Week 4 - Day 4

## Week 4 - Day 5

## Week 4 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).