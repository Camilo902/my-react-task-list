import { VStack, HStack, Input, Button, FormControl, FormLabel, FormErrorMessage, Flex, useColorModeValue } from "@chakra-ui/react";
import Task from "./Task";
import useTaskManager from "./useTaskManager";
import React, { useState, useEffect } from "react";

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskCompletion = (taskId) => {
    updateTask(taskId, { isCompleted: !tasks.find((task) => task.id === taskId).isCompleted });
  };

  const addTask = () => {
    if (newTaskTitle.length < 3) {
      setFormError("El nombre de la tarea debe tener al menos 3 caracteres.");
      return;
    }

    createTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle("");
    setNewTaskDescription("");
    setFormError("");
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
    <VStack
      spacing={4}
      alignItems="flex-start"
      maxW="600px"
      m="20px auto"
      bg="white"
      p="20px"
      borderRadius="8px"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
    >
      {tasks.map((task) => (
        <HStack
          key={task.id}
          w="100%"
          bg="white"
          borderWidth="1px"
          borderRadius="8px"
          mb="10px"
          p="15px"
          transition="background-color 0.3s, transform 0.3s"
          _hover={{ bg: "#f0f4f8", transform: "translateY(-3px)" }}
        >
          {editingTask?.id === task.id ? (
            <VStack w="100%" alignItems="flex-start">
              <FormControl w="100%">
                <FormLabel>Title:</FormLabel>
                <Input
                  type="text"
                  value={editingTask.title}
                  onChange={(e) =>
                    setEditingTask({ ...editingTask, title: e.target.value })
                  }
                  bg="white"
                  border="1px solid"
                  borderColor="gray.300"
                  borderRadius="4px"
                  p="10px"
                  transition="border-color 0.3s"
                  _focus={{ borderColor: "blue.500" }}
                />
              </FormControl>
              <FormControl w="100%">
                <FormLabel>Description:</FormLabel>
                <Input
                  type="text"
                  value={editingTask.description}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      description: e.target.value,
                    })
                  }
                  bg="white"
                  border="1px solid"
                  borderColor="gray.300"
                  borderRadius="4px"
                  p="10px"
                  transition="border-color 0.3s"
                  _focus={{ borderColor: "blue.500" }}
                />
              </FormControl>
              <Flex justifyContent="center" width="100%">
                <Button
                  onClick={updateTaskHandler}
                  bg="blue.500"
                  color="white"
                  borderRadius="4px"
                  cursor="pointer"
                  transition="background-color 0.3s"
                  _hover={{ bg: "blue.700" }}
                >
                  Update
                </Button>
              </Flex>
            </VStack>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Task
                title={task.title}
                description={task.description}
                isCompleted={task.isCompleted}
                onToggle={() => toggleTaskCompletion(task.id)}
              />

              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <HStack>
                  <Button
                    onClick={() => deleteTaskHandler(task.id)}
                    bg="blue.500"
                    color="white"
                    p="10px 15px"
                    borderRadius="4px"
                    cursor="pointer"
                    transition="background-color 0.3s"
                    _hover={{ bg: "blue.700" }}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => startEditingTask(task.id)}
                    bg="blue.500"
                    color="white"
                    p="10px 15px"
                    borderRadius="4px"
                    cursor="pointer"
                    transition="background-color 0.3s"
                    _hover={{ bg: "blue.700" }}
                  >
                    Edit
                  </Button>
                </HStack>
              </div>
            </div>
          )}
        </HStack>
      ))}

      <VStack w="100%">
        <FormControl w="100%" isInvalid={formError}>
          <FormLabel>Title:</FormLabel>
          <Input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            bg="white"
            border="1px solid"
            borderColor={formError ? "red.500" : "gray.300"}
            borderRadius="4px"
            p="10px"
            transition="border-color 0.3s"
            _focus={{ borderColor: "blue.500" }}
          />
          <FormErrorMessage>{formError}</FormErrorMessage>
        </FormControl>
        <FormControl w="100%">
          <FormLabel>Description:</FormLabel>
          <Input
            type="text"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            bg="white"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="4px"
            p="10px"
            transition="border-color 0.3s"
            _focus={{ borderColor: "blue.500" }}
          />
        </FormControl>
        <Button
          onClick={addTask}
          bg="blue.500"
          color="white"
          p="10px 15px"
          borderRadius="4px"
          cursor="pointer"
          w="100%"
          transition="background-color 0.3s"
          _hover={{ bg: "blue.700" }}
        >
          Add Task
        </Button>
      </VStack>
    </VStack>
  );
}

export default TaskList;
