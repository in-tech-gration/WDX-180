---
title: "Full Stack Project - Day 14"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# Testing Express Applications

## Trust, But Verify

  > Every developer believes their code works.
  >
  > Testing is how we discover whether reality agrees.

  Up until now we've built:

  ```text 
  CRUD

  Authentication

  Authorization

  Validation

  File Uploads
  ```

  Everything appears to work.

  Then a user discovers:

  ```text 
  Deleting a product deletes the wrong product.
  ```

  Or:

  ```text 
  Editors can access admin routes.
  ```

  Or:

  ```text 
  A validation rule accidentally disappeared.
  ```

  Today's lesson is about building confidence in software.

  Not confidence because:

  ```text 
  "It worked on my machine."
  ```

  Confidence because:

  ```text 
  Tests proved it.
  ```

# Learning Objectives

  By the end of this lesson, students will be able to:

  * Understand software testing fundamentals
  * Write unit tests
  * Write integration tests
  * Test Express routes
  * Test validation logic
  * Test authentication flows
  * Mock dependencies
  * Understand test isolation
  * Build reliable applications
  * Develop a testing mindset

# Part 1 — What Is Testing?

  A test is simply code that verifies other code.

  Example:

  ```javascript 
  // Call the function we want to test ->  Check the result against our expectation:
  expect(add(2, 3)).toBe(5);
  ```

  Question:

  ```text 
  Does add() work?
  ```

  Test answers:

  ```text 
  Yes
  ```

  or

  ```text 
  No
  ```

  without human involvement.

# Part 2 — Why Testing Matters

  Without tests:

  ```text 
  Change Code

  Hope Nothing Breaks
  ```

  With tests:

  ```text 
  Change Code

  Run Tests

  Know What Broke
  ```

  This is a **huge** difference.

# Part 3 — Types of Tests

  Three major categories:

  **Unit Tests**

  Test one thing.

  Example:

  ```javascript 
  validateProduct()
  ```

  Our unit tests should test whether the `validateProduct` is producing the expected output given specific input and behaves appropriately when malformed input is passed into it.

  **Integration Tests**

  Test multiple components together.

  Example:

  ```text 
  Route

  ↓

  Database

  ↓

  Response
  ```

  **End-to-End Tests**

  Test the entire application.

  Example:

  ```text 
  Browser

  ↓

  Server

  ↓

  Database
  ```

  For this module we'll focus on:

  ```text 
  Unit

  Integration
  ```

# Part 4 — Installing a Test Framework

  Popular choices:

  * Vitest
  * Jest

  We'll use Vitest.

  Install:

  ```bash 
  npm install -D vitest
  ```

  package.json:

  ```json 
  {
    "scripts": {
      "test": "vitest"
    }
  }
  ```

  Run:

  ```bash 
  npm test
  ```

# Part 5 — Your First Test

  Function:

  ```javascript 
  // utils.js
  function add(a, b) {
      return a + b;
  }
  module.exports = { add }
  ```

  Test:

  ```javascript 
  // utils.test.js
  import { test, expect } from 'vitest';
  import { add } from "./utils";

  test( 'adds numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  ```

  Now run the tests via `npm run test`

  Result:

  ```text 
  PASS
  ```

  Or:

  ```text 
  FAIL
  ```

  No ambiguity.

  ALWAYS break the tests, to test your testing logic:

  ```js
  function add(a, b) {
      return a - b; // Change + to -
  }  
  ```

  Re-run the tests and make sure they break.

# Part 6 — Testing Validation

  Validator:

  ```javascript 
  validateProduct(data)
  ```

  Test:

  ```javascript 
  test('requires name', () => {
          const errors = validateProduct({
                  name: '',
                  price: 10
              });
          expect(errors.length).toBe(1);
          expect(errors[0]).toBe('Name is required');
      }
  );
  ```

  This is a perfect unit test.

  No database.

  No Express.

  No browser.

  Just:

  ```text 
  Input

  ↓

  Output
  ```

  Now challenge yourself by adding more tests on the `validateProducts` function.

# Part 7 — Testing Authorization

  Function:

  ```javascript 
  canDeleteProduct(user)
  ```

  Test:

  ```javascript 
  test('admin can delete', () => {
    expect(canDeleteProduct({role: 'admin' })).toBe(true);
  });
  ```

  Test:

  ```javascript 
  test('viewer cannot delete', () => {
    expect(canDeleteProduct({ role: 'viewer' })).toBe(false);
  });
  ```

  Permissions are excellent candidates for unit tests.

# Part 8 — Integration Testing Express

  Unit tests are great.

  But eventually we need:

  ```text 
  Real Routes
  ```

  Example:

  ```http 
  GET /products
  ```

  Did it return:

  ```http 
  200 OK
  ```

  ?

  Let's test it.

# Part 9 — Introducing SuperTest

  Install:

  SuperTest

  ```bash 
  npm install -D supertest
  ```

  Example:

  ```js
  // index.js
  // Export the app object so that we can import and use it in our integration tests:
  const express = require('express');
  const app = express();

  // ...rest of the code

  module.exports = { app }
  ```

  ```javascript 
  // http.test.js
  import { test, expect } from 'vitest';
  import request from 'supertest';
  import { app } from "./index";

  // Test route:
  const response = await request(app).get( '/products');

  test("Response status", ()=>{
    expect(response.status).toBe(200);
  })
  ```

  Test using `npm run test`.

  Amazing.

  No browser required.

