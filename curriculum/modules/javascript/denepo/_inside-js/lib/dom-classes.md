# DOM Classes

There are 8 DOM class functions you can use to explore dynamic styling without
getting tangled in full DOM manipulation. They are simple but just enough to
build basic web pages.

These functions will throw many errors, that's a good thing! The errors are
there to help catch your mistakes before they become frustrating mysteries.

The most common errors you will get are because:

- one of the arguments you passed is the wrong type
- there is not element with the ID you requested

## Changing an Element's Classes

### `addClass("id", "class-name")`

Adds a class to the end of an element's `class="..."` attribute value. Does
nothing if the class was already present.

```js
// before: <h1 id="main-title" class=""></h1>
addClass('main-title', 'enormous');
// after: <h1 id="main-title" class="enormous"></h1>
```

### `removeClass("id", "class-name")`

Removes a class from an element's `class="..."` attribute value. Does nothing if
the class does not exist on the element.

```js
// before: <h1 id="main-title" class="enormous"></h1>
removeClass('main-title', 'enormous');
// after: <h1 id="main-title" class="enormous"></h1>
```

### `toggleClass("id", "class-name")`

If the class is already on the element, it will be removed.

If the class is _not_ on the element, it will be added at the end of the
element's `class="..."` attribute.

Returns: `true` if the class was added to the element, `false` if it was
removed.

```js
// before: <h1 id="main-title" class=""></h1>
const firstToggle = toggleClass('main-title', 'enormous');
// after: <h1 id="main-title" class="enormous"></h1>
console.log(firstToggle); // true

// before: <h1 id="main-title" class="enormous"></h1>
const secondToggle = toggleClass('main-title', 'enormous');
// after: <h1 id="main-title" class="enormous"></h1>
console.log(secondToggle); // false

// final element: <h1 id="main-title" class=""></h1>
```

### `replaceClass("id", "old-class-name", "new-class-name")`

Replaces the old class with a new class, does nothing if the old class did not
exist. The new class will be in the same location as the old class.

Returns: `true` if the old class was replaced, `false` if it was not there.

```js
// before: <h1 id="main-title" class="enormous fancy"></h1>
const firstReplace = replaceClass('main-title', 'enormous', 'big');
// after: <h1 id="main-title" class="big fancy"></h1>
console.log(firstReplace); // true

// no change!  "enormous" was already gone
const secondReplace = replaceClass('main-title', 'enormous', 'tiny');
// after: <h1 id="main-title" class="big fancy"></h1>
console.log(secondReplace); // false
```

### `clearClasses("id")`

Removes all classes from an element.

```js
// before: <h1 id="main-title" class="enormous fancy impressive"></h1>
clearClasses('main-title');
// after: <h1 id="main-title" class=""></h1>
```

## Reading an Element's Classes

### `hasClass("id", "class-name")`

Checks if an element has a class. Returns: `true` if the class exists, `false`
if it does not.

```js
// <h1 id="main-title" class="enormous"></h1>

const hasEnormous = hasClass('main-title', 'enormous');
console.log(hasEnormous); // true

const hasFancy = hasClass('main-title', 'fancy');
console.log(hasFancy); // false
```

### `getClassString("id")`

Returns an elements classes as a string.

```js
// <h1 id="main-title" class="enormous fancy impressive"></h1>

const classString = getClassString('main-title');
console.log(classString); // 'enormous fancy impressive'
```

### `getClassArray("id")`

Returns an elements classes as an array.

```js
// <h1 id="main-title" class="enormous fancy impressive"></h1>

const classArray = getClassArray('main-title');
console.log(classArray); // ['enormous', 'fancy', 'impressive']
```
