import React, { useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { taskListUrl } from "../../constants";
import './style.css';

const TaskControl = ({ taskList, setTaskList }) => {
  const [inputFieldValue, setInputFieldValue] = useState('');

  const handleOnClickBtn = () => {
    const obj = {
      id: uuid(),
      task: inputFieldValue,
      isDone: false,
    };
    axios.post(taskListUrl, obj)
    .then(() => {
      setTaskList([...taskList, obj]);
    })
    .catch(err => console.error(err))
    .finally(() => {
      setInputFieldValue('');
    });
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
      <Button variant="outlined" onClick={handleOnClickBtn} disabled={!inputFieldValue}>Add Task</Button>
    </div>
  );
};

export default TaskControl;