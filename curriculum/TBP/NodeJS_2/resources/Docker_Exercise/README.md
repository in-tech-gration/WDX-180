---
title: Docker Exercise
---

# Docker Exercise

_(Updated: 29/08/2023)_

In this document are presented some key points that you need to have in mind, in order to transition your existing MongoDB+NodeJS app to a containerized version.

Tools that you'll need:
  - A working version of your app
  - Docker or Docker Desktop installed
  - MongoDB Compass installed ([What is that?](#mongodb-compass))

Let's take step by step the process and the way of thinking towards our goal.

**Here are some questions that you need to answer**

  1. How do we specify on which port our app should listen to?
  2. How do we specify which variables are required for our JWT authentication service to work?
  3. How do we specify on which path is our database awaiting for connections?
  4. How many different containers need to run for complete functionality of our app?
  5. Which is the tool that is used to run multiple containers with Docker and how can we instruct it what to do?

Let's think about the answers on the questions above.

<details>
  <summary>Click here to reveal the answers!</summary>
  <ol>
    <li>By setting the <strong>PORT</strong> environment variable.</li>
    <li>By setting the <strong>ACCESS/REFRESH_TOKEN_SECRET</strong> variables.</li>
    <li>By setting the <strong>DATABASE_URI</strong> variable.</li>
    <li>2. One for the <strong>NodeJS</strong> app and one for the <strong>MongoDB</strong></li>
    <li><strong>Docker Compose</strong> and it gets the instructions from a <strong>docker-compose.yml</strong> file.</li>
  </ol>
</details>

Do you feel confident to try and containerize your app? If yes, follow the steps below and happy debugging!

- Create a `Dockerfile` with instructions on how to build a Docker Image of the NodeJS service.
- Create a `docker-compose.yml` with instructions on how to start the required containers for your app.
  - Define a section for the NodeJS container
    - Which image should it run?
    - Which port should it listen to?
    - What are the required environment variables?
  - Define a section for the MongoDB container
    - Which image should it pull?
    - Which port should it listen to?
    - What are the required environment variables?
- Run `docker compose up` to start the containers specified on the YAML file.
  - The output of the command above is gonna be the output of all the running containers.
  - If you make any changes to the file, you'll need to re-run the command, unless you configure specific options inside the file.

While following these steps, this **questions are good to have in mind**:

- Do we need to specify a way for containers intercommunication or is it done by default by Docker?
- How do we specify the database connection URI when the MongoDB is run on a container/locally?
- How do we inspect the contents of our database?


### MongoDB Compass

Since our database is not running on the cloud, as we saw on previous lessons, we require a tool in order to view the contents of it. Mongo provides us a tool called MongodB Compass which is perfect for what we need now! You can find more on the official documentation!

[MongoDB Compass Official Docs](https://www.mongodb.com/docs/compass/current/){:target="_blank"}