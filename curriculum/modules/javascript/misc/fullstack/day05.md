---
title: "Full Stack Project - Day 05"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# Creating Products (CREATE)

## The First Half of CRUD

  > Reading data is useful.
  >
  > Creating data is where applications become interactive.

  Up until now, every product in our system was inserted manually through:

  ```sql
  INSERT INTO products (...)
  ```

  Today we allow users to create products from the browser.

  This is our first complete end-to-end workflow:

  ```mermaid
  flowchart LR

  A[Browser Form]
  B[Express Route]
  C[Validation]
  D[(SQLite)]

  A --> B
  B --> C
  C --> D
  D --> B
  B --> A
  ```

  This pattern will become the foundation for nearly everything we build.

# Learning Objectives

  By the end of this lesson, students will be able to:

  * Build HTML forms using EJS
  * Understand GET vs POST
  * Process form submissions
  * Parse form data using Express middleware
  * Validate user input
  * Insert records into SQLite
  * Handle validation errors
  * Redirect users after successful actions
  * Understand the POST-Redirect-GET pattern
  * Build the Create portion of CRUD

# Part 1 — Understanding Forms

  Most web applications revolve around forms.

  Examples:

  | Application | Form Purpose      |
  | ----------- | ----------------- |
  | Amazon      | Add Product       |
  | GitHub      | Create Repository |
  | Facebook    | Create Post       |
  | YouTube     | Upload Video      |
  | CMS         | Create Product    |

  A form allows users to send data to a server.

  ---

  **Anatomy of a Form**

  ```html
  <form action="/products/create" method="post">

      <input
          type="text"
          name="name"
      >

      <button type="submit">
          Save
      </button>

  </form>
  ```

  **Important Attributes**

  **action**

  Defines where data is sent.

  ```html
  action="/products/create"
  ```

  **method**

  Defines how data is sent.

  ```html
  method="post"
  ```

  **GET vs POST**

  **GET**

  Used for:

  ```text
  Reading data
  ```

  Example:

  ```http
  GET /products
  ```

  **POST**

  Used for:

  ```text
  Creating data
  ```

  Example:

  ```http
  POST /products/create
  ```

  Rule of thumb:

  | Action | Method        |
  | ------ | ------------- |
  | Read   | GET           |
  | Create | POST          |
  | Update | POST / PUT    |
  | Delete | POST / DELETE |

# Part 2 — Showing the Form

  Route:

  ```javascript
  router.get('/create', (req, res) => {

      res.render('products/create', {
          title: 'Create Product'
      });

  });
  ```

  View:

  ```html
  <h2>Create Product</h2>

  <form
      action="/products/create"
      method="post"
  >

      <div>

          <label>Name</label>

          <input
              type="text"
              name="name"
          >

      </div>

      <div>

          <label>Description</label>

          <textarea
              name="description"
          ></textarea>

      </div>

      <div>

          <label>Price</label>

          <input
              type="number"
              step="0.01"
              name="price"
          >

      </div>

      <button type="submit">
          Save Product
      </button>

  </form>
  ```

# Part 3 — Understanding req.body

  When a form is submitted:

  ```html
  <input name="name">
  ```

  becomes:

  ```javascript
  req.body.name
  ```

  Example:

  ```html
  <input
      name="name"
      value="Keyboard"
  >
  ```

  Results in:

  ```javascript
  req.body
  ```

  containing:

  ```javascript
  {
      name: 'Keyboard'
  }
  ```

  **Body Parsing Middleware**

  Required:

  `index.js`:

  ```javascript
  app.use(
      express.urlencoded({
          extended: true
      })
  );
  ```

  Without it:

  ```javascript
  req.body
  ```

  will be:

  ```javascript
  undefined
  ```

  Which leads to approximately seventeen minutes of confusion and a Stack Overflow search.

# Part 4 — Handling Form Submission

  Route:

  ```javascript
  router.post('/create', (req, res) => {

      console.log(req.body);

      res.send('Form received');

  });
  ```

  Example Submission

  ```javascript
  {
      name: 'Keyboard',
      description: 'RGB Keyboard',
      price: '89.99'
  }
  ```

  Notice:

  ```javascript
  price
  ```

  is a string.

  Everything from forms arrives as text.

  Always.

  Even numbers.

  Even dates.

  Even your hopes and dreams.

# Part 5 — Inserting into SQLite

  SQL:

  ```sql
  INSERT INTO products (
      name,
      description,
      price
  )
  VALUES (?, ?, ?)
  ```

  Route:

  ```javascript
  router.post('/create', (req, res) => {

      const {
          name,
          description,
          price
      } = req.body;

      const stmt = db.prepare(`
          INSERT INTO products (
              name,
              description,
              price
          )
          VALUES (?, ?, ?)
      `);

      stmt.run(
          name,
          description,
          price
      );

      res.redirect('/products');

  });
  ```

  **Why Redirect?**

  Bad:

  ```text
  Submit Form
  Refresh Browser
  Submit Again
  Duplicate Record
  ```

  Good:

  ```text
  Submit Form
  Redirect
  Refresh Safely
  ```

