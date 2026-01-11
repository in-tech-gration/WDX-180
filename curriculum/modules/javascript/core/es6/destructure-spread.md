---
title: ECMAScript 6
---

### Schedule

  - **Lecture: Features of (ECMAScript) ES6**
  - **Practice**
  - **Work on Project (Group/Personal)**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1**:
    - ES6: Function Hoisting & Destructuring Assignment
  - **Part 2**:
    - ES6: Spread Operator

  The code from the lectures can be found [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week14/assets/code){:target="_blank"}.

  Practice on the topics covered and explore the concepts by trying things out in your own code and further improve your understanding of the concepts by studying the following resources:

  - **(Object & Array) Destructuring Assignment**  

    - [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment){:target="_blank"}  
    - [ES6 In-Depth Destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/){:target="_blank"}  
    - [Destructuring Assignment @JavaScript.info](https://javascript.info/destructuring-assignment)  
    - [Assigning to new variable names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#assigning_to_new_variable_names){:target="_blank"}  

  **Destructuring nested objects:**

  ```js
  const o = { a: { a1: 1, a2: 2 } }
  const { a } = o;
  console.log( a ); // => {a1: 1, a2: 2}
  const { a1 } = a;
  console.log( a1 ); // => 1
  const { a: { a2 } } = o;
  console.log( a2 ); // => 2
  ```

  - **Spread/Rest Operator**  

    - Spread Operator: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax){:target="_blank"}  
    - Rest Parameters: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters){:target="_blank"}   

  - [Number.isInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger){:target="_blank"}  

  - **Safer Array Methods:**
    - `Array.sort()` (❌ AVOID), Prefer: ✅ [Array.toSorted()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted){:target="_blank"}  
    - `Array.reverse()` (❌ AVOID), Prefer: ✅ [Array.toReversed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed){:target="_blank"}

  ---

  _Photo by [olia danilevich](https://www.pexels.com/photo/back-view-of-a-boy-sitting-on-grey-chair-while-using-his-laptop-computers-4974916/)_

### Summary

### Exercises