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