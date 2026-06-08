const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

let tasks = [];

try {
  const data = fs.readFileSync("./Data/tasks.json", "utf8");

  tasks = JSON.parse(data);

} catch (error) {

  tasks = [];

}

app.get("/", (req, res) => {
  res.send("Task Manager Backend Running");
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const newTask = {
  id:
    tasks.length > 0
      ? Math.max(...tasks.map(task => task.id)) + 1
      : 1,

  title: req.body.title,

  description: req.body.description || "",

  dueDate: req.body.dueDate || "",

  completed: false
};

  tasks.push(newTask);
  fs.writeFileSync(
  "./Data/tasks.json",
  JSON.stringify(tasks, null, 2)
);

  res.status(201).json(newTask);
});

app.delete("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  tasks = tasks.filter(task => task.id !== taskId);
  
  fs.writeFileSync(
    "./Data/tasks.json",
    JSON.stringify(tasks, null, 2)
  );

  res.json({
    message: "Task deleted successfully"
  });
});

app.put("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }
  task.title = req.body.title;

task.description =
  req.body.description || "";

task.dueDate =
  req.body.dueDate || "";

  fs.writeFileSync(
  "./Data/tasks.json",
  JSON.stringify(tasks, null, 2)
);

  res.json(task);
});

app.patch("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  task.completed = !task.completed;

  fs.writeFileSync(
  "./Data/tasks.json",
  JSON.stringify(tasks, null, 2)
);

  res.json(task);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});