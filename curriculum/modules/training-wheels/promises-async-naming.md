**Naming helps: Name all your async Promise-based functions using the `Async` suffix:**

```js
async function getDataFromFacebookAsync(){
  // ...
}
function collectUserDataAsync(){
  return new Promise(/* callback function here... */);
}
```

Having the `Async` suffix in your async function will help you remember to handle these functions using `await` or the `.then().catch()` syntax. Once you get familiar with asynchronous and Promise-based functions, you can get rid of this training wheels even though they will hurt nobody and can probably be of help to some beginner coders that will work on your code.

This will help you avoid common beginners' errors such as trying to get the result of an async function without `await` or `then()`:

❌ Wrong:

```js
const response = getDataFromFacebook( URL );
```

✅ Correct:

```js
const response = await getDataFromFacebookAsync( URL );
```
