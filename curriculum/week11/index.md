---
title: Week 11 | Web APIs 2: Promises, JSON, Fetch API
---

<hr class="mb-0">

<h1 id="{{ Week 11-Web APIs 2: Promises, JSON, Fetch API | slugify }}">
  <span class="week-prefix">Week 11 |</span> Web APIs 2: Promises, JSON, Fetch API
</h1>

<div class="week-controls">

  {% assign week_num = 11 | to_integer %}

  <h2 class="week-controls__previous_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if week_num > 0 %}

      {% assign previous_week_num = 11 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="/WDX-180/curriculum/week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 4/12/2023</span>

  <h2 class="week-controls__next_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if false and week_num <= 36 %}

      {% assign next_week_num = 11 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="/WDX-180/curriculum/week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 11 - Day 1 | Introduction to JSON -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 11 - Day 1</span> | Introduction to JSON</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

- [Read: **Introduction to JSON**](../30-days-of-javascript/index.md){:target="_blank"}

### Summary

  🌕 You are extraordinary. You know a light-weight data format which you may use to store data or to send it an HTTP server. Now do some exercises for your brain and for your muscle.

### Exercises

  Copy the [json.js](./exercises/json.js) file and load it on an HTML file called `json.html` and compete all the challenges found inside.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week11/progress/progress.draft.w11.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: JSON](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/16_Day_JSON/16_day_json.md){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/16_Day_JSON/16_day_json.md){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!
  
</details>

<hr class="mt-1">

<!-- Week 11 - Day 2 | Introduction to Promises -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 11 - Day 2</span> | Introduction to Promises</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan


## Promise

We human give or receive a promise to do some activity at some point in time. If we keep the promise we make others happy but if we do not keep the promise, it may lead discontentment. Promise in JavaScript has something in common with the above examples.

A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

## Callbacks

To understand promise very well let us understand callback first. Let's see the following callbacks. From the following code blocks you will notice, the difference between callback and promises.

- call back
  Let us see a callback function which can take two parameters. The first parameter is err and the second is result. If the err parameter is false, there will not be error other wise it will return an error.

In this case the err has a value and it will return the err block.

```js
//Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)
```

```sh
// after 2 seconds it will print
It did not go well
```

In this case the err is false and it will return the else block which is the result.

```js
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 2000)
}

doSomething((err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
})
```

```sh
// after 2 seconds it will print the skills
["HTML", "CSS", "JS"]
```

### Promise constructor

We can create a promise using the Promise constructor. We can create a new promise using the key word `new` followed by the word `Promise` and followed by a parenthesis. Inside the parenthesis, it takes a `callback` function. The promise callback function has two parameters which are the _`resolve`_ and _`reject`_ functions.

```js
// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
```

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))
```

```sh
["HTML", "CSS", "JS"]
```

The above promise has been settled with resolve.
Let us another example when the promise is settled with reject.

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.includes('Node')) {
      resolve('fullstack developer')
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error(error))
```

```sh
Something wrong has happened
```

<!-- Summary -->

<!-- Exercises -->

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: Promises](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/18_Day_Promises/18_day_promises.md){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/18_Day_Promises/18_day_promises.md){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!
  
</details>

<hr class="mt-1">

<!-- Week 11 - Day 3 | Introduction to Fetch API -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 11 - Day 3</span> | Introduction to Fetch API</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan


  ## Fetch API

  The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set. In this challenge we will use fetch to request url and APIS. In addition to that let us see demonstrate use case of promises in accessing network resources using the fetch API.

  ```js
  const url = 'https://restcountries.com/v2/all' // countries api
  fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
      // getting the data
      console.log(data)
    })
    .catch(error => console.error(error)) // handling error if something wrong happens
  ```

  ## Async and Await

  Async and await is an elegant way to handle promises. It is easy to understand and it's clean to write.

  ```js
  const square = async function (n) {
    return n * n
  }

  square(2)
  ```

  ```sh
  Promise {<resolved>: 4}
  ```

  The word _async_ in front of a function means that function will return a promise. The above square function instead of a value it returns a promise.

  How do we access the value from the promise? To access the value from the promise, we will use the keyword _await_.

  ```js
  const square = async function (n) {
    return n * n
  }
  const value = await square(2)
  console.log(value)
  ```

  ```sh
  4
  ```

  Now, as you can see from the above example writing async in front of a function create a promise and to get the value from a promise we use await. Async and await go together, one can not exist without the other.

  Let us fetch API data using both promise method and async and await method.

  - promise

  ```js
  const url = 'https://restcountries.com/v2/all'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => console.error(error))
  ```

  - async and await

  ```js
  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()
  ```

<!-- Summary -->

### Exercises

  Copy the [fetch.js](./exercises/fetch.js) file and load it on an HTML file called `fetch.html` and compete all the challenges found inside.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week11/progress/progress.draft.w11.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  **Content is based on the following sources:**

  - [30 Days Of JavaScript: Promises](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/master/18_Day_Promises/18_day_promises.md){:target="_blank"} [(Permalink)](https://github.com/in-tech-gration/30-Days-Of-JavaScript/blob/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/18_Day_Promises/18_day_promises.md){:target="_blank"}

  Don't forget to star this awesome [repo](https://github.com/Asabeneh/30-Days-Of-JavaScript){:target="_blank"}!
  
</details>

<hr class="mt-1">



<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

## Week 11 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).