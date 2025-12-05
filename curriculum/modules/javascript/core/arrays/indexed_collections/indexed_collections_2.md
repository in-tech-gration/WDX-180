---
title: JavaScript - Indexed collections 2
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
source: https://github.com/in-tech-gration/content/tree/main/files/en-us/web/javascript/guide/indexed_collections
---

### Study Plan

This module introduces some more Array methods and dives even deeper into 
these powerful indexed data structures.

<!-- ### Array methods -->
**More Array methods**

  The [`every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every){:target="_blank"} method returns `true` if `callback` returns `true` for every item in the array.

  ```js
  function isNumber(value) {
    return typeof value === "number";
  }
  const a1 = [1, 2, 3];
  console.log(a1.every(isNumber)); // true
  const a2 = [1, "2", 3];
  console.log(a2.every(isNumber)); // false
  ```

  The [`some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some){:target="_blank"} method returns `true` if `callback` returns `true` for at least one item in the array.

  ```js
  function isNumber(value) {
    return typeof value === "number";
  }
  const a1 = [1, 2, 3];
  console.log(a1.some(isNumber)); // true
  const a2 = [1, "2", 3];
  console.log(a2.some(isNumber)); // true
  const a3 = ["1", "2", "3"];
  console.log(a3.some(isNumber)); // false
  ```

  The [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce){:target="_blank"} method applies `callback(accumulator, currentValue, currentIndex, array)` for each value in the array for the purpose of reducing the list of items down to a single value. The `reduce` function returns the final value returned by `callback` function.

  If `initialValue` is specified, then `callback` is called with `initialValue` as the first parameter value and the value of the first item in the array as the second parameter value.

  If `initialValue` is _not_ specified, then `callback`'s first two parameter values will be the first and second elements of the array. On _every_ subsequent call, the first parameter's value will be whatever `callback` returned on the previous call, and the second parameter's value will be the next value in the array.

  If `callback` needs access to the index of the item being processed, or access to the entire array, they are available as optional parameters.

  ```js
  const a = [10, 20, 30];
  const total = a.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  console.log(total); // 60
  ```

  The [`reduceRight()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight){:target="_blank"} method works like `reduce()`, but starts with the last element.

  `reduce` and `reduceRight` are the least obvious of the iterative array methods. They should be used for algorithms that combine two values recursively in order to reduce a sequence down to a single value.

<!-- ## Array transformations -->
**Array transformations**

You can transform back and forth between arrays and other data structures.

<!-- ### Grouping the elements of an array -->
**Grouping the elements of an array**

  The [Object.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy){:target="_blank"} method can be used to group the elements of an array, using a test function that returns a string indicating the group of the current element.

  Here we have an inventory array that contains "food" objects that have a `name` and a `type`.

  ```js
  const inventory = [
    { name: "asparagus", type: "vegetables" },
    { name: "bananas", type: "fruit" },
    { name: "goat", type: "meat" },
    { name: "cherries", type: "fruit" },
    { name: "fish", type: "meat" },
  ];
  ```

  To use `Object.groupBy()`, you supply a callback function that is called with the current element, and optionally the current index and array, and returns a string indicating the group of the element.

  The code below uses an arrow function to return the `type` of each array element (this uses [object destructuring syntax for function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter){:target="_blank"} to unpack the `type` element from the passed object). The result is an object that has properties named after the unique strings returned by the callback. Each property is assigned an array containing the elements in the group.

  ```js
  const result = Object.groupBy(inventory, ({ type }) => type);
  console.log(result);
  // Logs
  // {
  //   vegetables: [{ name: 'asparagus', type: 'vegetables' }],
  //   fruit: [
  //     { name: 'bananas', type: 'fruit' },
  //     { name: 'cherries', type: 'fruit' }
  //   ],
  //   meat: [
  //     { name: 'goat', type: 'meat' },
  //     { name: 'fish', type: 'meat' }
  //   ]
  // }
  ```

  Note that the returned object references the _same_ elements as the original array (not [deep copies](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy){:target="_blank"}). Changing the internal structure of these elements will be reflected in both the original array and the returned object.

  If you can't use a string as the key, for example, if the information to group is associated with an object that might change, then you can instead use [Map.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy){:target="_blank"}. This is very similar to `Object.groupBy()` except that it groups the elements of the array into a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map){:target="_blank"} that can use an arbitrary value ([object](https://developer.mozilla.org/en-US/docs/Glossary/Object){:target="_blank"} or [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive){:target="_blank"}) as a key.

<!-- ## Sparse arrays -->
**Sparse arrays**

  Arrays can contain "empty slots", which are not the same as slots filled with the value `undefined`. Empty slots can be created in one of the following ways:

  ```js
  // Array constructor:
  const a = Array(5); // [ <5 empty items> ]

  // Consecutive commas in array literal:
  const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

  // Directly setting a slot with index greater than array.length:
  const c = [1, 2];
  c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

  // Elongating an array by directly setting .length:
  const d = [1, 2];
  d.length = 5; // [ 1, 2, <3 empty items> ]

  // Deleting an element:
  const e = [1, 2, 3, 4, 5];
  delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]
  ```

  In some operations, empty slots behave as if they are filled with `undefined`.

  ```js
  const arr = [1, 2, , , 5]; // Create a sparse array

  // Indexed access
  console.log(arr[2]); // undefined

  // For...of
  for (const i of arr) {
    console.log(i);
  }
  // Logs: 1 2 undefined undefined 5

  // Spreading
  const another = [...arr]; // "another" is [ 1, 2, undefined, undefined, 5 ]
  ```

  But in others (most notably array iteration methods), empty slots are skipped.

  ```js
  const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 empty items>, 6 ]
  arr.forEach((i) => console.log(i)); // 1 2 5
  const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
  const hasFalsy = arr.some((k) => !k); // false

  // Property enumeration
  const keys = Object.keys(arr); // [ '0', '1', '4' ]
  for (const key in arr) {
    console.log(key);
  }
  // Logs: '0' '1' '4'
  // Spreading into an object uses property enumeration, not the array's iterator
  const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }
  ```

  For a complete list of how array methods behave with sparse arrays, see [the `Array` reference page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots){:target="_blank"}.

<!-- ## Multi-dimensional arrays -->
**Multi-dimensional arrays**

  Arrays can be nested, meaning that an array can contain another array as an element. Using this characteristic of JavaScript arrays, multi-dimensional arrays can be created.

  The following code creates a two-dimensional array.

  ```js
  const a = new Array(4);
  for (let i = 0; i < 4; i++) {
    a[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
      a[i][j] = `[${i}, ${j}]`;
    }
  }
  ```

  This example creates an array with the following rows:

  ```plain
  Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
  Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
  Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
  Row 3: [3, 0] [3, 1] [3, 2] [3, 3]
  ```

<!-- ## Using arrays to store other properties -->
**Using arrays to store other properties**

  Arrays can also be used like objects, to store related information.

  ```js
  const arr = [1, 2, 3];
  arr.property = "value";
  console.log(arr.property); // "value"
  ```

  For example, when an array is the result of a match between a regular expression and a string, the array returns properties and elements that provide information about the match. An array is the return value of [`RegExp.prototype.exec()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec){:target="_blank"}, [`String.prototype.match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match){:target="_blank"}, and [`String.prototype.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split){:target="_blank"}. For information on using arrays with regular expressions, see [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions){:target="_blank"}.

