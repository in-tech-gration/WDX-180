# DOM IO Functions

There are 5 functions in this DOM IO library to help you transition from
`prompt`/`alert`/`confirm` to projects that use HTML/CSs/JS. They are simple
functions but just enough to build basic web pages that process user input.

You will not be able to do everything you see in online DOM tutorials, but you
can learn many foundational skills with less distraction including:

- reading documentation (this README!)
- using functions from a library
- using HTML + JS to read user input
- _event-driven programming_
- ... and much more

## Helpful Errors

These functions will throw many errors, that's a good thing! The errors are
there to help catch your mistakes before they become frustrating mysteries, and
to help you learn to use DOM elements correctly.

The most common errors you will get are because:

- one of the arguments you passed is the wrong type
- there is not element with the ID you requested
- you are trying to read/set an element with the wrong data type
- an input element does not have a label (important for accessibility)

## The Functions

- [When Form Data Changes](#whenformdatachangesid-function)
- [Read String](#readstringid)
- [Read Boolean](#readbooleanid)
- [Read Number](#readnumberid)
- [Display String](#displaystringid-text)

---

---

### `whenFormDataChanges('id', function)`

This function takes the ID of a `<form>` element and a _handler
function_<sup>\*</sup> describing what should happen when the user changes the
form's data.

When the user change's the form data, the code in your handler will be executed.

```js
// log the user's favorite number each time they change the input

whenFormDataChanges('user-data', () => {
  console.log('you just changed the form data!');
});
```

This function supports these HTML elements:

```html
<!-- a form with an id -->
<form id="user-data"></form>
```

> <sup>\*</sup> _handler function_: You will learn about functions & handlers in
> later modules, for now you can just use the syntax from this example.

[Table of Contents](#the-functions)

---

---

## `readString("id")`

This function takes in the ID of the `<input>` or `<textarea>` and returns the
string value it stores.

```js
const someWords = readString('words');
const anOption = readString('radio-options');
const aSelection = readString('selection');

console.log(someWords, anOption, aSelection);
```

This function supports these HTML elements:

```html
<!-- all <input>, <fieldset> and <select> must be inside a <form> -->
<form>
  <!-- labeled text inputs with an id -->
  <label>inputs with type "text"<input id="words" type="text" /></label>

  <!-- fieldsets with an id, containing labeled & named radio inputs -->
  <fieldset id="radio-options">
    <label>red: <input type="radio" name="color" checked /></label>
    <label>blue: <input type="radio" name="color" /></label>
    <!-- ... -->
  </fieldset>

  <!-- select elements with an id, containing options -->
  <select id="selection">
    <option>A</option>
    <option value="B">b</option>
    <!-- ... -->
  </select>
</form>
```

[Table of Contents](#the-functions)

---

## `readBoolean("id")`

This function takes in the ID of an `<input>` and returns the boolean value it
stores.

```js
const storeAllTheirData = readBoolean('cookies');

console.log(storeAllTheirData);
```

This function supports these HTML elements:

```html
<!-- all <input> must be inside a <form> -->
<form>
  <!-- a labeled checkbox input with an id -->
  <label><input id="cookies" type="checkbox" /> accept all cookies</label>
</form>
```

[Table of Contents](#the-functions)

---

## `readNumber("id")`

This function takes in the ID of the `<input>` and returns the user's number.

```js
const userAge = readNumber('age');
const userRange = readNumber('one-to-hundred');

console.log(userAge, userRange);
```

This function supports these HTML elements:

```html
<!-- all <input> must be inside a <form> -->
<form>
  <!-- a labeled number input with an id -->
  <label>your age: <input id="age" type="number" /></label>

  <!-- a labeled range input with an id -->
  <label>between 1-100 <input id="one-to-hundred" type="range" /></label>
</form>
```

[Table of Contents](#the-functions)

---

---

## `displayString("id", "text")`

Displays a string inside a `<pre>` tag.

```js
displayString('program-output', 'Good Morning!');
```

This functions supports these HTML elements:

```html
<form></form>

<!-- the <pre> element must have an id and be outside of a <form> -->
<pre id="program-output"></pre>
```

[Table of Contents](#the-functions)
