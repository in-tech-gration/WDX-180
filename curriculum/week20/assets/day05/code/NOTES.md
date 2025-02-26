A basic Full-stack TODO app:

- Entities: TodoTask (CRUD)

# Order in Objects

  ```js
  // Data: TodoTasks [] or {}
  // What if we wanted to switch to an object
  // and still retain order or date of insertion?
  // Unique ID that auto-increments? 0, 1, 2, 3...
  const tasks {}
  let tasksId = 0;
  tasksId++
  tasks.taskA = { index:100, id: tasksId, task: "Buy Tea"}; // This should be first
  tasksId++
  tasks.taskB = { index:101, id: tasksId, task: "Buy Milk"}; // This should be second
  // new Date().getTime()
  // tasks.taskA = {id:1, task:BuyTea}
  
  // const obj = {}
  // Object.values(), Object.keys(), Object.entries()
  // forEach, map
  // counter = 0; counter++
  ```