
import React, { useState, useEffect } from "react";
import Task from "./Task";
import "./TaskList.css";
import useTaskManager from "./useTaskManager"; //Importando el hook personalizado 

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskCompletion = (taskId) => {
    updateTask(taskId, { isCompleted: !tasks.find((task) => task.id === taskId).isCompleted });
  };

  const addTask = () => {
    createTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  const deleteTaskHandler = (taskId) => {
    deleteTask(taskId);
  };

  const startEditingTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const updateTaskHandler = () => {
    updateTask(editingTask.id, { title: editingTask.title, description: editingTask.description });
    setEditingTask(null);
  };

  return (
    <div className="task-list-container">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task">
            {editingTask?.id === task.id ? (
              <div className="task-edit-form">
                <label className="label">Title:</label>
                <input
                  type="text"
                  value={editingTask.title}
                  onChange={(e) =>
                    setEditingTask({ ...editingTask, title: e.target.value })
                  }
                  className="input-field"
                />
                <label className="label">Description:</label>
                <input
                  type="text"
                  value={editingTask.description}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      description: e.target.value,
                    })
                  }
                  className="input-field"
                />
                <button onClick={updateTaskHandler} className="button">
                  Update
                </button>
              </div>
            ) : (
              <>
                <Task
                  title={task.title}
                  description={task.description}
                  isCompleted={task.isCompleted}
                  onToggle={() => toggleTaskCompletion(task.id)}
                />
                <div className="task-actions">
                  <button
                    onClick={() => deleteTaskHandler(task.id)}
                    className="button"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => startEditingTask(task.id)}
                    className="button"
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <div>
        <label className="label">Title:</label>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="input-field"
        />
        <br />
        <label className="label">Description:</label>
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          className="input-field"
        />
        <br />
        <button onClick={addTask} className="button">
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskList;
