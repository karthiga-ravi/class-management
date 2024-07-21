import React from 'react';
import './App.css';
import Login from './Login';
import Calendar from './Calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Classroom Management</h1>
        <Login />
        <Calendar />
      </header>
    </div>
  );
}

export default App;
