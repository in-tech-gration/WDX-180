// Understanding the Elevators of JavaScript

// Resources: https://basescripts.com/javascript-hoisting-understanding-the-elevator-of-declarations

exercise1a: (function () {

  // Exercise 1a: Variable Hoisting
  // Description: Predict the output of the following code:
  // Steps:
  // Understand the hoisting behavior for variable declarations with var.
  // Predict the output by considering the hoisting phase.

  console.log(a);

  var a = 5;

  console.log(a);

});

exercise1b: (function () {

  // Exercise 1b: Variable Hoisting
  // Description: Rewrite the code above (1a) as if you were a JavaScript engine and had just went over the hoisting procedure
  var a; // undefined

  console.log(a);

  a = 5;

  console.log(a);

});

exercise2a: (function () {

  // Exercise 2a: Variable Hoisting with let
  // Description: Predict the output of the following code:
  // Steps:
  // Recognize the differences in hoisting behavior between var and let.
  // Predict the output based on the hoisting rules for let.

  console.log(b);

  let b = 10;

  console.log(b);

});

exercise2b: {
  // Rewrite the code above (2a) as if you were the JavaScript engine.
}

exercise3a: (function () {

  // Exercise 3: Function Hoisting
  // Description: Predict the output of the following code:
  // Steps:

  // Understand the hoisting behavior for function declarations.
  // Predict the output considering the function declaration hoisting.

  hello();

  function hello() {

    console.log("Hello!");

  }

  // Why does this happen?
  // A) Because of Type 1 Hoisting?
  // B) Because of Type 2 Hoisting?
  // C) Because of Type 3 Hoisting?
  // D) Because of Type 4 Hoisting?
  // E) None of the above
  // F) All of the above

});

exercise3b: {
  // Rewrite as if you were the JS engine and just did the hoisting...
}

// Exercise 4: Function Expression Hoisting
exercise4a: (function () {

  // Description: Predict the output of the following code:

  // Steps:

  // Recognize that function expressions are not hoisted in the same way as function declarations.
  // Predict the output based on the hoisting behavior of function expressions.

  hi();

  var hi = function () {

    console.log("Hi!");

  };

}());

exercise4b: {
  // Rewrite...
}

// Exercise 5: Hoisting in a Function
exercise5a: (function () {

  // Description: Predict the output of the following code:

  // Consider that hoisting occurs within the scope of a function.
  // Predict the output based on the function scope hoisting.

  function example() {

    console.log(x);

    var x = 20;

    console.log(x);

  }

  example();

}());

exercise5b: {
  // Rewrite...
}

// Exercise 6: Hoisting Order
exercise6a: (function () {

  // Description: Predict the output of the following code:

  // Steps:

  // Understand the order of hoisting for variable declarations in different scopes.
  // Predict the output considering the hoisting order.

  var c = 30;

  function order() {

    console.log(c);

    var c = 40;

    console.log(c);

  }

  order();

  console.log(c);



}());

exercise6b: {
  // Rewrite...
}

// Exercise 7: Hoisting in a Block
exercise7a: (function () {

  // Description: Predict the output of the following code:
  // Steps:
  // Recognize that let has block-level scope and does not exhibit the same hoisting behavior as var.
  // Predict the output based on block-scoped hoisting.  

  if (true) {

    console.log(y);

    let y = 50;

    console.log(y);

  }

}());

exercise7b: {
  // Rewrite... and draw TDZ with comments...
}

// Exercise 8: Hoisting and Function Expression
exercise8a: (function () {

  // Description: Predict the output of the following code:

  // Steps:
  // Recognize that function expressions are hoisted differently from function declarations.
  // Predict the output considering the hoisting of the function expression.

  var greet = function () {

    console.log("Welcome!");

  };

  greet();


}());

exercise8b: {
  // Rewrite...
}

// Exercise 9: Hoisting with Function Declaration Overriding
exercise9a: (function () {

  // Description: Predict the output of the following code:
  // Steps:
  // Understand how function declarations are hoisted and potentially overridden.
  // Predict the output based on the order of function declarations.

  function example() {

    console.log("First");

  }

  example();

  function example() {

    console.log("Second");

  }

  example();

}());

exercise9b: {
  // Rewrite...
}

// Exercise 10: Hoisting in a Nested Scope
exercise10a: (function () {

  // Description: Predict the output of the following code:
  // Steps:
  // Recognize the hoisting behavior in nested scopes.
  // Predict the output considering variable hoisting in nested functions.

  function outer() {

    console.log(innerVar);

    if (true) {

      var innerVar = "Nested";

      console.log(innerVar);

    }

    console.log(innerVar);

  }

  outer();

}());

exercise10b: {
  // Rewrite...
}