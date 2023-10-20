import React from "react";
import axios from "axios";
import DoneIcon from '@mui/icons-material/Done';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { taskListUrl } from "../../../constants";
import './style.css'

const SingleTask = ({ task, taskList, setTaskList }) => {
  const doneBtnClickHandler = () => {
    const updatedTaskList = taskList.map((currentTask) => {
      if(currentTask.id === task.id) {
        return({
          ...currentTask,
          isDone: !currentTask.isDone,
        });
      }
      return(currentTask);
    });

    axios.put(`${taskListUrl}/${task.id}`, {...task, isDone: !task.isDone})
      .then(() => { setTaskList(updatedTaskList) })
      .catch((err) => { console.error(err) })
  }

  const deleteBtnClickHandler = () => {
    axios.delete(`${taskListUrl}/${task.id}`).then(() => {
      setTaskList(
        taskList.filter((currentTask) => currentTask.id !== task.id)
      );
    }).catch((err) => {
      console.error(err);
    });
  }

  return(
    <div className={`single-task-container ${task.isDone ? 'done' : ''}`}>
      <Typography>{ task.task }</Typography>
      <div>
        <IconButton onClick={doneBtnClickHandler}>
          <DoneIcon color="primary"/>
        </IconButton>
        <IconButton onClick={deleteBtnClickHandler}>
          <DeleteOutlineIcon color="error"/>
        </IconButton>
      </div>
    </div>
  );
};

export default SingleTask;