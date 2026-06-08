function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  editTask
}) {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.length === 0 && (
  <p>No matching tasks found</p>
)}
      <ul>
        {tasks.map((task) => {

  const today = new Date();

  const dueDate = new Date(task.dueDate);

  const isOverdue =
    !task.completed &&
    task.dueDate &&
    dueDate < today;

  return (
          <li
  key={task.id}
  className={
    isOverdue
      ? "overdue-task"
      : ""
  }
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    marginBottom: "15px",
    background: "#f8f9ff",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  }}
>
   <div className="task-buttons">
  <div>
  <div
    style={{
      fontWeight: "bold",
      fontSize: "18px"
    }}
  >
    {task.completed ? "✅ " : "📌 "}
    {task.title}
  </div>

  <div
    style={{
      color: "#666",
      marginTop: "5px"
    }}
  >
    {task.description}
  </div>

  <div
    style={{
      color: "#888",
      fontSize: "14px",
      marginTop: "5px"
    }}
  >
    Due: {
  task.dueDate
    ? new Date(task.dueDate)
        .toLocaleDateString("en-GB")
    : "No Date"
}
  </div>
  {isOverdue && (
  <div className="overdue-text">
    ⚠ Overdue Task
  </div>
)}
</div>
</div>
      <div>
              <button
      style={{ backgroundColor: "#f59e0b" }}
      onClick={() => editTask(task.id)}
    >
      Edit
    </button>

              <button
      style={{
        backgroundColor: task.completed
          ? "#6b7280"
          : "#10b981"
      }}
      onClick={() => toggleTask(task.id)}
    >
      {task.completed ? "Undo" : "Complete"}
    </button>

     <button
      style={{ backgroundColor: "#ef4444" }}
      onClick={() => deleteTask(task.id)}
    >
      Delete
    </button>
    </div>
          </li>
        );})}
      </ul>
    </div>
  );
}

export default TaskList;