---
title: "Full Stack Project - Day 12"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# WEEK 03 | DAY 02 (Day 12 of 15)

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

```text id="a7m2vx"
Login
Logout
Sessions
```

Now every user can log in.

That's progress.

Unfortunately:

```text id="v3k9nw"
Every logged-in user
can still do everything.
```

That's less ideal.

Imagine:

```text id="z5r8qp"
Intern
```

accidentally deleting:

```text id="g2m6uy"
Entire Product Catalog
```

because they found the delete button.

Today we'll build a permission system that prevents that.

---

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

---

# Part 1 — Authentication vs Authorization

Yesterday:

```text id="p4k8tn"
Are you logged in?
```

---

Today:

```text id="q1m7vw"
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

---

# Part 2 — The Simplest Role System

Add:

```sql id="n3x7qw"
ALTER TABLE users

ADD COLUMN role TEXT
DEFAULT 'viewer';
```

---

Possible values:

```text id="u6v2kr"
admin
editor
viewer
```

---

Example:

```text id="s8p4jh"
admin@example.com

admin
```

---

```text id="w2m9cv"
editor@example.com

editor
```

---

```text id="f5k1zx"
viewer@example.com

viewer
```

---

# Part 3 — Loading User Information

Currently:

```javascript id="r7m3yt"
req.session.userId
```

stores only ID.

---

Load user:

```javascript id="c2v8pq"
app.use(
    (
        req,
        res,
        next
    ) => {

        if (
            req.session.userId
        ) {

            req.user =
                userRepository
                    .findById(
                        req.session.userId
                    );

        }

        next();

    }
);
```

---

Now:

```javascript id="x4q7mw"
req.user
```

contains:

```javascript id="n8k2tv"
{
    id: 1,
    email: 'admin@example.com',
    role: 'admin'
}
```

---

Very useful.

---

# Part 4 — Creating Authorization Middleware

Authentication middleware:

```javascript id="m6p1rx"
requireAuth()
```

---

Authorization middleware:

```javascript id="e3k9nw"
requireRole()
```

---

Example:

```javascript id="y8v4qt"
function requireRole(
    role
) {

    return (
        req,
        res,
        next
    ) => {

        if (
            !req.user
        ) {

            return res.redirect(
                '/login'
            );

        }

        if (
            req.user.role !== role
        ) {

            return res
                .status(403)
                .render('403');

        }

        next();

    };

}
```

---

Usage:

```javascript id="g7m2kp"
router.get(

    '/admin',

    requireRole(
        'admin'
    ),

    (
        req,
        res
    ) => {

        ...

    }

);
```

---

Only admins allowed.

---

# Part 5 — Understanding HTTP 403

Authentication failure:

```http id="r1k5wt"
401 Unauthorized
```

or redirect.

---

Authorization failure:

```http id="u9v3pm"
403 Forbidden
```

---

Meaning:

```text id="w7x2jq"
We know who you are.

You are not allowed here.
```

---

Important distinction.

---

# Part 6 — Protecting CRUD Operations

Question:

Should viewers create products?

Probably not.

---

Example:

| Action         | Admin | Editor | Viewer |
| -------------- | ----- | ------ | ------ |
| View Products  | ✓     | ✓      | ✓      |
| Create Product | ✓     | ✓      | ✗      |
| Edit Product   | ✓     | ✓      | ✗      |
| Delete Product | ✓     | ✗      | ✗      |

---

Routes:

```javascript id="d4r8yv"
router.post(

    '/delete/:id',

    requireRole(
        'admin'
    ),

    deleteProduct
);
```

---

Editors cannot delete.

Admins can.

---

# Part 7 — Role Hierarchies

Current:

```javascript id="f7k3nz"
role === 'admin'
```

works.

---

But:

```text id="q8v1mp"
admin
```

should automatically inherit:

```text id="y5r7kt"
editor
viewer
```

permissions.

---

Hierarchy:

```text id="k2m4cw"
admin

  ↓

editor

  ↓

viewer
```

---

Represent numerically:

```javascript id="n6x9pq"
const roles = {

    viewer: 1,

    editor: 2,

    admin: 3

};
```

---

Middleware:

```javascript id="z3v7rx"
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

---

Much more flexible.

---

# Part 8 — Hiding UI Elements

Bad:

```html id="a4m8qk"
Delete Product
```

visible to everyone.

---

Even if route is protected.

---

Better:

```html id="j7p2wv"
<% if(
    user.role === 'admin'
) { %>

<a>

Delete

</a>

<% } %>
```

---

Users only see actions they can perform.

---

Important:

```text id="h1v6tz"
UI hiding
≠
Security
```

---

Routes must still be protected.

Always.

---

# Part 9 — Ownership-Based Permissions

Roles aren't always enough.

Example:

```text id="w3k7pu"
User A
```

creates:

