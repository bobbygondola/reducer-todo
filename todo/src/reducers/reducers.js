import React, { useState, useReducer } from 'react';





export const reducer = ( state, action ) => {
    const newState = {...initialState};
    switch(action.type) {

      //add task
      case 'ADD_NEW_TASK':
          const newTask = {
              id: Date.now(),
              item: action.payload,
              completed: false
          }
          return {
              ...state,
              tasks: [...state.tasks, newTask]
          }

          //toggle task
          case 'TOGGLE_TASK_STATUS':
            const updatedTasks = state.tasks.map(task => {
                if (task.id === action.payload) {
                    return {...task, completed: !task.completed}
                } else {
                    return task
                }
            })
            return {
                ...state,
                tasks: updatedTasks
            }
            //clear tasks
            case 'FILTER_COMPLETED_TASKS':
            const incompleteTasks = state.tasks.filter( task => {
                if (task.completed === false) {
                    return {...task}
                }
            }) 
            return {
                ...state,
                tasks: incompleteTasks
            }
        default: 
            return state;
  }
}

export const initialState = {
    tasks: [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 1
  },
  {
    item: 'Do an afternoon Project',
    completed: false,
    id: 2
  },
  {
    item: 'Study',
    completed: false,
    id: 3
  },
  {
    item: 'Party',
    completed: false,
    id: 4
  }
]
}