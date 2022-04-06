import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Form from "../components/Form";
import { useTasks } from "../TaskContext";

const AddSubtask = () => {
  const navigate = useNavigate();
  let { taskId } = useParams();
  const { findTask, editTask } = useTasks();
  const [task, setTask] = useState();

  useEffect(() => {
    if (taskId !== undefined) {
      const task = findTask(taskId);
      setTask(task);
    }
  }, [taskId]);

  const handleOnSubmit = (subTask) => {
    const oldSubTasks = task.subTasks || []
    task.subTasks = [...oldSubTasks, subTask]
    editTask(task);
    navigate("/");
  };

  return (
    <div className="container">
      <Header />
      <Form handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddSubtask;
