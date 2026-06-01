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

---

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

---

# Part 1 — What Is Testing?

A test is simply code that verifies other code.

Example:

```javascript 
expect(
    add(2, 3)
).toBe(5);
```

---

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

---

# Part 2 — Why Testing Matters

Without tests:

```text 
Change Code

Hope Nothing Breaks
```

---

With tests:

```text 
Change Code

Run Tests

Know What Broke
```

---

This is a huge difference.

---

# Part 3 — Types of Tests

Three major categories:

---

## Unit Tests

Test one thing.

Example:

```javascript 
validateProduct()
```

---

## Integration Tests

Test multiple components together.

Example:

```text 
Route

↓

Database

↓

Response
```

---

## End-to-End Tests

Test the entire application.

Example:

```text 
Browser

↓

Server

↓

Database
```

---

For this course we'll focus on:

```text 
Unit

Integration
```

---

# Part 4 — Installing a Test Framework

Popular choices:

* Vitest
* Jest

---

We'll use Vitest.

Install:

```bash 
npm install -D vitest
```

---

package.json:

```json 
{
  "scripts": {

    "test":
      "vitest"

  }
}
```

---

Run:

```bash 
npm test
```

---

# Part 5 — Your First Test

Function:

```javascript 
function add(a, b) {

    return a + b;

}
```

---

Test:

```javascript 
import {
    test,
    expect
}
from 'vitest';

test(
    'adds numbers',
    () => {

        expect(
            add(2, 3)
        ).toBe(5);

    }
);
```

---

Result:

```text 
PASS
```

---

Or:

```text 
FAIL
```

---

No ambiguity.

---

# Part 6 — Testing Validation

Validator:

```javascript 
validateProduct(
    data
)
```

---

Test:

```javascript 
test(
    'requires name',
    () => {

        const errors =
            validateProduct({

                name: '',

                price: 10

            });

        expect(
            errors.length
        ).toBe(1);

    }
);
```

---

This is a perfect unit test.

---

No database.

No Express.

No browser.

---

Just:

```text 
Input

↓

Output
```

---

# Part 7 — Testing Authorization

Function:

```javascript 
canDeleteProduct(
    user
)
```

---

Test:

```javascript 
test(
    'admin can delete',
    () => {

        expect(

            canDeleteProduct({

                role:
                    'admin'

            })

        ).toBe(true);

    }
);
```

---

Test:

```javascript 
test(
    'viewer cannot delete',
    () => {

        expect(

            canDeleteProduct({

                role:
                    'viewer'

            })

        ).toBe(false);

    }
);
```

---

Permissions are excellent candidates for unit tests.

---

# Part 8 — Integration Testing Express

Unit tests are great.

But eventually we need:

```text 
Real Routes
```

---

Example:

```http 
GET /products
```

---

Did it return:

```http 
200 OK
```

?

---

Let's test it.

---

# Part 9 — Introducing SuperTest

Install:

SuperTest

```bash 
npm install -D supertest
```

---

Example:

```javascript 
import request
from 'supertest';
```

---

Test route:

```javascript 
const response =
    await request(app)

        .get(
            '/products'
        );
```

---

Check:

```javascript 
expect(
    response.status
).toBe(200);
```

---

Amazing.

No browser required.

---

# Part 10 — Testing Protected Routes

Route:

```javascript 
GET /admin
```

requires login.

---

Test:

```javascript 
const response =
    await request(app)

        .get('/admin');
```

---

Check:

```javascript 
expect(
    response.status
).toBe(302);
```

---

Meaning:

```text 
Redirect to login
```

---

Now we know protection works.

---

# Part 11 — Testing Error Cases

Most beginners test:

```text 
Happy Path
```

only.

---

Professionals test:

```text 
Failure Paths
```

first.

---

Example:

```javascript 
GET /products/99999
```

---

Expected:

```javascript 
expect(
    response.status
).toBe(404);
```

---

Important.

---

Broken systems usually fail around edge cases.

---

# Part 12 — Mocking

Sometimes dependencies are expensive.

Example:

```text 
Database

API

Filesystem
```

---

Instead of:

```javascript 
realDatabase
```

use:

```javascript 
fakeDatabase
```

---

Example:

```javascript 
vi.mock(
    './repository.js'
);
```

---

Now tests run:

```text 
Fast

Predictably
```

---

Without touching real data.

---

# Part 13 — Test Isolation

Bad:

```javascript 
Test A

creates data

Test B

depends on it
```

---

Order matters.

Chaos follows.

---

Good:

```text 
Each test independent
```

---

Every test should be able to run:

```text 
Alone

In Any Order
```

---

Critical principle.

---

# Part 14 — Coverage

Question:

```text 
How much code is tested?
```

---

Answer:

```text 
Coverage
```

---

Run:

```bash 
vitest --coverage
```

---

Example:

```text 
Validation

95%
```

---

```text 
Permissions

100%
```

---

Coverage helps.

But:

```text 
100% coverage
≠
100% correctness
```

---

A terrible test still counts.

---

# Part 15 — Testing Strategy

Prioritize testing:

```text 
Validation

Authentication

Authorization

Business Logic
```

---

Lower priority:

```text 
Simple Templates

Static Pages
```

---

Rule:

Test things that can cause expensive mistakes.

---

Deleting products:

```text 
High Value
```

---

Homepage title:

```text 
Lower Value
```

---

# Part 16 — Continuous Integration

Imagine:

```text 
Developer pushes code
```

---

Automatically:

```text 
Run Tests
```

---

If tests fail:

```text 
Reject Deployment
```

---

This is called:

```text 
Continuous Integration
```

or:

```text 
CI
```

---

Used everywhere.

---

Examples:

* GitHub Actions
* GitLab CI/CD
* Jenkins

---

# Common Beginner Mistakes

## Testing Only Happy Paths

Always test failures.

---

## Using Production Databases

Never.

Use test databases.

---

## Tests Depending on Order

Each test should be independent.

---

## Massive Integration Tests

Keep tests focused.

---

## Chasing Coverage Numbers

Quality matters more than percentages.

---

# Assignment

## Exercise 1

Install:

```text 
Vitest
```

and create your first test.

---

## Exercise 2

Write tests for:

```text 
validateProduct()
```

---

## Exercise 3

Write tests for:

```text 
Authorization Rules
```

---

## Exercise 4

Install:

```text 
SuperTest
```

and test:

```text 
GET /products
```

---

## Exercise 5

Test:

```text 
Protected Routes
```

return correct responses.

---

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

---

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

---

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

A professional application is not defined by how many features it has. It is defined by how confidently those features can be changed without breaking existing behavior. Testing is the mechanism that creates that confidence.

At this stage, your CMS is no longer just functional and secure—it is becoming maintainable. That distinction becomes increasingly important as projects grow from hundreds of lines of code to tens of thousands.

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
