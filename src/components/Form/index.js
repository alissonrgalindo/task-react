import React, { Component } from "react";
import { useState, useEffect } from "react";

import "./style.scss";

const Form = ({ handleOnSubmit, task = null }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState("");

  useEffect(() => {
    if (task !== null) {
      setTitle(task.title);
      setSubtitle(task.subtitle);
      setDescription(task.description);
      setPriority(task.priority);
      setCompleted(task.completed);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit({
      id: task ? task.id : Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
      title,
      subtitle,
      description,
      priority,
      completed: false
    });
  };

  return (
    <div className="content-task">
      <form onSubmit={handleSubmit}>
        <div className="group-input">
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            className="input-text"
            placeholder="Type the task title"
            id="title"
            required
          />
        </div>
        <div className="group-input">
          <label className="label" htmlFor="subtitle">
            Subtitle
          </label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            name="subtitle"
            className="input-text"
            placeholder="Type the task subtitle"
            id="subtitle"
            required
          />
        </div>
        <div className="group-input">
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea
            type="text"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            className="input-text"
            placeholder="Type the task description"
            id="description"
            required
          ></textarea>
        </div>
        <div className="group-input">
          <label className="label" htmlFor="priority">
            Priority:
          </label>
          <select
            className="input-text"
            id="priority"
            required
            value={priority}
            name="priority"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="" selected>Select a Priority</option>
            <option value="hight">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="actions">
          <button type="submit" className="btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