# POST-Redirect-GET Pattern

  ```mermaid
  flowchart LR

  A[Form]
  B[POST]
  C[(Database)]
  D[Redirect]
  E[GET]

  A --> B
  B --> C
  C --> D
  D --> E
  ```

  Most professional applications use this pattern.

# Part 6 — Input Validation

  Never trust user input.

  Never.

  Not even your own.

  Especially your own.

  Bad Submission:

  ```javascript
  {
      name: '',
      price: ''
  }
  ```

  Bad Submission:

  ```javascript
  {
      name: 'Keyboard',
      price: '-500'
  }
  ```

  Validation:

  ```javascript
  if (!name) {

      return res.render(
          'products/create',
          {
              title: 'Create Product',
              error: 'Name is required.'
          }
      );

  }
  ```

  Price Validation

  ```javascript
  const numericPrice = Number(price);

  if ( Number.isNaN(numericPrice)) {

      return res.render(
          'products/create',
          {
              title: 'Create Product',
              error: 'Price must be numeric.'
          }
      );

  }
  ```

  Positive Price Validation

  ```javascript
  if (numericPrice <= 0) {

      return res.render(
          'products/create',
          {
              title: 'Create Product',
              error:
                  'Price must be greater than zero.'
          }
      );

  }
  ```

# Part 7 — Displaying Validation Errors

  Route:

  ```javascript
  res.render(
      'products/create',
      {
          title: 'Create Product',
          error: 'Name is required.'
      }
  );
  ```

  View:

  ```html
  <% if ( typeof error !== "undefined" ) { %>

  <div class="error">

      <%= error %>

  </div>

  <% } %>
  ```

  Result:

  ```text
  Name is required.
  ```

  appears above the form.

# Part 8 — Preserving Form Data

  A common beginner mistake:

  User submits:

  ```text
  Name
  Description
  Price
  ```

  Validation fails.

  Everything disappears.

  User cries.

  Better approach:

  ```javascript
  res.render(
      'products/create',
      {
          title: 'Create Product',
          error: 'Invalid data',
          product: req.body
      }
  );
  ```

  View:

  ```html
  <input name="name" value="<%= product?.name || '' %>">
  ```

  Textarea:

  ```html
  <textarea name="description">
    <%= product?.description || '' %>
  </textarea>
  ```

  Now the form remains populated.

  Professional UX.

# Part 9 — Creating a Repository Function

  Instead of:

  ```javascript
  router.post(...)
  ```

  containing SQL,

  move SQL into:

  ```text
  db/productRepository.js
  ```

  Example:

  ```javascript
  function create(
      name,
      description,
      price
  ) {

      const stmt = db.prepare(`
          INSERT INTO products (
              name,
              description,
              price
          )
          VALUES (?, ?, ?)
      `);

      return stmt.run(
          name,
          description,
          price
      );

  }
  ```

  Route:

  ```javascript
  productRepository.create(
      name,
      description,
      numericPrice
  );
  ```

  Cleaner.

  More maintainable.

  Easier to test.

# Part 10 — User Experience Improvements

  After creation:

  ```text
  Product saved successfully
  ```

  is helpful.

  Simple example:

  `routes/products.js`:

  ```js
  // POST /products/create
  res.redirect('/products?success=1');
  ```  

  ```js
  // GET /products
  const success = req.query.success;
  res.render('products/list', {
    success,
    // ...
  });
  ```

  Display:

  ```html
  <% if ( success ) { %>

  <div style="background: limegreen; color: white; display: inline-block">
      Product created successfully.
  </div>

  <% } %>
  ```

  Later we'll introduce:

  ```text
  Flash Messages
  ```

  for this.

# Part 11 — Understanding SQL INSERT Results

  Example:

  ```javascript
  const result = stmt.run(...);
  ```

  Result:

  ```javascript
  {
      changes: 1,
      lastInsertRowid: 11
  }
  ```

  Useful when redirecting:

  ```javascript
  res.redirect(`/products/${result.lastInsertRowid}`);
  ```

# Common Beginner Mistakes

  **Missing Middleware**

  ```javascript
  req.body
  ```

  undefined.

  **Forgetting Validation**

  Never trust:

  ```javascript
  req.body
  ```

  directly.

  **Storing Strings as Numbers**

  Always convert:

  ```javascript
  Number(price)
  ```

  **Refreshing POST Pages**

  Use:

  ```javascript
  res.redirect(...)
  ```

  **Mixing Validation and SQL**

  Separate concerns whenever possible.

# Bonus Challenge

  After creating a product:

  ```javascript
  res.redirect(`/products/${id}`);
  ```

  where:

  ```javascript
  id
  ```

  is the newly created record.

  Users should immediately land on the product page they just created.

# Key Takeaways

Today you learned:

* HTML forms
* GET vs POST
* Request bodies
* Form processing
* Validation
* SQL INSERT
* Redirects
* POST-Redirect-GET
* Repository pattern basics
* UX improvements for forms

This is the first truly interactive feature in the CMS. Users can now create data through the UI, which means the application has crossed an important threshold: it is no longer a static viewer of information—it is a system for managing information.

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
