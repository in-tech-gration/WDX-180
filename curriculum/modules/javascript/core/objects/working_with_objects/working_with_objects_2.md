---
title: JavaScript - Working with Objects 2
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

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

<!-- SGEN:META:PROGRESS:task=Study the Working with Objects 2 module and practice -->
