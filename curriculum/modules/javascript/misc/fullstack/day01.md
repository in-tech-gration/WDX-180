---
title: "Full Stack Project - Day 01"
layout: v2
---

# Express + EJS Fundamentals

## Building Your First Server-Rendered Web Application

  > "A web framework is not magic. It is simply a collection of abstractions that make common tasks easier."
  >
  > Today, we'll pull back the curtain and understand what Express and EJS are actually doing.

# Learning Objectives

  By the end of this lesson, students will be able to:

  * Explain the difference between a web server and a web application.
  * Explain what Express.js does and why it exists.
  * Create and configure an Express application.
  * Understand HTTP requests and responses.
  * Serve static files using Express middleware.
  * Configure EJS as a template engine.
  * Render dynamic HTML using data from JavaScript.
  * Create reusable layouts and partials.
  * Understand the purpose of middleware.
  * Build a small server-rendered application from scratch.

# Before We Begin

## What Are We Building?

  Throughout this course we will gradually build a Product CMS.

  A CMS (Content Management System) allows users to manage data through a web interface.

  Examples:

  * Shopify → Products
  * WordPress → Blog Posts
  * YouTube Studio → Videos
  * Netflix Admin Dashboard → Movies & Shows

  Our CMS will allow users to:

  * View products
  * Create products
  * Edit products
  * Delete products

  This is known as CRUD:

  | Operation | Meaning     |
  | --------- | ----------- |
  | Create    | Add data    |
  | Read      | View data   |
  | Update    | Modify data |
  | Delete    | Remove data |

  Today we are building the foundation.

  No database yet.

  No authentication yet.

  Just Express, EJS, and understanding how web applications work.

# What Is Express?

## The Problem

  Node.js can already create web servers.

  Example:

  ```javascript
  const http = require('http');

  http.createServer((req, res) => {
    res.end('Hello World');
  }).listen(3000);
  ```

  But building real applications this way becomes painful.

  We would need to manually:

  * Parse URLs
  * Handle routes
  * Parse forms
  * Serve files
  * Handle errors

  Express solves these problems.

## What Express Gives Us

  Express provides:

  **Routing**

  ```javascript
  app.get('/', () => {});
  app.post('/products', () => {});
  ```

  **Middleware** 

  ```javascript
  app.use(...)
  ```

  **Request Helpers**

  ```javascript
  req.body
  req.params
  req.query
  ```

  **Response Helpers**

  ```javascript
  res.render(...)
  res.json(...)
  res.redirect(...)
  ```

  Express is essentially a thin layer on top of Node's HTTP server.

#  Project Setup

  **Create Project Folder**

  ```bash
  mkdir express-crud
  cd express-crud
  ```

  **Initialize Node Project**

  ```bash
  npm init -y
  ```

  This creates a `package.json` that looks like this:

  ```json
  {
    "name": "express-crud",
    "version": "1.0.0",
    ...
  }
  ```

  **Install Dependencies**

  ```bash
  npm install express ejs express-ejs-layouts
  ```

  **What Did We Install?**

  | Package             | Purpose         |
  | ------------------- | --------------- |
  | express             | Web framework   |
  | ejs                 | Template engine |
  | express-ejs-layouts | Layout support  |

  **Add Scripts**

  ```json
  {
    "scripts": {
      "start": "node index.js",
      "dev": "node --watch index.js"
    }
  }
  ```

  Now:

  ```bash
  npm run dev
  ```

  automatically reloads the server whenever files change.

  Your future self will thank you.

# Project Structure

  Professional projects rely on predictable structure.

  ```text
  express-crud/
  ├── index.js
  ├── package.json
  ├── views/
  │   ├── layout.ejs
  │   ├── index.ejs
  │   └── partials/
  │       ├── header.ejs
  │       └── footer.ejs
  ├── public/
  │   └── css/
  │       └── style.css
  ```

# Creating Our First Express Server

  Create:

  ```javascript
  // index.js

  const express = require('express');

  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello Express!');
  });

  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
  ```

  Run:

  ```bash
  npm run dev
  ```

  Visit:

  ```text
  http://localhost:3000
  ```

  Congratulations.

  You now have a working web server.

  You're officially serving bytes to strangers.

  Or at least to yourself.

# Understanding Routes

  A route defines:

  ```text
  HTTP METHOD + URL
  ```

  Examples:

  | Method | URL         | Purpose        |
  | ------ | ----------- | -------------- |
  | GET    | /           | Homepage       |
  | GET    | /products   | List products  |
  | GET    | /products/1 | View product   |
  | POST   | /products   | Create product |

  ---

  Example:

  ```javascript
  app.get('/about', (req, res) => {
    res.send('About Page');
  });
  ```

  Now:

  ```text
  localhost:3000/about
  ```

  returns:

  ```text
  About Page
  ```

# Middleware

  Middleware is one of the most important concepts in Express.

  A middleware function sits between:

  ```text
  Request
    ↓
  Middleware
    ↓
  Route
    ↓
  Response
  ```

  Example:

  ```javascript
  app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
  });
  ```

  Every request now gets logged.

## Why Middleware Exists

  Middleware can:

  * Log requests
  * Parse forms
  * Parse JSON
  * Authenticate users
  * Validate data
  * Handle errors

  Most Express applications are simply chains of middleware.

