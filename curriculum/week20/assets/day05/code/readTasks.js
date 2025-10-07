import { tasksDB } from "./taskDatabase.js";

export function readTask(id) {
  // Problem: what if there is no task with task.id === id?
  for (const task of tasksDB) {
    if (id === task.id) {
      return task;
    }
  }
}

export function readTasks() {
  return tasksDB;
}

