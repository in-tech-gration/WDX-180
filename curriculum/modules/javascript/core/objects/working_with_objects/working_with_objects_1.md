---
title: JavaScript - Working with Objects 1
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

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

<!-- SGEN:META:PROGRESS:task=Study the Working with Objects 1 module and practice -->
