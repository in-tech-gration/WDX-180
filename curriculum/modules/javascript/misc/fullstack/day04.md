---
title: "Full Stack Project - Day 04"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# Single Product Pages & Database-Driven Routing

## Moving Beyond Lists

  > Listing data is useful.
  >
  > Viewing a single piece of data is essential.

  Yesterday, we built:

  ```text
  GET /products
  ```

  which displayed all products from SQLite.

  Today, we're building:

  ```text
  GET /products/:id
  ```

  This allows users to click on a specific product and view its details.

  This is the first time we'll build truly dynamic routes.

# Learning Objectives

  By the end of this lesson, students will be able to:

  * Understand route parameters
  * Retrieve URL parameters using Express
  * Query a database for a single record
  * Handle missing records gracefully
  * Build dynamic detail pages
  * Create reusable database queries
  * Understand 404 responses
  * Create database-driven navigation

# What We Are Building

  Current:

  ```mermaid
  flowchart TD

  A[Products List]

  A --> B[Keyboard]
  A --> C[Mouse]
  A --> D[Monitor]
  ```

  After today:

  ```mermaid
  flowchart TD

  A[Products List]

  A --> B['/products/1']
  A --> C['/products/2']
  A --> D['/products/3']

  B --> E[Product Details]
  C --> E
  D --> E
  ```

  Users can now navigate from the list page into individual product pages.

# Part 1 — Understanding Route Parameters

  Consider this URL:

  ```text
  /products/42
  ```

  The value:

  ```text
  42
  ```

  changes depending on the product.

  This is called a route parameter.

  **Route Definition**

  ```javascript
  router.get('/products/:id', handler);
  ```

  The colon indicates:

  ```text
  :id
  ```

  is a variable.

  Examples:

  ```text
  /products/1
  /products/2
  /products/3
  /products/999
  ```

  All match the same route.

  **Accessing Parameters**

  Express places route parameters inside:

  ```javascript
  req.params
  ```

  Example:

  ```javascript
  router.get('/:id', (req, res) => {

      console.log(req.params);

  });
  ```

  For:

  ```text
  /products/42
  ```

  Output:

  ```javascript
  {
      id: '42'
  }
  ```

# Part 2 — Building a Product Details Route

  Create:

  ```javascript
  router.get('/:id', (req, res) => {

      const id = req.params.id;

      res.send(`Product ID: ${id}`);

  });
  ```

  Test:

  ```text
  /products/1
  ```

  Output:

  ```text
  Product ID: 1
  ```

  Test:

  ```text
  /products/999
  ```

  Output:

  ```text
  Product ID: 999
  ```

  The route is now dynamic.

# Part 3 — Querying a Single Product

  Our goal:

  ```sql
  SELECT *
  FROM products
  WHERE id = ?
  ```

  **Why Use Placeholders?**

  ❌ Bad:

  ```javascript
  const query = `
  SELECT *
  FROM products
  WHERE id = ${req.params.id}
  `;
  ```

  This opens the door to SQL injection.

  ✅ Good:

  ```javascript
  const stmt = db.prepare(`
  SELECT *
  FROM products
  WHERE id = ?
  `);
  ```

  The database safely handles the value.

  **Product Lookup**

  ```javascript
  router.get('/:id', (req, res) => {

      const id = req.params.id;

      const stmt = db.prepare(`
          SELECT *
          FROM products
          WHERE id = ?
      `);

      const product = stmt.get(id);

      res.json(product);

  });
  ```

  Example response:

  ```json
  {
    "id": 1,
    "name": "Mechanical Keyboard",
    "description": "RGB Gaming Keyboard",
    "price": 89.99
  }
  ```

  Success.

  We are now reading individual records.

# Part 4 — Rendering a Product View

  Returning JSON is useful.

  Returning HTML is better for our CMS.

  **Route**

  ```javascript
  router.get('/:id', (req, res) => {

      const stmt = db.prepare(`
          SELECT *
          FROM products
          WHERE id = ?
      `);

      const product = stmt.get(req.params.id);

      res.render('products/single', {
          title: product.name,
          product
      });

  });
  ```

  **View**

  ```html
  <h2><%= product.name %></h2>

  <p>
      <strong>Price:</strong>
      $<%= product.price %>
  </p>

  <p>
      <%= product.description %>
  </p>
  ```

  Result:

  ```text
  Mechanical Keyboard

  Price: $89.99

  RGB Gaming Keyboard
  ```

