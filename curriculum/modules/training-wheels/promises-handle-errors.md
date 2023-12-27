**Remember to handle errors first:** 

When working with a Promise-based function, using either the `await` or `.then()` syntax, **always** start with the error handling structure before moving on to do something with the rest of the code. In the case of the `then()` syntax, **always** start by typing in the `catch()` handler, then move on to type the `then()` handler:

**Step 1**

```js
fetch( URL )
.catch( error => console.log(error) ); // <= ALWAYS start this way
```

**Step 2**

```js
fetch( URL )
.then( response => /* Now we can start writing the code inside the then() */ )
.catch( error => console.log(error) );
```

In the case of the `await` syntax, you simple start by enclosing the code inside a `try/catch`:

```js
try {
  const response = await fetch( URL );
} catch( error ){ //<= ALWAYS start this way
  console.log( error );
}
```