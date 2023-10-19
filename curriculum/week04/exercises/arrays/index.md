# Exercises: JavaScript Arrays

## 1) Basic Array Practice

  Let's start off with some basic array practice. In this task we'd like you to create an array of three items, stored inside a variable called myArray. The items can be anything you want — how about your favorite foods or bands?

  Next, modify the first two items in the array using simple bracket notation and assignment. Then add `WDX-180` as a new item to the beginning of the array.

  Copy and paste the code below in a file named `basic-array-practice.js`, and update the code where instructed:

  ```js
  let myArray = []; // Add three items here

  // YOUR CODE HERE >>
  // << YOUR CODE HERE

  // Don't worry about the code below. It's just there to test your code above.

  console.log(myArray.length); //  Should be 4
  console.log(myArray[0]); // Should be 'WDX-180'

  try {
    if ( global ) { global.myArray = myArray; }
  } catch(e){}
  ```

  When you're ready move the file (`basic-array-practice.js`) to the following path `user/week04/exercises/day01/arrays/`.

## 2) String to Array

  Now let's move on to another task. Here you are provided with a string to work with. We'd like you to:

  - Convert the string into an array, removing the + characters in the process. Save the result in a variable called `myArray`.
  - Store the length of the array in a variable called `arrayLength`.
  - Store the last item in the array in a variable called `lastItem`.

  Copy and paste the code below in a file named `string-to-array.js`, and update the code where instructed:

  ```js

  let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

  // YOUR CODE HERE >>
  // << YOUR CODE HERE

  console.log(arrayLength); // Should be 8
  console.log(lastItem); // Should be 'Juri'

  try {
    if ( global ) { 
      global.arrayLength = arrayLength;
      global.lastItem = lastItem;
    }
  } catch(e){}
  ```

  When you're ready move the file (`string-to-array.js`) to the following path `user/week04/exercises/day01/arrays/`.

## 3) Array to String

  For this array task, we provide you with a starting array, and you will work in somewhat the opposite direction. You need to:

  - Remove the last item in the array.
  - Add `Kostas` and `Asteris` to the end of the array.
  - Go over each item in the array and add its index number after the name inside parentheses, for example `Ryu (0)`.
  - Finally, join the array items together in a single string called `myString`, with a separator of "+".

  Copy and paste the code below in a file named `array-to-string.js`, and update the code where instructed:

  ```js
  let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

  // YOUR CODE HERE >>
  // << YOUR CODE HERE

  console.log(myArray.length); // Should be 9
  console.log(myString); // Should be Ryu (0)+Ken (1)+Chun-Li (2)+Cammy (3)+Guile (4)+Sakura (5)+Sagat (6)+Kostas (7)+Asteris (8)

  try {
    if ( global ) { 
      global.myArray = myArray;
      global.myString = myString;
    }
  } catch(e){}
  ```

  When you're ready move the file (`array-to-string.js`) to the following path `user/week04/exercises/day01/arrays/`.

## 4) Birds

  For this array task, we provide you with a starting array listing the names of some birds.

  - Find the index of the `"Eagles"` item, and use that to remove the `"Eagles"` item.
  - Make a new array from this one, called `eBirds`, that contains only birds from the original array whose names begin with the letter `"E"`. Note that `startsWith()` is a great way to check whether a string starts with a given character.

  Copy and paste the code below in a file named `birds.js`, and update the code where instructed:

  ```js
  const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

  // YOUR CODE HERE >>
  // << YOUR CODE HERE

  console.log(eBirds); // Should be [ 'Emus', 'Egrets' ]
  console.log(eBirds.length) // Should be 2

  try {
    if ( global ){ global.eBirds = eBirds; }
  } catch(e){}
  ```

  When you're ready move the file (`birds.js`) to the following path `user/week04/exercises/day01/arrays/`.

### Submit Exercises

  Now that you have completed ALL the exercises above, please run the following git commands to submit them:

  - `git add user/week04/exercises/day01/arrays/`
  - `git commit -m "Week 04 Day 01 Arrays"`
  - `git push`

  After the push is complete, head over to GitHub and check:
  - if any of the tests failed, please try to solve those errors (reach out to us for anything unusual).
  - if all tests run successfully, Congratulations! You're becoming more and more familiar with Javascript!

### Sources and Attributions

  All 4 exercises are from MDN:
  - [Test your skills: Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Arrays){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/59897d30821b4b57d1c92d87d5b97e886d18ed7d/files/en-us/learn/javascript/first_steps/test_your_skills_colon__arrays/index.md){:target="_blank"}