# Part 10 — Testing Protected Routes

  Route:

  ```javascript 
  GET /admin
  ```

  requires login.

  Test:

  ```javascript 
  test("Protected Routes: Admin", async ()=>{
    const response = await request(app).get('/admin');
    // Check:
    expect(response.status).toBe(302);
  });
  ```

  Meaning:

  ```text 
  Redirect to login
  ```

  Now we know protection works.

# Part 11 — Testing Error Cases

  Most beginners test:

  ```text 
  Happy Path
  ```

  only.

  Professionals test:

  ```text 
  Failure Paths
  ```

  first.

  Example:

  ```javascript 
  GET /products/99999
  ```

  Expected:

  ```javascript 
  expect(response.status).toBe(404);
  ```

  Important.

  Broken systems usually fail around edge cases.

# Part 12 — Mocking

  Sometimes dependencies are expensive.

  Example:

  ```text 
  Database

  API

  Filesystem
  ```

  Instead of:

  ```javascript 
  realDatabase
  ```

  use:

  ```javascript 
  fakeDatabase
  ```

  Example:

  ```javascript 
  import sqlite from 'node:sqlite';
  import path from 'node:path';

  const testDbPath = path.join(process.cwd(), 'test.sqlite');

  const testDb = new sqlite.DatabaseSync(testDbPath);

  testDb.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY,
      name TEXT
    );

    DELETE FROM products;

    INSERT INTO products (name)
    VALUES ('Test Product');
  `);

  vi.mock('../db.js', () => ({
    default: testDb,
  }));
  ```

  The `vi.mock` function replaces the real database with our test database during testing.

  The syntax basically says: "When the code imports `../db.js`, give it `testDb` instead of the real database." thereby bypassing the real database and allowing us to run tests without affecting real data. We are **mocking** (i.e. **faking**) the database dependency's `default` export.

  Now tests run:

  ```text 
  Fast

  Predictably
  ```

  Without touching real data.

  Read more about [mocking](https://vitest.dev/guide/mocking){:target="_blank"}.

# Part 13 — Test Isolation

  Bad:

  ```javascript 
  Test A

  creates data

  Test B

  depends on it
  ```

  Order matters.

  Chaos follows.

  Good:

  ```text 
  Each test independent
  ```

  Every test should be able to run:

  ```text 
  Alone

  In Any Order
  ```

  Critical principle.

# Part 14 — Coverage

  Question:

  ```text 
  How much code is tested?
  ```

  Answer:

  ```text 
  Coverage
  ```

  Install: 

  ```bash
  npm i -D @vitest/coverage-v8
  ```

  Run:

  ```bash 
  npx vitest --coverage
  ```

  This will produce a report showing how much of your code is covered by tests.

  Example:

  ```text 
  Validation

  95%
  ```

  ```text 
  Permissions

  100%
  ```

  Coverage helps.

  But:

  ```text 
  100% coverage ≠ 100% correctness
  ```

  A terrible test still counts.

  Read more about [coverage](https://vitest.dev/guide/coverage.html){:target="_blank"}

# Part 15 — Testing Strategy

  Prioritize testing:

  ```text 
  Validation

  Authentication

  Authorization

  Business Logic
  ```

  Lower priority:

  ```text 
  Simple Templates

  Static Pages
  ```

  Rule:

  Test things that can cause expensive mistakes.

  Test things that change often.

  Deleting products:

  ```text 
  High Value
  ```

  Homepage title:

  ```text 
  Lower Value
  ```

# Part 16 — Continuous Integration

  Imagine:

  ```text 
  Developer pushes code
  ```

  Automatically:

  ```text 
  Run Tests
  ```

  If tests fail:

  ```text 
  Reject Deployment
  ```

  This is called:

  ```text 
  Continuous Integration
  ```

  or:

  ```text 
  CI
  ```

  Used everywhere.

  Examples:

  * CircleCI
  * GitHub Actions
  * GitLab CI/CD
  * Jenkins

# Common Beginner Mistakes

  **Testing Only Happy Paths**

  Always test failures.

  **Using Production Databases**

  Never.

  Use test databases.

  **Tests Depending on Order**

  Each test should be independent.

  **Massive Integration Tests**

  Keep tests focused.

  **Chasing Coverage Numbers**

  Quality matters more than percentages.

# Bonus Challenge

  Create a test suite for:

  ```text 
  Authentication
  ```

  including:

  ```text 
  Valid Login

  Invalid Login

  Logout

  Session Creation
  ```

  Goal:

  ```text 
  100% passing tests
  ```

  for:

  ```text 
  Authentication

  Authorization

  Validation
  ```

  These are the most security-sensitive parts of your CMS.

# Key Takeaways

  Today you learned:

  * Unit testing
  * Integration testing
  * Vitest
  * SuperTest
  * Test isolation
  * Mocking
  * Coverage
  * CI fundamentals
  * Testing strategy

  A professional application is not defined by how many features it has. **It is defined by how confidently those features can be changed without breaking existing behavior.** Testing is the mechanism that creates that confidence.

  At this stage, your CMS is no longer just functional and secure—it is becoming maintainable. That distinction becomes increasingly important as projects grow from hundreds of lines of code to tens of thousands.

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
