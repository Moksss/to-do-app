import React from "react";
import SingleTask from "./SingleTask";
import './style.css'

const TaskList = ({ taskList, setTaskList }) => {
  return(
    <div className="allTasksContainer">
      { taskList.map((task) =>
        <SingleTask 
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      )}
    </div>
  );
};

export default TaskList;