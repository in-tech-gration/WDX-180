---
title: "Full Stack Project - Day 15"
layout: v2
load_script_js_via_src:
  - mermaid.min.js
load_script_js: 
  - mermaid.js
---

# Deployment, Production & Launching Your CMS

## Shipping Software To The Real World

> Building software is only half the job.
>
> Getting it into production is the other half.
>
> And sometimes the scarier half.

For fourteen days we've been building:

```text id="k8m3tv"
CRUD

SQLite

Express

EJS

Authentication

Authorization

Uploads

Validation

Testing
```

Everything works.

On your laptop.

Unfortunately:

```text id="u5v7qx"
Your laptop
≠
The Internet
```

Today we solve that problem.

This lesson is about turning a local project into a real application that other people can access.

---

# Learning Objectives

By the end of this lesson, students will be able to:

* Understand deployment fundamentals
* Prepare applications for production
* Use environment variables correctly
* Configure production databases
* Serve applications securely
* Understand reverse proxies
* Understand HTTPS
* Implement logging strategies
* Monitor applications
* Deploy a complete CMS

---

# Part 1 — Development vs Production

Development:

```text id="x2k8rw"
localhost

Debugging

Console Logs

Experimental
```

---

Production:

```text id="w7m4qx"
Real Users

Real Data

Real Traffic

Real Problems
```

---

A surprising number of bugs only appear in production.

Which is software's version of:

```text id="r1v9pt"
"It worked yesterday."
```

---

# Part 2 — Environment Variables

Hardcoded:

```javascript id="m4k7tv"
const secret =
    'super-secret';
```

---

Bad.

---

Hardcoded:

```javascript id="n8v2qx"
const database =
    './db.sqlite';
```

---

Also bad.

---

Use environment variables.

---

Example:

```env id="q3m8rw"
PORT=3000

SESSION_SECRET=abc123

DATABASE_PATH=db.sqlite
```

---

Access:

```javascript id="u6k4pt"
process.env.PORT
```

---

Benefits:

* Configurable
* Safer
* Production friendly

---

# Part 3 — Using dotenv

Install:

dotenv

```bash id="t5v1qx"
npm install dotenv
```

---

Load:

```javascript id="p8m7rw"
require('dotenv')
    .config();
```

---

Now:

```javascript id="y2k9tv"
process.env
```

contains values from:

```text id="r6v3qx"
.env
```

---

Never commit:

```text id="m1k8rw"
.env
```

to Git.

Ever.

---

Add:

```gitignore id="x4v7pt"
.env
```

immediately.

---

# Part 4 — Production Configuration

Current:

```javascript id="g7m2qx"
app.listen(
    3000
);
```

---

Better:

```javascript id="w3k9rw"
app.listen(
    process.env.PORT
);
```

---

Hosting providers assign ports dynamically.

Hardcoding eventually breaks.

---

# Part 5 — Understanding Reverse Proxies

Users think:

```text id="u9m4tv"
Internet

↓

Your App
```

---

Reality:

```text id="j2v8qx"
Internet

↓

Reverse Proxy

↓

Node.js
```

---

Common reverse proxies:

* Nginx
* HAProxy
* Traefik

---

Responsibilities:

```text id="n5k1rw"
HTTPS

Load Balancing

Caching

Compression
```

---

Node focuses on application logic.

---

# Part 6 — HTTPS Matters

Without HTTPS:

```text id="v8m3pt"
Passwords

Cookies

Sessions
```

travel unencrypted.

---

Very bad.

---

HTTPS provides:

```text id="c4v7qx"
Encryption
```

between browser and server.

---

Today there is little reason not to use HTTPS everywhere.

---

Certificates commonly come from:

Let's Encrypt

---

# Part 7 — Session Security

Development:

```javascript id="z7m2rw"
cookie: {

    secure: false

}
```

---

Production:

```javascript id="r3v8pt"
cookie: {

    secure: true,

    httpOnly: true

}
```

---

Benefits:

```text id="f6k1qx"
Better Session Protection
```

---

A small change.

A huge security improvement.

---

# Part 8 — Logging Properly

Development:

```javascript id="j4m7rw"
console.log(
    'User created'
);
```

---

Production:

Need more.

---

Questions:

```text id="n8v3qx"
Who logged in?

When?

Which route failed?

What crashed?
```

---

Logs answer these questions.

---

Example:

```javascript id="w2k9tv"
logger.info(

    'User login',

    {
        userId: 1
    }

);
```

---

Structured logs become invaluable later.

---

# Part 9 — Monitoring

Question:

```text id="p5m4rw"
Is the server healthy?
```

---

Question:

```text id="x8v1pt"
Is memory usage growing?
```

---

Question:

```text id="u1k7qx"
Are users seeing errors?
```

---

Monitoring answers these.

---

Without monitoring:

```text id="m7v2rw"
You discover outages from angry users.
```

---

Not ideal.

---

# Part 10 — Handling Application Crashes

Node process crashes.

---

Question:

```text id="j9k4tv"
What restarts it?
```

---

Common answer:

PM2

---

Install:

```bash id="v3m8qx"
npm install -g pm2
```

---

Run:

```bash id="r6k1rw"
pm2 start app.js
```

---

Benefits:

```text id="f4v7pt"
Restart

Monitoring

Logs
```

---

A production staple.

---

# Part 11 — Database Considerations

Current:

```text id="x2m9qw"
SQLite
```

---

SQLite is fantastic.

But eventually:

```text id="u7k4rw"
Multiple Servers
```

