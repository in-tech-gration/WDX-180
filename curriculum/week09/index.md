---
title: Week 09 | JavaScript Core 3
---

<hr class="mb-0">

<h1 id="{{ Week 09-JavaScript Core 3 | slugify }}">
  <span class="week-prefix">Week 09 |</span> JavaScript Core 3
</h1>

<div class="week-controls">

  {% assign week_num = 09 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 09 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 8/11/2024</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 09 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 09 - Day 1 | Functions Part 1 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 09 - Day 1</span> | Functions Part 1</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  Another essential concept in coding is functions, which allow you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times. In this module we'll explore fundamental concepts behind functions such as basic syntax, how to invoke and define them, scope, and parameters.

  In JavaScript, you'll find functions everywhere. In fact, we've been using functions all the way through the course so far; we've just not been talking about them very much. Now is the time, however, for us to start talking about functions explicitly, and really exploring their syntax.

  Pretty much anytime you make use of a JavaScript structure that features a pair of parentheses — () — and you're not using a common built-in language structure like a for loop, while or do...while loop, or if...else statement, you are making use of a function.

  ---


  **Quokka: an awesome learning tool and helping hand for VSCode**
  
  Before moving forward, we have a recommendation for you. You can install and use a really nice VSCode extension that allows you to visualize the evaluation of each line of JavaScript code directly inside the code editor! 
  
  - 1) Install the [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode){:target="_blank"} Extension for VSCode
  
  - 2) Watch this [12min video by Traversy Media](https://www.youtube.com/watch?v=f_sEWa5hA0Q){:target="_blank"} that explains how this extension works and shows some of the features for both the free and Pro versions.
  
  - 3) Bookmark and check the [official documentation](https://quokkajs.com/docs/index.html){:target="_blank"}.
  
  ---



  > The examples and exercises in this repository all use () => {} (arrow functions), while many resources online cover function functions. Why? Because arrow functions are simpler to study in the debugger. That's all you need to know for now!



  - [Watch: **JavaScript Functions In 90 Seconds**](https://www.youtube.com/watch?v=UY182o4J5_Y){:target="_blank"}
    - **Duration:** 2min
    - **Level:** Beginner

  <!-- TODO: INTEGRATE  -->


  - [Study: **Function Basics** @javascript.info](https://javascript.info/function-basics){:target="_blank"}
    - **Level:** Beginner

  Make sure to follow the guides on [**Setting up Study Lenses (v2)**](../modules/javascript/denepo/setting-up-study-lenses/index.md){:target="_blank"}. Once `lenses2` is properly installed on your system, you can go to your `WDX-180` folder and run `lenses2` with the material for this Module:

  - `cd WDX-180/`
  - `lenses2 curriculum/modules/javascript/denepo/_inside-js/3-functions/`

  You should focus and study the following modules (included within `3-functions/`):

  - **1-functions**
  - **2-documenting-functions**
  - **3-the-callstack**
  - **4-local-param-parent**

  ---



**Programming Training Wheels**: Getting familiar with the return statement

Every single function call in JavaScript will **always** return a value after its execution. 
This is a very important concept that one must learn when starting to work with (and make sense) of functions.
In order to get familiar with the return statement, we propose the following rule when defining a function:

**Always include the `return undefined` statement as the first step.**

For example:

```js
function displayTable(){ 

  // Rest of the code will go here

  return undefined; // <= Get used to adding this statement right away, when defining a function

}
```

As you move on to work on the rest of the function body, the return statement will act as a reminder that some kind of value (most probably, some value other than `undefined`) should be returned.

There are a couple of reasons that you should start defining a function by placing a `return undefined` statement at the last line of the function body:

- It will become a reminder that a function's main purpose is to run some code and return a value back to the line that `called` the function.

```js
const randomNumber = Math.random(); // <= The function call will trigger the execution of some code, produce a random number and return that random number back to this line. After Math.random() has been replaced by a random number (during runtime), JavaScript will proceed to assign that value to the left hand side of the assignment operator and store the value to the `randomNumber` variable.
```

- It will help you memorize the fact that even when a `return` statement has not been explicitly defined inside a function's body, JavaScript will always include an implicit `return undefined` statement, thereby returning the special `undefined` value in those cases. In other words, there's always a `return` statement and a returned value in a function, whether we can see that statement or not.

- It will get you into the good habit of returning some kind of value from your functions. We start by returning the default `undefined` value at first, then consider a better option as we think carefully about the purpose of our function.

- It will help you avoid bugs, such as forgetting to use a `return statement`, resulting in the default `undefined` popping up as an unintended value.

- It will help you better understand and distinguish between `pure` and `impure` functions as you move on to study `functional programming` concepts.

![](./assets/KevlinHenneyUndefined.jpeg)

**What's the purpose of this?**

Just like training wheels on a bicycle, `programming training wheels` act as our support and reminders in our first rides with JavaScript. Their role is to instill some core concepts, avoid bugs and common beginner mistakes and also get us accustomed with some of the good practices.

> "The functionality of training wheels is based on the premise that a learner rider can gradually develop their balance and coordination skills by relying on the support of the extra wheels. As the rider gains confidence and proficiency, the training wheels are gradually raised or removed, theoretically allowing the rider to transition to riding without additional support." ~ Wikipedia


<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  - [Function Basics @ The Coding Train](https://www.youtube.com/watch?v=wRHAitGzBrg){:target="_blank"}
  - [5.2: Function Parameters and Arguments @ The Coding Train](https://www.youtube.com/watch?v=zkc417YapfE){:target="_blank"}
  - [5.3: Functions and Return @ The Coding Train](https://www.youtube.com/watch?v=qRnUBiTJ66Y){:target="_blank"}

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 09 - Day 2 | Functions Part 2 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 09 - Day 2</span> | Functions Part 2</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  Make sure to follow the guides on [**Setting up Study Lenses (v2)**](../modules/javascript/denepo/setting-up-study-lenses/index.md){:target="_blank"}. Once `lenses2` is properly installed on your system, you can go to your `WDX-180` folder and run `lenses2` with the material for this Module:

  - `cd WDX-180/`
  - `lenses2 curriculum/modules/javascript/denepo/_inside-js/6-using-functions/`

  You should focus and study the following modules (included within `6-using-functions/`):

  - **1-calling-functions**
  - **2-writing-functions**
  - **3-refactoring-functions**
  - **4-reverse-engineering**
  - **5-dom-io**

  > **REMINDER:** You should never create, delete or modify any files or folders outside the `user/` directory. If the Module you are studying contains exercise files and folders, they should be copied over to the `user/` folder and modified there. 

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 09 - Day 3 | Arrays Part 1 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 09 - Day 3</span> | Arrays Part 1</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

#### Arrays



  Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value. Maybe we've got a series of product items and their prices stored in an array, and we want to loop through them all and print them out on an invoice, while totaling all the prices together and printing out the total price at the bottom.

  If we didn't have arrays, we'd have to store every item in a separate variable, then call the code that does the printing and adding separately for each item. This would be much longer to write out, less efficient, and more error-prone. If we had 10 items to add to the invoice it would already be annoying, but what about 100 items, or 1000? We'll return to this example later on in the article.  

  <!-- WDX:SGEN:PROGRESS:task=Watch 'Arrays in Javascript' -->


  - [Watch **Arrays in Javascript**](https://www.youtube.com/watch?v=0SyTDl4pb4w){:target="_blank"}
   - **Duration:** 28min
   - **Level:** Beginner
   - **Captions:** Yes

  Make sure to follow the guides on [**Setting up Study Lenses (v2)**](../modules/javascript/denepo/setting-up-study-lenses/index.md){:target="_blank"}. Once `lenses2` is properly installed on your system, you can go to your `WDX-180` folder and run `lenses2` with the material for this Module:

  - `cd WDX-180/`
  - `lenses2 curriculum/modules/javascript/denepo/_inside-js/7-arrays/`

  You should focus and study the following modules (included within `7-arrays/`):

  - **1-isolate**
  - **2-practice**
  - **3-integrate**

  > **REMINDER:** You should never create, delete or modify any files or folders outside the `user/` directory. If the Module you are studying contains exercise files and folders, they should be copied over to the `user/` folder and modified there. 

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 09 - Day 4 | Arrays Part 2 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 09 - Day 4</span> | Arrays Part 2</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  - Watch [**Introduction to JavaScript Objects**](https://www.youtube.com/watch?v=OJBlJI1vEK8){:target="_blank"} to get a very basic idea of the Object structure in JavaScript, then move on with the rest of the material that includes objects in several cases.

  Make sure to follow the guides on [**Setting up Study Lenses (v2)**](../modules/javascript/denepo/setting-up-study-lenses/index.md){:target="_blank"}. Once `lenses2` is properly installed on your system, you can go to your `WDX-180` folder and run `lenses2` with the material for this Module:

  - `cd WDX-180/`
  - `lenses2 curriculum/modules/javascript/denepo/_inside-js/8-functional-array-methods/`

  You should focus and study the following modules (included within `8-functional-array-methods/`):

  - **1-isolate**
  - **2-practice**
  - **3-implicit-return**

  > **REMINDER:** You should never create, delete or modify any files or folders outside the `user/` directory. If the Module you are studying contains exercise files and folders, they should be copied over to the `user/` folder and modified there. 

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 09 - Day 5 | Objects Part 1 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 09 - Day 5</span> | Objects Part 1</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

#### Objects



  An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

  Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

  <!-- WDX:SGEN:PROGRESS:task=Watch 'Javascript Objects Explained' -->


  - [Watch **Javascript Objects Explained**](https://www.youtube.com/watch?v=rLPwCAqyCAE){:target="_blank"}
   - Level: Beginner
   - Duration: 23min
   - Captions: Yes

  Now that you have a good understanding of what Javascript Objects are, you can start playing around with some code.

  Make sure to follow the guides on [**Setting up Study Lenses (v2)**](../modules/javascript/denepo/setting-up-study-lenses/index.md){:target="_blank"}. Once `lenses2` is properly installed on your system, you can go to your `WDX-180` folder and run `lenses2` with the material for this Module:

  - `cd WDX-180/`
  - `lenses2 curriculum/modules/javascript/denepo/_inside-js/9-multiple-interactions/`

  You should focus and study the following modules (included within `9-multiple-interactions/`):

  - **1-isolate**

  > **REMINDER:** You should never create, delete or modify any files or folders outside the `user/` directory. If the Module you are studying contains exercise files and folders, they should be copied over to the `user/` folder and modified there. 

<!-- Summary -->

### Exercises

  - Based on [this reference](https://flexbox.malven.co/){:target="_blank"} and the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#formal_definition){:target="_blank"}, complete the following object structure:

  ```js
  const flexboxProperties = {
    container: {
      display: {
        flex: {},
        "inline-flex": {}
      },
      "flex-direction": {
        row: { "initial-value": true },
        "row-reverse": {},
        column: {}
      }
    },
    children: {

    }
  } 
  ```

  <!-- TODO: Add tests to the Flexbox Object exercise -->



  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week09/progress/progress.draft.w09.d05.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

## Week 09 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).

---

<!-- COMMENTS: -->
<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>