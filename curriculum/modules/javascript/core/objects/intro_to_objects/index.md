---
title: Intro to Objects
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

#### Intro to Objects

  So far we've talked about having one variable at a time: one first name, one last name, one price, etc. What if we have a collection of data? It'd be nice to group together like data. Good news! You can!

  ```javascript
  const person = {
    name: "Brian Holt",
    city: "Seattle",
    state: "WA",
    favoriteFood: "🌮",
    wantsTacosRightNow: true,
    numberOfTacosWanted: 100,
  };
  console.log(person);
  console.log(person.name);
  console.log(person["name"]); // same as the line above; prefer using the other one
  ```

  This is called an object. They're extremely useful in JavaScript; they're how you'll group together like-information so that they can be used together. They contain a bunch of **keys** and **values**. The keys are on the left side of the `:` and represent how you get that piece data of out of the object. `name` is one such key, and the way I get the name of the

  Used in conjunction with functions they're very powerful. Take this example:

  ```javascript
  const person1 = {
    name: "Angie",
    ageRange: "25-35",
  };
  const person2 = {
    name: "Francesca",
    ageRange: "65-75",
  };

  function suggestMusic(person) {
    if (person.ageRange === "25-35") {
      console.log("We think you will like Daft Punk.");
    } else if (person.ageRange === "65-75") {
      console.log("You are obviously going to like Johnny Cash.");
    } else {
      console.log(
        "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
      );
    }
  }

  suggestMusic(person1);
  suggestMusic(person2);
  ```

  Now we're able to pass all this information as one package which makes it easy to keep track of since we're just passing one variable. You'll see this become even more useful as we start integrating with servers and APIs.

  Objects can even have their functions! Let's see that.

  ```javascript
  const dog = {
    name: "dog",
    speak() {
      console.log("woof woof");
    },
  };

  dog.speak();
  ```

  Objects can as well have nested objects inside of them.

  ```javascript
  const me = {
    name: {
      first: "Brian",
      last: "Holt",
    },
    location: {
      city: "Seattle",
      state: "WA",
      country: "USA",
    },
  };

  console.log(me.name.first);
  console.log(me.location.state);
  ```


---

#### Context

  Given an object with a person's address, wouldn't it be nice if we could use a function to print out a properly formatted shipping address?

  ```javascript
  const me = {
    name: {
      first: "Brian",
      last: "Holt",
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA",
    },
    getAddress() {
      return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    },
  };

  console.log(me.getAddress());
  ```

  This is our first time seeing the weird `this` keyword. This is a strange, complicated, and difficult concept in JavaScript known as context and trips up all sorts of people, new and old to the language. If you decide to pursue a career as a developer, interviewers will often ask questions about context in JavaScript. It's worth investment to understand how it works eventually (not now, focus just on basic JS for now.)

  In the simplest form, anywhere you are in JavaScript you have a context you are in. You can reference that context by using `this`. If I just reference `this` from the outermost layer, it'll be the global object, which in the browser is something called `window`. `window` already has a bunch of stuff on it. For example:

  ```javascript
  console.log(this === window);
  console.log(this.scrollY);
  console.log(window.scrollY);
  ```

  As you can see from the first line, you can see that in this context, window is the `this` at that time. However, in the example above when we're doing the address, the `this` is the object since when I **call the function**, it's created inside of an object. That object then becomes `this` when `getAddress` is called. As soon as the function completes, the context is destroyed and the context goes back to being what it was before, in this case, `window`.

  A good rule of thumb (that is unfortunately not always true) is that if you're inside an object of some sort, the `this` will be that object. If not, it'll be the global object, `window`. There are crazy exceptions to this and you can even manipulate it yourself. For now, operate with that definition. It's a deep-and-dark rabbit hole to go down so let's continue and you can check the [extras](#extra-resources) for a more in-depth look.

---

### Summary

### Exercises

  In this exercise, we want you to copy and paste the following code in a file called `using-objects-basic.js` and complete the challenges found inside:

  ```javascript
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
  ```

### Extra Resources

 [Kyle Simpson's course](https://frontendmasters.com/courses/getting-started-javascript-v2/){:target="_blank"}

### Sources and Attributions

  **Content is based on the following sources:**

  [Objects](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/I-objects.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/I-objects.md){:target="_blank"}

  [Context](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/J-context.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/J-context.md){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/btholt/complete-intro-to-web-dev-v3){:target="_blank"}!

  **Exercise is based on the following sources:**

  [TeachMeJavaScriptLikeIm5 using-objects-basic](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/4-objects/using-objects-basic.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/4-objects/using-objects-basic.js){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5){:target="_blank"}!