becomes difficult.

---

Common upgrade path:

PostgreSQL

---

Benefits:

```text id="m5v8pt"
Scalability

Concurrency

Advanced Features
```

---

Many production systems use PostgreSQL.

---

# Part 12 — Deployment Options

Small Projects:

* Render
* Railway

---

Container-Based:

* Docker

---

Cloud Providers:

* Amazon Web Services
* Google Cloud
* Microsoft Azure

---

For beginners:

```text id="h8m3qx"
Render

Railway
```

provide the fastest path to deployment.

---

# Part 13 — Deployment Checklist

Before launch:

---

### Security

```text id="c3k7rw"
HTTPS

Session Security

Password Hashing
```

---

### Configuration

```text id="p9v2qt"
Environment Variables

No Hardcoded Secrets
```

---

### Reliability

```text id="w6m4px"
Logging

Monitoring

Error Handling
```

---

### Data

```text id="n1k8rw"
Database Backups
```

---

### Testing

```text id="j5v3qt"
All Tests Passing
```

---

This checklist prevents many disasters.

Not all disasters.

But many.

---

# Part 14 — The CMS Architecture Review

Let's review what students have built.

---

Presentation Layer:

```text id="x7m2rw"
EJS
```

---

Application Layer:

```text id="u4k9tv"
Express Routes

Middleware

Validation
```

---

Security Layer:

```text id="m8v1qx"
Authentication

Authorization
```

---

Persistence Layer:

```text id="r2k7pw"
SQLite
```

---

Testing Layer:

```text id="g6m3tv"
Vitest

SuperTest
```

---

Infrastructure Layer:

```text id="f9v4qx"
Deployment

Environment Variables

Monitoring
```

---

This resembles the architecture of many professional applications.

---

# Part 15 — What We Would Build Next

If this were a larger course, the next topics would likely be:

---

## Search

Using:

SQLite FTS5

---

## Categories & Tags

Content organization.

---

## Rich Text Editing

Using:

TinyMCE

or

CKEditor

---

## APIs

Building:

```text id="q4m8rw"
JSON APIs
```

alongside EJS pages.

---

## Background Jobs

Using:

BullMQ

---

## Caching

Using:

Redis

---

## Docker

Containerized deployment.

---

## CI/CD

Automated deployments.

---

# Part 16 — The Most Important Lesson

The biggest takeaway from this course isn't:

```text id="w8k2tv"
Express

SQLite

EJS
```

---

Those tools will change.

---

The important lesson is understanding:

```text id="u3m7qx"
Requests

Responses

Routing

Persistence

Security

Testing

Deployment
```

---

Frameworks come and go.

Principles endure.

---

A developer who understands these fundamentals can learn:

* Express
* NestJS
* Fastify
* Laravel
* Django
* Spring Boot

far more easily than someone who only memorized framework APIs.

---

# Common Beginner Mistakes

## Committing Secrets

Never commit:

```text id="m2v8rw"
.env
```

---

## No Backups

Every database eventually needs recovery.

---

## No Monitoring

Problems should be discovered before users report them.

---

## Running Without HTTPS

Protect user data.

Always.

---

## Deploying Untested Code

Hope is not a deployment strategy.

---

# Final Capstone Assignment

Build:

```text id="v5k4pt"
Mini CMS
```

containing:

### Authentication

```text id="j8m2qx"
Login

Logout
```

---

### Authorization

```text id="r4v7tw"
Admin

Editor
```

roles.

---

### Product Management

```text id="f1k9rw"
Create

Read

Update

Delete
```

---

### Uploads

```text id="u7m3qx"
Product Images
```

---

### Validation

```text id="n5v8pt"
Server-side Validation
```

---

### Testing

```text id="g2k4rw"
Validation Tests

Authorization Tests

Route Tests
```

---

### Deployment

Deploy publicly.

Provide URL.

---

This project demonstrates nearly every concept taught throughout the course.

---

# Course Retrospective

Over 15 days you learned:

### Foundations

* Express
* Routing
* Middleware
* MVC Concepts

### Data

* SQLite
* Repository Pattern
* CRUD

### Views

* EJS
* Templates
* Layouts

### Security

* Authentication
* Authorization
* Sessions
* Password Hashing

### Reliability

* Validation
* Error Handling
* Testing

### Operations

* Deployment
* Monitoring
* Configuration

---

# Final Key Takeaways

A web application is ultimately a pipeline:

```text id="c8m1qx"
Request

↓

Validation

↓

Authentication

↓

Authorization

↓

Business Logic

↓

Database

↓

Response
```

Master this flow and you can understand nearly every modern web framework.

Congratulations.

You haven't just built a CMS.

You've built a complete mental model for how server-side web applications work. And unlike frameworks, that knowledge doesn't go out of date every six months because someone renamed a configuration file and called it innovation. 🚀

---

# Post-Course Syllabus Improvements

If I were evolving this into a 30-day Harvard/CS50-style curriculum, the next 15 days would be:

1. REST APIs
2. OpenAPI / Swagger
3. Docker Fundamentals
4. PostgreSQL
5. Database Migrations
6. Advanced SQL
7. Full-Text Search
8. Redis
9. Background Jobs
10. WebSockets
11. Caching Strategies
12. Observability & Logging
13. CI/CD Pipelines
14. Cloud Deployment
15. Final Production Project

That progression would take students from "I can build a website" to "I can design, build, test, deploy, and operate a production web application." That's where professional engineering really begins.

---

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
