---
title: Week 09 | JavaScript Core 3
---

<hr class="mb-0">

<h1 id="{{ Week 09-JavaScript Core 3 | slugify }}">
  <span class="week-prefix">Week 09 |</span> JavaScript Core 3
</h1>

<img src="assets/header--mohammad-rahmani-8qEB0fTe9Vw-unsplash.jpg" />

<div class="week-controls">

  {% assign week_num = 09 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 09 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 19/1/2026</span>

  <h2 class="week-controls__next_week">

    {% if week_num < 36 %}

      {% assign next_week_num = 09 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

<!-- VERSION -->
<hr style="margin-bottom:0" />
<div class="center opacity-50 opacity-100:hover">
  You are viewing v2.0 of this content. To go back to v1.0 click <a href="v1.0">this link</a>.
</div>
<!-- VERSION -->

---

<!-- Week 09 - Day 1 | JavaScript - Indexed collections 1 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 09 - Day 1</span> | JavaScript - Indexed collections 1</h2>
  </summary>

<!-- Schedule -->

### Study Plan

This chapter introduces collections of data which are ordered by an index value. This includes arrays and array-like constructs such as [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array){:target="_blank"} objects and [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray){:target="_blank"} objects.

An _array_ is an ordered list of values that you refer to with a name and an index.

For example, consider an array called `emp`, which contains employees' names indexed by their numerical employee number. So `emp[0]` would be employee number zero, `emp[1]` employee number one, and so on.

JavaScript does not have an explicit array data type. However, you can use the predefined `Array` object and its methods to work with arrays in your applications. The `Array` object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them. It has a property for determining the array length and other properties for use with regular expressions.

We will be focusing on arrays in this article, but many of the same concepts apply to typed arrays as well, since arrays and typed arrays share many similar methods. For more information on typed arrays, see the [typed array guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays){:target="_blank"}.

<!-- ## Creating an array -->


**Creating an array**

  The following statements create equivalent arrays:

  ```js
  const arr1 = new Array(element0, element1, /* …, */ elementN);
  const arr2 = Array(element0, element1, /* …, */ elementN);
  const arr3 = [element0, element1, /* …, */ elementN];
  ```

  `element0, element1, …, elementN` is a list of values for the array's elements. When these values are specified, the array is initialized with them as the array's elements. The array's `length` property is set to the number of arguments.

  The bracket syntax is called an "array literal" or "array initializer." It's shorter than other forms of array creation, and so is generally preferred. See [Array literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals){:target="_blank"} for details.

  To create an array with non-zero length, but without any items, either of the following can be used:

  ```js
  // This...
  const arr1 = new Array(arrayLength);

  // … results in the same array as this
  const arr2 = Array(arrayLength);

  // This has exactly the same effect
  const arr3 = [];
  arr3.length = arrayLength;
  ```

  > In the above code, `arrayLength` must be a `Number`. Otherwise, an array with a single element (the provided value) will be created. Calling `arr.length` will return `arrayLength`, but the array doesn't contain any elements. A [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in){:target="_blank"} loop will not find any property on the array.



  In addition to a newly defined variable as shown above, arrays can also be assigned as a property of a new or an existing object:

  ```js
  const obj = {};
  // …
  obj.prop = [element0, element1, /* …, */ elementN];

  // OR
  const obj = { prop: [element0, element1, /* …, */ elementN] };
  ```

  If you wish to initialize an array with a single element, and the element happens to be a `Number`, you must use the bracket syntax. When a single `Number` value is passed to the `Array()` constructor or function, it is interpreted as an `arrayLength`, not as a single element.

  This creates an array with only one element: the number 42.

  ```js
  const arr = [42];
  ```

  This creates an array with no elements and `arr.length` set to 42.

  ```js
  const arr = Array(42);
  ```

  This is equivalent to:

  ```js
  const arr = [];
  arr.length = 42;
  ```

  Calling `Array(N)` results in a `RangeError`, if `N` is a non-whole number whose fractional portion is non-zero. The following example illustrates this behavior.

  ```js
  const arr = Array(9.3); // RangeError: Invalid array length
  ```

  If your code needs to create arrays with single elements of an arbitrary data type, it is safer to use array literals. Alternatively, create an empty array first before adding the single element to it.

  You can also use the [Array.of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of){:target="_blank"} static method to create arrays with single element.

  ```js
  const arr = Array.of(9.3); // arr contains only one element 9.3
  ```

<!-- ## Referring to array elements -->


**Referring to array elements**

  Because elements are also properties, you can access them using [property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors){:target="_blank"}. Suppose you define the following array:

  ```js
  const myArray = ["Wind", "Rain", "Fire"];
  ```

  You can refer to the first element of the array as `myArray[0]`, the second element of the array as `myArray[1]`, etc… The index of the elements begins with zero.

  > You can also use [property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors){:target="_blank"} to access other properties of the array, like with an object.
  >
  > ```js
  > const arr = ["one", "two", "three"];
  > arr[2]; // three
  > arr["length"]; // 3
  > ```



<!-- ## Populating an array -->


**Populating an array**

  You can populate an array by assigning values to its elements. For example:

  ```js
  const emp = [];
  emp[0] = "Casey Jones";
  emp[1] = "Phil Lesh";
  emp[2] = "August West";
  ```

  > If you supply a non-integer value to the array operator in the code above, a property will be created in the object representing the array, instead of an array element.
  >
  > ```js
  > const arr = [];
  > arr[3.4] = "Oranges";
  > console.log(arr.length); // 0
  > console.log(Object.hasOwn(arr, 3.4)); // true
  > ```



  You can also populate an array when you create it:

  ```js
  const myArray = new Array("Hello", myVar, 3.14159);
  // OR
  const myArray = ["Mango", "Apple", "Orange"];
  ```

<!-- ### Understanding length -->


**Understanding length**

  At the implementation level, JavaScript's arrays actually store their elements as standard object properties, using the array index as the property name.

  The `length` property is special. Its value is always a positive integer greater than the index of the last element if one exists. (In the example below, `'Dusty'` is indexed at `30`, so `cats.length` returns `30 + 1`).

  Remember, JavaScript Array indexes are 0-based: they start at `0`, not `1`. This means that the `length` property will be one more than the highest index stored in the array:

  ```js
  const cats = [];
  cats[30] = ["Dusty"];
  console.log(cats.length); // 31
  ```

  You can also assign to the `length` property.

  Writing a value that is shorter than the number of stored items truncates the array. Writing `0` empties it entirely:

  ```js
  const cats = ["Dusty", "Misty", "Twiggy"];
  console.log(cats.length); // 3

  cats.length = 2;
  console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

  cats.length = 0;
  console.log(cats); // []; the cats array is empty

  cats.length = 3;
  console.log(cats); // [ <3 empty items> ]
  ```

<!-- ### Iterating over arrays -->


**Iterating over arrays**

  A common operation is to iterate over the values of an array, processing each one in some way, as follows:

  ```js
  const colors = ["red", "green", "blue"];
  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }
  ```

  If you know that none of the elements in your array evaluate to `false` in a boolean context—if your array consists only of [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model){:target="_blank"} nodes, for example—you can use a more efficient idiom:

  ```js
  const divs = document.getElementsByTagName("div");
  for (let i = 0, div; (div = divs[i]); i++) {
    /* Process div in some way */
  }
  ```

  This avoids the overhead of checking the length of the array, and ensures that the `div` variable is reassigned to the current item each time around the loop for added convenience.

  The [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach){:target="_blank"} method provides another way of iterating over an array:

  ```js
  const colors = ["red", "green", "blue"];
  colors.forEach((color) => console.log(color));
  // red
  // green
  // blue
  ```

  The function passed to `forEach` is executed once for every item in the array, with the array item passed as the argument to the function. Unassigned values are not iterated in a `forEach` loop.

  Note that the elements of an array that are omitted when the array is defined are not listed when iterating by `forEach`, but _are_ listed when `undefined` has been manually assigned to the element:

  ```js
  const sparseArray = ["first", "second", , "fourth"];

  sparseArray.forEach((element) => {
    console.log(element);
  });
  // Logs:
  // first
  // second
  // fourth

  if (sparseArray[2] === undefined) {
    console.log("sparseArray[2] is undefined"); // true
  }

  const nonsparseArray = ["first", "second", undefined, "fourth"];

  nonsparseArray.forEach((element) => {
    console.log(element);
  });
  // Logs:
  // first
  // second
  // undefined
  // fourth
  ```

  Since JavaScript array elements are saved as standard object properties, it is not advisable to iterate through JavaScript arrays using [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in){:target="_blank"} loops, because normal elements and all enumerable properties will be listed.

<!-- ### Array methods -->


**Array methods**

  The [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array){:target="_blank"} object has the following methods:

  The [`concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat){:target="_blank"} method joins two or more arrays and returns a new array.

  ```js
  let myArray = ["1", "2", "3"];
  myArray = myArray.concat("a", "b", "c");
  // myArray is now ["1", "2", "3", "a", "b", "c"]
  ```

  The [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join){:target="_blank"} method joins all elements of an array into a string.

  ```js
  const myArray = ["Wind", "Rain", "Fire"];
  const list = myArray.join(" - "); // list is "Wind - Rain - Fire"
  ```

  The [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push){:target="_blank"} method adds one or more elements to the end of an array and returns the resulting `length` of the array.

  ```js
  const myArray = ["1", "2"];
  myArray.push("3"); // myArray is now ["1", "2", "3"]
  ```

  The [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop){:target="_blank"} method removes the last element from an array and returns that element.

  ```js
  const myArray = ["1", "2", "3"];
  const last = myArray.pop();
  // myArray is now ["1", "2"], last = "3"
  ```

  The [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift){:target="_blank"} method removes the first element from an array and returns that element.

  ```js
  const myArray = ["1", "2", "3"];
  const first = myArray.shift();
  // myArray is now ["2", "3"], first is "1"
  ```

  The [`unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift){:target="_blank"} method adds one or more elements to the front of an array and returns the new length of the array.

  ```js
  const myArray = ["1", "2", "3"];
  myArray.unshift("4", "5");
  // myArray becomes ["4", "5", "1", "2", "3"]
  ```

  The [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice){:target="_blank"} method extracts a section of an array and returns a new array.

  ```js
  let myArray = ["a", "b", "c", "d", "e"];
  myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
  // starts at index 1 and extracts all elements
  // until index 3
  ```

  The [`at()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at){:target="_blank"} method returns the element at the specified index in the array, or `undefined` if the index is out of range. It's notably used for negative indices that access elements from the end of the array.

  ```js
  const myArray = ["a", "b", "c", "d", "e"];
  myArray.at(-2); // "d", the second-last element of myArray
  ```

  The [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice){:target="_blank"} method removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

  ```js
  const myArray = ["1", "2", "3", "4", "5"];
  myArray.splice(1, 3, "a", "b", "c", "d");
  // myArray is now ["1", "a", "b", "c", "d", "5"]
  // This code started at index one (or where the "2" was),
  // removed 3 elements there, and then inserted all consecutive
  // elements in its place.
  ```

  The [`reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse){:target="_blank"} method transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array.

  ```js
  const myArray = ["1", "2", "3"];
  myArray.reverse();
  // transposes the array so that myArray = ["3", "2", "1"]
  ```

  The [`flat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat){:target="_blank"} method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

  ```js
  let myArray = [1, 2, [3, 4]];
  myArray = myArray.flat();
  // myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened
  ```

  The [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort){:target="_blank"} method sorts the elements of an array in place, and returns a reference to the array.

  ```js
  const myArray = ["Wind", "Rain", "Fire"];
  myArray.sort();
  // sorts the array so that myArray = ["Fire", "Rain", "Wind"]
  ```

  `sort()` can also take a callback function to determine how array elements are compared. The callback function is called with two arguments, which are two values from the array. The function compares these two values and returns a positive number, negative number, or zero, indicating the order of the two values. For instance, the following will sort the array by the last letter of a string:

  ```js
  const sortFn = (a, b) => {
    if (a[a.length - 1] < b[b.length - 1]) {
      return -1; // Negative number => a < b, a comes before b
    } else if (a[a.length - 1] > b[b.length - 1]) {
      return 1; // Positive number => a > b, a comes after b
    }
    return 0; // Zero => a = b, a and b keep their original order
  };
  myArray.sort(sortFn);
  // sorts the array so that myArray = ["Wind","Fire","Rain"]
  ```

  - if `a` is less than `b` by the sorting system, return `-1` (or any negative number)
  - if `a` is greater than `b` by the sorting system, return `1` (or any positive number)
  - if `a` and `b` are considered equivalent, return `0`.

  The [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf){:target="_blank"} method searches the array for `searchElement` and returns the index of the first match.

  ```js
  const a = ["a", "b", "a", "b", "a"];
  console.log(a.indexOf("b")); // 1

  // Now try again, starting from after the last match
  console.log(a.indexOf("b", 2)); // 3
  console.log(a.indexOf("z")); // -1, because 'z' was not found
  ```

  The [`lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf){:target="_blank"} method works like `indexOf`, but starts at the end and searches backwards.

  ```js
  const a = ["a", "b", "c", "d", "a", "b"];
  console.log(a.lastIndexOf("b")); // 5

  // Now try again, starting from before the last match
  console.log(a.lastIndexOf("b", 4)); // 1
  console.log(a.lastIndexOf("z")); // -1
  ```

  The [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach){:target="_blank"} method executes `callback` on every array item and returns `undefined`.

  ```js
  const a = ["a", "b", "c"];
  a.forEach((element) => {
    console.log(element);
  });
  // Logs:
  // a
  // b
  // c
  ```

  The `forEach` method (and others below) that take a callback are known as _iterative methods_, because they iterate over the entire array in some fashion. Each one takes an optional second argument called `thisArg`. If provided, `thisArg` becomes the value of the `this` keyword inside the body of the callback function. If not provided, as with other cases where a function is invoked outside of an explicit object context, `this` will refer to the global object ([`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window){:target="_blank"}, [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis){:target="_blank"}, etc.) when the function is [not strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode){:target="_blank"}, or `undefined` when the function is strict.

  > The `sort()` method introduced above is not an iterative method, because its callback function is only used for comparison and may not be called in any particular order based on element order. `sort()` does not accept the `thisArg` parameter either.



  The [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map){:target="_blank"} method returns a new array of the return value from executing `callback` on every array item.

  ```js
  const a1 = ["a", "b", "c"];
  const a2 = a1.map((item) => item.toUpperCase());
  console.log(a2); // ['A', 'B', 'C']
  ```

  The [`flatMap()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap){:target="_blank"} method runs `map()` followed by a `flat()` of depth 1.

  ```js
  const a1 = ["a", "b", "c"];
  const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
  console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
  ```

  The [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter){:target="_blank"} method returns a new array containing the items for which `callback` returned `true`.

  ```js
  const a1 = ["a", 10, "b", 20, "c", 30];
  const a2 = a1.filter((item) => typeof item === "number");
  console.log(a2); // [10, 20, 30]
  ```

  The [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find){:target="_blank"} method returns the first item for which `callback` returned `true`.

  ```js
  const a1 = ["a", 10, "b", 20, "c", 30];
  const i = a1.find((item) => typeof item === "number");
  console.log(i); // 10
  ```

  The [`findLast()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast){:target="_blank"} method returns the last item for which `callback` returned `true`.

  ```js
  const a1 = ["a", 10, "b", 20, "c", 30];
  const i = a1.findLast((item) => typeof item === "number");
  console.log(i); // 30
  ```

  The [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex){:target="_blank"} method returns the index of the first item for which `callback` returned `true`.

  ```js
  const a1 = ["a", 10, "b", 20, "c", 30];
  const i = a1.findIndex((item) => typeof item === "number");
  console.log(i); // 1
  ```

  The [`findLastIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex){:target="_blank"} method returns the index of the last item for which `callback` returned `true`.

  ```js
  const a1 = ["a", 10, "b", 20, "c", 30];
  const i = a1.findLastIndex((item) => typeof item === "number");
  console.log(i); // 5
  ```

<!-- ### Exercises -->



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 09 - Day 2 | JavaScript - Indexed collections 2 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 09 - Day 2</span> | JavaScript - Indexed collections 2</h2>
  </summary>

<!-- Schedule -->

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



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 09 - Day 3 | JavaScript - Working with Objects 1 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 09 - Day 3</span> | JavaScript - Working with Objects 1</h2>
  </summary>

<!-- Schedule -->

### Study Plan

JavaScript is designed on an object-based paradigm. An object is a collection of [properties](https://developer.mozilla.org/en-US/docs/Glossary/Property/JavaScript){:target="_blank"}, and a property is an association between a name (or _key_) and a value. A property's value can be a function, in which case the property is known as a [method](https://developer.mozilla.org/en-US/docs/Glossary/Method){:target="_blank"}.

Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

In addition to objects that are predefined in the browser, you can define your own objects. This chapter describes how to use objects, properties, and methods, and how to create your own objects.

<!-- WDX:SGEN:PROGRESS:task=Watch 'Javascript Objects Explained' -->


- [Watch **Javascript Objects Explained**](https://www.youtube.com/watch?v=rLPwCAqyCAE){:target="_blank"}
  - Level: Beginner
  - Duration: 23min
  - Captions: Yes

<!-- ## Creating new objects -->


**Creating new objects**

  You can create an object using an [object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer){:target="_blank"}. Alternatively, you can first create a constructor function and then instantiate an object by invoking that function with the `new` operator.

<!-- ### Using object initializers -->


**Using object initializers**

  Object initializers are also called _object literals_. "Object initializer" is consistent with the terminology used by C++.

  The syntax for an object using an object initializer is:

  ```js
  const obj = {
    property1: value1, // property name may be an identifier
    2: value2, // or a number
    "property n": value3, // or a string
  };
  ```

  Each property name before colons is an identifier (either a name, a number, or a string literal), and each `valueN` is an expression whose value is assigned to the property name. The property name can also be an expression; computed keys need to be wrapped in square brackets. The [object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer){:target="_blank"} reference contains a more detailed explanation of the syntax.

  In this example, the newly created object is assigned to a variable `obj` — this is optional. If you do not need to refer to this object elsewhere, you do not need to assign it to a variable. (Note that you may need to wrap the object literal in parentheses if the object appears where a statement is expected, so as not to have the literal be confused with a block statement.)

  Object initializers are expressions, and each object initializer results in a new object being created whenever the statement in which it appears is executed. Identical object initializers create distinct objects that do not compare to each other as equal.

  The following statement creates an object and assigns it to the variable `x` if and only if the expression `cond` is true:

  ```js
  let x;
  if (cond) {
    x = { greeting: "hi there" };
  }
  ```

  The following example creates `myHonda` with three properties. Note that the `engine` property is also an object with its own properties.

  ```js
  const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
  };
  ```

  Objects created with initializers are called _plain objects_, because they are instances of [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object){:target="_blank"}, but not any other object type. Some object types have special initializer syntaxes — for example, [array initializers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals){:target="_blank"} and [regex literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression){:target="_blank"}.

<!-- ## Objects and properties -->


**Objects and properties**

  A JavaScript object has properties associated with it. Object properties are basically the same as variables, except that they are associated with objects, not [scopes](https://developer.mozilla.org/en-US/docs/Glossary/Scope){:target="_blank"}. The properties of an object define the characteristics of the object.

  For example, this example creates an object named `myCar`, with properties named `make`, `model`, and `year`, with their values set to `"Ford"`, `"Mustang"`, and `1969`:

  ```js
  const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };
  ```

  Like JavaScript variables, property names are case sensitive. Property names can only be strings or Symbols — all keys are [converted to strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion){:target="_blank"} unless they are Symbols. [Array indices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array_indices){:target="_blank"} are, in fact, properties with string keys that contain integers.

<!-- ### Accessing properties -->


**Accessing properties**

  You can access a property of an object by its property name. [Property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors){:target="_blank"} come in two syntaxes: _dot notation_ and _bracket notation_. For example, you could access the properties of the `myCar` object as follows:

  ```js
  // Dot notation
  myCar.make = "Ford";
  myCar.model = "Mustang";
  myCar.year = 1969;

  // Bracket notation
  myCar["make"] = "Ford";
  myCar["model"] = "Mustang";
  myCar["year"] = 1969;
  ```

  An object property name can be any JavaScript string or [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol){:target="_blank"}, including an empty string. However, you cannot use dot notation to access a property whose name is not a valid JavaScript identifier. For example, a property name that has a space or a hyphen, that starts with a number, or that is held inside a variable can only be accessed using the bracket notation. This notation is also very useful when property names are to be dynamically determined, i.e., not determinable until runtime. Examples are as follows:

  ```js
  const myObj = {};
  const str = "myString";
  const rand = Math.random();
  const anotherObj = {};

  // Create additional properties on myObj
  myObj.type = "Dot syntax for a key named type";
  myObj["date created"] = "This key has a space";
  myObj[str] = "This key is in variable str";
  myObj[rand] = "A random number is the key here";
  myObj[anotherObj] = "This key is object anotherObj";
  myObj[""] = "This key is an empty string";

  console.log(myObj);
  // {
  //   type: 'Dot syntax for a key named type',
  //   'date created': 'This key has a space',
  //   myString: 'This key is in variable str',
  //   '0.6398914448618778': 'A random number is the key here',
  //   '[object Object]': 'This key is object anotherObj',
  //   '': 'This key is an empty string'
  // }
  console.log(myObj.myString); // 'This key is in variable str'
  ```

  In the above code, the key `anotherObj` is an object, which is neither a string nor a symbol. When it is added to the `myObj`, JavaScript calls the [toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Object/toString){:target="_blank"} method of `anotherObj`, and use the resulting string as the new key.

  You can also access properties with a string value stored in a variable. The variable must be passed in bracket notation. In the example above, the variable `str` held `"myString"` and it is `"myString"` that is the property name. Therefore, `myObj.str` will return as undefined.

  ```js
  str = "myString";
  myObj[str] = "This key is in variable str";

  console.log(myObj.str); // undefined

  console.log(myObj[str]); // 'This key is in variable str'
  console.log(myObj.myString); // 'This key is in variable str'
  ```

  This allows accessing any property as determined at runtime:

  ```js
  let propertyName = "make";
  myCar[propertyName] = "Ford";

  // access different properties by changing the contents of the variable
  propertyName = "model";
  myCar[propertyName] = "Mustang";

  console.log(myCar); // { make: 'Ford', model: 'Mustang' }
  ```

  However, beware of using square brackets to access properties whose names are given by external input. This may make your code susceptible to [object injection attacks](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md){:target="_blank"}.

  Nonexistent properties of an object have value [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined){:target="_blank"} (and not [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null){:target="_blank"}){:target="_blank"}.

  ```js
  myCar.nonexistentProperty; // undefined
  ```

<!-- ### Enumerating properties -->


**Enumerating properties**

  There are three native ways to list/traverse object properties:

  - [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in){:target="_blank"} loops. This method traverses all of the enumerable string properties of an object as well as its prototype chain.
  - [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys){:target="_blank"}. This method returns an array with only the enumerable own string property names ("keys") in the object `myObj`, but not those in the prototype chain.
  - [Object.getOwnPropertyNames()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames){:target="_blank"}. This method returns an array containing all the own string property names in the object `myObj`, regardless of if they are enumerable or not.

  You can use the bracket notation with [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in){:target="_blank"} to iterate over all the enumerable properties of an object. To illustrate how this works, the following function displays the properties of the object when you pass the object and the object's name as arguments to the function:

  ```js
  function showProps(obj, objName) {
    let result = "";
    for (const i in obj) {
      // Object.hasOwn() is used to exclude properties from the object's
      // prototype chain and only show "own properties"
      if (Object.hasOwn(obj, i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    console.log(result);
  }
  ```

  The term "own property" refers to the properties of the object, but excluding those of the prototype chain. So, the function call `showProps(myCar, 'myCar')` would print the following:

  ```plain
  myCar.make = Ford
  myCar.model = Mustang
  myCar.year = 1969
  ```

  The above is equivalent to:

  ```js
  function showProps(obj, objName) {
    let result = "";
    Object.keys(obj).forEach((i) => {
      result += `${objName}.${i} = ${obj[i]}\n`;
    });
    console.log(result);
  }
  ```

  There is no native way to list all inherited properties including non-enumerable ones. However, this can be achieved with the following function:

  ```js
  function listAllProperties(myObj) {
    let objectToInspect = myObj;
    let result = [];

    while (objectToInspect !== null) {
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));
      objectToInspect = Object.getPrototypeOf(objectToInspect);
    }

    return result;
  }
  ```

  For more information, see [Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties){:target="_blank"}.

<!-- ### Deleting properties -->


**Deleting properties**

  You can remove a non-inherited property using the [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete){:target="_blank"} operator. The following code shows how to remove a property.

  ```js
  // Creates a new object, myObj, with two properties, a and b.
  const myObj = { a: 5, b: 12 };

  // Removes the a property, leaving myObj with only the b property.
  delete myObj.a;
  console.log("a" in myObj); // false
  ```

<!-- ## Defining methods -->


**Defining methods**

  A _method_ is a function associated with an object, or, put differently, a method is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object. See also [method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions){:target="_blank"} for more details. An example is:

  ```js
  objectName.methodName = functionName;

  const myObj = {
    myMethod: function (params) {
      // do something
    },

    // this works too!
    myOtherMethod(params) {
      // do something else
    },
  };
  ```

  where `objectName` is an existing object, `methodName` is the name you are assigning to the method, and `functionName` is the name of the function.

  You can then call the method in the context of the object as follows:

  ```js
  objectName.methodName(params);
  ```

<!-- ### Using this for object references -->


**Using this for object references**

  JavaScript has a special keyword, [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this){:target="_blank"}, that you can use within a method to refer to the current object. For example, suppose you have 2 objects, `Manager` and `Intern`. Each object has its own `name`, `age` and `job`. In the function `sayHi()`, notice the use of `this.name`. When added to the 2 objects, the same function will print the message with the name of the respective object it's attached to.

  ```js
  const Manager = {
    name: "Karina",
    age: 27,
    job: "Software Engineer",
  };
  const Intern = {
    name: "Tyrone",
    age: 21,
    job: "Software Engineer Intern",
  };

  function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  }

  // add sayHi function to both objects
  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;

  Manager.sayHi(); // Hello, my name is Karina
  Intern.sayHi(); // Hello, my name is Tyrone
  ```

  `this` is a "hidden parameter" of a function call that's passed in by specifying the object before the function that was called. For example, in `Manager.sayHi()`, `this` is the `Manager` object, because `Manager` comes before the function `sayHi()`. If you access the same function from another object, `this` will change as well. If you use other methods to call the function, like [Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call){:target="_blank"} or [Reflect.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply){:target="_blank"}, you can explicitly pass the value of `this` as an argument.

<!-- ### Exercises -->



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 09 - Day 4 | JavaScript - Working with Objects 2 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 09 - Day 4</span> | JavaScript - Working with Objects 2</h2>
  </summary>

<!-- Schedule -->

### Study Plan

<!-- WDX:SGEN:PROGRESS:task=Watch 'JavaScript Getters and Setters | Mosh' -->


- [Watch **JavaScript Getters and Setters**](https://www.youtube.com/watch?v=bl98dm7vJt0){:target="_blank"}
  - Level: Beginner
  - Duration: 7min
  - Captions: Yes

<!-- ## Defining getters and setters -->


**Defining getters and setters**

  A [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get){:target="_blank"} is a function associated with a property that gets the value of a specific property. A [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set){:target="_blank"} is a function associated with a property that sets the value of a specific property. Together, they can indirectly represent the value of a property.

  Getters and setters can be either

  - defined within [object initializers](#using_object_initializers), or
  - added later to any existing object.

  Within [object initializers](#using_object_initializers), getters and setters are defined like regular [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions){:target="_blank"}, but prefixed with the keywords `get` or `set`. The getter method must not expect a parameter, while the setter method expects exactly one parameter (the new value to set). For instance:

  ```js
  const myObj = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    },
  };

  console.log(myObj.a); // 7
  console.log(myObj.b); // 8, returned from the get b() method
  myObj.c = 50; // Calls the set c(x) method
  console.log(myObj.a); // 25
  ```

  The `myObj` object's properties are:

  - `myObj.a` — a number
  - `myObj.b` — a getter that returns `myObj.a` plus 1
  - `myObj.c` — a setter that sets the value of `myObj.a` to half of the value `myObj.c` is being set to

  Getters and setters can also be added to an object at any time after creation using the [Object.defineProperties()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties){:target="_blank"} method. This method's first parameter is the object on which you want to define the getter or setter. The second parameter is an object whose property names are the getter or setter names, and whose property values are objects for defining the getter or setter functions. Here's an example that defines the same getter and setter used in the previous example:

  ```js
  const myObj = { a: 0 };

  Object.defineProperties(myObj, {
    b: {
      get() {
        return this.a + 1;
      },
    },
    c: {
      set(x) {
        this.a = x / 2;
      },
    },
  });

  myObj.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
  console.log(myObj.b); // Runs the getter, which yields a + 1 or 6
  ```

  Which of the two forms to choose depends on your programming style and task at hand. If you can change the definition of the original object, you will probably define getters and setters through the original initializer. This form is more compact and natural. However, if you need to add getters and setters later — maybe because you did not write the particular object — then the second form is the only possible form. The second form better represents the dynamic nature of JavaScript, but it can make the code hard to read and understand.

<!-- ## Comparing objects -->


**Comparing objects**

  In JavaScript, objects are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.

  ```js
  // Two variables, two distinct objects with the same properties
  const fruit = { name: "apple" };
  const anotherFruit = { name: "apple" };

  fruit == anotherFruit; // return false
  fruit === anotherFruit; // return false
  ```

  ```js
  // Two variables, a single object
  const fruit = { name: "apple" };
  const anotherFruit = fruit; // Assign fruit object reference to anotherFruit

  // Here fruit and anotherFruit are pointing to same object
  fruit == anotherFruit; // return true
  fruit === anotherFruit; // return true

  fruit.name = "grape";
  console.log(anotherFruit); // { name: "grape" }; not { name: "apple" }
  ```

  For more information about comparison operators, see [equality operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators){:target="_blank"}.

<!-- ### Exercises -->



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 09 - Day 5 | JavaScript - Array & Object Practice -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 09 - Day 5</span> | JavaScript - Array & Object Practice</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

<!-- WDX:SGEN:PROGRESS:task=Watch 'JavaScript Value vs. Reference (Primitives vs. Objects)' -->


- [Watch **JavaScript Value vs. Reference (Primitives vs. Objects)**](https://www.youtube.com/watch?v=r5rYoJFWfN0){:target="_blank"}
  - Level: Beginner
  - Duration: 21min
  - Captions: Yes

<!-- Summary -->

### Exercises

  ![](./assets/coder-archer.jpg)

  **Let's practice Arrays and Objects!**

  Download the following file and try to solve all the exercises:

  [Array & Object Practice](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week09/assets/Object.Exercises.js){:target="_blank"}

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week09/progress/progress.draft.w09.d05.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

## Week 09 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).

---

<!-- COMMENTS: -->
<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>