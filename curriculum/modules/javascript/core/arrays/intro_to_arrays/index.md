---
title: JavaScript - Intro to Arrays
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

<!-- SGEN:META:PROGRESS:task=Read 'Intro to Arrays' -->
#### Intro to Arrays

  ![](./assets/flat-design-devops-illustration-3d.jpg)

  <!-- SGEN:META:PROGRESS:task=Watch 'CS Discoveries: Introduction to Arrays' -->
  [Watch **CS Discoveries: Introduction to Arrays**](https://www.youtube.com/watch?v=seBDTeZmb-k){:target="_blank"}

  <!-- Objects are unordered collections of data using keys and values. Arrays, in contrast, are **ordered collections of data**. If you put something in an array, it has an order. For example, you might a list of the days of the week. -->

  Arrays, in JavaScript, are **ordered collections of data**. If you put something in an array, it has an order. For example, you might a list of the days of the week.

  ```javascript
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  console.log(daysOfTheWeek);
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek[1]);
  console.log(daysOfTheWeek[6]);
  ```

  You first can see how we declare an array, using `[ ]`. Inside of an array, you can store anything you can store in a variable. You can have an array of numbers, an array of strings, an array of objects, an array of arrays, an array of arrays of arrays, etc.

  You can also see above how we access individual elements in an array: we use square brackets again and then we reference the number that we want to access. Again, remember, that the numbering starts at 0. So the first element is index 0.

  Arrays also have many methods (another word for functions that live on an object) and properties (another word for key/value pairs) that live on them. Let's see some of those:

  ```javascript
  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
  console.log(primeNumbers.length);
  console.log(primeNumbers.join(" | "));
  ```

  `primeNumbers.length` gives you back a number that is how long the array is. In this case there are eight elements in the array so it gives us back `8`. `primeNumbers.join(" | "))` takes your whole array and makes it into one string. The `" | "` parameter I'm passing is what I want to be put between each element, so you end up with the string `"1 | 2 | 3 | 5 | 7 | 11 | 13 | 17"`.

  So what if I want to add an element to the array after I've created it? Use `push`!

  ```javascript
  const courses = [
    { teacher: "Will Sentance", course: "JavaScript: The Hard Parts" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React" },
    { teacher: "Steve Kinney", course: "Build Your Own Programming Language" },
    { teacher: "Scott Moss", course: "Intro to Node.js" },
  ];

  courses.push({ teacher: "Jen Kramer", course: "Getting Started with CSS" });

  console.log(courses);

  courses[2] = { teacher: "Brian Holt", course: "Complete Intro to Databases" };

  console.log(courses);
  ```

  [&#9658; Live coding](#flems-enable)

  The first thing we do is add an element to the end using the push function that arrays have. It "pushes" the element on the end.

  Below that, we're overriding index 2 with a new course. This will throw away what was there before and set it to be what we've set it to be.

  Okay, now, given that, what if we wanted to `console.log` everything in the array? Do you already have all the tools to do that? Let's see to do it.

  ```javascript
  const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
  ];

  // method 1
  for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }

  // method 2
  cities.forEach(function (city) {
    console.log(city);
  });
  ```

  [&#9658; Live coding](#flems-enable)

  The first way, using a for loop, is using that `i` control variable which gets incremented each loop. We use that `i` to access each item in the array on each iteration of the loop. We have the loop to stop when `i` gets equal to the `length` of cities. Very useful pattern. You'll see it a lot.

  The second way is using a function that arrays have called `forEach`. This `forEach` method takes in a function and that function will be called once on each item of the array. It will pass that item into the function, which is what `city` is in this situation. Both are useful patterns to know. You'll use both frequently. While you're getting started, just use the one you feel comfortable with. They have different things that make them preferable in different situations but usually you can use either. Method 2 may be a bit more advanced but I don't think you should be scared of it. For now prefer method 1. I just wanted you to see method 2.

### Summary

### Exercises

#### Task 1: Declaring JavaScript Arrays

  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'Declaring JavaScript Arrays'|user_folder=task_1 -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'Declaring JavaScript Arrays'|type=exist|user_folder=task_1|files=declaring-arrays.js,declaring-arrays.html -->
  In this task, we want you to load the [declaring-arrays.js](./exercises/declaring-arrays.js){:target="_blank"} from an HTML named `declaring-arrays.html` and complete the challenges found inside.

#### Task 2: Indexing JavaScript Arrays

  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'Indexing JavaScript Arrays'|user_folder=task_2 -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'Indexing JavaScript Arrays'|type=exist|user_folder=task_2|files=indexing-arrays.js,indexing-arrays.html -->
  In this task, we want you to load the [indexing-arrays.js](./exercises/indexing-arrays.js){:target="_blank"} from an HTML named `indexing-arrays.html` and complete the challenges found inside.

#### Task 3: Modifying JavaScript Arrays

  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'Modifying JavaScript Arrays'|user_folder=task_3 -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'Modifying JavaScript Arrays'|type=exist|user_folder=task_3|files=modifying-arrays.js,modifying-arrays.html -->
  In this task, we want you to load the [modifying-arrays.js](./exercises/modifying-arrays.js){:target="_blank"} from an HTML named `modifying-arrays.html` and complete the challenges found inside.

#### Task 4: Properties and Methods of JavaScript Arrays

  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'Properties and Methods of JavaScript Arrays'|user_folder=task_4 -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'Properties and Methods of JavaScript Arrays'|type=exist|user_folder=task_4|files=properties-and-methods-of-arrays.js,properties-and-methods-of-arrays.html -->
  In this task, we want you to load the [properties-and-methods-of-arrays.js](./exercises/properties-and-methods-of-arrays.js){:target="_blank"} from an HTML named `properties-and-methods-of-arrays.html` and complete the challenges found inside.

#### Task 5: Test your skills: JavaScript Arrays

  <!-- SGEN:META:PROGRESS:task=Complete the exercise 'Test your skills: JavaScript Arrays'|user_folder=task_5 -->
  <!-- SGEN:META:TESTS:name=Test Exercise: 'Test your skills: JavaScript Arrays'|type=exist|user_folder=task_5|files=arrays-skills.js,arrays-skills.html -->
  In this task, we want you to load the [arrays-skills.js](./exercises/arrays-skills.js){:target="_blank"} from an HTML named `arrays-skills.html` and complete the challenges found inside.

### Extra Resources

### Sources and Attributions

  **Content is based on the following sources:**

  - [Arrays](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/K-arrays.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/K-arrays.md){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/btholt/complete-intro-to-web-dev-v3){:target="_blank"}!

  **Exercises are based on the following sources:**

  - [TeachMeJavaScriptLikeIm5 declaring-arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/declaring-arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/declaring-arrays.js){:target="_blank"}

  - [TeachMeJavaScriptLikeIm5 indexing-arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/indexing-arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/indexing-arrays.js){:target="_blank"}

  - [TeachMeJavaScriptLikeIm5 modifying-arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/modifying-arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/modifying-arrays.js){:target="_blank"}

  - [TeachMeJavaScriptLikeIm5 properties_and_methods_of_arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/properties_and_methods_of_arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/properties_and_methods_of_arrays.js){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5){:target="_blank"}!

