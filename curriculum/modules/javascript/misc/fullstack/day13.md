---
title: "Full Stack Project - Day 13"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# Validation, Error Handling & Defensive Programming

## Building Applications That Survive Real Users

> Beginners write code for ideal users.
>
> Professionals write code for actual users.
>
> Actual users are chaos in human form.

Until now we've assumed users submit:

```text id="k2m8pv"
Valid Names
Valid Prices
Valid Emails
```

Reality looks more like:

```text id="w4r7tx"
Price = banana

Email = not-an-email

Name = ""
```

Or:

```text id="v8m2qw"
Price = -999999999
```

Or:

```text id="g5k4rx"
Name =
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA...
```

(3 million characters later)

Today's lesson is about building systems that don't immediately collapse when exposed to the public internet.

---

# Learning Objectives

By the end of this lesson, students will be able to:

* Understand validation fundamentals
* Validate input safely
* Separate validation from business logic
* Handle application errors gracefully
* Create custom error middleware
* Understand operational vs programmer errors
* Build reusable validators
* Display validation feedback
* Understand defensive programming
* Design more reliable systems

---

# Part 1 — Never Trust User Input

Rule #1:

```text id="z7v4pm"
Everything from the client
is untrusted.
```

Everything.

---

Including:

```text id="u2m8rw"
Forms

Cookies

Query Parameters

Route Parameters

Headers
```

---

Assume every value is:

```text id="n4k9tx"
Wrong

Malicious

Missing
```

until proven otherwise.

---

# Part 2 — Types of Validation

Example Product:

```javascript id="k8v2pw"
{
    name:
        "Keyboard",

    price:
        89.99
}
```

---

Possible checks:

### Required

```text id="r1m5qt"
Name required
```

---

### Length

```text id="h7v3rx"
Max 255 chars
```

---

### Numeric

```text id="t5k8wp"
Price must be number
```

---

### Range

```text id="f9m4qx"
Price > 0
```

---

### Format

```text id="y3r7kv"
Valid email
```

---

Different validations solve different problems.

---

# Part 3 — The Validation Layer

Bad:

```javascript id="g8k4rv"
router.post(
    '/products/create',
    (req, res) => {

        if (...) {}

        if (...) {}

        if (...) {}

        if (...) {}

    }
);
```

---

Route becomes:

```text id="x6m2qt"
Validation

Database

Rendering

Business Logic
```

all mixed together.

---

Messy.

---

Better:

```javascript id="j4r8pw"
validateProduct(
    req.body
);
```

---

Separation of concerns.

---

# Part 4 — Building a Validator

Example:

```javascript id="c7v1mx"
function validateProduct(
    data
) {

    const errors = [];

    if(
        !data.name
    ) {

        errors.push(
            'Name required'
        );

    }

    return errors;

}
```

---

Usage:

```javascript id="m9k5qt"
const errors =
    validateProduct(
        req.body
    );
```

---

Check:

```javascript id="n3v8rw"
if(
    errors.length
) {

    return res.render(
        'products/create',
        {
            errors
        }
    );

}
```

---

Simple.

Predictable.

Testable.

---

# Part 5 — Validating Product Names

Example:

```javascript id="q6m2tx"
if(

    name.length < 3

) {

    errors.push(
        'Name too short'
    );

}
```

---

Example:

```javascript id="w8r4pv"
if(

    name.length > 255

) {

    errors.push(
        'Name too long'
    );

}
```

---

Protects against:

```text id="f4k7qx"
Empty names

Massive payloads
```

---

# Part 6 — Validating Prices

Current:

```javascript id="r9m1tv"
price = "banana"
```

---

Convert:

```javascript id="x5v8rp"
const numericPrice =
    Number(price);
```

---

Validate:

```javascript id="u7k3qw"
if(

    Number.isNaN(
        numericPrice
    )

) {

    errors.push(
        'Invalid price'
    );

}
```

---

Range:

```javascript id="m4r9tx"
if(

    numericPrice <= 0

) {

    errors.push(
        'Price must be positive'
    );

}
```

---

# Part 7 — Email Validation

Simple check:

```javascript id="y2k7pv"
email.includes('@')
```

---

Works poorly.

---

Better:

```javascript id="g6m4rw"
const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

---

Validate:

```javascript id="h8v1qx"
if(
    !emailRegex.test(
        email
    )
) {

    errors.push(
        'Invalid email'
    );

}
```

---

Not perfect.

Much better.

---

# Part 8 — Server Errors vs User Errors

These are different.

---

User Error:

```text id="p3m8tv"
Invalid Email
```

User can fix it.

---

Server Error:

```text id="d7v2qx"
Database Offline
```

User cannot.

---

Response:

```http id="j5k9rw"
400 Bad Request
```

for user problems.

---

Response:

```http id="u1m4pv"
500 Internal Server Error
```

for server problems.

---

Important distinction.

---

# Part 9 — Understanding try/catch

Example:

```javascript id="n8v3qt"
try {

    const product =
        createProduct();

}
catch(error) {

    console.error(
        error
    );

}
```

---

Without:

```javascript id="k4r7pw"
try/catch
```

application may crash.

---

With:

```javascript id="v6m2rx"
try/catch
```

application can recover.

---

# Part 10 — Express Error Middleware

Special middleware:

```javascript id="f2k8tv"
function errorHandler(

    err,

    req,

    res,

    next

) {

    console.error(
        err
    );

    res
        .status(500)
        .render(
            '500'
        );

}
```

---

Register last:

```javascript id="r7v1qx"
app.use(
    errorHandler
);
```

---

Every unhandled error arrives here.

---

# Part 11 — Custom Error Classes

Instead of:

```javascript id="m5k3rw"
throw new Error(
    'Not Found'
);
```

---

Create:

```javascript id="x9v4pt"
class NotFoundError
extends Error {}
```

---

Usage:

```javascript id="u3m7qx"
throw new NotFoundError(
    'Product Missing'
);
```

---

Handler:

```javascript id="k7r2tv"
if(

    err instanceof
    NotFoundError

) {

    return res
        .status(404)
        .render('404');

}
```

---

Cleaner.

More maintainable.

---

# Part 12 — Operational vs Programmer Errors

A critical distinction.

---

Operational Error:

```text id="g1m8qw"
Database unavailable

