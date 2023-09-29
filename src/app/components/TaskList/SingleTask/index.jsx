import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import './style.css'

const SingleTask = ({ renderData }) => {
  return(
    <div className="single-task-container">
      <Typography>{renderData}</Typography>
      <div>
        <IconButton>
          <DoneIcon color="success"/>
        </IconButton>
        <IconButton>
          <DeleteOutlineIcon color="error"/>
        </IconButton>
      </div>
    </div>
  );
};

export default SingleTask;