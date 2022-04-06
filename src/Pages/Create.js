import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Form from "../components/Form";
import { useTasks } from "../TaskContext"

const Create = () => {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const handleOnSubmit = (task) => {
    addTask(task);
    navigate("/");
  };

  return (
    <div className="container">
      <Header />
      <Form handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default Create;