# Serving Static Files

  Websites usually contain:

  * CSS
  * Images
  * JavaScript

  These are called static assets.

  Create:

  ```javascript
  app.use(express.static('public'));
  ```

  Now:

  ```text
  public/css/style.css
  ```

  becomes accessible through:

  ```text
  /css/style.css
  ```

  ---

  Create:

  ```css
  body {
    font-family: sans-serif;
  }
  ```

# Introducing EJS

  So far we have been sending strings:

  ```javascript
  res.send('Hello');
  ```

  Real applications send HTML.

  Instead of writing HTML inside JavaScript, we use templates.

  This is where EJS comes in.

## What Is EJS?

  EJS means:

  ```text
  Embedded JavaScript
  ```

  It allows JavaScript inside HTML.

  Example:

  ```ejs
  <h1><%= title %></h1>
  ```

  If:

  ```javascript
  title = 'Products'
  ```

  Output becomes:

  ```html
  <h1>Products</h1>
  ```

# Configuring EJS

  ```javascript
  const path = require('path');

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  ```

  Create:

  ```javascript
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'Products CMS'
    });
  });
  ```

  Create:

  ```ejs
  <!-- views/index.ejs -->

  <h1><%= title %></h1>
  ```

  The page now renders dynamically.

# Passing Data to Views

  Let's pass an array.

  ```javascript
  const products = [
    { name: 'Keyboard' },
    { name: 'Mouse' },
    { name: 'Monitor' }
  ];

  app.get('/', (req, res) => {
    res.render('index', {
      title: 'Products',
      products
    });
  });
  ```

  ---

  View:

  ```ejs
  <h1><%= title %></h1>

  <ul>
    <% products.forEach(product => { %>
      <li><%= product.name %></li>
    <% }) %>
  </ul>
  ```

  Output:

  ```html
  Keyboard
  Mouse
  Monitor
  ```

# EJS Syntax

## Output Escaped Data

  ```ejs
  <%= name %>
  ```

  Recommended for user data.

  Protects against XSS attacks.

## Execute JavaScript

  ```ejs
  <% products.forEach(...) %>
  ```

  No output.

  Only logic.

## Output Raw HTML

  ```ejs
  <%- html %>
  ```

  Dangerous unless trusted.

  Avoid when possible.

# Layouts

  Imagine having:

  ```html
  <header>...</header>
  <footer>...</footer>
  <nav>...</nav>
  ```

  copied into 30 pages.

  That becomes a maintenance nightmare.

  Layouts solve this.

## Enable Layouts

  ```javascript
  const expressLayouts = require('express-ejs-layouts');

  app.use(expressLayouts);
  ```

## layout.ejs

  ```ejs
  <!doctype html>
  <html>
  <head>
    <title><%= title %></title>
  </head>
  <body>

    <%- include('partials/header') %>

    <main>
      <%- body %>
    </main>

    <%- include('partials/footer') %>

  </body>
  </html>
  ```

# Partials

  Partials are reusable pieces of UI.

  **Header Section** 

  ```html
  <header>
    <h1>Products CMS</h1>
  </header>
  ```

  **Footer Section**

  ```html
  <footer>
    <p>Copyright 2026</p>
  </footer>
  ```

  Benefits:

  * Reusable
  * Easier maintenance
  * Consistent UI

  This follows the DRY principle:

  > Don't Repeat Yourself

# Building a Small Product List

  **Route**

  ```javascript
  const products = [
    {
      id: 1,
      name: 'Keyboard',
      price: 49.99
    },
    {
      id: 2,
      name: 'Mouse',
      price: 19.99
    }
  ];

  app.get('/', (req, res) => {
    res.render('index', {
      title: 'Products',
      products
    });
  });
  ```

  **View**

  ```ejs
  <h2>Products</h2>

  <ul>
    <% products.forEach(product => { %>

      <li>
        <strong><%= product.name %></strong>

        -

        $<%= product.price.toFixed(2) %>
      </li>

    <% }) %>
  </ul>
  ```

# Common Beginner Mistakes

  **1. Forgetting to Install Dependencies**

  ```bash
  npm install express ejs
  ```

  **2. Wrong Views Folder**

  ```javascript
  app.set('views', ...)
  ```

  must point to the correct directory.

  **3. Forgetting Middleware**

  ```javascript
  app.use(express.urlencoded({ extended: true }));
  ```

  Without it:

  ```javascript
  req.body
  ```

  will be empty.

  **4. CSS Not Loading**

  Ensure:

  ```javascript
  app.use(express.static('public'));
  ```

  exists.

  **5. Using `<%- %>` Everywhere**

  Never trust user input.

  Use:

  ```ejs
  <%= value %>
  ```

  unless you specifically need raw HTML.

# Key Takeaways

  Today you learned:

  * How the Request → Response cycle works
  * What Express is and why it exists
  * How routing works
  * What middleware does
  * How static files are served
  * How EJS templates work
  * How to pass data from JavaScript into HTML
  * How layouts and partials reduce duplication

# Assignment

  **Level 1**

  Create a page that displays:

  ```text
  Your Name
  Your Favourite Programming Language
  Your Years of Experience
  ```

  using EJS variables.

  **Level 2**

  Create an array of 5 products.

  Render them dynamically using a loop.

  **Level 3**

  Add a navigation bar partial.

  Include:

  * Home
  * Products
  * About

# Bonus Challenge

  Create:

  ```text
  GET /about
  ```

  Render an EJS page explaining:

  * What Express is
  * What EJS is
  * Why server-side rendering matters

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
