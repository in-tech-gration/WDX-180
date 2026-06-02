---
title: "Full Stack Project - Day 12"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# Authorization, Roles & Permissions

## Deciding What Users Are Allowed To Do

  > Authentication answers:
  >
  > "Who are you?"
  >
  > Authorization answers:
  >
  > "What can you do?"

  Yesterday we built:

  ```text 
  Login
  Logout
  Sessions
  ```

  Now every user can log in.

  That's progress.

  Unfortunately:

  ```text 
  Every logged-in user
  can still do everything.
  ```

  That's less ideal.

  Imagine:

  ```text 
  Intern
  ```

  accidentally deleting:

  ```text 
  Entire Product Catalog
  ```

  because they found the delete button. 🙀

  Today we'll build a permission system that prevents that.

# Learning Objectives

  By the end of this lesson, students will be able to:

  * Understand authorization
  * Implement user roles
  * Restrict route access
  * Build authorization middleware
  * Understand role hierarchies
  * Hide unauthorized UI elements
  * Prevent privilege escalation
  * Understand ownership-based permissions
  * Design scalable permission systems

# Part 1 — Authentication vs Authorization

  Yesterday:

  ```text 
  Are you logged in?
  ```

  ---

  Today:

  ```text 
  What are you allowed to do?
  ```

  ---

  Example:

  | User   | Login | Delete Products |
  | ------ | ----- | --------------- |
  | Admin  | Yes   | Yes             |
  | Editor | Yes   | No              |
  | Viewer | Yes   | No              |

  ---

  Authentication alone is insufficient.

  Authorization completes the picture.

# Part 2 — The Simplest Role System

  Add:

  ```sql 
  ALTER TABLE users

  ADD COLUMN role TEXT
  DEFAULT 'viewer';
  ```

  Update your `db/setup.js` script and re-initialize the Database in order to test the new authorization rules we are about to implement.

  Possible values:

  ```text 
  admin
  editor
  viewer
  ```

  Example:

  ```text 
  admin@example.com

  admin
  ```

  ```text 
  editor@example.com

  editor
  ```

  ```text 
  viewer@example.com

  viewer
  ```

  Update `db/setup.js` and create 2 new users with an admin and editor role, just to experiment with different permissions.

# Part 3 — Loading User Information

  Currently:

  ```javascript 
  req.session.userId
  ```

  stores only ID.

  Load user via a Middleware:

  ```javascript 
  app.use(function provideUserInfo( req, res, next ){
    if ( req.session.userId) {
        req.user = userRepository.findById(req.session.userId);
    }
    next();
  });
  ```

  Now:

  ```javascript 
  req.user
  ```

  contains:

  ```javascript 
  {
      id: 1,
      email: 'admin@example.com',
      role: 'admin'
  }
  ```

  Very useful.

  This information will be available throughout our Backend so that we can check if the user is logged in and whether they have the appropriate permissions based on their role.

# Part 4 — Creating Authorization Middleware

  Authentication middleware:

  ```javascript 
  requireAuth()
  ```

  Authorization middleware:

  ```javascript 
  requireRole()
  ```

  Example:

  ```javascript 
  function requireRole(role) {
      return ( req, res, next ) => {
          if (!req.user) {
              return res.redirect('/login');
          }

          if (req.user.role !== role) {
              return res
                  .status(403)
                  .render('403');
          }
          next();
      };
  }
  ```

  Usage:

  ```javascript 
  router.get('/admin', requireRole('admin'), (req,res) => {
        ...
  });
  ```

  Only admins allowed.

  Here's how the Authentication and Authorization architecture with Express middleware works in our application:

  ```mermaid
  flowchart LR
      A[Client Request] --> B[Express Router]
      B --> C[provideUserInfo middleware]
      C --> D["requireAuth() middleware"]
      D --> E["requireRole('admin') middleware"]
      E --> F[Route Handler]
      C -->|no user| G[redirect /login]
      D -->|not authenticated| G
      E -->|role mismatch| H[403 Forbidden]
      E -->|role ok| F
  ```

# Part 5 — Understanding HTTP 403

  Authentication failure:

  ```http 
  401 Unauthorized
  ```

  or redirect.

  Authorization failure:

  ```http 
  403 Forbidden
  ```

  Meaning:

  ```text 
  We know who you are.

  You are not allowed here.
  ```

  Important distinction.

# Part 6 — Protecting CRUD Operations

  Question:

  Should viewers create products?

  Probably not.

  Example:

  | Action         | Admin | Editor | Viewer |
  | -------------- | ----- | ------ | ------ |
  | View Products  | ✓     | ✓      | ✓      |
  | Create Product | ✓     | ✓      | ✗      |
  | Edit Product   | ✓     | ✓      | ✗      |
  | Delete Product | ✓     | ✗      | ✗      |

  Routes:

  ```javascript 
  router.post(

      '/delete/:id',

      requireRole(
          'admin'
      ),

      deleteProduct
  );
  ```

  Editors cannot delete.

  Admins can.

# Part 7 — Role Hierarchies

  Current:

  ```javascript 
  role === 'admin'
  ```

  works.

  But:

  ```text 
  admin
  ```

  should automatically inherit:

  ```text 
  editor
  viewer
  ```

  permissions.

  Hierarchy:

  ```text 
  admin

    ↓

  editor

    ↓

  viewer
  ```

  Represent numerically:

  ```javascript 
  const roles = {

      viewer: 1,

      editor: 2,

      admin: 3

  };
  ```

  Middleware:

  ```javascript 
  if (

      roles[
          req.user.role
      ]

      <

      roles[
          requiredRole
      ]

  ) {

      return res
          .status(403)
          .render('403');

  }
  ```

  Much more flexible.

