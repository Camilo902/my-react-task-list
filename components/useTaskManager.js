import { useState } from 'react';

const useTaskManager = (initialTasks = []) => {
  const [tasks, setTasks] = useState(initialTasks);

  const createTask = (title, description) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, title, description, isCompleted: false },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task))
    );
  };

  return { tasks, createTask, deleteTask, updateTask };
};

export default useTaskManager;
