---
title: "Full Stack Project - Day 07"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# Search & Filtering

## Helping Users Find Things

> Storing data is easy.
>
> Finding the right data is where the real challenge begins.

Imagine our CMS contains:

```text
10 products
```

No problem.

Now imagine:

```text
10,000 products
```

Finding:

```text
Mechanical Keyboard
```

by scrolling through 1,000 pages is not a feature.

It's a punishment.

Today we'll build search and filtering capabilities that allow users to quickly find exactly what they're looking for.

---

# Learning Objectives

By the end of this lesson, students will be able to:

* Understand search and filtering concepts
* Read query parameters
* Build dynamic SQL queries safely
* Use SQL WHERE clauses
* Implement keyword search
* Filter by price ranges
* Combine search with pagination
* Preserve filters between pages
* Understand SQL indexing fundamentals
* Avoid SQL injection vulnerabilities

---

# Part 1 — Search vs Filtering

Many beginners think these are the same thing.

They're not.

---

## Search

User enters:

```text
keyboard
```

System searches text fields.

Example:

```sql
WHERE name LIKE '%keyboard%'
```

---

## Filtering

User selects:

```text
Price > 100
```

System narrows results using rules.

Example:

```sql
WHERE price > 100
```

---

## Combined

Example:

```text
Search: keyboard

Price: 50+
```

Results:

```sql
WHERE
name LIKE '%keyboard%'
AND price > 50
```

This is how most e-commerce websites work.

---

# Part 2 — Query Parameters

Search URLs usually use query parameters.

Example:

```text
/products?search=keyboard
```

---

Express:

```javascript
const search =
    req.query.search;
```

Result:

```javascript
"keyboard"
```

---

Multiple filters:

```text
/products?search=keyboard&minPrice=50
```

Express:

```javascript
req.query
```

contains:

```javascript
{
  search: 'keyboard',
  minPrice: '50'
}
```

---

# Part 3 — Building a Search Form

View:

```html
<form method="get">

    <input
        type="text"
        name="search"
        placeholder="Search products"
    >

    <button type="submit">
        Search
    </button>

</form>
```

---

User enters:

```text
keyboard
```

Browser navigates to:

```text
/products?search=keyboard
```

No JavaScript required.

Simple.

Elegant.

Very 1998.

Still effective.

---

# Part 4 — SQL LIKE

Searching typically uses:

```sql
LIKE
```

---

Example:

```sql
SELECT *
FROM products
WHERE name LIKE '%keyboard%'
```

Matches:

```text
Gaming Keyboard
Mechanical Keyboard
Wireless Keyboard
```

---

Wildcard:

```text
%
```

means:

```text
Any characters
```

---

Examples:

| Pattern    | Matches              |
| ---------- | -------------------- |
| keyboard%  | Starts with keyboard |
| %keyboard  | Ends with keyboard   |
| %keyboard% | Contains keyboard    |

---

# Part 5 — First Search Query

Route:

```javascript
router.get('/', (req, res) => {

    const search =
        req.query.search || '';

    const stmt = db.prepare(`
        SELECT *
        FROM products
        WHERE name LIKE ?
        ORDER BY id DESC
    `);

    const products =
        stmt.all(
            `%${search}%`
        );

    res.render(
        'products/list',
        {
            products,
            search
        }
    );

});
```

---

Result:

```text
/products?search=keyboard
```

returns matching products.

---

# Part 6 — Preserving Search Values

Bad UX:

User searches:

```text
keyboard
```

Results load.

Input becomes empty.

User forgets what they searched for.

---

Better:

```html
<input
    type="text"
    name="search"
    value="<%= search %>"
>
```

Input remains populated.

Professional applications do this everywhere.

---

# Part 7 — Searching Multiple Columns

Current:

```sql
WHERE name LIKE ?
```

---

Better:

```sql
WHERE
name LIKE ?
OR description LIKE ?
```

---

Example:

```javascript
const term =
    `%${search}%`;

stmt.all(
    term,
    term
);
```

---

Now users can find products using descriptions too.

---

# Part 8 — Price Filtering

Users often want:

```text
Show products above $100
```

---

Form:

```html
<label>

Minimum Price

<input
    type="number"
    name="minPrice"
>

</label>
```

---

URL:

```text
/products?minPrice=100
```

---

SQL:

```sql
SELECT *
FROM products
WHERE price >= ?
```

---

Route:

```javascript
const minPrice =
    Number(
        req.query.minPrice
    ) || 0;
```

---

# Part 9 — Combining Search & Price Filters

Example:

```text
Search: keyboard

Min Price: 50
```

---

SQL:

```sql
SELECT *
FROM products
WHERE
name LIKE ?
AND price >= ?
```

---

Result:

```text
Mechanical Keyboard

$89.99
```

but not:

```text
Cheap Keyboard

$19.99
```

---

# Part 10 — Dynamic WHERE Clauses

Real applications rarely know which filters users will choose.

---

Bad:

```javascript
if(search) {
    ...
}

if(minPrice) {
    ...
}

if(maxPrice) {
    ...
}
```

becomes messy.

---

Better:

```javascript
const conditions = [];
const values = [];
```

---

Search:

```javascript
if(search) {

    conditions.push(
        '(name LIKE ? OR description LIKE ?)'
    );

    values.push(
        `%${search}%`,
        `%${search}%`
    );

}
```

