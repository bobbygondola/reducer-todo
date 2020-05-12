import React, { useState, useReducer } from 'react';
import './App.css';
import Todo from "./Todo"
import ToDoList from './TodoList';
import { initialState, reducer } from './reducers/reducers'
import TodoForm from './toDoForm'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  const addNewTask = newTaskName => {
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: newTaskName
    });
  }
  
  return (
    <div className="App">
      <h1>To Do Today</h1>
      <Todo />
      <TodoForm addNewTask={addNewTask}/>
      <ToDoList tasks={state.tasks} />
    </div>
  );
}

export default App;
