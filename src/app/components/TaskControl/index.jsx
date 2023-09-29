import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import uuid from "react-uuid";
import './style.css';

const TaskControl = ({ taskList, setTaskList }) => {
  const [inputFieldValue, setInputFieldValue] = useState('');

  const handleOnClickBtn = () => {
    const obj = {
      id: uuid(),
      task: inputFieldValue,
      isDone: false,
    };
    setTaskList([...taskList, obj]);
    setInputFieldValue('');
  };

  return(
    <div className="task-control-container">
      <TextField
        id="outlined-basic"
        label="TASK NAME"
        variant="outlined"
        value={inputFieldValue}
        onChange={(e) => setInputFieldValue(e.target.value)}
      />
      <Button variant="outlined" onClick={handleOnClickBtn}>Add Task</Button>
    </div>
  );
};

export default TaskControl;