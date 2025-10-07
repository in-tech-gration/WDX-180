---
title: Introduction to ExpressJS
---

# Introduction to ExpressJS

## What is ExpressJS

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

Watch the following video which provides an introduction to the ExpressJS framework.

**What you'll learn:**

- What is the ExpressJS framework and how to transition from a simple Web Server to an Express Server App.
- how to handle routing using the ExpressJS framework.

<!-- SGEN:META:PROGRESS:task=Watch: 'Introduction to ExpressJS' -->
- [Watch: **Introduction to ExpressJS**](https://www.youtube.com/watch?v=jivyItmsu18){:target="_blank"}
  - Duration: 22min
  - Level: Beginner
  - Captions: Yes
  - <details>
      <summary>What you'll learn</summary>
      <ul>
        <li>What is Express JS?</li>
        <li>Express Routing documentation</li>
        <li>Create a minimal Express server app</li>
        <li>Adding an Express route</li>
        <li>Testing the route in the browser</li>
        <li>Sending a file with Express</li>
        <li>Adding a second route</li>
        <li>Applying RegEx to Express routes</li>
        <li>Handling redirects with Express</li>
        <li>Adding a custom 404 route</li>
        <li>Route handlers</li>
      </ul>
    </details>

## Middleware in ExpressJS

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware

Watch the following videos which focus on what is Middleware in ExpressJS and the Express Router.

**What you'll learn:**

- What is middleware.
- How to use built-in middleware and third-party middleware.
- How to create your own custom middleware.
- What is CORS (Cross Origin Resource Sharing).
- How to create a REST API router on our app.

**Here's the watch list**

<!-- SGEN:META:PROGRESS:task=Watch: 'Middleware in ExpressJS' -->
- [Watch: **Middleware in ExpressJS**](https://www.youtube.com/watch?v=y18ubz7gOsQ){:target="_blank"}
  - Duration: 35min
  - Level: Beginner
  - Captions: Yes
  - <details>
      <summary>What you'll learn</summary>
      <ul>
        <li>What is middleware?</li>
        <li>Apply built-in middleware</li>
        <li>Create custom middleware</li>
        <li>Adding third party middleware</li>
        <li>Create a custom error handler</li>
      </ul>
    </details>

<!-- SGEN:META:PROGRESS:task=Watch: 'Express Router' -->
- [Watch: **Express Router**](https://www.youtube.com/watch?v=Zh7psmf1KAA){:target="_blank"}
  - Duration: 25min
  - Level: Beginner
  - Captions: Yes
  - <details>
      <summary>What you'll learn</summary>
      <ul>
        <li>Create a router</li>
        <li>Apply the router</li>
        <li>Create a REST API router</li>
        <li>Test the API routes</li>
      </ul>
    </details>


### Sources and Attributions

- [ExpressJS Official Site](https://expressjs.com/){:target="_blank"}
- [NPM: CORS package](https://www.npmjs.com/package/cors){:target="_blank"}
- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS){:target="_blank"}
- [Thunder Client Official Site](https://www.thunderclient.com/){:target="_blank"}
