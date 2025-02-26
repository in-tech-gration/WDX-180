import { tasksDB } from "./taskDatabase.js";

let counter = 2; // We can fix this...

function Task(contentTask) {
  this.content = contentTask;
  this.completed = false;
  counter = counter + 1;
  this.id = counter;
}

export function createTask(task) {
  tasksDB.push(new Task(task));
}
