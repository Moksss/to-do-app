import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.css';

const TaskControl = () => {
  return(
    <div className="task-control-container">
      <TextField id="outlined-basic" label="TASK NAME" variant="outlined" />
      <Button variant="outlined">Add Task</Button>
    </div>
  );
};

export default TaskControl;