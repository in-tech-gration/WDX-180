/* 
------------------------------------------------------------------------------------
Tutorial: Strings in JavaScript
------------------------------------------------------------------------------------
*/

/*
------------------------------------------------------------------------------------
🌟STRING:-

◽ String is a datatype which consist of zero or more character enclosed in single quotes ('') or double quotes ("");

◽ Basically, it is used to represent series or sequence of characters in text form.
------------------------------------------------------------------------------------
*/


// 🌟DECLARATION:-
let userName = "sourabh"; // declaring a variable "userName" which contains a string value of "sourabh"
console.log(userName); // will print sourabh in the console

// 🌟CHECK TYPE OF VARIABLE WITH "typeof" OPERATOR:-
console.log(typeof userName); // will print string in the console

// 🌟LENGTH PROPERTY: we can find string length using "length" property.
console.log(userName.length); // will print 7 in the console.

// 🌟STRING CONCATENATION: we can use "+" operator with string values to concatenate (join) them in a single string.
console.log("Welcome " + userName); // will print "Welcome sourabh" in the console

// 🌟ACCESSING STRING ENTRIES:-
// We can access string entries (or individual characters of a string) just like we do with arrays i.e using "indexes".
console.log(userName[0]); // will print "s"
console.log(userName[1]); // will print "o"
console.log(userName[2]); // will print "u"

//🌟ACCESS LAST ENTRY: Since index starts from "0", to access last entry we need to subtract 1 from total string length.
console.log(userName[userName.length - 1]); // will print "h"

/* 
  🌟 TEMPLATE LITERALS -

  -> Apart from defining strings in JavaScript using single quotes ('') or double quotes (""), there is a third way to define strings in Javascript too!
    - We can define strings using backtick quotes (``) as well. For example - `Greetings!`
    - These type of strings are called as Template Literals or Template strings.
    - The benefit of using Template literals are that, it allows us to embed variables & expressions inside the string.
      - This can be done using wrapping the expression inside of ${...} in the string.
      - The value returned by the expression will then become a part of the string.
      - TODO - After you learn about the various types of expressions in Javascript, try embedding the various types in template strings to see how they work.
*/

let userFullName = "Niles Maxwell";
let numberOfTasksToday = 5;

console.log(`Greetings ${userFullName}, you have ${numberOfTasksToday} tasks to be done today.`); // Logs "Greetings Niles Maxwell, you have 5 tasks to be done today."

/* 
    Multiline strings using Template Literals
      - Template Literals can be used to form multi-line strings.
      - This is easier than concatenating multiple single-line strings using the concatenation '+' operator.
*/

let multiLineString1 = "Line 1\n" + //Multi-line string using the concatenation operator
"Line 2\n" +
"Line 3";

// Multi-line string using template literal without using the concatenation operator.
let multiLineString2 = `Line 1
Line 2
Line 3`;

// Both console.logs will log the same output to the console.
console.log(multiLineString1);
console.log(multiLineString2); 


/*
🌟STRING IMMUTABILITY:-

=> Array are "mutable" in nature i.e we can modify/alter/mutate/change an individual array entry like this-

let numbers = [1, 2, 3, 4, 5]; // declaring an array

⚡BEFORE MUTATION
console.log(numbers); // will print [1, 2, 3, 4, 5]

⚡AFTER MUTATION
numbers[0] = "ONE"; // changing first entry of array i.e "1" to "ONE"
console.log(numbers); // will print ["ONE", 2, 3, 4, 5]


=> But that is not the case with our strings. Strings are "immutable" in nature, we can't modify an individual entry of a string.

let str = "WOW";

⚡BEFORE MUTATION
console.log(str); // will print "WOW"

⚡AFTER MUTATION
str[0] = "N" // changing first entry of string i.e "W" to "N"
console.log(str); // will print "WOW" and not "NOW"

*/

/*
------------------------------------------------------------------------------------
Challenge 1: write a program to join your first name and last name in a single string.

-> declare a variable "firstName" and initialize it with your first name. 
-> declare a variable "lastName" and initialize it with your last name.
-> declare a variable "fullName" and assign it the concatenated value of "firstName" + "lastName" using "+" operator.
-> use console.log() and print the fullName in the console.

example:- if firstname is "sourabh" and lastname is "kheraliya" so output should be "sourabhkheraliya" as fullname.

🏋️‍♀️BONUS: there should be a space between your firstname and lastname.
  (HINT: you can add additional space in the end of your firstName string just like example of string concatenation concept explained above)
------------------------------------------------------------------------------------

------------------------------------------------------------------------------------
Challenge 2: Write a dialogue script!

-> Step 1: Declare 3 variables and initialize them with random names for 2 heroes and 1 villain.
-> Step 2: Using what you learned about Template literals, write a dialogue flow between the 2 heroes, discussing about the villain you declared
            and assign it to a variable.
-> Step 3: Make sure that the dialogue flow spans over multiple lines.
-> Step 4: Finally, use console.log() to log the the dialogue script to the console.

Dialogue script structure:
<Hero1>: <dialogue>
<Hero2>: <dialogue>
.
.
and so on.

------------------------------------------------------------------------------------
*/