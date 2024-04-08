const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors"); //  https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

const { v4: uuidv4 } = require("uuid");

let tasks = [
  { id: 0, title: "homework", completed: false },
  { id: 1, title: "study", completed: false },
  { id: 2, title: "cook", completed: false },
  { id: 3, title: "clean", completed: false },
  { id: 4, title: "laundry", completed: false },
];
// CRUD todo app

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});
// R - Read done
app.get("/tasks", (req, res) => {
  res.json(tasks);
});
// C - Create

app.post("/tasks", (request, response) => {
  console.log(request.body.title);
  // { id: 0, title: 'homework', completed: false }
  const newTask = {
    id: uuidv4(),
    title: request.body.title,
    completed: false,
  };
  tasks.push(newTask);
  response.json(tasks);
});

// U - Update
app.put("/tasks/:title", (request, response) => {
  // { id: 0, title: 'homework', completed: true }
  const result = tasks.find(({ title }) => title === request.params.title);

  if (!result) {
    return response
      .status(404)
      .json({ error: `task ${request.params.title} not found` });
  }

  result.completed = true;
  response.send(tasks);
});

// D - Delete

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
