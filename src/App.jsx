import './App.css';
import {TodoWrapper} from "./components/TodoWrapper";
import {TodoForm} from "./components/TodoForm";
import {Todo} from "./components/Todo";
import React from 'react'

function  App () {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;