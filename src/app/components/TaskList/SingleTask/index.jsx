import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import './style.css'

const SingleTask = ({ task, taskList, setTaskList }) => {
  const doneBtnClickHandler = () => {
    setTaskList(
      taskList.map((currentTask) => {
        if(currentTask.id === task.id) {
          return({
            ...currentTask,
            isDone: !currentTask.isDone,
          });
        }
        return(currentTask);
      })
    );
  }

  const deleteBtnClickHandler = () => {
    console.log('DELETE!');
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