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

```text 
Valid Names
Valid Prices
Valid Emails
```

Reality looks more like:

```text 
Price = banana

Email = not-an-email

Name = ""
```

Or:

```text 
Price = -999999999
```

Or:

```text 
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

```text 
Everything from the client
is untrusted.
```

Everything.

---

Including:

```text 
Forms

Cookies

Query Parameters

Route Parameters

Headers
```

---

Assume every value is:

```text 
Wrong

Malicious

Missing
```

until proven otherwise.

---

# Part 2 — Types of Validation

Example Product:

```javascript 
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

```text 
Name required
```

---

### Length

```text 
Max 255 chars
```

---

### Numeric

```text 
Price must be number
```

---

### Range

```text 
Price > 0
```

---

### Format

```text 
Valid email
```

---

Different validations solve different problems.

---

# Part 3 — The Validation Layer

Bad:

```javascript 
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

```text 
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

```javascript 
validateProduct(
    req.body
);
```

---

Separation of concerns.

---

# Part 4 — Building a Validator

Example:

```javascript 
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

```javascript 
const errors =
    validateProduct(
        req.body
    );
```

---

Check:

```javascript 
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

```javascript 
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

```javascript 
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

```text 
Empty names

Massive payloads
```

---

# Part 6 — Validating Prices

Current:

```javascript 
price = "banana"
```

---

Convert:

```javascript 
const numericPrice =
    Number(price);
```

---

Validate:

```javascript 
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

```javascript 
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

```javascript 
email.includes('@')
```

---

Works poorly.

---

Better:

```javascript 
const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

---

Validate:

```javascript 
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

```text 
Invalid Email
```

User can fix it.

---

Server Error:

```text 
Database Offline
```

User cannot.

---

Response:

```http 
400 Bad Request
```

for user problems.

---

Response:

```http 
500 Internal Server Error
```

for server problems.

---

Important distinction.

---

# Part 9 — Understanding try/catch

Example:

```javascript 
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

```javascript 
try/catch
```

application may crash.

---

With:

```javascript 
try/catch
```

application can recover.

---

# Part 10 — Express Error Middleware

Special middleware:

```javascript 
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

```javascript 
app.use(
    errorHandler
);
```

---

Every unhandled error arrives here.

---

# Part 11 — Custom Error Classes

Instead of:

```javascript 
throw new Error(
    'Not Found'
);
```

---

Create:

```javascript 
class NotFoundError
extends Error {}
```

---

Usage:

```javascript 
throw new NotFoundError(
    'Product Missing'
);
```

---

Handler:

```javascript 
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

```text 
Database unavailable

Missing file

Network failure
```

Expected eventually.

Handle gracefully.

---

Programmer Error:

```javascript 
user.name.toUpperCase()
```

when:

```javascript 
user === undefined
```

Bug.

Needs fixing.

---

Understanding the difference helps with debugging and monitoring.

---

# Part 13 — Reusable Validation Middleware

Instead of:

```javascript 
validateProduct()
```

inside every route.

---

Middleware:

```javascript 
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

```javascript 
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

```text 
Everything disappears
```

---

Good:

```javascript 
res.render(
    'form',
    {
        product: req.body,
        errors
    }
);
```

---

Input:

```html 
value="<%= product.name %>"
```

---

Professional UX.

---

# Part 15 — Logging Errors

Never do:

```javascript 
catch(error) {

}
```

---

Silent failures are terrible.

---

Always log:

```javascript 
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

```text 
Everything fails eventually.
```

---

Examples:

```text 
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

```javascript 
required
```

HTML attribute only.

---

Attackers bypass browsers.

Validate server-side too.

---

## Giant Route Files

Separate:

```text 
Validation

Database

Rendering
```

into dedicated layers.

---

## Returning Generic Errors

Helpful:

```text 
Email required
```

---

Not helpful:

```text 
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

```text 
validateProduct()
```

function.

---

## Exercise 2

Validate:

```text 
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

```text 
404.ejs

500.ejs
```

error pages.

---

## Exercise 5

Implement:

```javascript 
errorHandler
```

middleware.

---

# Bonus Challenge

Create:

```text 
Validation Library
```

for your project.

Example:

```javascript 
validators/

├── product.js
├── user.js
├── auth.js
```

---

Usage:

```javascript 
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

```text 
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

```text 
Validation

Authentication

Authorization
```

are exactly the kinds of features that tend to break quietly. Testing them early teaches students one of the most important lessons in professional software development:

> If it's important enough to rely on, it's important enough to test.

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
