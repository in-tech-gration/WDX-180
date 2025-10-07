/* 
------------------------------------------------------------------------------------
Tutorial: Functions in JavaScript
------------------------------------------------------------------------------------
*/


/*
------------------------------------------------------------------------------------
FUNCTIONS: A function is a repeating piece of "Processing" while the input and output changes.
------------------------------------------------------------------------------------

------------------------------------------------------------------------------------
EXAMPLE: washing machine which takes dirty clothes as an input, do some processing i.e washing the clothes and returns the washed clothes as an output. Functions are same as washing machine, they take some input, do some processing on that input and then returns that processed value as an output. 
------------------------------------------------------------------------------------

------------------------------------------------------------------------------------

SYNTAX:-

function functionName(parameterOne, parameterTwo){
    some processing code...
}

------------------------------------------------------------------------------------

------------------------------------------------------------------------------------
FUNCTION EXAMPLE - the below 👇 example takes a name as an input and prints hello "passedName" in the console;
------------------------------------------------------------------------------------
*/


function showName(name){
  console.log("hello " + name);
}

showName("sourabh"); // will print "hello sourabh" in the console


/*
------------------------------------------------------------------------------------

PARAMETERS & ARGUMENTS:-

1. PARAMETERS: Parameters are the variable names listed inside of the function definition's parenthesis. (for the above showName function the parameter is "name" listed inside the parenthesis.)

2. ARGUMENTS: Arguments are the actual values passed to a function when it is called. (for the above function showName the argument is "sourabh" which is passed to the function "showName" when called.)

------------------------------------------------------------------------------------
*/

/*
------------------------------------------------------------------------------------

RETURN VALUE & UNDEFINED:-

A funtion which do not returns something returns a special value "undefined".
Also we can assign the returned value of a function as a value in a variable identifier.

------------------------------------------------------------------------------------
*/

console.log(showName("Tanay pratap")); // will print "undefined" in the console because showName is not returning any value

// Returning value from the function
function add(num1, num2){
  return num1 + num2;
}

console.log(add(5, 6)); // will print 11 in the console


/*
------------------------------------------------------------------------------------
Challenge: create a function "welcomeUser" which will take username as an input and returns "Welcome " + passed username as an output.

-> your function name should be "welcomeUser".
-> parameter name should be "userName".
-> return Welcome + passed username value as an return value.
-> pass your name as an argument to the "welcomeUser" function.
-> store that return value in a new variable named as "greeting".
-> use console.log() to show the greeting value.
------------------------------------------------------------------------------------
*/