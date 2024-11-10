# Slack Messages: Week 16 (29/01/2024 - 02/02/2024)
## 29/01/2024
## 30/01/2024

Let's start the day with a very [quick exercise](https://codepen.io/kostasx/pen/ZEPaEga){:target="_blank"}

In this codepen, it seems that when the modal goes away, a click handler is still present on the document (check the console). Let's get rid of that!

Next, study the answer to the following question [found here](https://github.com/kostasx/Front-End-FAQ/blob/master/js.md){:target="_blank"}:
_"What is the difference between onevent handlers and addEventListener?"_

After that, practice some event handling, and schedule a call with your team to move on with the next steps for the var/let/const group project. Next week, we'll be moving on to the next group project, so make sure to have everything ready by then!

Good luck!

### Replies

it seems that onevent named function calling overrides onevent anonymous function calling. The anonymous functions should be at the end of the code so they work. ([codepen](https://codepen.io/leonalkalai/pen/rNRJOYx)){:target="_blank"}

it is not the named vs anonymous part that makes the difference. The whole point is that the onevent syntax uses the assignment operator,which always replaces the previous value. `buton.onclick = functionA(){}` `button.onclick = function B(){} <= This will assign a new value to the property onclick, replacing the previous ones`. It does not matter, whether they are named or anonymous. Just remember that = is a risky operation and should be used carefully, as it will always replace the previous value.

## 31/01/2024
## 01/02/2024

Today we'll start with some exercises and then move on to practice what we've covered yesterday (feel free to experiment with the concepts and write code to experiment and get familiar with those concepts, e.g.Object.freeze, Object creator, etc.)

Here are the 2 exercises you must complete and submit today:
- [Exercise 1](https://codepen.io/kostasx/pen/WNmzoyZ?editors=1011){:target="_blank"}
- [Exercise 2](https://codepen.io/kostasx/pen/wvOmKNR?editors=0011){:target="_blank"}

## 02/02/2024