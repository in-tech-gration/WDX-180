// Data Module (CR[UD] System)
import { tasksDB } from "./taskDatabase.js";
import { createTask } from "./createTask.js";
import { readTask, readTasks } from "./readTasks.js";

const data = { createTask, readTask, readTasks };
export default data;
