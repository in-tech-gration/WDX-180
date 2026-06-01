---
title: "Full Stack Project - Day 16"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# Docker, Full-Text Search & Production Logging

## Making Your CMS Feel Like a Real Product

> A project becomes an application when people use it.
>
> An application becomes a product when it can survive deployment, search data efficiently, and tell you what's happening when things break.

Up to this point, our CMS can:

```text id="k7m2pw"
Create Products
Manage Users
Upload Images
Authenticate
Authorize
Validate
Test
Deploy
```

Today we add three features commonly found in production systems:

```text id="r8v4tx"
Docker
Full-Text Search
Structured Logging
```

These are the kinds of topics that separate:

```text id="n3k8qw"
Junior Projects
```

from:

```text id="u6m1rv"
Production Applications
```

---

# Learning Objectives

By the end of this lesson, students will be able to:

* Understand containerization
* Dockerize an Express application
* Build Docker images
* Run applications in containers
* Use Docker volumes
* Understand SQLite in containers
* Implement SQLite FTS5 search
* Build a search interface
* Understand structured logging
* Implement logging using Morgan
* Design production-friendly observability

---

# Part 1 — Why Docker Exists

Traditional deployment:

```text id="m7v2px"
Node 22

SQLite

Environment Variables

Dependencies
```

must be installed manually.

---

Developer:

```text id="p4k8rw"
Works on my machine.
```

---

Operations:

```text id="f9m3qt"
Not on ours.
```

---

Docker solves:

```text id="y2v7kx"
Environment Consistency
```

---

Instead of shipping:

```text id="w6m1rv"
Code
```

you ship:

```text id="g8k4pt"
Entire Runtime Environment
```

---

# Part 2 — What Is a Container?

Think of Docker as:

```text id="t4m9qx"
A Lightweight Virtual Machine
```

(Not technically accurate, but useful initially.)

---

Container includes:

```text id="j7v2rw"
Node

Dependencies

Configuration

Application
```

---

Result:

```text id="n1k8pv"
Runs Anywhere Docker Runs
```

---

Mac.

Linux.

Cloud.

CI.

Production.

---

# Part 3 — Installing Docker

Install:

Docker

---

Verify:

```bash id="m5r7tx"
docker --version
```

---

Example:

```text id="x3v8pw"
Docker version 28.x
```

---

# Part 4 — Creating a Dockerfile

Project root:

```text id="v8m4rq"
Dockerfile
```

---

Example:

```dockerfile id="p2k9tw"
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

---

This file describes:

```text id="c7v1qx"
How To Build The App
```

---

# Part 5 — Building the Image

Build:

```bash id="u4m8pv"
docker build -t cms .
```

---

Docker creates:

```text id="y6k2rw"
Image
```

---

Think:

```text id="w1v7qt"
Blueprint
```

for containers.

---

# Part 6 — Running the Container

Run:

```bash id="n8m3qx"
docker run -p 3000:3000 cms
```

---

Mapping:

```text id="g5v1rw"
Host:3000

↓

Container:3000
```

---

Application accessible at:

```text id="r2k9tv"
http://localhost:3000
```

---

Congratulations.

Your application now runs inside a container.

---

# Part 7 — Environment Variables in Docker

Pass variables:

```bash id="f4m7qx"
docker run

-e SESSION_SECRET=abc123

cms
```

---

Access:

```javascript id="t8k1rv"
process.env
```

exactly as before.

---

Docker and environment variables work beautifully together.

---

# Part 8 — SQLite and Docker Volumes

Problem:

Container deleted.

Database disappears.

---

Not ideal.

---

Solution:

```text id="q6v3pw"
Volumes
```

---

Run:

```bash id="j9m2tx"
docker run

-v $(pwd)/data:/app/data

cms
```

---

Now:

```text id="x7k4rv"
SQLite File
```

survives container restarts.

---

Critical for local development.

---

# Part 9 — Introducing Full-Text Search

Current:

```sql id="v2m8qx"
SELECT *

WHERE name = ?
```

---

Works.

---

Users want:

```text id="m4k1rw"
Search Products
```

---

Example:

```text id="u9v7pt"
keyboard
```

---

Should find:

```text id="f6m3qx"
Mechanical Keyboard

Gaming Keyboard

Wireless Keyboard
```

---

This is:

```text id="k8v5rw"
Full-Text Search
```

---

# Part 10 — SQLite FTS5

SQLite includes:

SQLite FTS5

---

Create:

```sql id="r3m7tx"
CREATE VIRTUAL TABLE

product_search

USING fts5(

    name,

    description

);
```

---

Unlike normal tables:

```text id="p7k2rv"
Optimized For Search
```

---

Very fast.

---

# Part 11 — Populating Search Index

Insert:

```sql id="w4m8qx"
INSERT INTO product_search (

    rowid,

    name,

    description

)
VALUES (?, ?, ?)
```

---

Usually:

```text id="x1v6rw"
Product Save

↓

Update Search Index
```

---

Both should happen together.

---

# Part 12 — Performing Searches

Example:

```sql id="g9m2tx"
SELECT *

FROM product_search

WHERE product_search