# Part 5 — Handling Missing Products

  What happens if someone visits:

  ```text
  /products/999999
  ```

  ?

  The database returns:

  ```javascript
  undefined
  ```

  And Express crashes when we try:

  ```javascript
  product.name
  ```

  Oops.

  **Proper Error Handling**

  ```javascript
  router.get('/:id', (req, res) => {

      const stmt = db.prepare(`
          SELECT *
          FROM products
          WHERE id = ?
      `);

      const product = stmt.get(req.params.id);

      if (!product) {

          return res.status(404).render(
              '404',
              {
                  title: 'Not Found'
              }
          );

      }

      res.render('products/single', {
          title: product.name,
          product
      });

  });
  ```

  **Why Error Handling Matters**

  Users will:

  * Type invalid URLs
  * Use outdated bookmarks
  * Click broken links

  Your application should survive all three.

  And preferably survive your future self as well.

# Part 6 — Creating a 404 Page

  Create:

  ```text
  views/404.ejs
  ```

  ```html
  <h1>404</h1>

  <p>
      Product not found.
  </p>

  <a href="/products">
      Return to Products
  </a>
  ```

# Understanding HTTP Status Codes

  When everything works:

  ```javascript
  res.status(200)
  ```

  When something doesn't exist:

  ```javascript
  res.status(404)
  ```

  When the server crashes:

  ```javascript
  res.status(500)
  ```

  Common Status Codes

  | Code | Meaning      |
  | ---- | ------------ |
  | 200  | Success      |
  | 301  | Redirect     |
  | 400  | Bad Request  |
  | 401  | Unauthorized |
  | 403  | Forbidden    |
  | 404  | Not Found    |
  | 500  | Server Error |

  Check all HTTP Status codes [here](https://in-tech-gration.github.io/WDX-180/pages/httpstatuses/){:target="_blank"}

# Part 7 — Creating Product Links

  Our list page currently shows products.

  Let's make them clickable.

  **Before**

  ```html
  <td>
      <%= product.name %>
  </td>
  ```

  **After**

  ```html
  <td>
    <a href="/products/<%= product.id %>">
        <%= product.name %>
    </a>
  </td>
  ```

  Generated HTML:

  ```html
  <a href="/products/1">
      Mechanical Keyboard
  </a>
  ```

  ---

  Now users can navigate:

  ```text
  Products List
      ↓
  Single Product
  ```

# Part 8 — Input Validation

  Route parameters come from users.

  Never assume they're valid.

  Bad:

  ```text
  /products/banana
  ```

  Bad:

  ```text
  /products/abc123
  ```

  Bad:

  ```text
  /products/$$$$$
  ```

  **Validation Example**

  ```javascript
  router.get('/:id', (req, res) => {

      const id = Number(req.params.id);

      if (!Number.isInteger(id)) {

          return res.status(400).send(
              'Invalid Product ID'
          );

      }

  });
  ```

  **Why Validate Early?**

  Bad data should be rejected immediately.

  Benefits:

  * Faster execution
  * Fewer bugs
  * Better security
  * Easier debugging

# Part 9 — Extracting Database Logic

  Current:

  ```javascript
  router.get('/:id', () => {

      const stmt = db.prepare(...);

  });
  ```

  Eventually:

  ```javascript
  router.get(...)
  router.post(...)
  router.put(...)
  router.delete(...)
  ```

  Each route repeats database logic.

  **Better Approach**

  Create:

  ```text
  db/productRepository.js
  ```

  Example:

  ```javascript
  const db = require('./db');

  function findById(id) {

      const stmt = db.prepare(`
          SELECT *
          FROM products
          WHERE id = ?
      `);

      return stmt.get(id);

  }

  module.exports = {
      findById
  };
  ```

  Route:

  ```javascript
  const productRepository =
      require('../db/productRepository');

  router.get('/:id', (req, res) => {

      const product =
          productRepository.findById(
              req.params.id
          );

  });
  ```

  Benefits:

  * Cleaner routes
  * Reusable queries
  * Easier testing
  * Easier maintenance

# Part 10 — Repository Pattern (Introduction)

  Many enterprise applications use:

  ```text
  Route
      ↓
  Controller
      ↓
  Repository
      ↓
  Database
  ```

  Diagram:

  ```mermaid
  flowchart LR

  A[Route]

  B[Repository]

  C[(SQLite)]

  A --> B
  B --> C
  C --> B
  B --> A
  ```

  We won't fully implement this pattern yet.

  But we're laying the foundation.

  Here's what you need to know about the `Repository` Pattern:

  * It's an abstraction layer between routes and the database.
  * It encapsulates all database access logic.
  * It provides a clean API for routes to interact with data.
  * It promotes separation of concerns and code organization.
  * It makes testing easier by allowing you to mock the repository.

  Here's a scenario that does not use the Repository pattern:

  ```javascript
  router.get('/:id', (req, res) => {
        const stmt = db.prepare(`
            SELECT *
            FROM products
            WHERE id = ?
        `);
    
        const product = stmt.get(req.params.id);
    
        res.render('products/single', {
            title: product.name,
            product
        });
    
    });
  ```

  In this example, the route directly interacts with the database, which can lead to code duplication and makes it harder to maintain.

  Here's how we can refactor it using the Repository pattern:

  ```javascript
  router.get("/:id", (req, res) => {
        const product = productRepository.findById(req.params.id);
    
        if (!product) {
            return res.status(404).render('404', { title: 'Not Found' });
        }
    
        res.render('products/single', {
            title: product.name,
            product
        });
    });
  ```

  In this refactored version, the route calls a method from the `productRepository` to retrieve the product data. This keeps the route clean and focused on handling HTTP requests and responses, while the repository handles all database interactions.

  It's a good idea to invest a few minutes to read more about the importance of the Repository Pattern in [this blog post](https://makingloops.com/why-should-you-use-the-repository-pattern/){:target="_blank"}.

# Part 11 — Building Better URLs

  Compare:

  Bad:

  ```text
  /products?id=12
  ```

  Better:

  ```text
  /products/12
  ```

  This is called a RESTful URL.

  Benefits:

  * Cleaner
  * Easier to read
  * Easier to share
  * Better SEO

# Common Beginner Mistakes

  **Forgetting to Validate IDs**

  Bad:

  ```javascript
  stmt.get(req.params.id);
  ```

  without checking validity.

  **Forgetting 404 Handling**

  Bad:

  ```javascript
  product.name
  ```

  when product doesn't exist.

  **Using String Concatenation**

  Bad:

  ```javascript
  WHERE id = ${id}
  ```

  Always use:

  ```javascript
  WHERE id = ?
  ```

  **Returning Generic Errors**

  Bad:

  ```javascript
  Something went wrong
  ```

  Good:

  ```javascript
  Product not found
  ```

# Bonus Challenge

  Add navigation links:

  ```html
  Previous Product

  Next Product
  ```

  Example:

  ```text
  /products/10
  ```

  shows:

  ```text
  ← Product 9

  → Product 11
  ```

  Hint:

  ```sql
  SELECT *
  FROM products
  WHERE id < ?

  ORDER BY id DESC
  LIMIT 1
  ```

  and

  ```sql
  SELECT *
  FROM products
  WHERE id > ?

  ORDER BY id ASC
  LIMIT 1
  ```

# Key Takeaways

  Today you learned:

  * Route parameters
  * Dynamic URLs
  * Reading a single record
  * Prepared SQL statements
  * Input validation
  * 404 handling
  * Repository pattern fundamentals
  * Database-driven navigation

  For the first time, users can move from a collection of records to a specific record. This is the same fundamental pattern used by Amazon product pages, GitHub repositories, YouTube videos, and countless other applications.

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
