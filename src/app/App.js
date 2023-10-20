import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Heading from './components/Heading';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { taskListUrl } from './constants';
import './App.css';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    axios.get(taskListUrl)
      .then(res => {
        console.log(res);
        setTaskList(res.data);
      })
      .catch(err => {console.error(err)});
  }, []);


  console.log(taskList);
  
  
  return (
    <div className='app'>
      <Heading />
      <TaskControl taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