MATCH ?
```

---

Input:

```text id="j3v7pw"
keyboard
```

---

Returns matching rows.

---

Much better than:

```sql id="n6k1rv"
LIKE '%keyboard%'
```

---

Faster.

Smarter.

Scalable.

---

# Part 13 — Building Search Routes

Route:

```javascript id="t5m8qx"
router.get(
    '/search',
    (
        req,
        res
    ) => {

        const q =
            req.query.q;

    }
);
```

---

Repository:

```javascript id="c2v4rw"
searchProducts(
    query
);
```

---

Render:

```javascript id="y7k1pt"
res.render(
    'search',
    {
        results
    }
);
```

---

Users now search products.

---

# Part 14 — Search Interface

Header:

```html id="v4m9qx"
<form
    action="/search"
>

    <input
        name="q"
    >

    <button>

        Search

    </button>

</form>
```

---

Simple.

Useful.

Expected.

---

Most users prefer:

```text id="m8k3rw"
Search
```

over browsing large datasets.

---

# Part 15 — Logging: The Forgotten Superpower

Question:

```text id="r5v2pt"
What happened?
```

---

Logs answer that.

---

Question:

```text id="g1m7qx"
Why did production fail?
```

---

Logs answer that too.

---

Without logs:

```text id="u8k4rw"
Guessing
```

becomes your debugging strategy.

---

Which is rarely a winning strategy.

---

# Part 16 — Introducing Morgan

Install:

Morgan

```bash id="x3m8tv"
npm install morgan
```

---

Import:

```javascript id="q7v1rw"
const morgan =
    require('morgan');
```

---

Register:

```javascript id="k4m9qx"
app.use(
    morgan('dev')
);
```

---

Example output:

```text id="t2v7pw"
GET /products 200 12ms
```

---

Instant visibility.

---

# Part 17 — Morgan Formats

Development:

```javascript id="m6k2rv"
morgan('dev')
```

---

Production:

```javascript id="p8m4qx"
morgan('combined')
```

---

Example:

```text id="u3v9rw"
IP

Timestamp

Method

Status

Response Time
```

---

Far more useful for production diagnostics.

---

# Part 18 — Writing Logs To Files

Example:

```javascript id="j7m1pt"
const fs =
    require('fs');
```

---

Create stream:

```javascript id="g4v8qx"
const accessLogStream =

    fs.createWriteStream(

        'access.log',

        {
            flags: 'a'
        }

    );
```

---

Morgan:

```javascript id="x2k5rw"
app.use(

    morgan(

        'combined',

        {
            stream:
                accessLogStream
        }

    )

);
```

---

Requests now persist.

---

# Part 19 — Structured Logging

Console:

```text id="w8m2qx"
User logged in
```

---

Better:

```javascript id="r6k9tv"
console.log({

    event:
        'login',

    userId: 5,

    timestamp:
        Date.now()

});
```

---

Structured logs are machine-readable.

Monitoring systems love them.

Future-you loves them too.

---

# Part 20 — Production Architecture

After today's lesson:

```text id="c5m7rw"
Docker

↓

Node

↓

Express

↓

SQLite

↓

FTS5

↓

Morgan Logs
```

---

This resembles the architecture of many internal business systems and small SaaS applications.

---

# Common Beginner Mistakes

## Rebuilding Containers Constantly

Use:

```bash id="v1k4pt"
docker compose
```

later for better workflows.

---

## Storing SQLite Inside Containers

Use volumes.

Always.

---

## Using LIKE Instead Of FTS

Fine for 10 records.

Painful for 100,000.

---

## Logging Too Little

You need evidence when debugging.

---

## Logging Passwords

Never.

Ever.

Not even once.

---

# Assignment

## Exercise 1

Create a:

```text id="r8m3qx"
Dockerfile
```

for the CMS.

---

## Exercise 2

Build and run the application using Docker.

---

## Exercise 3

Configure a volume for SQLite persistence.

---

## Exercise 4

Create:

```text id="u5k7rw"
product_search
```

using FTS5.

---

## Exercise 5

Add:

```text id="n2v8pt"
/search
```

route and search page.

---

## Exercise 6

Install:

```text id="g7m4qx"
Morgan
```

and log all requests.

---

# Bonus Challenge

Create:

```text id="p9k1rw"
docker-compose.yml
```

containing:

```text id="v3m7qx"
CMS

SQLite Volume
```

and environment variables.

---

Then implement:

```text id="t6v2pt"
Search Analytics
```

table:

```sql id="m4k8rw"
CREATE TABLE search_queries (

    id INTEGER PRIMARY KEY,

    query TEXT,

    created_at TEXT

);
```

---

Log every search.

Discover:

```text id="j8m5qx"
What Users Actually Search For
```

---

This is one of the simplest forms of product analytics.

---

# Key Takeaways

Today you learned:

* Docker
* Containers
* Dockerfiles
* Volumes
* SQLite FTS5
* Full-text search
* Morgan
* Request logging
* Structured logging
* Production observability

At this point, your application is no longer just a CMS. It is approaching the shape of a deployable production system. It can be containerized, searched, monitored, and operated—four characteristics shared by many real-world applications that survive beyond a developer's laptop.

---

# Where To Go Next

If this course continued, the next topics would be:

1. REST APIs
2. OpenAPI Documentation
3. Docker Compose
4. PostgreSQL Migration
5. Redis Caching
6. Background Jobs
7. WebSockets
8. CI/CD Pipelines
9. Observability & Metrics
10. Cloud Infrastructure

Because the journey from "web developer" to "software engineer" often starts the moment you realize that writing code is only a fraction of the job. Running it reliably is where the interesting problems begin. 🚀
