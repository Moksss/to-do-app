import React from 'react';
import Heading from './components/Heading';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {

  return (
    <div className='app'>
      <Heading />
      <TaskControl />
      <TaskList />
    </div>
  );
}

export default App;
