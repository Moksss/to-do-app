import React from 'react';
import Heading from './components/Heading';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const taskList = ['PRIKAZ PROMENJEN?', '2', '3'];
  
  return (
    <div className='app'>
      <Heading />
      <TaskControl />
      <TaskList renderData={taskList} />
    </div>
  );
}

export default App;
