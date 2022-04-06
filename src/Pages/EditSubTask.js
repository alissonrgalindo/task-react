import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Form from "../components/Form";
import { useTasks } from "../TaskContext";

const EditSubTask = () => {
  const navigate = useNavigate();
  let { taskId, id } = useParams();
  const { findSubTask, editSubTask } = useTasks();
  const [task, setTask] = useState();

  useEffect(() => {
    if (taskId !== undefined) {
      const task = findSubTask(taskId, id);
      setTask(task);
    }
  }, [id]);

  const handleOnSubmit = (task) => {
    editSubTask(taskId, task);
    navigate("/");
  };
  
  
  return (
    <div className="container">
      <Header />
      <Form task={task} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditSubTask;
