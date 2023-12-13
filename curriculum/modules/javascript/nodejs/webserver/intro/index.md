---
title: NodeJS WebServer Introduction
---

# NodeJS WebServer Introduction

## The Node.js Event emitter

If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

On the backend side, Node.js offers us the option to build a similar system using the events module.

This module, in particular, offers the EventEmitter class, which we'll use to handle our events.

You initialize that using

```js
const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
```

This object exposes, among many others, the on and emit methods.
- `emit` is used to trigger an event
- `on` is used to add a callback function that's going to be executed when the `event` is triggered

Watch the following video which gives an introduction on how to handle Events in NodeJS.

**What you'll learn:**

- What is the Events core module and how to emit and listen for events in an NodeJS project.
- How to create your own log module.

<!-- SGEN:META:PROGRESS:task=Watch 'Node Events Tutorial' -->
- [Watch **Node Events Tutorial**](https://www.youtube.com/watch?v=2vaTy4dkbJM){:target="_blank"}
  - Duration: 15min
  - Level: Beginner
  - Captions: Yes
  - <details>
      <summary>What you'll learn</summary>
      <ul>
        <li>Building a custom log module</li>
        <li>Events module and EventEmitter</li>
        <li>Finishing the logEvents module</li>
      </ul>
    </details>

## Building a WebServer

A web server is computer software and underlying hardware that accepts requests via HTTP (the network protocol created to distribute web content) or its secure variant HTTPS. A user agent, commonly a web browser or web crawler, initiates communication by making a request for a web page or other resource using HTTP, and the server responds with the content of that resource or an error message. A web server can also accept and store resources sent from the user agent if configured to do so.

Watch the following video which explain how to build a Web Server with NodeJS.

**What you'll learn:**

- How to use the 'http' Common Core module.
- How to redirect the user to another path.
- How to serve different files of multiple types (html, json, images)
- How to log and handle errors from incoming requests.

<!-- SGEN:META:PROGRESS:task=Watch 'How to build a Web Server with NodeJS' -->
- [Watch **How to build a Web Server with NodeJS**](https://www.youtube.com/watch?v=3ZAKY-CDKog){:target="_blank"}
  - Duration: 39min
  - Level: Beginner
  - Captions: Yes
  - <details>
      <summary>What you'll learn</summary>
      <ul>
        <li>A minimal server</li>
        <li>Setting the Content-Type</li>
        <li>Setting the file path</li>
        <li>Routing redirects</li>
        <li>Basic serveFile function </li>
        <li>Calling the serveFile function</li>
        <li>Serving JSON with the serveFile function</li>
        <li>Serving images with the serveFile function</li>
        <li>Sending a 404 status code</li>
        <li>Logging requests and errors</li>
      </ul>
    </details>

### Sources and Attributions

- [NodeJS Official Site](https://nodejs.org/){:target="_blank"}
- [NPM Official Site](https://www.npmjs.com/){:target="_blank"}