<!-- ## Working with array-like objects -->
**Working with array-like objects**

  Some JavaScript objects, such as the [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList){:target="_blank"} returned by [`document.getElementsByTagName()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName){:target="_blank"} or the [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments){:target="_blank"} object made available within the body of a function, look and behave like arrays on the surface but do not share all of their methods. The `arguments` object provides a [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Function/length){:target="_blank"} attribute but does not implement array methods like [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach){:target="_blank"}.

  Array methods cannot be called directly on array-like objects.

  <!-- ```js example-bad -->
  ```js
  function printArguments() {
    arguments.forEach((item) => {
      console.log(item);
    }); // TypeError: arguments.forEach is not a function
  }
  ```

  But you can call them indirectly using [Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call){:target="_blank"}.

  <!-- ```js example-good -->
  ```js
  function printArguments() {
    Array.prototype.forEach.call(arguments, (item) => {
      console.log(item);
    });
  }
  ```

  Array prototype methods can be used on strings as well, since they provide sequential access to their characters in a similar way to arrays:

  ```js
  Array.prototype.forEach.call("a string", (chr) => {
    console.log(chr);
  });
  ```

<!-- ### Exercises -->

<!-- SGEN:META:PROGRESS:task=Study the Indexed Collections 2 module and practice -->
