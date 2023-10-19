# Exercises: JavaScript Objects

## 1) Object Basics 1

  In this task you are provided with an object literal, and your tasks are to

  - Store the value of the `name` property inside the `catName` variable, using bracket notation.
  - Run the `greeting()` method using dot notation (it will log the greeting to the browser's console).
  - Update the `color` property value to `black`.

  Copy and paste the code below in a file named `object-basics-1.js`, and update the code where instructed:

  ```js
  const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }

  // YOUR CODE HERE >>
  // << YOUR CODE HERE

  // Don't worry about the code below. It's just there to test your code above.

  console.log(catName); //  Should be 'Bertie'
  console.log(cat.color); // Should be 'black'

  try {
    if ( global ) { global.cat = cat; }
  } catch(e){}
  ```

  When you're ready move the file (`object-basics-1.js`) to the following path `user/week04/exercises/day01/objects/`.

## 2) Object Basics 2

  In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required properties are:

  - `name`: A string representing the band name.
  - `nationality`: A string representing the country the band comes from.
  - `genre`: What type of music the band plays.
  - `members`: A number representing the number of members the band has.
  - `formed`: A number representing the year the band formed.
  - `split`: A number representing the year the band split up, or `false` if they are still together.
  - `albums`: An array representing the albums released by the band. Each array item should be an object containing the following   members:
    - `name`: A string representing the name of the album.
    - `released`: A number representing the year the album was released.

  Include at least two albums in the `albums` array.

  Once you've done this, you should then write a string to the variable `bandInfo`, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.

  Copy and paste the code below in a file named `object-basics-2.js`, and update the code where instructed:

  ```js
  let bandInfo;

  // YOUR CODE HERE >>

  const band = {}; // Populate this object as requested

  // << YOUR CODE HERE

  // Don't worry about the code below. It's just there to test your code above.

  console.log(band);
  console.log(bandInfo);

  try {
    if ( global ) { 
      global.band = band;
      global.bandInfo = bandInfo;
    }
  } catch(e){}
  ```

  When you're ready move the file (`object-basics-2.js`) to the following path `user/week04/exercises/day01/objects/`.

## 1) Object Basics 3

  In this task, we want you to return to the `cat` object literal from Task 1. We want you to rewrite the `greeting()` method so that it logs `"Hello, said Bertie the Cymric."` to the browser's console, but in a way that will work across any cat object of the same structure, regardless of its name or breed.

  When you are done, write your own object called `cat2`, which has the same structure, exactly the same `greeting()` method, but a different `name`, `breed`, and `color`.

  Call both `greeting()` methods to check that they log appropriate greetings to the console.

  Copy and paste the code below in a file named `object-basics-3.js`, and update the code where instructed:

  ```js
  const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!'); // Rewrite this
    }
  };

  // YOUR CODE HERE >>

  const cat2 = {};

  // << YOUR CODE HERE

  // Don't worry about the code below. It's just there to test your code above.

  console.log(cat.greeting()); //  Should be 'Hello, said Bertie the Cymric.'
  console.log(cat2.greeting()); // Should be `Hello, said _name_ the _breed_. (_name_ and _breed_ are the values you've inserted)

  try {
    if ( global ) { 
      global.cat = cat;
      global.cat2 = cat2;
    }
  } catch(e){}
  ```

  When you're ready move the file (`object-basics-3.js`) to the following path `user/week04/exercises/day01/objects/`.

## 1) Object Basics 4

  In the code you wrote for Task 3, the `greeting()` method is defined twice, once for each cat. This isn't ideal (specifically, it violates a principle in programming sometimes called DRY or "Don't Repeat Yourself").

  In this task we want you to improve the code so `greeting()` is only defined once, and every `cat` instance gets its own `greeting()` method. Hint: you should use a JavaScript constructor to create `cat` instances.

  Copy and paste the code below in a file named `object-basics-4.js`, and update the code where instructed:

  ```js

  // Edit the code provided below

  const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
  }

  const cat2 = {
    name : 'Elfie',
    breed : 'Aphrodite Giant',
    color : 'ginger',
    greeting: function() {
      console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
  }

  // Don't worry about the code below. It's just there to test your code above.

  cat.greeting();
  cat2.greeting();

  try {
    if ( global ) { 
      global.cat = cat;
      global.cat2 = cat2;
    }
  } catch(e){}
  ```

  When you're ready move the file (`object-basics-4.js`) to the following path `user/week04/exercises/day01/objects/`.

### Submit Exercises

  Now that you have completed ALL the exercises above, please run the following git commands to submit them:

  - `git add user/week04/exercises/day01/objects/`
  - `git commit -m "Week 04 Day 01 Objects"`
  - `git push`

  After the push is complete, head over to GitHub and check:
  - if any of the tests failed, please try to solve those errors (reach out to us for anything unusual).
  - if all tests run successfully, Congratulations! You're becoming more and more familiar with Javascript!

### Sources and Attributions

  All 4 exercises are from MDN:
  - [Test your Skills: Objects basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/d929c4a2eeef6fb9c6a0bd260f30255235a7351e/files/en-us/learn/javascript/objects/test_your_skills_colon__object_basics/index.md){:target="_blank"}