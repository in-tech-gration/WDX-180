---
title: JavaScript in a Day
---

### Schedule

  - [Study](#study-plan-4)
  - [Exercises](#exercises-4)
  - [Extra Resources](#exercises-4)

### Study Plan

  This is one of the toughest modules on the curriculum, so make sure to arm yourself with plenty of coffee and concentration!

  Don't worry if this feels overwhelming and probably too much for a single day. It is intended to be so. Just go through the material, pick up as many concepts as you can, try things out and get a first taste of one of the most popular programming languages in the world. You'll have plenty of time later on during this course to learn all about this language.

  **What you'll learn:**

  - How to install the **Live Server** VSCode extension and develop using a local web server

  - [Read: **What is JavaScript?**](resources/What_is_JavaScript/index.md)

  - [Watch: **JavaScript Tutorial for Beginners: Quick Start**](https://www.youtube.com/watch?v=SajRjc9KKUE){:target="_blank"}
    - Duration: 8min
    - <details>
        <summary>What you'll learn</summary>
        <ul>
          <li>How to open Chrome Dev Tools</li>
          <li>How to put Chrome Dev Tools into dark mode</li>
          <li>How to use the console tab in Chrome Dev Tools to enter JavaScript statements</li>
          <li>Four JS data types: 1) String 2) Number 3) Boolean 4) Undefined</li>
          <li>How to check data types with the keyword `typeof`</li>
          <li>How to create variable with the keyword `let`</li>
          <li>How to name variables with `camelCase`</li>
          <li>How to use basic mathematical operators to perform mathematic operations, to concatenate string data, and to compare data types</li>
          <li>How to compare data</li>
        </ul>
      </details>

  > **TIP: Variables are NOT placeholders for values!**
  > 
  > You will often find several sources (videos, blog posts, tutorials, etc.) describing **variables as placeholders** or boxes that store values. Even though this mental model might help someone who goes through this important programming concept for the first time, it is actually **a flawed way of thinking** about variables, as [Felienne Hermans](https://www.linkedin.com/in/felienne/) points out in her book ["The Programmer's Brain"](https://www.manning.com/books/the-programmers-brain):
  > 
  > _"Thinking of a variable as a box that holds a value does not adequately support thinking about reassignment. Will the second value fit in the box with the first value? Or will the first value be pushed out?"_ 
  > 
  > _"When we learn to program, thinking of a variable like a box that holds a value is helpful. However, after a while, we realize that a variable cannot hold more than one value, so alternatively, you might think of a variable like a name tag or label you attach to a value."_
  > 
  > Even though, the author also points out that _"Both mental models can exist at the same time and might have benefits in different situations."_ it is recommended to stick with the notion that "a variable in JS is a label that references a value in memory somewhere". This notion also coincides with how programming languages actually work under the hood.

  > **TIP #2:** Wondering if you can use a given string as a variable name in JavaScript? Use [this tool](https://mothereff.in/js-variables) to find out! 
  >
  > _(Don't forget to star the [GitHub repo](https://github.com/mathiasbynens/mothereff.in) if you found this tool helpful.)_
  >
  > Some names you thought couldn't be used but are valid names:
  >
  > `const το_όνομά_μου = "My name in greek";`
  >
  > `const こんにちは = "Hello in Japanese";`
  >
  > `const _______ = "WTF?";`
  >
  > Names you thought were valid, but aren't:
  >
  > `const 123vroom = "Nope`;
  >
  > `const delete = "Nope`;
  >
  > `const continue = false`;
  >
  > `const default = 10`;
  >
  > `const package = "Delivered"`;
  >
  > `const protected = "Area"`;
  >
  > `const private = "Area"`;
  >
  > `const ¯\_(ツ)_/¯ = "Nope`;

  ---

  - [Watch: **Where do I put my JavaScript? How to link Javascript to HTML**](https://www.youtube.com/watch?v=JMy6z1GricM){:target="_blank"}
    - Duration: 8min
    - <details>
        <summary>What you'll learn</summary>
        <ul>
          <li>(0:15) Setting up your DEV environment</li>
          <li>(0:20) Where to find and install Visual Studio Code</li>
          <li>(0:50) Create a directory (aka folder) for your files</li>
          <li>(1:28) Opening a folder in VS Code</li>
          <li>(1:45) Create an HTML document in VS Code</li>
          <li>(1:55) Emmett abbreviation to quickly code basic HTML</li>
          <li>(2:07) Add semantic elements to your HTML code</li>
          <li>(2:23) Save your HTML document in VS Code (Ctrl+S)</li>
          <li>(2:38) The style element for adding CSS to your HTML</li>
          <li>(3:00) Creating a new folder from within VS Code</li>
          <li>(3:05) Creating a CSS file</li>
          <li>(3:15) Adding styles to your CSS file</li>
          <li>(3:38) Linking to a CSS file from your HTML document</li>
          <li>(4:00) Where to put your JavaScript: script tags</li>
          <li>(4:05) How to link your JavaScript file to your HTML file: src attribute</li>
          <li>(4:20) Or put your JavaScript inside of the script element</li>
          <li>(4:30) How to print to the Chrome Dev Tools console window from your JS file</li>
          <li>(4:50) How to open up Chrome Dev Tools to see the console window</li>
          <li>(5:25) How to open your HTML file in Chrome</li>
          <li>(5:40) Creating a folder for your JavaScript file</li>
          <li>(5:50) Creating a Javascript file</li>
          <li>(6:20) Linking to your JavaScript file </li>
          <li>(7:00) Adding more JavaScript code to your file</li>
          </ul>  
      </details>

  - [Watch: **JavaScript String Methods and Properties \| JavaScript Tutorial for Beginners**](https://www.youtube.com/watch?v=LiuzigJldNo){:target="_blank"}
    - Duration: 8min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
          <ul>
            <li>(00:00) Intro</li> 
            <li>(0:12) Dev Environment</li>
            <li>(0:43) VS Code Live Server Extension</li>
            <li>(1:48) Starting with a string variable</li>
            <li>(2:08) The string length property</li>
            <li>(2:10) Dot notation</li>
            <li>(2:55) String Methods</li>
            <li>(3:00) charAt() method</li>
            <li>(3:30) indexOf() method</li>
            <li>(4:13) lastIndexOf() method</li>
            <li>(4:30) slice() method</li>
            <li>(5:18) toUpperCase method</li>
            <li>(5:30) toLowerCase method</li>
            <li>(5:35) includes() method</li>
            <li>(5:53) split() method</li>
            <li>(6:47) Where to find more string methods</li>
          </ul>
      </details>

  ---

  **Demo time:** visit this [Codesandbox](https://codesandbox.io/embed/github/kostasx/LearnJavascript/tree/master/resources/youtube/coding.an.interactive.string.length.counter?fontsize=14&hidenavigation=1&theme=dark&view=preview){:target="_blank"} and update the string value (`Hello World!`) to see how the `.length` property of the String data type corresponds to the number of characters found in the String.

  ---

  **Template Literals:** Apart from the familiar "double" and 'single' quotes to define a String in JavaScript, there's also the \`backtick\` characters that are used to define a String value. Also, called template literals, this format allows us to define plain text values inside a String along with dynamic values enclosed in a special dollar sign brackes syntax: `${}`:

  ```js
  const name = "Brendan";
  const last = "Eich";
  const string = `${name} ${last} created JavaScript.`
  // Output: "Brendan Eich created JavaScript."
  ``` 

  - [Watch: **JavaScript Numbers, Number Methods, isNaN \| JavaScript Tutorial for Beginners**](https://www.youtube.com/watch?v=3Ul9gYweEPs){:target="_blank"}
    - Duration: 6min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
          <ul>
            <li>(00:00) Intro </li>
            <li>(0:08) Dev Environment</li>
            <li>(0:30) Integers</li>
            <li>(0:42) Floats</li>
            <li>(0:50) When JavaScript shows decimals</li>
            <li>(1:10) Number data vs String data in the console window</li>
            <li>(1:20) Comparing Integers and Floats</li>
            <li>(1:47) Equations with Strings vs Numbers</li>
            <li>(2:05) The Number() function</li>
            <li>(2:33) "Not a Number" aka NaN</li>
            <li>(2:50) Boolean data represented as Numbers</li>
            <li>(2:58) 0 === false</li>
            <li>(3:06) isInteger() method</li>
            <li>(3:21) parseFloat() method</li>
            <li>(3:47) toFixed() method</li>
            <li>(4:04) parseInt() method </li>
            <li>(4:17) toString() method</li>
            <li>(4:35) Chaining methods using dot notation</li>
            <li>(5:00) Number.isNaN() method vs global isNaN() function</li>
          </ul>
      </details>

  **Tip:** You are probably a bit confused at this point about the difference between `isNaN` and `Number.isNaN` when checking for equality with the `NaN` value. You will read more about this in upcoming modules. For now, to keep things simple, just remember to stick `Number.isNaN`, as it is safer and more reliable.

  ---

  > **What's up with number 42?** You probably see a lot of tutorials and blog posts using number 42 as the value for various examples, and wondering what's the deal with this number. 
  >
  > According to Wikipedia: "The number 42 is, in _The Hitchhiker's Guide to the Galaxy_ by Douglas Adams, the "Answer to the Ultimate Question of Life, the Universe, and Everything", calculated by an enormous supercomputer named Deep Thought over a period of 7.5 million years. Unfortunately, no one knows what the question is." [Source](https://en.wikipedia.org/wiki/42_(number)) 

  ---

  - [Watch: **Math Methods and How to Generate a Random Number with JavaScript \| JavaScript Tutorial for Beginners**](https://www.youtube.com/watch?v=vzLdq3b0w3Y){:target="_blank"}
    - Duration: 6min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
        <ul>
          <li>(00:00) Intro</li>
          <li>(0:06) MDN Resources</li>
          <li>(0:25) Dev Environment</li>
          <li>(0:48) Math.PI property</li>
          <li>(1:05) Math.trunc() method</li>
          <li>(1:25) Math.round() method</li>
          <li>(1:48) Math.ceil() method</li>
          <li>(2:02) Math.floor() method</li>
          <li>(2:15) Math.pow() method</li>
          <li>(2:36) Math.min() method</li>
          <li>(2:49) Math.max() method</li>
          <li>(3:12) Math.random() method</li>
          <li>(3:28) How to generate a random number with JavaScript</li>
          <li>(4:21) Choose Math.floor() instead of Math.ceil() in your random number expression and Why!</li>
        </ul>
      </details>

  **Tip:** Here's a nice diagram to help you understand the difference between `floor` and `ceiling` when using the corresponding `Math` object methods.

  ![](assets/Math.floor.vs.Math.ceil.png)

  - [Watch: **If Statements in Javascript \| Tutorial for Beginners**](https://www.youtube.com/watch?v=9Ykz2_PhdfE){:target="_blank"}
    - Duration: 7min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
          <ul>
            <li>(00:00) Intro</li>
            <li>(0:11) If Statements are Conditionals</li>
            <li>(0:19) Basic Syntax</li>
            <li>(0:35) Else clauses</li>
            <li>(0:45) Example If Statement #1</li>
            <li>(2:15) Else If clauses</li>
            <li>(2:30) Consider the Logical Order</li>
            <li>(2:55) Checking for Two Conditions at Once</li>
            <li>(3:25) Example If Statement #2</li>
            <li>(3:55) "Waterfall" Logical Order</li>
            <li>(4:45) Nested If Statements</li>
            <li>(5:10) Decision Tree Thinking: Rock - Paper - Scissors</li>
          </ul>
      </details>

  - [Watch: **Switch Statements in Javascript \| Tutorial for Beginners**](https://www.youtube.com/watch?v=3q7sk03ehOs){:target="_blank"}
    - Duration: 4min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
          <ul>
            <li>(00:00) Intro </li>
            <li>(0:13) Switch Statements are Conditionals</li>
            <li>(0:17) Basic Syntax</li>
            <li>(0:20) Value or Expression followed by Case evaluation</li>
            <li>(0:28) Logical Order is important</li>
            <li>(0:33) Use break keyword</li>
            <li>(0:38) Default option</li>
            <li>(0:50) Example #1</li>
            <li>(1:20) Switch statements use strict equality matches</li>
            <li>(1:32) Example #2: Evaluate numbers</li>
            <li>(2:12) Example #3: Rock - Paper - Scissors Decision Tree</li>
          </ul>
      </details>

  - [Watch: **Ternary Operator in Javascript \| Tutorial for Beginners**](https://www.youtube.com/watch?v=ib8MHSMwtYg){:target="_blank"}
    - Duration: 6min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
          <ul>
            <li>(00:00) Intro</li>
            <li>(0:13) What is a Ternary Operator?</li>
            <li>(0:18) Ternary Operator Statement Syntax</li>
            <li>(0:48) Example Ternary Statement</li>
            <li>(1:50) Example of Chaining Ternary Operator Statements</li>
            <li>(3:05) A Grading Scale Example with Chained Ternary Statements</li>
            <li>(4:10) Rock - Paper - Scissors with Ternary Operator Statements</li>
          </ul>
      </details>

  **Tip:** Nested ternary operators are hard to read and even harder to maintain, so try to avoid them as much as possible.

  ```js
  const test = 54;
  const grade = test > 90 ? "A" : test > 70 ? "B" : "C";

  // Instead, write it like this:

  const isAbove90 = test > 90;
  const isAbove70 = test > 70;

  let grade = "C";

  if ( isAbove70 ){
    grade = "B";
  }

  if ( isAbove90 ){
    grade = "A";
  }
  ```

  As you can see, the second example is more verbose, but nevertheless it's much easier to read and reason about. In order to test whether one syntax is more reliable and maintainable than the other, try to update both versions of the code with the next 2 new requirements. After you've updated the code, compare the resulting code. Which one makes more sense and is more readable?

  - All test scores above 97 should be graded "A+"
  - All test scores above 80 should be graded "B+"
 
  - [Watch: **User Input in Javascript \| Tutorial for Beginners**](https://www.youtube.com/watch?v=94UM0Ss3uoU){:target="_blank"}
    - Duration: 11min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
          <ul>
            <li>(00:00) Intro </li>
            <li>(0:15) Dev Environment</li>
            <li>(0:45) alert notifications</li>
            <li>(1:45) confirm notifications with boolean data</li>
            <li>(2:35) Receiving data input from the user </li>
            <li>(3:10) prompt notifications with string data</li>
            <li>(4:05) Possible null values returned</li>
            <li>(4:43) Nullish Coalescing Operator</li>
            <li>(6:10) How to check for an empty string</li>
            <li>(7:15) An easy mistake to make!</li>
            <li>(7:20) How to check data before accessing properties and methods</li>
            <li>(8:50) Eliminating extra white space from user input</li>
          </ul>
      </details>

  - [Watch: **For Loops, While Loops, Do While Loops \| Javascript Loop Tutorial for Beginners**](https://www.youtube.com/watch?v=zO5-OnRA5lA){:target="_blank"}
    - Duration: 17min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
          <ul>
            <li>(00:00) Intro</li>
            <li>(0:13) While Loops</li>
            <li>(3:28) Do not create an endless loop (but don't feel bad if you do..it happens)</li>
            <li>(4:33) Do While Loops</li>
            <li>(5:07) The difference of a Do While Loop</li>
            <li>(6:35) For Loops</li>
            <li>(6:52) Initialize the counter variable</li>
            <li>(7:10) Conditional statement</li>
            <li>(7:18) Increment the counter</li>
            <li>(9:15) Using the length property of a variable in a for loop</li>
            <li>(9:45) While (true)</li>
            <li>(12:20) Break Statements</li>
            <li>(14:15) Continue Statements</li>
          </ul>
      </details>

  - [Watch: **Functions in Javascript \| Javascript Functions Tutorial**](https://www.youtube.com/watch?v=u_lLNH38n5E){:target="_blank"}
    - Duration: 13min
    - Level: Beginner
    - <details>
        <summary>What you'll learn</summary>
          <ul>
            <li>(00:00) Intro</li>
            <li>(0:15) Built-in Functions</li>
            <li>(0:55) Functions are reusable code blocks</li>
            <li>(1:12) Function Declaration Syntax</li>
            <li>(1:20) Creating a Basic Function: sum()</li>
            <li>(2:09) Calling a Function into action</li>
            <li>(2:50) Passing Parameters to a Function</li>
            <li>(3:30) Creating Reusable Code with Functions</li>
            <li>(3:50) Missing Parameters</li>
            <li>(4:30) Handling Missing Parameters</li>
            <li>(5:20) Another Function Example: getUserNameFromEmail()</li>
            <li>(7:10) Is it reusable? Yes!</li>
            <li>(7:30) Anonymous Functions</li>
            <li>(8:30) Arrow Functions</li>
            <li>(9:05) Creating One More Function: toProperCase()</li>
          </ul>
      </details>

### Summary

  - The JavaScript programming language can be found running on several environments (e.g. inside a browser, on an operating system via Node.js, etc.)

  - The core features of the language covered in this brief introduction were:
    - Data and data types (string, number, boolean, undefined)
    - Defining, accessing and modifying variables
    - Conditionals: if/else/switch create a logical branching in our code, directing our program to different code paths depending on some or several conditions.
    - Working with numbers
    - The null coalescing operator (??)
    - Defining, accessing and manipulating Strings through:
      - The `.length` property
      - The `charAt()` method
      - The `indexOf()` method
      - The `slice()` method
      - The `toLowerCase()` method
      - The `toUpperCase()` method
      - The `trim()` method
    - Looping over some code using do/while/for loops
      - BE CAREFUL NOT TO CREATE an endless/infinite loop
    - Functions
    - Some Browser technologies (APIs) were also introduced:
      - The `alert()` method
      - The `confirm()` method
      - The `prompt()` method

  As you are embarking on your journey to harness the power of computers through programming and become a software developer, you must always remind to yourself that:

  - ***"The best part of programming is finding mistakes."***
  - ***"You will fail often, and it will be frustrating."***
  - ***"Never be afraid to mess around and experiment."***

### Exercises

  <!-- WDX:META:PROGRESS:task=Complete the 'Largest Number Checker' exercise -->
  <!-- WDX:META:PROGRESS:task=Complete the 'Landscape Mode Checker' exercise -->
  <!-- WDX:META:PROGRESS:task=Complete the 'Simple Quiz' exercise -->
  <!-- WDX:META:PROGRESS:task=Complete the 'Schnick-Schnack-Schnuck' exercise -->
  - Try to solve all the exercises found [here](./exercises/javascript-first-steps/index.md)

### Extra Resources

### Sources and Attributions

  - [How to read complex code - Felienne Hermans](https://www.youtube.com/watch?v=GUtfW7SHMc4) 