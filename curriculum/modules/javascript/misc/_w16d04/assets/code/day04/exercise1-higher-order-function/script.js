console.clear();

/*

Setup:

- Download the code
- Open it in your local environment (e.g. VSCode with Live Server)
- Follow the instructions below:

Instructions:

In this page, there is an event handler called "click", that gets executed every time the user
clicks the button. We need to count the times the user has toggled the button color using 
a simple counter and display that counter in the console every time it happens.

You should implement a "Higher Order Function" that turns the "click" function into a function
that counts the number of clicks and displays them in the console. Here's the expected behaviour:

User Clicks => color turns to green => "Toggled 1 times!" gets displayed in the console

User Clicks => color turns to red => "Toggled 2 times!" gets displayed in the console

User Clicks => color turns to green => "Toggled 3 times!" gets displayed in the console

And so forth...

To start, you must comment and uncomment the appropriate lines in the code and write your code 
inside the tracker function WITHOUT changing the number of parameters accepted. You must not add 
any code outside the tracker function in order to solve this exercise.

When finished, copy your code in a folder named "higher-order-function" inside the 
user/week16/exercises/day04/ folder, commit with the message "w16d04-higher-order-function" and push.

Here is some reading:

- https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/
- https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK

*/


function click(e){
  e.target.style.background = e.target.style.background === "red" ? "green" : "red";  
}
function tracker( fn ){
  // Your code here...
}

//>> Comment the following line:
document.querySelector("button").addEventListener("click", click);

//>> Uncomment the following line:
// document.querySelector("button").addEventListener("click", tracker(click));