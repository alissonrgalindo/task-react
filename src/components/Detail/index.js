import React from "react";
import { useTasks } from "../../TaskContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./style.scss";

const Detail = ({ task }) => {
  let { taskId } = useParams();
  const navigate = useNavigate();
  const {
    title: subTitle,
    subtitle: subSubTitle,
    description: subDescrip,
    priority: subPriority,
    completed: subComplete,
    id: subId,
  } = task;
  const { removeSubTask, setSubStatusTask } = useTasks();
  const handleOnRemove = (parantId, subId) => {
    removeSubTask(parantId, subId);
    navigate("/");
  };
  const handleOnComplete = (parantId, subId, subComplete) => {
    setSubStatusTask(parantId, subId, subComplete);
    navigate("/");
  };
  
  return (
    <div className="container">
      <div
        className={"task " + `${subComplete ? "completed" : ""}`}
        key={subId}
      >
        <div className="task__header">
          <h2 className="title">{subTitle}</h2>
          <h3 className="subtitle">{subSubTitle}</h3>
          <div className="priority">
            <label className={"priority__text " + `${subPriority}`}>
              {subPriority}
            </label>
          </div>
        </div>
        <div className="task__body">
          <div className="description">
            <p>{subDescrip}</p>
          </div>
        </div>
        <div className="task__actions">
          <button
            onClick={() => handleOnRemove(taskId, subId)}
            className="btn btn--link btn--red"
          >
            Delete
          </button>
          <Link
            to={`/edit/${taskId}/sub/${subId}`}
            className="btn btn--link btn--reverse"
          >
            Edit
          </Link>
          <button
            onClick={() => handleOnComplete(taskId, subId, !subComplete)}
            className="btn btn btn--link btn--blue done"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
