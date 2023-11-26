# DOM IO Functions

There are 9 DOM IO functions you can use to ease the transition from
`prompt`/`alert`/`confirm` to full DOM manipulation. They are simple but just
enough to build basic web pages that process user input.

These functions will throw many errors, that's a good thing! The errors are
there to help catch your mistakes before they become frustrating mysteries, and
to help you learn to use DOM `<input>` elements correctly.

The most common errors you will get are because:

- one of the arguments you passed is the wrong type
- there is not element with the ID you requested
- you are trying to read/set the wrong data type with the wrong input type

## Reading from `<input>` tags

### `readString("id")`

This function takes in the ID of the `<input>` you want to read from and returns
the string value it stores.

```js
const userName = readString('user-name-field');
```

### `readBoolean("id")`

This function takes in the ID of the `<input>` you want to read from and returns
the boolean value it stores.

This function will only read from `checkbox` inputs.

```js
const isTall = readBoolean('is-tall-checkbox');
```

### `readNumber("id")`

This function takes in the ID of the `<input>` you want to read from, reads the
string value it stores, converts the string to a number, and returns the number.

This function will only read from `number` and `range` inputs.

```js
const age = readNumber('user-age');
```

## Setting the value of `<input>` tags

### `setString("id", 'new value')`

This function takes in the ID of the `<input>` you want to update and sets it to
the new value you provided.

```js
setString('user-name-field', 'Antonia');
```

### `setBoolean(id)`

This function takes in the ID of the `<input>` you want to read from and returns
the boolean value it stores.

This function will only update `checkbox` inputs.

```js
setBoolean('is-tall-checkbox', false);
```

### `setNumber(id)`

This function takes in the ID of the `<input>` you want to read from, reads the
string value it stores, converts the string to a number, and returns the number.

This function will only update `number` and `range` inputs.

```js
setNumber('user-age', 12);
```

## Reading & Setting `<select>` tags

### `readSelection("id")`

This function takes in the ID of the `<select>` you want to read from and
returns the string value that is currently selected.

```js
const selectedFlavour = readSelection('ice-cream-flavour');
```

### `setSelection("id", "new value)`

This function takes in the ID of the `<select>` you want to update and sets it
to the new value you provided.

If the value you pass is not an option, the function will throw an error.

```js
setSelection('ice-cream-flavour', 'chocolate');
```

## Displaying to other elements

### `display("id", value)`

Displays any value in an element.

If the element is used for data input, the function will throw an error.

```js
display('main-header', 'Good Morning!');
```

### `append("id", value)`

Adds any value to the end of an element's contents.

If the element is used for data input, the function will throw an error.

```js
display('main-header', 'Good ');
append('main-header', 'Morning!');
```
