import React, { useState } from 'react';
import Heading from './components/Heading';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  /**
   * [
   *  {
   *    id: string
   *    task: string
   *    isDone: boolean
   *  },
   *  {...},
   *  ...
   * ]
   */
  const [taskList, setTaskList] = useState([]);
  
  return (
    <div className='app'>
      <Heading />
      <TaskControl taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
