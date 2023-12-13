---
title: Introduction to NodeJS
---

# Introduction to NodeJS

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.

In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.

Watch the following videos which give an introduction to the basic functionality of NodeJS and to the Node Package Manager (NPM). The total duration of the these videos is around 45 minutes.

## What you'll learn:

- How to install NodeJS on your machine
- Differences between NodeJS and vanilla JS
- How to import and use some Common Core modules
- How to read and write files with NodeJS
- What is NPM and how to install/uninstall packages, both globally and for specific projects.
- How to initialize an NPM project with production and development dependencies.
- How to configure and use NPM scripts.

**Here's the watch list**

<!-- SGEN:META:PROGRESS:task=Watch 'Introduction to NodeJS -->
- [Watch **Introduction to NodeJS**](https://www.youtube.com/watch?v=JZXQ455OT3A){:target="_blank"}

  - Duration: 17min
  - Level: Beginner
  - Caption: Yes
  - <details>
      <summary>What you'll learn</summary>
      <ul>
          <li>Install Node.js</li>
          <li>console.log() in terminal</li>
          <li>The global object</li>
          <li>Use Common JS imports</li>
          <li>Use the 'os' and 'path' Common Core modules</li>
          <li>Create custom modules</li>
      </ul>
    </details>

<!-- SGEN:META:PROGRESS:task=Watch 'Reading and Writing files with NodeJS' -->
- [Watch **Reading and Writing files with NodeJS**](https://www.youtube.com/watch?v=yQBw8skBdZU){:target="_blank"}
  - Duration: 28min
  - Level: Beginner
  - Caption: Yes
  - <details>
      <summary>What you'll learn</summary>
      <ul>
        <li>Use the NodeJS docs</li>
        <li>Read or write a file with Node.js</li>
        <li>Handle errors</li>
        <li>Callback functions</li>
        <li>Callback hell and instead use 'async' and 'await'</li>
        <li>Use the fsPromises</li>
        <li>Delete a file with Node.js</li>
        <li>Use streams for large files</li>
        <li>Create or remove a directory with Node.js</li>
        <li>Check if a file or directory exists</li>
      </ul>
    </details>

<!-- SGEN:META:PROGRESS:task=NPM Node Package Manager Modules -->
- [Watch **NPM Node Package Manager Modules**](https://www.youtube.com/watch?v=oGO_-DWTmKA){:target="_blank"}
  - Duration: 23min
  - Level: Beginner
  - Captions: Yes
  - <details>
      <summary>What you'll learn</summary>
      <ul>
        <li>What is NPM?</li>
        <li>NPM documentation</li>
        <li>Install an NPM package globally</li>
        <li>'npm init' and 'package.json'</li>
        <li>Installing a production or dev dependency</li>
        <li>NPM scripts</li>
        <li>Importing a package with an alias</li>
        <li>Searching for npm packages</li>
        <li>Semantic versioning</li>
        <li>Update dependencies</li>
        <li>Uninstall an NPM package</li>
      </ul>
    </details>

### Sources and Attributions

- [NodeJS Official Site](https://nodejs.org/){:target="_blank"}
- [NPM Official Site](https://www.npmjs.com/){:target="_blank"}