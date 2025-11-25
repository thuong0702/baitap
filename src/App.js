import React from 'react';
import './App.css';
import StudentInfoComponent from './components/StudentInfoComponent';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <StudentInfoComponent />
      <TodoList />
    </div>
  );
}

export default App;
