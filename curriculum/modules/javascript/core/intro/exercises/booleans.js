 /* 
  ------------------------------------------------------------------------------------
  Tutorial: Booleans in JavaScript
  ------------------------------------------------------------------------------------
  */
  // Definition:-
  // The boolean (not Boolean) is a primitive data type in JavaScript. It can have only two values: "true" or "false". 
  // It is useful in controlling program flow using conditional statements.


  // DECLARATION:-
  let YES = true;

  let NO = false;

  // CHECK TYPE OF VARIABLE WITH "typeof" OPERATOR:-
  console.log(typeof(YES)); // will print "boolean" in the console
  console.log(typeof(NO));  // will print "boolean" in the console

  // COMPARISION OPERATORS AND BOOLEANS:-
  // The comparison expressions return boolean values to indicate whether the comparison is "true" or "false". 
  // For example, the following expressions return boolean values.
  let result = 1 > 2; //result stores "false"

  // BOOLEAN FUNCTION:-
  // JavaScript provides the Boolean() function that converts other types to a boolean type.
  // The value specified as parameter to the Boolean() function  will be converted to a boolean value.
  // The Boolean() will return "true" for any non-empty, non-zero, object, or array and will return "false" otherwise.

  let x = Boolean("Hello"); // x stores "true"
  let y = Boolean(10);      // y stores "true"


  /*
  ------------------------------------------------------------------------------------
  Challenge:-
  // 1. Check the boolean value of "0" and "-0" using the Boolean() function.
  // 2. Check the boolean value of "" (empty string) using the Boolean() function. 
  // 3. Check the boolean value of "[]" (empty array) using the Boolean() function. 
  ------------------------------------------------------------------------------------
  */