```text id="v5r2nx"
Product A
```

---

Question:

Can:

```text id="g8m1qt"
User B
```

edit it?

---

Maybe not.

---

Add:

```sql id="u4v9kx"
created_by INTEGER
```

to products.

---

Create:

```javascript id="c6m8pr"
created_by =
    req.user.id
```

---

Check ownership:

```javascript id="k2r7wx"
if (

    product.created_by
    !==
    req.user.id

) {

    return res
        .status(403)
        .render('403');

}
```

---

Very common pattern.

---

# Part 10 — Combining Roles and Ownership

Example:

```text id="e9v4mq"
Admins
```

can edit everything.

---

```text id="q6r8tx"
Editors
```

can edit their own.

---

Logic:

```javascript id="m1k5vz"
const canEdit =

    req.user.role
    === 'admin'

    ||

    product.created_by
    === req.user.id;
```

---

Real-world applications often combine both approaches.

---

# Part 11 — Avoiding Privilege Escalation

Dangerous:

```html id="n7p4kw"
<select
    name="role"
>

<option>

admin

</option>

</select>
```

---

User submits:

```text id="j2v8qr"
role=admin
```

---

Congratulations.

They promoted themselves.

---

Never trust:

```text id="x5m1tn"
Client Input
```

for permissions.

---

Server decides permissions.

Always.

---

# Part 12 — Centralizing Permissions

Bad:

```javascript id="t9r2pv"
if(admin)
```

everywhere.

---

Eventually:

```text id="y7k4wx"
100 routes

50 permission checks
```

becomes chaos.

---

Create:

```javascript id="p4m8qt"
permissions.js
```

---

Example:

```javascript id="k8v6rn"
module.exports = {

    canDeleteProduct(
        user
    ) {

        return (
            user.role
            === 'admin'
        );

    }

};
```

---

Cleaner.

Reusable.

Testable.

---

# Part 13 — Building an Admin Dashboard

Protected route:

```javascript id="r3k7mw"
router.get(

    '/admin',

    requireRole(
        'admin'
    ),

    (
        req,
        res
    ) => {

        res.render(
            'admin'
        );

    }

);
```

---

Only administrators see:

```text id="q9m2pv"
System Settings

User Management

Audit Logs
```

---

A common application architecture.

---

# Part 14 — Future Permission Models

Simple roles work well.

Eventually systems grow.

---

Example:

```text id="g4v8qt"
Create Product

Delete Product

Manage Users

Publish Content

View Analytics
```

---

Instead of:

```text id="h8k1rx"
role
```

store:

```text id="w5m7pv"
permissions
```

---

Schema:

```sql id="x2v6qt"
permissions

roles

role_permissions
```

---

This becomes:

```text id="f7k3wp"
Role-Based Access Control
```

commonly called:

```text id="m4r8qv"
RBAC
```

---

Used by:

* GitHub
* Jira
* Notion
* Shopify
* Countless enterprise systems

---

# Part 15 — Security Philosophy

Never assume:

```text id="r8k4tx"
Hidden Button
=
Security
```

---

Attackers can call:

```http id="c3v7pw"
POST /products/delete/5
```

directly.

---

Always validate permissions:

```text id="y1m6qt"
On The Server
```

---

Every protected action.

Every time.

No exceptions.

---

# Common Beginner Mistakes

## Protecting UI But Not Routes

Bad:

```html id="n6v2qr"
Hide Delete Button
```

---

Attackers can still call:

```http id="z4k8wp"
POST /delete
```

directly.

---

## Trusting Role Values From Forms

Never.

---

## Duplicating Permission Logic

Centralize it.

---

## Hardcoding Admin IDs

Bad:

```javascript id="w2r7kv"
if(user.id === 1)
```

---

Use roles.

---

## Forgetting Ownership

Sometimes:

```text id="u7m1px"
User owns content
```

matters more than role.

---

# Assignment

## Exercise 1

Add:

```text id="v8r3kw"
role
```

column to users.

---

## Exercise 2

Implement:

```text id="x5k7qt"
requireRole()
```

middleware.

---

## Exercise 3

Restrict:

```text id="k2v4px"
Delete Product
```

to admins.

---

## Exercise 4

Hide:

```text id="t6m8qr"
Delete Button
```

for non-admins.

---

## Exercise 5

Create:

```text id="r1v7kt"
403.ejs
```

error page.

---

# Bonus Challenge

Add:

```sql id="q4m8wv"
created_by
```

column to products.

---

When creating:

```javascript id="g7k2rx"
created_by =
    req.user.id
```

---

Allow:

```text id="p9v3qt"
Admins
```

to edit all products.

---

Allow:

```text id="w3r8kv"
Editors
```

to edit only products they created.

---

Reject all others.

You have now implemented the foundations of content ownership used by many professional CMS platforms.

---

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
