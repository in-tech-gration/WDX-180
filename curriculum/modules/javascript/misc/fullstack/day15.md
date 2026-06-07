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

  During this module we've been building:

  ```text 
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

  ```text 
  Your laptop ≠ The Internet
  ```

  Today we solve that problem.

  This lesson is about turning a local project into a real application that other people can access.

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

# Part 1 — Development vs Production

  Development:

  ```text 
  localhost

  Debugging

  Console Logs

  Experimental
  ```

  Production:

  ```text 
  Real Users

  Real Data

  Real Traffic

  Real Problems
  ```

  A surprising number of bugs only appear in production.

  Which is software's version of:

  ```text 
  "It worked yesterday."
  ```

# Part 2 — Environment Variables

  Hardcoded:

  ```javascript 
  const secret = 'super-secret';
  ```

  Bad.

  Hardcoded:

  ```javascript 
  const database = './db.sqlite';
  ```

  Also bad.

  Use environment variables.

  Example:

  `.env`:

  ```env 
  PORT=3000

  SESSION_SECRET=abc123

  DATABASE_PATH=db.sqlite
  ```

  Access:

  ```javascript 
  const { loadEnvFile } = require('node:process');
  // Loads environment variables from the default .env file
  loadEnvFile();

  process.env.PORT
  ```

  Benefits:

  * Configurable
  * Safer
  * Production friendly

# Part 3 — Using dotenv

  Install:

  dotenv

  ```bash 
  npm install dotenv
  ```

  Load:

  ```javascript 
  require('dotenv').config();
  ```

  Now:

  ```javascript 
  process.env
  ```

  contains values from:

  ```text 
  .env
  ```

  Never commit:

  ```text 
  .env
  ```

  to Git.

  **Ever**.

  Add:

  ```gitignore 
  .env
  ```

  immediately.

# Part 4 — Production Configuration

  Current:

  ```javascript 
  app.listen(3000);
  ```

  Better:

  ```javascript 
  app.listen(process.env.PORT);
  ```

  Hosting providers assign ports dynamically.

  Hardcoding eventually breaks.

# Part 5 — Understanding Reverse Proxies

  Users think:

  ```text 
  Internet

  ↓

  Your App
  ```

  Reality:

  ```text 
  Internet

  ↓

  Reverse Proxy

  ↓

  Node.js
  ```

  Common reverse proxies:

  * Nginx
  * HAProxy
  * Traefik

  Responsibilities:

  ```text 
  HTTPS

  Load Balancing

  Caching

  Compression
  ```

  Node focuses on application logic.

  Learn more about [Reverse Proxies](https://www.youtube.com/watch?v=4NB0NDtOwIQ){:target="_blank"}.

# Part 6 — HTTPS Matters

  Without HTTPS:

  ```text 
  Passwords

  Cookies

  Sessions
  ```

  travel unencrypted.

  Very bad.

  HTTPS provides:

  ```text 
  Encryption
  ```

  between browser and server.

  Today there is little reason not to use HTTPS everywhere.

  Certificates commonly come from:

  `Let's Encrypt`

# Part 7 — Session Security

  Development:

  ```javascript 
  cookie: { secure: false }
  ```

  Production:

  ```javascript 
  cookie: {
      secure: true,
      httpOnly: true
  }
  ```

  - The `secure` flag ensures cookies are only sent over HTTPS.
  - The `httpOnly` flag prevents JavaScript access to cookies, mitigating XSS attacks

  Benefits:

  ```text 
  Better Session Protection
  ```

  A small change.

  A huge security improvement.

