/* 
------------------------------------------------------------------------------------
Tutorial: using objects (basics)
------------------------------------------------------------------------------------
*/

// Objects are containers that you can use for storing a collection of related data. For example, you might want to store some information about a person called Jane, such as her name, age and the things she likes.

// You can create an object by simply declaring it, similar to how you would assign an array to a variable. It is good practice to declare objects using the const keyword. Objects are always wrapped in curly braces.

const myEmptyObject = {}; // an empty object

// Like arrays, objects can contain any type of data, including strings, numbers, booleans and arrays. Here's an object containing some info about Jane.

const jane = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 42,
  likesMusic: true,
  favoriteThings: ['coffee', 'cake', 'dancing', 'disc golf'],
};

// Objects are organized into named values known as properties or key-value pairs. The key is similar to a variable name and the value contains the data. The key and the value are separated by a colon (:), and each key-value pair is separated by a comma. This is one of the important differences between objects and arrays, which store indexed values.

// So, in the Jane object above, firstName is a key and the string 'Jane' is its value. This key-value pair is one of the object's properties.

/*
------------------------------------------------------------------------------------
Challenge: 1. create an object containing some info about yourself, similar to the 
Jane object above
------------------------------------------------------------------------------------
*/

// You can access an object's properties by using dot notation, eg ObjectName.propertyName. This is how you can access some of the properties of the Jane object:
console.log(jane.firstName); // expected output: 'Jane'
console.log(jane.age); // expected output: 42

/*
------------------------------------------------------------------------------------
Challenge: 2. log one of the properties of your own object to the console using dot 
notation
------------------------------------------------------------------------------------
*/

// You can assign the value of an object property to a separate variable.
const myVariable = jane.age;
console.log(myVariable); // expected output: 42

/*
------------------------------------------------------------------------------------
Challenge: 3. assign a property of your own object to a variable and then log the 
value of the variable to the console
------------------------------------------------------------------------------------
*/

// Object keys are typically written in camelCase with no spaces between words. If you want to use separated words, you need to wrap the name in either single or double quotes.
const anotherObject = {
  'my favorite color': 'purple',
};

// You can't access properties like 'my favorite color' using dot notation, you need to use bracket notation instead and the property name must be wrapped in quotes.
console.log(anotherObject['my favorite color']); // expected output: 'purple'

// You can also access single-word properties using bracket notation. Again, the property name must be wrapped in quotes.
console.log(jane['firstName']); // expected output: 'Jane'

/*
------------------------------------------------------------------------------------
Challenge: 4. log one of the properties of your object to the console using bracket 
notation
------------------------------------------------------------------------------------
*/

// Bracket notation also allows you to access object properties with the values stored inside variables. You simply use the variable name inside the brackets but this time without any quotes.
const propertyNameVariable = 'my favorite color';
console.log(anotherObject[propertyNameVariable]); // expected output: 'purple'

/*
------------------------------------------------------------------------------------
Challenge: 5. create and use a variable to access a property from your object using 
bracket notation and log it to the console
------------------------------------------------------------------------------------
*/

// You can update an existing object's properties at any time, even if they were declared using const. You can do this using either dot or bracket notation and it's a similar process to reassigning a new value to a variable.
jane.age = 52;
console.log(jane.age); // expected output: 52
jane['age'] = 62;
console.log(jane['age']); // expected output: 62

// We can also add new properties to an object at any time.
jane.favoriteColor = 'tartan';
console.log(jane);
/* expected output: 
    { firstName: 'Jane',
    lastName: 'Doe',
    age: 62,
    likesMusic: true,
    favoriteThings: [ 'coffee', 'cake', 'dancing', 'disc golf' ],
    favoriteColor: 'tartan' }
*/

jane['has Netflix account'] = true;
console.log(jane['has Netflix account']); // expected output: 'true'

/*
------------------------------------------------------------------------------------
Challenge: 6. update one existing property and add one new property to your own 
object and then log the entire object to the console 
------------------------------------------------------------------------------------
*/