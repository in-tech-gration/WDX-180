---
title: BUG JOURNAL
---

## BUG CATEGORIES

  - Rule-Breaking

## 10/12/2023 - Week 10 - Day 01

  **Description:**

  During one of the exercises, I forgot to define an object variable using `const`, then tried to update one of its properties but instead of using the property name I accidentally assigned the value to the variable holding the object. It turns out, that I wiped the whole object data and replaced it with the value that was directed for the property.


  **Code:**

  ```js
  let person = {
      firstName: "Douglas",
      lastName: "Crockford",
      book: "JavaScript: The Good Pars"
  }

  person = "JavaScript: The Good Parts"; // <= I intended to assign this to person.book property

  console.log( person.book ); // <= When a few lines of code later I tried to access the book property, I got undefined
  // undefined
  ```

  **Category:**

  - I will file this bug under the `rule breaking` category of bugs as I failed to stick to the rule that says **define all object types with `const`** (unless there is a special requirement).

  **Avoidance Strategy**

  - Whenever I define a variable, I will stick to the rule that states: **when defining a variable, always start with `const`. Think for a moment whether there is a good reason to change the value of the variable and switch to `let`. Otherwise stick to `const`**. It's always safer to define variables with `const` and later switch to `let`, if it is required, than the other way round.


