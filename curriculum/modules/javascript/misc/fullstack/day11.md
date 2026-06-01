---
title: "Full Stack Project - Day 11"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# Authentication & Login Systems

## Knowing Who the User Is

  > CRUD applications manage data.
  >
  > Real applications manage people.

  Up until now, anyone can:

  ```text 
  Create Products
  Edit Products
  Delete Products
  Upload Images
  ```

  This is convenient.

  It's also a complete security disaster.

  Today we introduce:

  ```text 
  Authentication
  ```

  the process of verifying who a user is.

  This is the beginning of turning our CMS into a multi-user application.

# Learning Objectives

  By the end of this lesson, students will be able to:

  * Understand authentication fundamentals
  * Understand sessions
  * Understand cookies
  * Build login forms
  * Hash passwords securely
  * Verify user credentials
  * Create authenticated sessions
  * Protect routes
  * Implement logout functionality
  * Understand common authentication vulnerabilities

# Part 1 — Authentication vs Authorization

  These terms are often confused.

  ---

  ## Authentication

  Answers:

  ```text 
  Who are you?
  ```

  Example:

  ```text 
  Email
  Password
  ```

  ---

  ## Authorization

  Answers:

  ```text 
  What are you allowed to do?
  ```

  Example:

  ```text 
  Admin
  Editor
  Viewer
  ```

  ---

  Diagram:

  ```mermaid 
  flowchart LR

  A[Login]

  A --> B[Authentication]

  B --> C[Authorization]
  ```

  Today focuses on:

  ```text 
  Authentication
  ```

  ---

# Part 2 — Why Passwords Must Never Be Stored Directly

  Bad:

  ```sql 
  email

  password
  ```

  Stored:

  ```text 
  admin@example.com

  supersecret123
  ```

  ---

  Database leak:

  ```text 
  All passwords exposed
  ```

  ---

  Very bad.

  ---

  # Password Hashing

  Instead:

  ```text 
  supersecret123
  ```

  becomes:

  ```text 
  $2b$10$...
  ```

  ---

  This process is called:

  ```text 
  Hashing
  ```

  ---

  Important:

  ```text 
  Hashes are one-way
  ```

  You can verify them.

  You cannot reverse them.

  ---

# Part 3 — Introducing bcrypt

  Most Express applications use:

  bcrypt

  Install:

  ```bash 
  npm install bcrypt
  ```

  ---

  Import:

  ```javascript 
  const bcrypt =
      require('bcrypt');
  ```

  ---

  Hash password:

  ```javascript 
  const hash =
      await bcrypt.hash(
          password,
          10
      );
  ```

  ---

  Example result:

  ```text 
  $2b$10$...
  ```

  ---

  Store:

  ```text 
  Hash
  ```

  not:

  ```text 
  Password
  ```

  ---

# Part 4 — Creating a Users Table

  Schema:

  ```sql 
  CREATE TABLE users (

      id INTEGER PRIMARY KEY,

      email TEXT UNIQUE,

      password_hash TEXT

  );
  ```

  ---

  Example:

  ```text 
  admin@example.com

  $2b$10$...
  ```

  ---

  No plaintext passwords.

  Ever.

  ---

# Part 5 — Creating the First User

  Example:

  ```javascript 
  const hash =
      await bcrypt.hash(
          'secret123',
          10
      );
  ```

  ---

  Insert:

  ```sql 
  INSERT INTO users (

      email,
      password_hash

  )
  VALUES (?, ?)
  ```

  ---

  Store:

  ```text 
  admin@example.com

  hashed password
  ```

  ---

# Part 6 — Building the Login Form

  View:

  ```html 
  <h2>

  Login

  </h2>

  <form
      method="post"
  >

      <input
          type="email"
          name="email"
      >

      <input
          type="password"
          name="password"
      >

      <button>

          Login

      </button>

  </form>
  ```

  ---

  Simple.

  Professional.

  Familiar.

  ---

# Part 7 — Verifying Credentials

  Route:

  ```javascript 
  router.post(
      '/login',
      async (
          req,
          res
      ) => {

          const {
              email,
              password
          } = req.body;

      }
  );
  ```

  ---

  Lookup user:

  ```javascript 
  const user =
      userRepository
          .findByEmail(
              email
          );
  ```

  ---

  Verify password:

  ```javascript 
  const valid =
      await bcrypt.compare(
          password,
          user.password_hash
      );
  ```

  ---

  If:

  ```javascript 
  valid === true
  ```

  Login succeeds.

  ---

  Otherwise:

  ```text 
  Invalid credentials
  ```

  ---

# Part 8 — Sessions

  After login:

  ```text 
  How does the server remember the user?
  ```

  Good question.

  ---

  Answer:

  ```text 
  Sessions
  ```

  ---

  Without sessions:

  ```text 
  Login
  Refresh
  Logged Out
  ```

  ---

  Not ideal.

  ---

