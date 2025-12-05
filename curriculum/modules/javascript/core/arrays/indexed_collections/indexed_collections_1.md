---
title: JavaScript - Indexed collections 1
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
source: https://github.com/in-tech-gration/content/tree/main/files/en-us/web/javascript/guide/indexed_collections
---

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

<!-- SGEN:META:PROGRESS:task=Study the Indexed Collections 1 module and practice -->
