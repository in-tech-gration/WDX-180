# Slack Messages: Week 32 (27/05/2024 - 31/05/2024)

## 27/05/2024

## 28/05/2024

## 29/05/2024

## 30/05/2024

- Good morning everyone! Take a few minutes to check out [this video](https://www.youtube.com/watch?v=cMt9U6kCWsM){:target="_blank"} about the different types of JS functions
  - As an addition, in WordPress I often see the use of [IIFE functions](https://developer.mozilla.org/en-US/docs/Glossary/IIFE){:target="_blank"} to limit the scope if I understand correctly
  ```
  (function () {
    // …
  })();
  ```
  - Yep! That's exactly how the IIFE can be used in such contexts. A ; at the beginning would also be a safer setup. `;(function(){ ... })();`. The parens can also be inside the first set of parens: `;(function(){ ... }());`. Also, if your are thinking of integrating code in a WordPress site (or any other codebase) consider this pattern:
  ```javascript
  console.log("WP Code");
  ;(function myModule(){
      function init(){
        console.log(a); // Crappy code
      }
      try {
          init();
      } catch(e){
          console.log("Error in myModule");
      }
  }());
  console.log("WP Code");
  ```
  - Your custom JS code might break other code running on the site. I think the best way is to use the new module scripts if the site can support them
  - ; is like finished previous  expressions if this file included?
  - Yep. `function wp(){} wp() (function(){}())` vs `function wp(){} wp() ;(function(){}());`. the first one will produce an error. JS thinks it's one statement: `wp()(function(){}())`
  - Thank you, very informative. Made things very clear about arrow functions and this 
  
## 31/05/2024
