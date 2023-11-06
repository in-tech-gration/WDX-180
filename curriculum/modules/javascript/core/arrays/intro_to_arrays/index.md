---
title: Intro to Arrays
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

#### Intro to Arrays

  [Watch **CS Discoveries: Introduction to Arrays**](https://www.youtube.com/watch?v=seBDTeZmb-k){:target="_blank"}

  Objects are unordered collections of data using keys and values. Arrays, in contrast, are **ordered collections of data**. If you put something in an array, it has an order. For example, you might a list of the days of the week.

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

  The first way, using a for loop, is using that `i` control variable which gets incremented each loop. We use that `i` to access each item in the array on each iteration of the loop. We have the loop to stop when `i` gets equal to the `length` of cities. Very useful pattern. You'll see it a lot.

  The second way is using a function that arrays have called `forEach`. This `forEach` method takes in a function and that function will be called once on each item of the array. It will pass that item into the function, which is what `city` is in this situation. Both are useful patterns to know. You'll use both frequently. While you're getting started, just use the one you feel comfortable with. They have different things that make them preferable in different situations but usually you can use either. Method 2 may be a bit more advanced but I don't think you should be scared of it. For now prefer method 1. I just wanted you to see method 2.

### Summary

### Exercises

#### Task 1

  In this task, we want you to copy and paste the following code in a file called `declaring-arrays.js` and complete the challenges found inside:

  ```javascript
  /* 
  ------------------------------------------------------------------------------------
  Tutorial: Declaring an array
  ------------------------------------------------------------------------------------
  */

  // To create an array we use square brackets []
  // Arrays are indexed data structures
  // The objects we place inside are indexed with integer's starting at zero

  let fruits = ['Apple', 'Banana'];

  // For this example 'Apple' is indexed at position 0 and 'Banana' is indexed at position 1 inside the array fruits.
  console.log(fruits[0]);
  console.log(fruits[1]);

  /*
  ------------------------------------------------------------------------------------
  Challenge: 1. Create an array for years that inside have 1999, 1984 and 2021, the least recent year should be at position 0. 
              2. console.log each item in the array to check its position.
  ------------------------------------------------------------------------------------
  */
  ```

#### Task 2

  In this task, we want you to copy and paste the following code in a file called `indexing-arrays.js` and complete the challenges found inside:

  ```javascript
  /* 
  ------------------------------------------------------------------------------------
  Tutorial: Indexing Arrays
  ------------------------------------------------------------------------------------
  */

  // Arrays are indexed with integer values beginning with 0.
  // Lets use the example below

  let pringles = ['classic', 'pizza', 'ranch'];

  // The index value of each element inside the array is the following:

  // 'classic'  |  'pizza'  |  'ranch'
  //     0            1           2

  // And we can verify this by printing on console the elements of the array 
  // by it's position or index value

  console.log(0); // 'classic'
  console.log(1); // 'pizza'
  console.log(2); // 'ranch'

  // We can find out how many items are in an array with the length property.

  console.log(pringles.length);

  // output
  // 3

  // Although the indices of pringles consists of 0 to 2, the length property will output the actual amount of items in the array, starting with 1.

  // Counting starts with 0 in indices, which goes against our natural intuition to start counting at 1, 
  // so special care must be taken to remember this until it becomes natural. 

  //If we want to find out the index number of a specific item in an array, such as pizza, we can use the indexOf() method.

  console.log(pringles.indexOf('pizza'));

  // output
  // 1

  // If an index number is not found, such as for a value that does not exist, the console will return -1.

  console.log(pringles.indexOf('blue cheese'));

  // output
  // -1
              
  /*
  ------------------------------------------------------------------------------------
  Challenge: 1. Consider the following array: myColor = ['Red', 'Green', 'White', 'Black'];
                What is the length of the array?
              2. With the previous array, what is the index value/position of the 'Yellow' color.
  ------------------------------------------------------------------------------------
  */
  ```

#### Task 3

  In this task, we want you to copy and paste the following code in a file called `modifying-arrays.js` and complete the challenges found inside:

  ```javascript
  /* 
  ------------------------------------------------------------------------------------
  Tutorial: Modify an array using indexes
  ------------------------------------------------------------------------------------
  */

  // The most basic way to modify an array is to use indexes. We replace the element at the 0th index by 5.
  var numbers = [1, 2, 3, 4];
  numbers[0] = 5;
  console.log(numbers);

  /*
  ------------------------------------------------------------------------------------
  Challenge: Given an array of positive integers above, if a number in the array of numbers is even, then multiply it by 2
  ------------------------------------------------------------------------------------
  */
  ```

#### Task 4

  In this task, we want you to copy and paste the following code in a file called `properties-and-methods-of-arrays.js` and complete the challenges found inside:

  ```javascript
  // Some properties and methods of array are :


  // 1. Returns the number of elements :

      //length

  // example

  var fruits = ["Orange", "Apple", "Banana"];

  console.log(fruits.length); 

  // Output : 3




  // 2. Sorts the array :

      //sort();

  // example

  var fruits = ["Orange", "Apple", "Banana"];

  console.log(fruits.sort());  

  // Output : ['Apple', 'Banana', 'Orange']




  // 3. Joins arrays and returns an array with the joined arrays :

      //concat();

  // example

  var fruits = ["Orange", "Apple", "Banana"];
  var car = ["Audi", "BMW", "Ferrari"];

  console.log(fruits.concat(car));

  // Output : [ 'Orange', 'Apple', 'Banana', 'Audi', 'BMW', 'Ferrari' ]




  // 4. Joins all elements of an array into a string :

      //join();

  // example

  var fruits = ["Orange", "Apple", "Banana"];

  console.log(fruits.join());

  // Output : Orange,Apple,Banana




  // 5. Search the array for an element and returns its position :

      //indexOf();

  // example

  var fruits = ["Orange", "Apple", "Banana"];

  console.log(fruits.indexOf("Apple"));

  // Output : 1





  /*
  ------------------------------------------------------------------------------------
  Challenge 1: Find the length of the array Car ["Audi", "BMW", "Ferrari"] using the properties of the array.
  Challenge 2: Find the position of the element "BMW" in the array Car ["Audi", "BMW", "Ferrari"] using the properties of the array.
  ------------------------------------------------------------------------------------
  */
  ```

### Extra Resources

### Sources and Attributions

  **Content is based on the following sources:**

  [Arrays](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/K-arrays.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/K-arrays.md){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/btholt/complete-intro-to-web-dev-v3){:target="_blank"}!

  **Exercise is based on the following sources:**

  [TeachMeJavaScriptLikeIm5 declaring-arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/declaring-arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/declaring-arrays.js){:target="_blank"}

  [TeachMeJavaScriptLikeIm5 indexing-arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/indexing-arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/indexing-arrays.js){:target="_blank"}

  [TeachMeJavaScriptLikeIm5 modifying-arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/modifying-arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/modifying-arrays.js){:target="_blank"}

  [TeachMeJavaScriptLikeIm5 properties_and_methods_of_arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/properties_and_methods_of_arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/properties_and_methods_of_arrays.js){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5){:target="_blank"}!

