---
title: "Full Stack Project - Day 08"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# Updating Products (UPDATE)

## Completing the Second Quarter of CRUD

> Creating data is exciting.
>
> Updating data is where reality begins.

In the real world:

* Product prices change
* Descriptions improve
* Inventory evolves
* Mistakes happen

Lots of mistakes.

If your application can only create products, eventually users start creating:

```text id="j3d87a"
Keyboard
Keyboard v2
Keyboard v3
Keyboard FINAL
Keyboard FINAL FINAL
Keyboard FINAL USE THIS ONE
```

Congratulations.

You've accidentally recreated Microsoft Word document versioning.

Today we learn how to update existing records properly.

---

# Learning Objectives

By the end of this lesson, students will be able to:

* Understand the Update portion of CRUD
* Build edit forms
* Pre-populate forms with existing data
* Process update requests
* Execute SQL UPDATE statements
* Validate incoming data
* Handle missing records
* Reuse form templates
* Understand optimistic thinking versus defensive programming

---

# What We Are Building

Current:

```mermaid id="4n7wfo"
flowchart TD

A[Product Page]

A --> B[View Product]
```

After today:

```mermaid id="h70v3z"
flowchart TD

A[Product Page]

A --> B[Edit Product]

B --> C[Update Database]

C --> D[View Updated Product]
```

---

# Part 1 — Understanding UPDATE

Creating records:

```sql id="t6qv8q"
INSERT INTO products (...)
```

adds new data.

---

Updating records:

```sql id="t4l94g"
UPDATE products
SET ...
WHERE ...
```

modifies existing data.

---

Example:

Before:

```text id="2mjlwm"
Mechanical Keyboard

$89.99
```

---

After:

```text id="1zyx3w"
Mechanical Keyboard Pro

$99.99
```

Same record.

New values.

---

# Part 2 — SQL UPDATE

Basic syntax:

```sql id="4zh3wr"
UPDATE products

SET
    name = ?,
    description = ?,
    price = ?

WHERE id = ?
```

---

Very important:

```sql id="e4yq5u"
WHERE id = ?
```

Without it:

```sql id="8u5u7n"
UPDATE products
SET price = 0
```

becomes:

```text id="dd3mxw"
Every product now costs $0
```

Customers love this.

Management usually does not.

---

# Part 3 — The Edit Route

URL:

```text id="7t5zw0"
/products/edit/5
```

---

Route:

```javascript id="j1av3e"
router.get('/edit/:id', (req, res) => {

    const product =
        productRepository.findById(
            req.params.id
        );

    if (!product) {

        return res
            .status(404)
            .render('404');

    }

    res.render(
        'products/edit',
        {
            product
        }
    );

});
```

---

# Why Load the Product First?

Users need to see:

```text id="v4b25y"
Current Values
```

before editing.

---

Without loading:

```html id="l9r0lx"
Name:

[____________]
```

---

With loading:

```html id="gkrj17"
Name:

[Mechanical Keyboard]
```

Much better.

---

# Part 4 — Building the Edit Form

## views/products/edit.ejs

```html id="ix5mct"
<h2>Edit Product</h2>

<form
    action="/products/edit/<%= product.id %>"
    method="post"
>

    <div>

        <label>Name</label>

        <input
            type="text"
            name="name"
            value="<%= product.name %>"
        >

    </div>

    <div>

        <label>Description</label>

        <textarea
            name="description"
        ><%= product.description %></textarea>

    </div>

    <div>

        <label>Price</label>

        <input
            type="number"
            step="0.01"
            name="price"
            value="<%= product.price %>"
        >

    </div>

    <button type="submit">
        Save Changes
    </button>

</form>
```

---

# Understanding Pre-Populated Forms

The form displays:

```html id="xqwx2x"
value="<%= product.name %>"
```

instead of:

```html id="mh0nmj"
value=""
```

This is how nearly every edit form on the internet works.

---

# Part 5 — Processing Updates

Route:

```javascript id="c9czjn"
router.post('/edit/:id', (req, res) => {

    const {
        name,
        description,
        price
    } = req.body;

    const id =
        req.params.id;

    productRepository.update(
        id,
        name,
        description,
        price
    );

    res.redirect(
        `/products/${id}`
    );

});
```

---

# Repository Function

```javascript id="o5j3ya"
function update(
    id,
    name,
    description,
    price
) {

    const stmt = db.prepare(`
        UPDATE products

        SET
            name = ?,
            description = ?,
            price = ?

        WHERE id = ?
    `);

    return stmt.run(
        name,
        description,
        price,
        id
    );

}
```

---

# What Does run() Return?

Example:

```javascript id="rxv7i7"
{
    changes: 1
}
```

Meaning:

```text id="x4gl5d"
1 row updated
```

---

If:

```javascript id="kx3ovt"
{
    changes: 0
}
```

then nothing changed.

Possibly because the product doesn't exist.

---

# Part 6 — Validation

Updating requires validation just like creating.

---

Bad:

```javascript id="c68fuk"
{
    name: '',
    price: ''
}
```

---

Bad:

```javascript id="8g6csh"
{
    name: 'Keyboard',
    price: -100
}
```

---

Validation:

