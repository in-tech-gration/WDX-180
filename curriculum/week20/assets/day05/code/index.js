// const express = require("express"); // CommonJS
import express from "express";
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Data Module:
import data from "./taskData.js";

// Web Server (routing, handling requests, responses)
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  let output = `
      <h1>Tasks</h1>
      <form action="task" method="POST">
        <input name="task" placeholder="Enter task..." />
        <button type="submit">Create new task</button>
      </form>
      <ul>
    `;
  const tasks = data.readTasks();
  tasks.forEach((task) => {
    output += `<li>${task.content}</li>`;
  });
  output += "</ul>";
  res.send(output);
});

app.get("/tasks", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const tasks = data.readTasks();
  res.send(JSON.stringify(tasks));
});

app.post("/task", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Express server initialized");
});
