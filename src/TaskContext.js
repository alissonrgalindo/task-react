import React, { createContext, useState, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export default function TaskProvider({ children }) {
  const {value: tasks, setValue: setTasks} = useLocalStorage("taskRepo", []);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        ...task,
        complete: false,
      },
    ]);
  };

  const editTask = (task) => {
    const index = tasks.findIndex(({ id }) => id === parseInt(task.id)),
      newTasks = [...tasks];
    newTasks[index] = task;
    setTasks(newTasks);
  };

  const editSubTask = (parentId, task) => {
    const index = tasks.findIndex(({ id }) => id === parseInt(parentId)),
          newTasks = [...tasks];

    const subIndex = newTasks[index].subTasks.findIndex(({ id }) => id === parseInt(task.id)),
          newSubTasks = [...newTasks[index].subTasks];
    newSubTasks[subIndex] = task  

    newTasks[index].subTasks = newSubTasks
    setTasks(newTasks);
  };

  const removeTask = (idToRemove) =>
    setTasks(tasks.filter(({ id }) => id !== idToRemove));
  
  const removeSubTask = (parentId, subId) => {
    const index = tasks.findIndex(({ id }) => id === parseInt(parentId)),
          newTasks = [...tasks];

    newTasks[index].subTasks = newTasks[index].subTasks.filter(({ id }) => id !== subId)
    setTasks(newTasks);
  }

  const setStatusTask = (id, status) =>
    setTasks(tasks.map((t) => (t.id === parseInt(id) ? { ...t, completed: status } : t)));

  const setSubStatusTask = (parentId, subId, status) => {
    const index = tasks.findIndex(({ id }) => id === parseInt(parentId)),
          newTasks = [...tasks];

    const subIndex = newTasks[index].subTasks.findIndex(({ id }) => id === parseInt(subId)),
          newSubTasks = [...newTasks[index].subTasks];
    newSubTasks[subIndex] = { ...newSubTasks[subIndex], completed: status }  

    newTasks[index].subTasks = newSubTasks
    setTasks(newTasks);
  }
    

  const findTask = (paramId) => tasks.find(({ id }) => id === parseInt(paramId));

  const findSubTask = (parentId, subId) => {
    return tasks.find(({ id }) => id === parseInt(parentId)).subTasks.find(({ id }) => id === parseInt(subId));
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, setStatusTask, findTask, findSubTask, editTask, removeTask, editSubTask, removeSubTask, setSubStatusTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