# Part 8 — Logging Properly

  Development:

  ```javascript 
  console.log('User created');
  ```

  Production:

  Need more.

  Questions:

  ```text 
  Who logged in?

  When?

  Which route failed?

  What crashed?
  ```

  Logs answer these questions.

  Example:

  ```javascript 
  logger.info('User login',
      {
          userId: 1
      }
  );
  ```

  Structured logs become invaluable later.

  Here's how you can implement logging with `Morgan`:

  Install:

  ```bash 
  npm install morgan
  ```

  Use:

  ```javascript 
  const morgan = require('morgan');
  app.use(morgan('combined'));
  ```

  Learn more about the [Morgan Middleware](https://expressjs.com/en/resources/middleware/morgan/){:target="_blank"}.

# Part 9 — Monitoring

  Question:

  ```text 
  Is the server healthy?
  ```

  Question:

  ```text 
  Is memory usage growing?
  ```

  Question:

  ```text 
  Are users seeing errors?
  ```

  Monitoring answers these.

  Without monitoring:

  ```text 
  You discover outages from angry users.
  ```

  Not ideal.

# Part 10 — Handling Application Crashes

  Node process crashes.

  Question:

  ```text 
  What restarts it?
  ```

  Common answer:

  PM2

  Install:

  ```bash 
  npm install -g pm2
  ```

  Run:

  ```bash 
  pm2 start app.js
  ```

  Benefits:

  ```text 
  Restart

  Monitoring

  Logs
  ```

  A production staple.

# Part 11 — Database Considerations

  Current:

  ```text 
  SQLite
  ```

  SQLite is fantastic.

  But eventually:

  ```text 
  Multiple Servers
  ```

  becomes difficult.

  Common upgrade path:

  PostgreSQL

  Benefits:

  ```text 
  Scalability

  Concurrency

  Advanced Features
  ```

  Many production systems use PostgreSQL.

# Part 12 — Deployment Options

  Small Projects:

  * Render
  * Railway

  Container-Based:

  * Docker

  Cloud Providers:

  * Amazon Web Services
  * Google Cloud
  * Microsoft Azure

  For beginners:

  ```text 
  Render

  Railway
  ```

  provide the fastest path to deployment.

# Part 13 — Deployment Checklist

  Before launch:

  **Security**

  ```text 
  HTTPS

  Session Security

  Password Hashing
  ```

  **Configuration**

  ```text 
  Environment Variables

  No Hardcoded Secrets
  ```

  **Reliability**

  ```text 
  Logging

  Monitoring

  Error Handling
  ```

  **Data**

  ```text 
  Database Backups
  ```

  **Testing**

  ```text 
  All Tests Passing

  Decent coverage
  ```

  This checklist prevents many disasters.

  Not all disasters.

  But many.

# Part 14 — The CMS Architecture Review

  Let's review what we have built.

  Presentation Layer:

  ```text 
  EJS
  ```

  Application Layer:

  ```text 
  Express Routes

  Middleware

  Validation
  ```

  Security Layer:

  ```text 
  Authentication

  Authorization
  ```

  Persistence Layer:

  ```text 
  SQLite
  ```

  Testing Layer:

  ```text 
  Vitest

  SuperTest
  ```

  Infrastructure Layer:

  ```text 
  Deployment

  Environment Variables

  Monitoring
  ```

  This resembles the architecture of many professional applications.

# Part 15 — What We Would Build Next

  If this were a larger course, the next topics would likely be:

  **Search**

  Using: `SQLite FTS5`

  **Categories & Tags**

  Content organization.

  **Rich Text Editing**

  Using:

  `TinyMCE`

  or

  `CKEditor`

  **APIs**

  Building:

  ```text 
  JSON APIs
  ```

  alongside EJS pages.

  **Background Jobs**

  Using:

  `BullMQ`

  **Caching**

  Using: `Redis`

  **Docker**

  Containerized deployment.

  **CI/CD**

  Automated deployments.

# Part 16 — The Most Important Lesson

    The biggest takeaway from this course isn't:

    ```text 
    Express

    SQLite

    EJS
    ```

    Those tools will change.

    The important lesson is understanding:

    ```text 
    Requests

    Responses

    Routing

    Persistence

    Security

    Testing

    Deployment
    ```

    Frameworks come and go.

    Principles endure.

    A developer who understands these fundamentals can learn:

    * Express
    * NestJS
    * Fastify
    * Laravel
    * Django
    * Spring Boot

    far more easily than someone who only memorized framework APIs.

# Common Beginner Mistakes

  **Committing Secrets**

  Never commit:

  ```text 
  .env
  ```

  **No Backups**

  Every database eventually needs recovery.

  **No Monitoring**

  Problems should be discovered before users report them.

  **Running Without HTTPS**

  Protect user data.

  Always.

  **Deploying Untested Code**

  Hope is not a deployment strategy.

# Course Retrospective

  Over 15 modules you learned:

  **Foundations**

  * Express
  * Routing
  * Middleware
  * MVC Concepts

  **Data**

  * SQLite
  * Repository Pattern
  * CRUD

  **Views**

  * EJS
  * Templates
  * Layouts

  **Security**

  * Authentication
  * Authorization
  * Sessions
  * Password Hashing

  **Reliability**

  * Validation
  * Error Handling
  * Testing

  **Operations**

  * Deployment
  * Monitoring
  * Configuration

# Final Key Takeaways

  A web application is ultimately a pipeline:

  ```text 
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

⚠️ A large part of the content of this module was created using Generative AI (ChatGPT). The synthetic (AI-generated) content was reviewed and curated by Kostas Minaidis.
