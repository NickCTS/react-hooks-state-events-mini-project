import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task
          key={task.id}  // Unique key for each task
          text={task.text}
          category={task.category}
          onDelete={() => onTaskDelete(task.id)}  // Pass delete handler
        />
      ))}
    </div>
  );
}

export default TaskList;
