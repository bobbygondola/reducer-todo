import React, { useState, useReducer } from 'react';
import './App.css';
import Todo from "./Todo"
import ToDoList from './TodoList';
import { initialState, reducer } from './reducers/reducers'
import TodoForm from './toDoForm'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  //add new task
  const addNewTask = newTaskName => {
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: newTaskName
    });
  }

  //toggle a task
  const toggleTask = clickedId => {
    dispatch({
      type: 'TOGGLE_TASK_STATUS',
      payload: clickedId
    })
    //console.log('clicked id:', clickedId, state.tasks);
  }

  //clear completed
  const filterTasks = () => {
    dispatch({
      type: 'FILTER_COMPLETED_TASKS'
    })
  }
  
  return (
    <div className="App">
      <h1>To Do Today</h1>
      <Todo />
      <TodoForm addNewTask={addNewTask} filterTasks={filterTasks}/>
      <ToDoList tasks={state.tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