# Part 9 — Introducing express-session

  Install:

  express-session

  ```bash 
  npm install express-session
  ```

  ---

  Configure:

  ```javascript 
  const session =
      require(
          'express-session'
      );

  app.use(

      session({

          secret:
              process.env
                  .SESSION_SECRET,

          resave: false,

          saveUninitialized:
              false

      })

  );
  ```

  ---

  Now:

  ```javascript 
  req.session
  ```

  exists.

  ---

# Part 10 — Creating a Session

  Successful login:

  ```javascript 
  req.session.userId =
      user.id;
  ```

  ---

  Example:

  ```javascript 
  req.session.userId = 1;
  ```

  ---

  Server remembers:

  ```text 
  User #1
  ```

  between requests.

  ---

# Part 11 — Cookies

  Sessions require cookies.

  ---

  Browser receives:

  ```text 
  session-id
  ```

  ---

  Future requests:

  ```text 
  session-id
  ```

  returned automatically.

  ---

  Diagram:

  ```mermaid 
  flowchart LR

  A[Browser]

  B[Cookie]

  C[Server Session]

  A --> B
  B --> C
  C --> B
  B --> A
  ```

  ---

  The browser stores:

  ```text 
  Session Identifier
  ```

  not user data.

  ---

# Part 12 — Protecting Routes

  Current:

  ```text 
  /products/create
  ```

  accessible by everyone.

  ---

  Middleware:

  ```javascript 
  function requireAuth(
      req,
      res,
      next
  ) {

      if(
          !req.session.userId
      ) {

          return res.redirect(
              '/login'
          );

      }

      next();

  }
  ```

  ---

  Usage:

  ```javascript 
  router.get(

      '/create',

      requireAuth,

      (
          req,
          res
      ) => {

          ...
      }

  );
  ```

  ---

  Now login is required.

  ---

# Part 13 — Logout

  Route:

  ```javascript 
  router.post(
      '/logout',
      (
          req,
          res
      ) => {

          req.session.destroy(
              () => {

                  res.redirect(
                      '/login'
                  );

              }
          );

      }
  );
  ```

  ---

  Session removed.

  User logged out.

  Simple.

  ---

# Part 14 — Displaying User Information

  Middleware:

  ```javascript 
  app.use(
      (
          req,
          res,
          next
      ) => {

          res.locals.userId =
              req.session.userId;

          next();

      }
  );
  ```

  ---

  View:

  ```html 
  <% if(userId) { %>

  Logged In

  <% } %>
  ```

  ---

  Navigation can now adapt.

  ---

# Part 15 — Common Authentication Attacks

  ## Plaintext Password Storage

  Never.

  ---

  ## Weak Passwords

  Bad:

  ```text 
  123456
  ```

  ---

  Bad:

  ```text 
  password
  ```

  ---

  Bad:

  ```text 
  qwerty
  ```

  ---

  ## Session Hijacking

  Protect with:

  ```javascript 
  httpOnly: true
  ```

  cookies.

  ---

  ## Brute Force Attacks

  Eventually implement:

  ```text 
  Rate Limiting
  ```

  ---

  ## User Enumeration

  Bad:

  ```text 
  Email not found
  ```

  versus:

  ```text 
  Wrong password
  ```

  ---

  Better:

  ```text 
  Invalid credentials
  ```

  for both.

  ---

# Part 16 — Why Authentication Matters

  Without authentication:

  ```text 
  Anyone edits everything
  ```

  ---

  With authentication:

  ```text 
  Users identified
  ```

  ---

  Soon we'll add:

  ```text 
  Roles

  Permissions

  Ownership
  ```

  which build on today's foundation.

  ---

# Common Beginner Mistakes

  ## Storing Passwords Directly

  Never.

  Use bcrypt.

  ---

  ## Creating Your Own Hashing Algorithm

  Don't.

  Use established libraries.

  ---

  ## Trusting Cookies

  Always verify sessions server-side.

  ---

  ## Forgetting Logout

  Sessions should be removable.

  ---

  ## Protecting Only Frontend Pages

  Backend routes must also enforce authentication.

  ---

# Bonus Challenge

  Create:

  ```text 
  /register
  ```

  page.

  ---

  Workflow:

  ```text 
  Email

  Password

  Confirm Password
  ```

  ---

  Hash password.

  Create account.

  Automatically log user in.

  Redirect:

  ```text 
  /products
  ```

---

Congratulations.

You've just built the foundation of nearly every web application that exists.

---

# Key Takeaways

  Today you learned:

  * Authentication
  * Password hashing
  * bcrypt
  * Sessions
  * Cookies
  * Login workflows
  * Logout workflows
  * Route protection
  * Authentication middleware
  * Security fundamentals

  This is a major milestone. The CMS is no longer just a data management tool—it now understands users. That opens the door to permissions, roles, ownership, administration panels, and multi-user workflows that are common in professional web applications.

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