```javascript id="c31z0z"
if (!name) {

    return res.render(
        'products/edit',
        {
            error:
                'Name is required.',
            product: req.body
        }
    );

}
```

---

Price Validation:

```javascript id="4m52u2"
const numericPrice =
    Number(price);

if (
    Number.isNaN(
        numericPrice
    )
) {

    return res.render(...);

}
```

---

# Part 7 — Preserving User Input

Suppose:

```text id="hy7dkg"
Name OK

Price Invalid
```

Validation fails.

---

Bad UX:

```text id="4rk26v"
All form data disappears
```

---

Good UX:

```javascript id="sdrslm"
res.render(
    'products/edit',
    {
        error:
            'Invalid price',

        product: {
            id,
            name,
            description,
            price
        }
    }
);
```

---

The form remains populated.

Users remain calm.

---

# Part 8 — Adding Edit Links

Product page:

```html id="5z67uc"
<a
href="/products/edit/<%= product.id %>"
>

Edit Product

</a>
```

---

List page:

```html id="1x0n8x"
<a
href="/products/edit/<%= product.id %>"
>

Edit

</a>
```

---

Now editing is accessible everywhere.

---

# Part 9 — Reusing Forms

Notice:

```text id="ihw4a7"
create.ejs
```

and

```text id="uk10d8"
edit.ejs
```

look almost identical.

---

Professional developers avoid duplication.

---

Example Partial:

```text id="11ikyz"
views/products/_form.ejs
```

---

```html id="zgu4a6"
<input
    name="name"
    value="<%= product?.name || '' %>"
>
```

---

Create:

```html id="xijy1d"
<%- include(
    '_form',
    {
        product: {}
    }
) %>
```

---

Edit:

```html id="c04j16"
<%- include(
    '_form',
    {
        product
    }
) %>
```

---

One form.

Two use cases.

Less maintenance.

---

# Part 10 — Understanding Idempotency

Interesting concept:

---

Create:

```http id="7q9ttc"
POST /products/create
```

twice

creates:

```text id="y3fx2r"
Two Products
```

---

Update:

```http id="tz90b3"
POST /products/edit/5
```

with same values twice

results in:

```text id="nhvq3v"
Same Product State
```

---

This property is called:

```text id="q7svlu"
Idempotency
```

A useful concept for APIs.

---

# Part 11 — Defensive Programming

Imagine:

```text id="s95f7v"
/products/edit/999999
```

---

Repository:

```javascript id="mw7k65"
const result =
    productRepository.update(...);
```

---

Check:

```javascript id="6e5s0g"
if(
    result.changes === 0
) {

    return res
        .status(404)
        .render('404');

}
```

Never assume records exist.

Verify.

---

# Part 12 — Audit Thinking

Imagine:

```text id="9sgv7s"
Original Price

$100
```

---

User changes:

```text id="w4v7pv"
$10
```

---

Question:

```text id="f1l6w9"
Who changed it?
When?
Why?
```

Most CRUD tutorials ignore this.

Real businesses care deeply.

---

Future systems often add:

```sql id="yhy7mb"
updated_at
updated_by
```

columns.

We'll keep things simple for now.

---

# Common Beginner Mistakes

## Forgetting WHERE

Bad:

```sql id="jclc1m"
UPDATE products
SET price = 0
```

Dangerous.

---

## Not Checking Existence

Bad:

```javascript id="q2xj8y"
update(id)
```

without verifying product exists.

---

## Repeating Form Code

Create and Edit forms often become duplicates.

Extract shared partials.

---

## Skipping Validation

Updates require validation just as much as creation.

---

## Trusting Route Parameters

Validate:

```javascript id="p3sru3"
req.params.id
```

before using them.

---

# Assignment

## Exercise 1

Create:

```text id="5l5t4f"
GET /products/edit/:id
```

that loads an edit form.

---

## Exercise 2

Create:

```text id="z67yzq"
POST /products/edit/:id
```

that updates the database.

---

## Exercise 3

Validate:

* name
* description
* price

before saving.

---

## Exercise 4

Redirect users back to:

```text id="i7f0yu"
/products/:id
```

after updating.

---

## Exercise 5

Extract shared form fields into:

```text id="bhjicv"
_form.ejs
```

partial.

---

# Bonus Challenge

Add:

```sql id="42u8j6"
updated_at
```

to the table.

Schema:

```sql id="bq8a7i"
ALTER TABLE products

ADD COLUMN updated_at DATETIME;
```

---

Update query:

```sql id="14uzig"
UPDATE products

SET
    name = ?,
    description = ?,
    price = ?,
    updated_at =
        CURRENT_TIMESTAMP

WHERE id = ?
```

Display:

```text id="0ll3wc"
Last Updated:
```

on the product page.

This is the first step toward real audit tracking.

---

# Key Takeaways

Today you learned:

* SQL UPDATE
* Edit forms
* Pre-populated forms
* Validation during updates
* Redirects
* Shared form partials
* Idempotency
* Defensive programming
* Audit thinking

At this point, your CMS can:

```text id="kp18g8"
Create Products
Read Products
Update Products
```

Three quarters of CRUD are complete.

The application is beginning to resemble the core of a real content management system rather than a collection of isolated pages.

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
