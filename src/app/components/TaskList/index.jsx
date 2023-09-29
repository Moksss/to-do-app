import React from "react";
import SingleTask from "./SingleTask";
import './style.css'

const TaskList = ({ renderData }) => {
  return(
    <div className="allTasksContainer">
      { renderData.map((dataItem) => <SingleTask renderData={dataItem}/>) }
    </div>
  );
};

export default TaskList;