# Part 8 — Hiding UI Elements

  Bad:

  ```html 
  Delete Product
  ```

  visible to everyone.

  Even if route is protected.

  Better:

  ```html 
  <% if ( user.role === 'admin') { %>
    <a>Delete</a>
  <% } %>
  ```

  Users only see actions they can perform.

  Important:

  ```text 
  UI hiding ≠ Security
  ```

  Routes must still be protected.

  Always.

# Part 9 — Ownership-Based Permissions

  Roles aren't always enough.

  Example:

  ```text 
  User A
  ```

  creates:

  ```text 
  Product A
  ```

  Question:

  Can:

  ```text 
  User B
  ```

  edit it?

  Maybe not.

  Add:

  ```sql 
  created_by INTEGER
  ```

  to products.

  Create:

  ```javascript 
  created_by = req.user.id
  ```

  Check ownership:

  ```javascript 
  if ( product.created_by !== req.user.id ) {
      return res
          .status(403)
          .render('403');
  }
  ```

  Very common pattern.

# Part 10 — Combining Roles and Ownership

  Example:

  ```text 
  Admins
  ```

  can edit everything.

  ```text 
  Editors
  ```

  can edit their own.

  Logic:

  ```javascript 
  const canEdit = req.user.role === 'admin' || product.created_by === req.user.id;
  ```

  Real-world applications often combine both approaches.

# Part 11 — Avoiding Privilege Escalation

  Dangerous:

  ```html 
  <select name="role">
    <option>admin</option>
  </select>
  ```

  User submits:

  ```text 
  role=admin
  ```

  Congratulations.

  They promoted themselves.

  Never trust:

  ```text 
  Client Input
  ```

  for permissions.

  Server decides permissions.

  Always.

# Part 12 — Centralizing Permissions

  Bad:

  ```javascript 
  if(admin)
  ```

  everywhere.

  Eventually:

  ```text 
  100 routes

  50 permission checks
  ```

  becomes chaos.

  Create:

  ```javascript 
  permissions.js
  ```

  Example:

  ```javascript 
  module.exports = {
      canDeleteProduct(user) {
          return ( user.role === 'admin');
      }
  };
  ```

  Cleaner.

  Reusable.

  Testable.

# Part 13 — Building an Admin Dashboard

  Protected route:

  ```javascript 
  router.get('/admin', requireRole('admin'),(req,res) => {
    res.render('admin');
  });
  ```

  Only administrators see:

  ```text 
  System Settings

  User Management

  Audit Logs
  ```

  A common application architecture.

# Part 14 — Future Permission Models

  Simple roles work well.

  Eventually systems grow.

  Example:

  ```text 
  Create Product

  Delete Product

  Manage Users

  Publish Content

  View Analytics
  ```

  Instead of:

  ```text 
  role
  ```

  store:

  ```text 
  permissions
  ```

  Schema:

  ```sql 
  permissions

  roles

  role_permissions
  ```

  This becomes:

  ```text 
  Role-Based Access Control
  ```

  commonly called:

  ```text 
  RBAC
  ```

  Used by:

  * GitHub
  * Jira
  * Notion
  * Shopify
  * Countless enterprise systems

# Part 15 — Security Philosophy

  Never assume:

  ```text 
  Hidden Button = Security
  ```

  Attackers can call:

  ```http 
  POST /products/delete/5
  ```

  directly.

  Always validate permissions:

  ```text 
  On The Server
  ```

  Every protected action.

  Every time.

  No exceptions.

# Common Beginner Mistakes

  **Protecting UI But Not Routes**

  Bad:

  ```html 
  Hide Delete Button
  ```

  Attackers can still call:

  ```http 
  POST /delete
  ```

  directly.

  **Trusting Role Values From Forms**

  Never.

  **Duplicating Permission Logic**

  Centralize it.

  **Hardcoding Admin IDs**

  Bad:

  ```javascript 
  if(user.id === 1)
  ```

  Use roles.

  **Forgetting Ownership**

  Sometimes:

  ```text 
  User owns content
  ```

  matters more than role.

# Assignment

  ## Exercise 1

  Add:

  ```text 
  role
  ```

  column to users.

  ---

  ## Exercise 2

  Implement:

  ```text 
  requireRole()
  ```

  middleware.

  ---

  ## Exercise 3

  Restrict:

  ```text 
  Delete Product
  ```

  to admins.

  ---

  ## Exercise 4

  Hide:

  ```text 
  Delete Button
  ```

  for non-admins.

  ---

  ## Exercise 5

  Create:

  ```text 
  403.ejs
  ```

  error page.

  ---

# Bonus Challenge

  Add:

  ```sql 
  created_by
  ```

  column to products.

  ---

  When creating:

  ```javascript 
  created_by =
      req.user.id
  ```

  ---

  Allow:

  ```text 
  Admins
  ```

  to edit all products.

  ---

  Allow:

  ```text 
  Editors
  ```

  to edit only products they created.

  ---

  Reject all others.

  You have now implemented the foundations of content ownership used by many professional CMS platforms.

# Key Takeaways

  Today you learned:

  * Authorization
  * Roles
  * Permissions
  * Ownership
  * 403 responses
  * Permission middleware
  * Role hierarchies
  * Privilege escalation risks
  * RBAC fundamentals

  The CMS now understands not only who users are, but also what they are allowed to do. This is one of the most important transitions from a simple application to a multi-user system suitable for real organizations.

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