---

Min Price:

```javascript
if(minPrice) {

    conditions.push(
        'price >= ?'
    );

    values.push(minPrice);

}
```

---

Build Query:

```javascript
let sql = `
SELECT *
FROM products
`;
```

---

Add Conditions:

```javascript
if(conditions.length) {

    sql += `
    WHERE
    ${conditions.join(' AND ')}
    `;

}
```

---

Final query becomes:

```sql
SELECT *
FROM products
WHERE
(name LIKE ? OR description LIKE ?)
AND price >= ?
```

Only when needed.

---

# Part 11 — SQL Injection Dangers

Never do this:

```javascript
const sql = `
SELECT *
FROM products
WHERE name LIKE '%${search}%'
`;
```

---

Imagine:

```text
search=' OR 1=1 --
```

You may accidentally return every record.

---

Always use placeholders:

```sql
WHERE name LIKE ?
```

---

This is one of the most important security habits in backend development.

---

# Part 12 — Combining Search with Pagination

Current:

```text
/products?page=2
```

---

Search:

```text
/products?search=keyboard
```

---

Combined:

```text
/products?search=keyboard&page=2
```

---

Pagination links must preserve filters.

Bad:

```html
<a href="/products?page=2">
```

Loses search state.

---

Good:

```html
<a
href="
/products?
search=<%= search %>
&page=<%= i %>
"
>
```

---

Now pagination continues searching.

---

# Part 13 — Product Counts with Filters

Current:

```sql
SELECT COUNT(*)
FROM products
```

Incorrect when searching.

---

Need:

```sql
SELECT COUNT(*)
FROM products
WHERE ...
```

using the same conditions.

---

Why?

Suppose:

```text
1000 products total

20 keyboard products
```

Pagination should display:

```text
2 pages
```

not:

```text
100 pages
```

---

# Part 14 — Understanding Database Indexes

Imagine:

```text
10 products
```

Search is instant.

---

Imagine:

```text
1,000,000 products
```

Search becomes slower.

---

Indexes help.

Think:

```text
Book Index
```

Instead of reading every page.

---

Create:

```sql
CREATE INDEX
idx_products_name
ON products(name);
```

---

Benefits:

```text
Faster searches
```

Costs:

```text
More storage
Slightly slower INSERTs
```

---

We'll revisit indexing later when performance becomes a concern.

---

# Part 15 — Building a Professional Search Form

Example:

```html
<form method="get">

    <input
        name="search"
        value="<%= search %>"
        placeholder="Search"
    >

    <input
        name="minPrice"
        type="number"
        value="<%= minPrice %>"
    >

    <button>
        Filter
    </button>

</form>
```

---

Result:

```text
Search: keyboard

Minimum Price: 50
```

becomes:

```text
/products?
search=keyboard
&minPrice=50
```

Simple.

Readable.

Bookmarkable.

---

# Common Beginner Mistakes

## Using POST for Search

Bad:

```html
<form method="post">
```

Searches should use:

```html
method="get"
```

Users can bookmark results.

---

## Forgetting Placeholders

Bad:

```javascript
${search}
```

inside SQL.

Always use:

```sql
?
```

---

## Losing Filters During Pagination

Always preserve:

```text
search
page
filters
sort
```

across links.

---

## Not Validating Numeric Filters

Bad:

```text
minPrice=banana
```

Validate everything.

---

# Assignment

## Exercise 1

Add:

```text
Search by Name
```

to your CMS.

---

## Exercise 2

Extend search to include:

```text
Description
```

---

## Exercise 3

Add:

```text
Minimum Price
```

filtering.

---

## Exercise 4

Combine:

```text
Search
Price Filter
Pagination
```

into a single route.

---

## Exercise 5

Preserve search state in:

```text
Pagination Links
```

and

```text
Search Inputs
```

---

# Bonus Challenge

Add sorting:

```text
Name ASC
Name DESC
Price ASC
Price DESC
```

while preserving:

```text
Search
Filters
Pagination
```

Example:

```text
/products?
search=keyboard
&minPrice=50
&sort=price_desc
&page=2
```

Professional CRUD systems often spend more code handling combinations of filters than handling the actual database operations.

---

# Key Takeaways

Today you learned:

* Search vs filtering
* SQL LIKE
* Query parameters
* Dynamic WHERE clauses
* Combining filters
* Preserving state
* Search pagination
* SQL injection prevention
* Index fundamentals

Search and filtering are often where a CRUD application begins to feel like a real product. Once users can quickly locate data, the application becomes dramatically more useful.

---

# Suggested Syllabus Improvements

At this point, I'd seriously consider introducing a dedicated **Refactoring & Architecture Day** before file uploads.

Suggested insertion between Day 7 and Day 8:

### Architecture Day

Topics:

* Controllers
* Repositories
* Services
* Validation middleware
* Error middleware
* Environment variables
* Configuration management

Structure:

```text
Route
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

Most Node.js tutorials skip this entirely and accidentally teach students how to create 2,000-line route files.

Another useful addition would be introducing:

ESLint

and

Prettier

during Week 1 instead of waiting until applications become larger. Good habits compound, just like technical debt. The only difference is that one eventually buys you freedom and the other buys you meetings. 😄

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
