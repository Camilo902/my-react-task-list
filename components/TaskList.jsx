import React, { useState } from "react";
import { Task } from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy a new gaming laptop", isCompleted: false },
    { id: 2, name: "Complete a previous task", isCompleted: false },
    { id: 3, name: "Create video for youtube", isCompleted: false },
    { id: 4, name: "Create a new portafolio site", isCompleted: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            name={task.name}
            isCompleted={task.isCompleted}
            onToggle={() => toggleTaskCompletion(task.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
