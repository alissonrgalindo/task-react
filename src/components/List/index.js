import React from "react";
import { useTasks } from "../../TaskContext";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";

const List = () => {
  const { tasks, removeTask, setStatusTask } = useTasks();
  const navigate = useNavigate();

  return (
    <div>
      {tasks.map((task) => {
        const {
          id,
          title,
          subtitle,
          description,
          priority,
          completed,
          subTasks = [],
        } = task;

        return (
          <>
            <div className={"task " + `${completed ? "completed" : ""}`} key={id}>
              <div className="task__header">
                <h2 className="title">{title}</h2>
                <h3 className="subtitle">{subtitle}</h3>
                <div className="priority">
                  <label className={"priority__text " + `${priority}`}>{priority}</label>
                </div>
              </div>
              <div className="task__body">
                <div className="description">
                  <p>{description}</p>
                </div>
                <div className="sub-tasks">
                  <ul className="list-sub">
                  {subTasks.map(
                      ({
                        title: subTitle,
                        subtitle: subSubTitle,
                        description: subDescrip,
                        priority: subPriority,
                        completed: subComplete,
                        id: subId,
                      }) => {
                        return (
                          <li key={id}>
                            <Link to={`/view/${id}/sub/${subId}`} className={"subtask " + `${subComplete ? "completed" : ""}`}>
                            {subTitle} <label className={"subtask__priority " + `${subPriority}`}></label>
                            </Link>
                          </li>
                        );
                      }
                    )}
                  </ul>
                  <button className={"add-sub " + `${completed ? "none" : ""}`} onClick={() => navigate(`/addSubtask/${id}`)}>Add SubTask</button>
                </div>
              </div>
              <div className="task__actions">
                <button onClick={() => removeTask(id)} className="btn btn--link btn--red">Delete</button>
                <Link to={`/edit/${id}`} className="btn btn--link btn--reverse">Edit</Link>
                <button onClick={() => setStatusTask(id, !completed)} className="btn btn btn--link done">Done</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default List;
