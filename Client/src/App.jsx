import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  
  const filteredTasks = tasks.filter((task) => {

  const matchesSearch =
    task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  if (filter === "completed") {
    return matchesSearch && task.completed;
  }

  if (filter === "pending") {
    return matchesSearch && !task.completed;
  }

  return matchesSearch;

});
  useEffect(() => {
    axios
      .get("https://personal-task-manager-p34g.onrender.com/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmDelete) {
    return;
  }

  axios
    .delete("https://personal-task-manager-p34g.onrender.com/api/tasks")
    .then(() => {

      const updatedTasks =
        tasks.filter(task => task.id !== id);

      setTasks(updatedTasks);

    })
    .catch((error) => {
      console.log(error);
    });
};

    const toggleTask = (id) => {

  axios
    .patch("https://personal-task-manager-p34g.onrender.com/api/tasks")
    .then(() => {

      const updatedTasks =
        tasks.map((task) =>
          task.id === id
            ? {
                ...task,
                completed: !task.completed
              }
            : task
        );

      setTasks(updatedTasks);

    })
    .catch((error) => {
      console.log(error);
    });
};
      const editTask = (id) => {

  const taskToEdit =
    tasks.find(task => task.id === id);

  const newTitle =
    prompt(
      "Enter new task title",
      taskToEdit.title
    );

  if (!newTitle) return;

  const newDescription =
    prompt(
      "Enter new description",
      taskToEdit.description
    );

  if (newDescription === null) return;

  const newDueDate =
  prompt(
    "Enter due date (YYYY-MM-DD)",
    taskToEdit.dueDate
  );

if (newDueDate === null) return;

const dateRegex =
  /^\d{4}-\d{2}-\d{2}$/;

if (!dateRegex.test(newDueDate)) {

  alert(
    "Invalid date.\nUse format: YYYY-MM-DD\n"
  );

  return;
}

const selectedDate =
  new Date(newDueDate);

if (isNaN(selectedDate.getTime())) {

  alert("Invalid date entered");

  return;
}

  if (newDueDate === null) return;

  axios
    .put("https://personal-task-manager-p34g.onrender.com/api/tasks", {
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate
    })
    .then(() => {

      const updatedTasks =
        tasks.map((task) =>
          task.id === id
            ? {
                ...task,
                title: newTitle,
                description: newDescription,
                dueDate: newDueDate
              }
            : task
        );

      setTasks(updatedTasks);

    })
    .catch((error) => {
      console.log(error);
    });

};

  return (
    <div className="app-container">
      <h1>📝 Personal Task Manager</h1>

<p className="subtitle">
  Manage your daily tasks efficiently
</p>
        <div className="stats-container">

  <div className="stat-card">
    <h2>{tasks.length}</h2>
   <p>🔵 Total Tasks</p>
  </div>

  <div className="stat-card">
    <h2>
      {
        tasks.filter(task => task.completed).length
      }
    </h2>
    <p>🟢 Completed</p>
  </div>

  <div className="stat-card">
    <h2>
      {
        tasks.filter(task => !task.completed).length
      }
    </h2>
   <p>🟠 Pending</p>
  </div>

</div>
      <TaskForm addTask={addTask} />
        <input
  type="text"
  placeholder="Search Task..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
<div className="filter-buttons">

  <button
  className={filter === "all" ? "active-filter" : ""}
  onClick={() => setFilter("all")}
>
    All
  </button>

  <button
  className={filter === "completed" ? "active-filter" : ""}
  onClick={() => setFilter("completed")}
>
    Completed
  </button>

  <button
  className={filter === "pending" ? "active-filter" : ""}
  onClick={() => setFilter("pending")}
>
    Pending
  </button>

</div>
     <TaskList
  tasks={filteredTasks}
  deleteTask={deleteTask}
  toggleTask={toggleTask}
  editTask={editTask}
/>
    </div>
  );
}

export default App;