Missing file

Network failure
```

Expected eventually.

Handle gracefully.

---

Programmer Error:

```javascript id="j4v6rx"
user.name.toUpperCase()
```

when:

```javascript id="h2k9tv"
user === undefined
```

Bug.

Needs fixing.

---

Understanding the difference helps with debugging and monitoring.

---

# Part 13 — Reusable Validation Middleware

Instead of:

```javascript id="n7v3pw"
validateProduct()
```

inside every route.

---

Middleware:

```javascript id="y5m1qx"
function validateProductMiddleware(

    req,

    res,

    next

) {

    const errors =
        validateProduct(
            req.body
        );

    if(
        errors.length
    ) {

        return res.render(
            'form',
            {
                errors
            }
        );

    }

    next();

}
```

---

Route:

```javascript id="w3k8tv"
router.post(

    '/products/create',

    validateProductMiddleware,

    createProduct
);
```

---

Very scalable.

---

# Part 14 — Preserving User Input

Validation fails.

---

Bad:

```text id="c6m2rw"
Everything disappears
```

---

Good:

```javascript id="q9v4px"
res.render(
    'form',
    {
        values:
            req.body,

        errors
    }
);
```

---

Input:

```html id="m1k7tv"
value="<%= values.name %>"
```

---

Professional UX.

---

# Part 15 — Logging Errors

Never do:

```javascript id="p4v8qx"
catch(error) {

}
```

---

Silent failures are terrible.

---

Always log:

```javascript id="t7m3rw"
console.error(
    error
);
```

---

Later you'll replace this with:

* Structured logging
* Monitoring
* Alerting

But logging is the beginning.

---

# Part 16 — Defensive Programming

Assume:

```text id="k8v1pt"
Everything fails eventually.
```

---

Examples:

```text id="n5m7qx"
Database

Network

File Upload

User Input

Third-party APIs
```

---

Write code that anticipates failure.

Not because you're pessimistic.

Because you're realistic.

---

# Common Beginner Mistakes

## Validating Only in the Browser

Bad:

```javascript id="v2k4rw"
required
```

HTML attribute only.

---

Attackers bypass browsers.

Validate server-side too.

---

## Giant Route Files

Separate:

```text id="x6m8tv"
Validation

Database

Rendering
```

into dedicated layers.

---

## Returning Generic Errors

Helpful:

```text id="q3v7px"
Email required
```

---

Not helpful:

```text id="u9m2rw"
Something went wrong
```

---

## Ignoring Errors

Every error should have a plan.

---

## Catching Everything and Hiding It

Users need useful messages.

Developers need useful logs.

---

# Assignment

## Exercise 1

Create:

```text id="w4k8tv"
validateProduct()
```

function.

---

## Exercise 2

Validate:

```text id="p7m1qx"
Name

Description

Price
```

before saving.

---

## Exercise 3

Display validation messages in forms.

---

## Exercise 4

Create:

```text id="r3v6pw"
404.ejs

500.ejs
```

error pages.

---

## Exercise 5

Implement:

```javascript id="j8m2tv"
errorHandler
```

middleware.

---

# Bonus Challenge

Create:

```text id="t5v9qx"
Validation Library
```

for your project.

Example:

```javascript id="n1k7rw"
validators/

├── product.js
├── user.js
├── auth.js
```

---

Usage:

```javascript id="m7v4pt"
const errors =
    productValidator(
        req.body
    );
```

---

You now have the beginnings of a reusable application framework.

---

# Key Takeaways

Today you learned:

* Input validation
* Error handling
* Validation middleware
* Custom errors
* Express error handlers
* Defensive programming
* Error classification
* User-friendly feedback
* Logging fundamentals

At this point, your CMS is no longer merely functional—it is becoming resilient. The difference between a hobby project and a production application is often not the happy path. It's how the system behaves when everything goes wrong.

---

# Suggested Syllabus Improvements

If I were evolving this curriculum further, I would strongly consider introducing:

### Testing Before Day 14

Topics:

```text id="z8m3tv"
Unit Tests

Integration Tests

Route Tests

Validation Tests
```

Using:

Vitest

or

Jest

and

SuperTest

The reason is simple:

```text id="c4v7qx"
Validation

Authentication

Authorization
```

are exactly the kinds of features that tend to break quietly. Testing them early teaches students one of the most important lessons in professional software development:

> If it's important enough to rely on, it's important enough to test.

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
