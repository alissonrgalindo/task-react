import React, { useState, useEffect } from "react";
import Header from "../components/Header"
import Detail from "../components/Detail"
import { useParams } from "react-router-dom";
import { useTasks } from "../TaskContext";

function View() {
  const { taskId, id } = useParams();
  const { findSubTask } = useTasks();
  const [task, setTask] = useState();

  useEffect(() => {
    if (taskId !== undefined) {
      const task = findSubTask(taskId, id);
      setTask(task);
    }
  }, [taskId, id]);

  return (
    <div className='container'>
      <Header/>
      {task && <Detail task={task}/>}
    </div>
  );
}

export default View;

