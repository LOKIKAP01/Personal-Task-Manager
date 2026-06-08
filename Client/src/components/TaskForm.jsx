import { useState, useRef } from "react";
import axios from "axios";

function TaskForm({ addTask }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const descriptionRef = useRef(null);

const dueDateRef = useRef(null);

  const handleSubmit = () => {
    if (!title.trim()) {
  alert("Please enter a task");
  return;
}
if (!dueDate) {
  alert("Please select a valid date");
  return;
}
const selectedDate = new Date(dueDate);

if (isNaN(selectedDate.getTime())) {
  alert("Invalid date");
  return;
}
const year = selectedDate.getFullYear();

if (year < 2025 || year > 2075) {
  alert("Year must be valid ");
  return;
}
   axios.post(
  "https://personal-task-manager-p34g.onrender.com/api/tasks",
  {
    title: title,
    description: description,
    dueDate: dueDate
  }
)
      .then((response) => {

        addTask(response.data);

        setTitle("");
        setDescription("");
        setDueDate("");

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>

          <input
      type="text"
      placeholder="Enter Task"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={(e) => {
  if (e.key === "ArrowDown") {
    descriptionRef.current.focus();
  }
}}
    />
    <input
    ref={descriptionRef}
  type="text"
  placeholder="Enter Description"
  value={description}
  onChange={(e) =>
    setDescription(e.target.value)
  }
  onKeyDown={(e) => {
  if (e.key === "ArrowDown") {
    dueDateRef.current.focus();
  }
}}
/>
  <input
  ref={dueDateRef}
  type="date"
  value={dueDate}
  onChange={(e) =>
    setDueDate(e.target.value)
  }
  onKeyDown={(e) => {
  if (e.key === "Enter") {
    handleSubmit();
  }
}}
/>

      <button onClick={handleSubmit}>
        Add Task
      </button>

    </div>
  );
}

export default TaskForm;