---
title: "Advanced Patterns - Chainable Functions"
---

## Advanced JS Patterns
# Chainable Functions

[![](./assets/Chainable.header.jpg)](https://youtu.be/jSI8SU5yeag){:target="_blank"}

Watch the lecture (part 1): [Chainable Functions](https://youtu.be/jSI8SU5yeag){:target="_blank"}

## Lecture Code

  - The source code for our very own simple implementation of jQuery can be found here: [xQuery](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/javascript/advanced/chainable_functions/assets/code){:target="_blank"}

  **A chain of simple Object Properties:**

  ```js
  const Something = {
    else: {
      and: {
        something: {
          else: 42
        }
      }
    }
  }

  console.log(
    Something.else.and.something.else
  )
  ```

  **Our first chain of functions**

  ```js
  const Something = ()=>{
    return {
      else: function(){
        return {
          and: function(){

          }
        }
      }
    }
  }

  // console.log(typeof Something().else().and);
  const res = Something().else().and(); // .something().else()
  // console.log(res);
  ```

  For a chainable sequence to work: `Something().else();`

  - 1) `Something()` (the thing on the left of the `.`) returns an `{ Object }`
  - 2) The property on the right (`else()`) must be a method (property of type `'function'`)

## Lecture Notes

  **Native chaining: Promises**

  ```js
  fetch(URL).then().then().catch().then().catch().finally();
  ```

  ```js
  fetch(URL)
    .then()
    .then()
    .catch()
    .then()
    .catch()
    .finally();
  ```

  In general, we recommend async/await syntax.

  **Native chaining: Arrays**

  ```js
  const numbers = [1, 2, 3, 4, 5];

  const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 10)
    .reduce((sum, n) => sum + n, 0);

  console.log(result); // 40
  ```

  Best practices applied:

  ```js
  const numbers = [1, 2, 3, 4, 5];

  const byEven = n => n % 2 === 0;
  const multiplyBy10 = n => n * 10;
  const sum = (sum, n) => { return sum + n };

  const result = numbers
    .filter(byEven)
    .map(multiplyBy10)
    .reduce(sum, 0);

  console.log(result);  
  ```

  **Native chaining: Strings**

  ```js
  const text = "  in|tech  "; // => "  IN|TECH  " => "IN|TECH  " => "IN|TECH" => "IN:TECH"

  const output = text
    .toUpperCase()
    .trimStart()
    .trimEnd()
    .replace("|",":");

  console.log(output);
  ```

  **Libraries: Moment.js**

  ```js
  const moment = require("moment");
  const date = moment()
    .add(1, "day")
    .subtract(2, "hours")
    .format("YYYY-MM-DD HH:mm");

  console.log(date);
  ```

  **Libraries: D3**

  CDN: [https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js](https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js){:target="_blank"}

  ```js
  const body = d3.select("body"); // Picks the <body>
  const svg = body.append("svg"); // Appends an <svg>
  svg.attr("width", 200);
  svg.attr("height", 200);
  const circle = svg.append("circle");
  circle.attr("cx", 100);
  circle.attr("cy", 100);
  circle.attr("r", 50);
  circle.style("fill", "blue");
  ```

  ```js
  // CHAINED:
  d3.select("body") 
    .append("svg") 
    .attr("width", 400)
    .attr("height", 400)
    .append("circle") 
    .attr("cx", 100) 
    .attr("cy", 100) 
    .attr("r", 50) 
    .style("fill", "blue");
  ```

  **Libraries: lodash**

  CDN: [https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js](https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js){:target="_blank"}

  ```js
  const result2 = _.chain([1, 2, 3, 4])
    .map(n => n * 2)
    .filter(n => n > 4)
    .value();
  console.log(result2); // [6, 8]
  ```

  **Libraries: ThreeJS**

  ```js
  const cube = new THREE
    .Mesh()
    .position.set(1, 1, 1)
    .scale.set(2, 2, 2);
  ```

  **Libraries: RxJS**

  ```js
  import { of } from "rxjs";
  import { map, filter } from "rxjs/operators";

  of(1, 2, 3, 4, 5)
  .pipe(
    filter(n => n % 2 === 0),
    map(n => n * 10)
  )
  .subscribe(console.log); // 20, 40
  ```

  **Libraries: jQuery**

  CDN: [https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js){:target="_blank"}

  ```js
  // jQuery === $
  const $h2 = $("h2");
  $h2.css("background", "gray");
  $h2.css("padding", "1rem");
  $h2.data("priority", "high");
  $h2.on("click", function(){
    console.log("click", $h2[0], $h2.data("priority"));
  });
  $h2.attr("class", "fancy");
  ```
  ```js
  // CHAINED:
  const $h2 = $("h2")
  .css("background", "gray")
  .css("padding", "1rem")
  .data("priority", "high")
  .attr("class", "fancy")
  .on("click", function(e){
    console.log("click", $h2.data("priority"));
  });
  ```

## Coding Challenge

  ```js
  lets(); // Does nothing
  lets().print(); // console.logs: "Let's";
  lets().learn().print(); // console.logs: "Let's learn";
  lets().learn().about().print(); // console.logs: "Let's learn about";
  lets().learn().about().function.chaining().print(); // console.logs: // "Let's learn about function chaining!"
  // TIPS: Start at the top level: lets(), make sure everything works, then move on to the next
  // layers (lets().learn(), lets().learn().print(), lets().learn().about(), etc.) and move forward in baby steps, using console.logging at each step:  
  ```
